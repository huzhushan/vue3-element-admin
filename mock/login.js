/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-21 09:39:13
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
export default [
  {
    url: '/api/login',
    method: 'post',
    timeout: 1000,
    statusCode: 200,
    response: {
      code: 200,
      message: '登录成功',
      data: {
        token: '@word(50, 100)', // @word()是mockjs的语法
        refresh_token: '@word(50, 100)', // refresh_token是用来重新生成token的
      },
    },
  },
  {
    url: '/api/userinfo',
    method: 'get',
    timeout: 100,
    response: {
      code: 200,
      message: '获取用户信息成功',
      data: {
        id: 1,
        name: 'zhangsan',
        'role|1': ['admin', 'visitor'], // 随机返回一个角色admin或visitor
        avatar: "@image('48x48', '#fb0a2a')",
      },
    },
  },
]
