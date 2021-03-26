import layout from '@/layout/index.vue'
const UserList = () => import("@/views/user/index.vue");
const AddUser = () => import("@/views/user/AddUser.vue");

export default [
  {
    path: '/user',
    component: layout,
    name: "user",
    meta: {
      title: "用户管理",
    },
    roles: ["admin", "visitor"],
    children: [
      {
        path: "",
        name: "userList",
        component: UserList,
        meta: {
          title: "用户列表",
        },
        roles: ["admin", "visitor"],
      },
      {
        path: "add",
        name: "addUser",
        component: AddUser,
        meta: {
          title: "添加用户"
        },
        hidden: true,
        roles: ["admin"],
      }
    ]
  }
]