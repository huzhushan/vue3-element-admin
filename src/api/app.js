import request from '@/utils/request'
// 获取用户信息
export const GetUserinfo = () => {
  return request({
    url: "/api/userinfo",
    method: "get"
  });
};