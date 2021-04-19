const Layout = () => import('@/layout/index.vue')
const Redirect = () => import('@/views/redirect/index.vue')

export default [
  {
    path: '/redirect/:path(.*)',
    component: Layout,
    children: [
      {
        path: '',
        component: Redirect,
      },
    ],
  },
]
