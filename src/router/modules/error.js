/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-21 09:34:31
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
import store from '@/store'

const checkUserinfo = code => {
  const userinfo = store.state.account.userinfo
  if (userinfo) {
    return `/error/${code}`
  }
  return true
}

const Layout = () => import('@/layout/index.vue')
const Error = () => import('@/views/error/index.vue')

export default [
  {
    path: '/error',
    component: Layout,
    children: [
      {
        path: '403',
        name: 'error-forbidden',
        component: Error,
        meta: { title: '403' },
        props: {
          error: '403',
        },
      },
      {
        path: '500',
        name: 'error-server-error',
        component: Error,
        meta: { title: '500' },
        props: {
          error: '500',
        },
      },
      {
        path: '404',
        name: 'error-not-found',
        component: Error,
        meta: { title: '404' },
        props: {
          error: '404',
        },
      },
    ],
  },
  {
    path: '/403',
    name: 'forbidden',
    component: Error,
    props: {
      error: '403',
    },
    beforeEnter() {
      return checkUserinfo('403')
    },
  },
  {
    path: '/500',
    name: 'server-error',
    component: Error,
    props: {
      error: '500',
    },
    beforeEnter() {
      return checkUserinfo('500')
    },
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: Error,
    props: {
      error: '404',
    },
    beforeEnter() {
      return checkUserinfo('404')
    },
  },
]
