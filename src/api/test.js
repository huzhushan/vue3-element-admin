/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 16:35:04
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-25 11:50:39
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
import request from '@/utils/request'

// 测试
export const TestError = () => {
  return request({
    url: '/api/500',
    method: 'get',
  })
}

// 用户列表
export const getUsers = data => {
  return request({
    url: '/api/test/users',
    method: 'post',
    data,
  })
}
