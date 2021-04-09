const Layout = () => import('@/layout/index.vue')
const Error = () => import("@/views/error/index.vue");


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
          error: '403'
        }
      },
      {
        path: '500',
        name: 'error-server-error',
        component: Error,
        meta: { title: '500' },
        props: {
          error: '500'
        }
      },
      {
        path: '404',
        name: 'error-not-found',
        component: Error,
        meta: { title: '404' },
        props: {
          error: '404'
        }
      }
    ]
  },
  {
    path: '/403',
    name: 'forbidden',
    component: Error,
    props: {
      error: '403'
    }
  },
  {
    path: '/500',
    name: 'server-error',
    component: Error,
    props: {
      error: '500'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: Error,
    props: {
      error: '404'
    }
  },
]