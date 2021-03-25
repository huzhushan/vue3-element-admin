// index.js
import { createRouter, createWebHashHistory } from "vue-router"
import layout from '@/layout/index.vue'
import login from './modules/login'
import home from './modules/home'
import user from './modules/user'

import { TOKEN } from '@/store/modules/app'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: layout,
      redirect: '/home',
      children: [
        ...home,
        ...user
      ]
    },
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