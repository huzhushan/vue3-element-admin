/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-09-29 10:10:14
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
import { GetUserinfo } from '@/api/login'

export default {
  namespaced: true,
  state: {
    userinfo: null,
    permissionList: [],
  },
  mutations: {
    // 保存用户信息
    setUserinfo(state, data) {
      state.userinfo = data
    },
    // 清除用户信息
    clearUserinfo(state) {
      state.userinfo = null
    },
  },
  actions: {
    // 获取用户信息
    async getUserinfo({ commit }) {
      const { code, data } = await GetUserinfo()
      if (+code === 200) {
        commit('setUserinfo', data)
        return Promise.resolve(data)
      }
    },
  },
}
