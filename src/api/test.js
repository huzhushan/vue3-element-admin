/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 16:35:04
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-21 09:37:00
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
