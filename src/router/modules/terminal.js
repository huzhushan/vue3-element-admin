const Layout = () => import('@/layout/index.vue')
const console = () => import('@/views/terminal/console.vue')
const termList = () => import('@/views/terminal/termList.vue')

export default [
    {
      path: '/terminal',
      component: Layout,
      name: 'terminal',
      meta: {
        title: 'menu.terminal',
      },
      icon: 'Platform',
      children: [
        {
          path: '/console',
          name: 'console',
          component: console,
          meta: {
            title: 'menu.console',
          },
          hidden: false
        },
        {
            path: '/termList',
            name: 'termList',
            component: termList,
            meta: {
              title: 'menu.termList',
            },
            hidden: false
          },
      ],
    },
  ]