<template>
    <el-resize @resize="handleResize" :min-height="800" :min-width="100" >
        <div ref="terminal" id="xterm"></div>
    </el-resize>
</template>
  
<script setup>
import { WS_SERVER } from '@/api/terminal';
import 'xterm/css/xterm.css';
import { Terminal } from 'xterm';
import { AttachAddon } from 'xterm-addon-attach';
import { FitAddon } from 'xterm-addon-fit';
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';


const terminal = ref();
const term = new Terminal(
    {
        rows: 60,
        allowTransparency: true,
        cursorBlink:true,
        altClickMovesCursor:true,
        tabStopWidth:8,
        fontSize: 12, // 设置字号，以像素为单位
        lineHeight: 1, // 设置行间距，可以是数字或字符串
    }
);
const socket = new WebSocket(WS_SERVER);

const initTerm = () => {
    const attachAddon = new AttachAddon(socket)
    const fitAddon = new FitAddon()
    term.loadAddon(attachAddon)
    term.loadAddon(fitAddon)
    term.open(terminal.value)

    fitAddon.fit()
    term.focus()
}
oncancel

onMounted(() => {
    initTerm()
});



onBeforeRouteLeave ( () => {
    socket.close()
    term.dispose()
    console.log("对象关闭")
});


</script>
  
<style scoped>
.terminal-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
  