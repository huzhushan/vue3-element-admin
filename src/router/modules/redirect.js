const Redirect = () => import("@/views/redirect/index.vue");

export default [
  {
    path: '/redirect/:path(.*)',
    component: Redirect,
  }
]