export default [
  {
    url: "/api/menus",
    method: "get",
    timeout: 100,
    response: {
      code: 200,
      message: "获取菜单成功",
      data: [
        {
          url: '/test',
          title: '测试页面',
          icon: 'el-icon-location',
          children: [
            {
              url: '/test',
              title: '列表',
            },
            {
              url: '/test/auth',
              title: '权限页面',
            },
            {
              url: '/test/nest',
              title: '二级菜单',
              children: [
                {
                  url: '/test/nest',
                  title: '子菜单',
                },
              ]
            }
          ]
        }
      ]
    },
  },
]