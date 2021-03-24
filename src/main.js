import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入store
import store from './store'
// 引入element-plus
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
