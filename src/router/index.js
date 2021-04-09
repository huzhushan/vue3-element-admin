// index.js
import { createRouter, createWebHashHistory } from "vue-router"

import redirect from './modules/redirect'
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
    ...redirect, // 统一的重定向配置
    ...login,
    ...allMenus,
    ...error
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  },
});

export default router;