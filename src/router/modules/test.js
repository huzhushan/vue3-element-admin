/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-21 09:18:32
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 18:51:35
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
const Layout = () => import('@/layout/index.vue')
const List = () => import('@/views/test/index.vue')
const Add = () => import('@/views/test/Add.vue')
const Edit = () => import('@/views/test/Edit.vue')
const Auth = () => import('@/views/test/Auth.vue')
const NoAuth = () => import('@/views/test/NoAuth.vue')
const Nest = () => import('@/views/test/Nest.vue')
const NestPage1 = () => import('@/views/test/nest/Page1.vue')
const NestPage2 = () => import('@/views/test/nest/Page2.vue')
const Iscache = () => import('@/views/test/Cache.vue')
const Nocache = () => import('@/views/test/Nocache.vue')
const ErrorLog = () => import('@/views/test/error-log/index.vue')

export default [
  {
    path: '/test',
    component: Layout,
    name: 'test',
    meta: {
      title: 'menu.test',
    },
    icon: 'Location',
    children: [
      {
        path: '',
        name: 'testList',
        component: List,
        meta: {
          title: 'menu.testList',
        },
      },
      {
        path: 'add',
        name: 'testAdd',
        component: Add,
        meta: {
          title: 'menu.testAdd',
        },
        hidden: true, // 不在菜单中显示
      },
      {
        path: 'edit/:id',
        name: 'testEdit',
        component: Edit,
        meta: {
          title: 'menu.testEdit',
        },
        hidden: true, // 不在菜单中显示
      },
      // {
      //   path: 'auth',
      //   name: 'testAuth',
      //   component: Auth,
      //   meta: {
      //     title: 'menu.testAuth',
      //   },
      // },
      // {
      //   path: 'noauth',
      //   name: 'testNoAuth',
      //   component: NoAuth,
      //   meta: {
      //     title: 'menu.testNoAuth',
      //   },
      //   hidden: true,
      // },
      {
        path: 'cache',
        name: 'test-cache',
        component: Iscache,
        meta: {
          title: 'menu.test-cache',
        },
      },
      {
        path: 'nocache',
        name: 'test-no-cache',
        component: Nocache,
        meta: {
          title: 'menu.test-no-cache',
          noCache: true, // 不缓存页面
        },
      },
      {
        path: 'nest',
        name: 'nest',
        component: Nest,
        redirect: '/test/nest/page1',
        meta: {
          title: 'menu.nest',
        },
        children: [
          {
            path: 'page1',
            name: 'nestPage1',
            component: NestPage1,
            meta: {
              title: 'menu.nestPage1',
            },
          },
          {
            path: 'page2',
            name: 'nestPage2',
            component: NestPage2,
            meta: {
              title: 'menu.nestPage2',
            },
          },
        ],
      },
      {
        path: 'error-log',
        name: 'test-error-log',
        component: ErrorLog,
        meta: {
          title: 'menu.test-error-log',
        },
      },
    ],
  },
]
