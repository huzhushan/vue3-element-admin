
const User = () => import("@/views/user/index.vue");
const AddUser = () => import("@/views/user/AddUser.vue");

export default [
  {
    path: "/user",
    name: "user",
    component: User,
    meta: {
      title: "用户管理",
    }
  },
  {
    path: "/user/add",
    name: "addUser",
    component: AddUser,
    meta: {
      title: "添加用户",
      parentBreadcrumb: ["user"]
    }
  }
]