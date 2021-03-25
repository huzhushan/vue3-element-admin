// home.js
const Home = () => import("@/views/home/index.vue");

export default [
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      title: "首页",
    }
  }
]