/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-21 09:18:32
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-29 11:20:14
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
      title: '测试页面',
    },
    icon: 'el-icon-location',
    roles: ['admin', 'visitor'],
    children: [
      {
        path: '',
        name: 'testList',
        component: List,
        meta: {
          title: '列表',
          roles: ['admin', 'visitor'],
        },
      },
      {
        path: 'add',
        name: 'testAdd',
        component: Add,
        meta: {
          title: '添加',
          roles: ['admin', 'visitor'],
        },
        hidden: true, // 不在菜单中显示
      },
      {
        path: 'edit/:id',
        name: 'testEdit',
        component: Edit,
        meta: {
          title: '编辑',
          roles: ['admin', 'visitor'],
        },
        hidden: true, // 不在菜单中显示
      },
      {
        path: 'auth',
        name: 'testAuth',
        component: Auth,
        meta: {
          title: '权限测试',
          roles: ['admin', 'visitor'],
        },
      },
      {
        path: 'noauth',
        name: 'testNoAuth',
        component: NoAuth,
        meta: {
          title: '权限页面',
          roles: ['admin'],
        },
        hidden: true,
      },
      {
        path: 'cache',
        name: 'test-cache',
        component: Iscache,
        meta: {
          title: '该页面可缓存',
          roles: ['admin', 'visitor'],
        },
      },
      {
        path: 'nocache',
        name: 'test-no-cache',
        component: Nocache,
        meta: {
          title: '该页面不缓存',
          roles: ['admin', 'visitor'],
          noCache: true, // 不缓存页面
        },
      },
      {
        path: 'nest',
        name: 'nest',
        component: Nest,
        redirect: '/test/nest/page1',
        meta: {
          title: '二级菜单',
          roles: ['admin', 'visitor'],
        },
        children: [
          {
            path: 'page1',
            name: 'nestPage1',
            component: NestPage1,
            meta: {
              title: 'page1',
              roles: ['admin', 'visitor'],
            },
          },
          {
            path: 'page2',
            name: 'nestPage2',
            component: NestPage2,
            meta: {
              title: 'page2',
              roles: ['admin', 'visitor'],
            },
          },
        ],
      },
      {
        path: 'error-log',
        name: 'test-error-log',
        component: ErrorLog,
        meta: {
          title: '测试错误日志',
          roles: ['admin', 'visitor'],
        },
      },
    ],
  },
]
