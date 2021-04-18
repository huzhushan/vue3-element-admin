export default [
  {
    url: "/api/get", // 请求地址
    method: "get", // 请求方法
    response: ({ query }) => { // 响应内容
      return {
        code: 0,
        data: {
          name: "hello world",
        },
      };
    },
  },
  {
    url: "/api/post",
    method: "post",
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: "hello world",
      },
    },
  },
]
