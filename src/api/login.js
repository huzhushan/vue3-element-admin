import request from '@/utils/request'

// 登录接口
export const Login = data => {
  return request({
    url: "/api/login",
    method: "post",
    data,
  });
};