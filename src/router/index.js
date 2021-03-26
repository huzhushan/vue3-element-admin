// index.js
import { createRouter, createWebHashHistory } from "vue-router"

import login from './modules/login'
import home from './modules/home'
import user from './modules/user'


export const AllMenus = [
  ...user
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    ...login,
    ...home,
  ],
});

export default router;