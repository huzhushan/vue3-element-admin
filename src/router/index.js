// index.js
import { createRouter, createWebHistory } from "vue-router"
import home from './modules/home'
import login from './modules/login'

import { TOKEN } from '@/store/modules/user'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    ...home,
    ...login
  ],
});

// vue-router4的路由守卫不再是通过next放行，而是通过return返回false或者一个路由地址
router.beforeEach((to, from) => {
  if (!window.localStorage[TOKEN] && to.name !== 'login') {
    return {
      name: 'login',
      query: {
        redirect: to.path // redirect是指登录之后可以跳回到redirect指定的页面
      },
      replace: true
    }
  }
})

export default router;