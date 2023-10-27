package main

import (
	"bytes"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"golang.org/x/crypto/ssh"
	"io"
	"net/http"
	"sync"
	"time"
)

var upGrader = websocket.Upgrader{
	ReadBufferSize:  2048,
	WriteBufferSize: 2048,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

type wsBufferWriter struct {
	buffer bytes.Buffer
	mu     sync.Mutex
}

// wsBufferWriter接口实现
func (w *wsBufferWriter) Write(p []byte) (n int, err error) {
	w.mu.Lock()
	defer w.mu.Unlock()
	return w.buffer.Write(p)
}

func (w *wsBufferWriter) Bytes() []byte {
	w.mu.Lock()
	defer w.mu.Unlock()
	return w.buffer.Bytes()
}

func (w *wsBufferWriter) Reset() {
	w.mu.Lock()
	defer w.mu.Unlock()
	w.buffer.Reset()
}

type DemoService struct {
	stdinPipe   io.WriteCloser
	comboOutput *wsBufferWriter
	session     *ssh.Session
	wsConn      *websocket.Conn
}

func (s *DemoService) WS(context *gin.Context) {
	fmt.Println("======ws入口====")
	//1.升级连接,从http--->websocket
	upGrade, err := upGrader.Upgrade(context.Writer, context.Request, nil)
	if err != nil {
		context.AbortWithStatus(http.StatusOK)
		fmt.Println("http升级websocket失败")
		return
	}
	defer upGrade.Close() //延迟关闭链接...
	//2.连接ssh
	config := ssh.ClientConfig{
		Timeout:         time.Second * 5,
		User:            "root",
		HostKeyCallback: ssh.InsecureIgnoreHostKey(),
		Auth:            []ssh.AuthMethod{ssh.Password("Yyin123527")}, //如果有秘钥这里可以换秘钥,这里我写死root,演示案例而已.
	}
	//ssh拨号以tcp方式连接服务器
	sshDial, err2 := ssh.Dial("tcp", "123.56.217.93:22", &config) //服务器配置地址
	if err2 != nil {
		upGrade.WriteMessage(websocket.TextMessage, []byte("\n第二步:ssh连接失败,详情:"+err2.Error()))
		return
	}
	defer sshDial.Close()

	//3.ssh 创建shell的session会话
	session, err3 := sshDial.NewSession()
	if err3 != nil {
		upGrade.WriteMessage(websocket.TextMessage, []byte("\n第三步:ssh创建会话失败"+err3.Error()))
		return
	}
	pipe, _ := session.StdinPipe()
	wsBuffer := new(wsBufferWriter)
	session.Stdout = wsBuffer
	session.Stderr = wsBuffer
	modes := ssh.TerminalModes{
		ssh.ECHO:          1,
		ssh.TTY_OP_ISPEED: 14400,
		ssh.TTY_OP_OSPEED: 14400,
	}
	//伪造xterm终端
	err = session.RequestPty("xterm", 500, 500, modes)
	if err != nil {
		upGrade.WriteMessage(websocket.TextMessage, []byte("第三步:会话伪造终端失败"+err.Error()))
		return
	}
	err = session.Shell()
	if err != nil {
		upGrade.WriteMessage(websocket.TextMessage, []byte("第三步:启动shell终端失败"+err.Error()))
		return
	}
	var demo = &DemoService{
		stdinPipe:   pipe,
		comboOutput: wsBuffer,
		session:     session,
		wsConn:      upGrade,
	}
	//defer session.Close()
	quitChan := make(chan bool, 3)
	//4.以上初始化信息基本结束.下面是携程读写websocket和ssh管道的操作.也就是信息通信
	demo.start(quitChan)
	//session 等待
	go demo.Wait(quitChan)
	<-quitChan
}

func (s *DemoService) start(quitChan chan bool) {
	go s.receiveWsMsg(quitChan)
	go s.sendWsOutput(quitChan)
}

// 将客户端信息返回到
func (s *DemoService) sendWsOutput(quitChan chan bool) {
	wsConn := s.wsConn
	defer setQuit(quitChan)
	ticker := time.NewTicker(time.Millisecond * time.Duration(60))
	defer ticker.Stop()
	for {
		select {
		case <-ticker.C:
			if s.comboOutput == nil {
				return
			}
			bytes := s.comboOutput.Bytes()
			if len(bytes) > 0 {
				wsConn.WriteMessage(websocket.TextMessage, bytes)
				s.comboOutput.buffer.Reset()
			}
		case <-quitChan:
			return
		}

	}
}

// 读取ws信息写入ssh客户端中.
func (s *DemoService) receiveWsMsg(quitChan chan bool) {
	wsConn := s.wsConn
	defer setQuit(quitChan) //告诉其他携程退出
	for {
		select {
		case <-quitChan:
			return
		default:
			//1.websocket 读取信息
			_, data, err := wsConn.ReadMessage()
			fmt.Println("=========readMessae===", string(data))
			if err != nil {
				fmt.Println("receiveWsMsg=>读取ws信息失败", err)
				return
			}
			//2.读取到的数据写入ssh 管道内.
			s.stdinPipe.Write(data)
		}
	}
}

func (s *DemoService) Wait(quitChan chan bool) {
	if err := s.session.Wait(); err != nil {
		setQuit(quitChan)
	}
}

func setQuit(quitChan chan bool) {
	quitChan <- true
}

var demoService = new(DemoService)

func main() {
	r := gin.Default()
	r.GET("/ws", demoService.WS)
	r.Run(":8080")
}
