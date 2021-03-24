export default [
  {
    url: "/api/login",
    method: "post",
    timeout: 1000,
    response: {
      code: 200,
      message: "登录成功",
      data: {
        token: "@word(50, 100)", // @word()是mockjs的语法
        refresh_token: "@word(50, 100)", // refresh_token是用来重新生成token的
      }
    },
  },
]