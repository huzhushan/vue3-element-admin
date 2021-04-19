import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// 引入element-plus
import ElementPlus from 'element-plus';
import './assets/style/element-variables.scss';
// 引入中文语言包
import 'dayjs/locale/zh-cn';
import locale from 'element-plus/lib/locale/lang/zh-cn';

// 引入路由
import router from './router';

// 引入store
import store from './store';

// 权限控制
import './permission';

// 引入svg图标注册脚本
import 'vite-plugin-svg-icons/register';

// 注册全局组件
import * as Components from './global-components';
Object.entries(Components).forEach(([key, component]) => {
  app.component(key, component);
});

app
  .use(ElementPlus, { locale })
  .use(store)
  .use(router)
  .mount('#app');
