import layout from '@/layout/index.vue'
const List = () => import("@/views/test/index.vue");
const Add = () => import("@/views/test/Add.vue");
const Auth = () => import("@/views/test/Auth.vue");
const Nest = () => import("@/views/test/Nest.vue");
const NestPage1 = () => import("@/views/test/nest/Page1.vue");
const NestPage2 = () => import("@/views/test/nest/Page2.vue");

export default [
  {
    path: '/test',
    component: layout,
    name: "test",
    meta: {
      title: "测试页面",
    },
    icon: 'el-icon-location',
    roles: ["admin", "visitor"],
    children: [
      {
        path: "",
        name: "testList",
        component: List,
        meta: {
          title: "列表",
          roles: ["admin", "visitor"],
        },
      },
      {
        path: "add",
        name: "testAdd",
        component: Add,
        meta: {
          title: "添加",
          roles: ["admin", "visitor"],
        },
        hidden: true, // 不在菜单中显示
      },
      {
        path: "auth",
        name: "testAuth",
        component: Auth,
        meta: {
          title: "权限页面",
          roles: ["admin"],
        }
      },
      {
        path: "nest",
        name: "nest",
        component: Nest,
        redirect: '/test/nest/page1',
        meta: {
          title: "二级菜单",
          roles: ["admin", "visitor"],
        },
        children: [
          {
            path: "page1",
            name: "nestPage1",
            component: NestPage1,
            meta: {
              title: "page1",
              roles: ["admin", "visitor"],
            },
          },
          {
            path: "page2",
            name: "nestPage2",
            component: NestPage2,
            meta: {
              title: "page2",
              roles: ["admin", "visitor"],
            },
          }
        ]
      },
    ]
  }
]