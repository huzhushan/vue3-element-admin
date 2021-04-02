// index.js
import { createRouter, createWebHashHistory } from "vue-router"

import error from './modules/error'
import login from './modules/login'
import home from './modules/home'
import test from './modules/test'


// 左侧菜单
export const allMenus = [
  ...home,
  ...test,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    ...login,
    ...allMenus,
    ...error
  ],
});

export default router;