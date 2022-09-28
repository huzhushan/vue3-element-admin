/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-25 12:27:50
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
export default [
  {
    url: '/api/get', // 请求地址
    method: 'get', // 请求方法
    response: ({ query }) => {
      // 响应内容
      return {
        code: 0,
        data: {
          name: 'hello world',
        },
      }
    },
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'hello world',
      },
    },
  },
  {
    url: '/api/500',
    method: 'get',
    statusCode: 500,
    response: {
      code: 500,
      message: '内部错误',
      data: null,
    },
  },
  // 请求用户列表
  {
    url: '/api/test/users',
    method: 'post',
    timeout: 1000,
    response: () => {
      // 响应内容
      return {
        code: 200,
        message: '获取成功',
        data: {
          'list|10': [
            {
              'id|+1': 1,
              nickName: '@cname()',
              userEmail: '@email()',
              'status|1': [0, 1],
            },
          ],
          'total|50-1000': 1,
        },
      }
    },
  },
]
