// home.js
import layout from '@/layout/index.vue'
const Home = () => import("@/views/home/index.vue");

export default [
  {
    path: '/home',
    component: layout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
        meta: {
          title: "首页",
        }
      }
    ]
  },

]