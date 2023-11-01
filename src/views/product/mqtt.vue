<template>
  <div>
    <h2>MQTT Broker Configuration</h2>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form :model="mqttConfig" label-width="120px">
          <el-form-item label="Broker Address">
            <el-input v-model="mqttConfig.brokerAddress"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <el-form :model="mqttConfig" label-width="120px">
          <el-form-item label="Port">
            <el-input v-model="mqttConfig.port"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form :model="mqttConfig" label-width="120px">
          <el-form-item label="Client ID">
            <el-input v-model="mqttConfig.clientId"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <el-form :model="mqttConfig" label-width="120px">
          <el-form-item label="Path">
            <el-input v-model="mqttConfig.path"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form :model="mqttConfig" label-width="120px">
          <el-form-item label="Username">
            <el-input v-model="mqttConfig.username"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <el-form :model="mqttConfig" label-width="120px">
          <el-form-item label="Password">
            <el-input v-model="mqttConfig.password"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row :gutter="20" justify="end" label-width="120px">
      <el-button type="primary" :disabled="buttonSwitch" @click="connectMqtt">Connect MQTT</el-button>
      <el-button type="danger" :disabled="!buttonSwitch" @click="disconnectMqtt">Disconnect MQTT</el-button>
    </el-row>
  </div>
  <el-divider />




  <div class="subscribe-layout">
    <el-container>
      <el-header>
        <h2>Subscribe</h2>
        <el-row justify="start" span="30">
          <el-form :inline="true" :model="subscribeConfig" ref="Subscribe">
            <el-form-item label="Topic">
              <el-input v-model="subscribeConfig.topic"></el-input>
            </el-form-item>
            <el-form-item label="QoS">
              <el-select v-model="subscribeConfig.qos">
                <el-option label="0" value="0"></el-option>
                <el-option label="1" value="1"></el-option>
                <el-option label="2" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="success" :disabled="!buttonSwitch" @click="subscribeMqtt">Subscribe</el-button>
            </el-form-item>
          </el-form>
        </el-row>
      </el-header>
      <el-main>
        <el-card>
          <el-table :data="subscribeData" style="width: 100%" max-height="250">
            <el-table-column fixed prop="topic" label="Topic" />
            <el-table-column prop="qos" label="Qos" />
            <el-table-column prop="time" label="Time" />
            <el-table-column fixed="right" label="操作">
              <template #default="scope">
                <el-button link type="primary" size="small" @click="unsubscribeMqtt(scope.row)">
                  取消
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-main>
    </el-container>
  </div>

  <el-divider />




  <div class="publish-layout">
    <el-container>
      <el-header>
        <h2>Publish</h2>
        <el-row justify="start" span="30">
          <el-form :inline="true" :model="publishConfig" ref="Publish">

            <el-form-item label="Topic">
              <el-input v-model="publishConfig.topic"></el-input>
            </el-form-item>
            <el-form-item label="Payload">
              <el-input v-model="publishConfig.payload"></el-input>
            </el-form-item>
            <el-form-item label="QoS">
              <el-select v-model="publishConfig.qos">
                <el-option label="0" value="0"></el-option>
                <el-option label="1" value="1"></el-option>
                <el-option label="2" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Retained">
              <el-switch v-model="publishConfig.retained"></el-switch>
            </el-form-item>
            <el-form-item>
              <template #default="scope">
                <el-button type="success" :disabled="!buttonSwitch" @click="publish">Publish</el-button>
              </template>
            </el-form-item>
          </el-form>
        </el-row>
      </el-header>
      <el-container>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-card>
                <h3>Receive</h3>
                <el-table :data="receiveData" style="width: 100%">
                  <el-table-column prop="topic" label="Topic" />
                  <el-table-column prop="qos" label="Qos" />
                  <el-table-column prop="payload" label="Payload" />
                  <el-table-column prop="time" label="Time" />
                </el-table>
              </el-card>
            </el-col>

            <el-col :span="12">
              <el-card>
                <h3>Send</h3>
                <el-table :data="sendData" style="width:100%">
                  <el-table-column prop="topic" label="Topic" />
                  <el-table-column prop="qos" label="Qos" />
                  <el-table-column prop="payload" label="Payload" />
                  <el-table-column prop="time" label="Time" />
                </el-table>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>







<script setup>
import { ref, reactive } from 'vue'
import { Client, Message } from 'paho-mqtt';
import { ElNotification } from 'element-plus';


const mqttConfig = reactive({
  brokerAddress: 'localhost',
  path: '/mqtt',
  port: 8083,
  username: 'admin',
  password: 'public',
  clientId: 'emqx_test',
})

const subscribeConfig = reactive({
  topic: 'topic/#',
  qos: 0,
})


const publishConfig = reactive({
  topic: 'topic/1',
  payload: '{ "msg": "yyin" }',
  qos: 0,
  retained: false
})


//定义一个mqtt客户端对象
var mqttClient = null;
const buttonSwitch = ref(false);

const subscribeData = ref([]);
const receiveData = ref([]);
const sendData = ref([]);




const connectMqtt = () => {
  mqttClient = new Client(
    mqttConfig.brokerAddress,
    parseInt(mqttConfig.port),
    mqttConfig.clientId
  );

  mqttClient.onMessageArrived = (message) => {
    const newReceive = {
      topic: message.destinationName,
      qos: message.qos,
      payload: message.payloadString,
      time: new Date().toLocaleString()
    };
    receiveData.value.push(newReceive);
  };

  if (mqttConfig.username && mqttConfig.password) {
    mqttClient.connect({
      userName: mqttConfig.username,
      password: mqttConfig.password,
      onSuccess: () => {
        ElNotification({
          title: 'MQTT Connected',
          message: 'Connected to MQTT broker',
          type: 'success',
        });
        buttonSwitch.value = true;
      },
      onFailure: err => {
        ElNotification({
          title: 'MQTT Connection Failed',
          message: 'Failed to connect to MQTT broker: ' + err.errorMessage,
          type: 'error',
        });
      },
    });
  }
};

const disconnectMqtt = () => {
  if (mqttClient && mqttClient.isConnected()) {
    mqttClient.disconnect();
    mqttClient = null;
    ElNotification({
      title: 'MQTT DisConnected',
      message: 'Disconnected from MQTT broker.',
      type: 'warning',
    });
    buttonSwitch.value = false;
  } else {
    ElNotification({
      title: 'Info',
      message: 'MQTT client is not in a valid state for disconnection.',
      type: 'info',
    });
  }
};


const subscribeMqtt = () => {
  const index = subscribeData.value.findIndex(item => item.topic === subscribeConfig.topic);
  if (index !== -1) {
    if (subscribeData.value[index].qos === subscribeConfig.qos) {
      ElNotification({
        title: 'Info',
        message: 'The topic has been subscribed.',
        type: 'info',
      });
      return;
    } else {
      mqttClient.unsubscribe(subscribeConfig.topic);
      
      subscribeData.value.splice(index, 1);
    }
  }
  
  mqttClient.subscribe(subscribeConfig.topic, { 
    qos: parseInt(subscribeConfig.qos),
    
  });

  const newSubscription = {
    topic: subscribeConfig.topic,
    qos: subscribeConfig.qos,
    time: new Date().toLocaleString()
  };

  subscribeData.value.push(newSubscription);
};

const unsubscribeMqtt = (row) => {
  mqttClient.unsubscribe(row.topic);

  const index = subscribeData.value.indexOf(row);
  if (index !== -1) {
    subscribeData.value.splice(index, 1);
  }

}

//发布mqtt消息
const publish = () => {
  const message = new Message(publishConfig.payload);
  message.destinationName = publishConfig.topic;
  message.qos = parseInt(publishConfig.qos);
  message.retained = publishConfig.retained;
  //等待mqtt连接成功
  if (!mqttClient.isConnected()) {
    ElNotification({
      title: 'Warning',
      message: 'MQTT client is not connected.',
      type: 'warning',
    });
    return;
  }else{
    mqttClient.send(message);
    sendData.value.push({
      topic: publishConfig.topic,
      qos: parseInt(publishConfig.qos),
      payload: publishConfig.payload,
      time: new Date().toLocaleString()
    });
  }
}






</script>
