/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 14:57:06
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
import { defineStore } from 'pinia'
import { GetUserinfo } from '@/api/login'

export const useAccount = defineStore('account', {
  state: () => ({
    userinfo: null,
    permissionList: [],
  }),
  actions: {
    // 清除用户信息
    clearUserinfo() {
      this.userinfo = null
    },
    // 获取用户信息
    async getUserinfo() {
      const { code, data } = await GetUserinfo()
      if (+code === 200) {
        this.userinfo = data
        return Promise.resolve(data)
      }
    },
  },
})
