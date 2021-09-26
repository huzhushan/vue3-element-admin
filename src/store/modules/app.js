/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-09-18 15:40:50
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
import { getItem, setItem, removeItem } from '@/utils/storage' //getItem和setItem是封装的操作localStorage的方法
import { AesEncryption } from '@/utils/encrypt'
import { toRaw } from 'vue'
export const TOKEN = 'VEA-TOKEN'
const COLLAPSE = 'VEA-COLLAPSE'

export default {
  namespaced: true,
  state: {
    title: 'Vue3 Element Admin',
    authorization: getItem(TOKEN),
    sidebar: {
      collapse: getItem(COLLAPSE),
    },
    device: 'desktop',
  },
  mutations: {
    setToken(state, data) {
      state.authorization = data
      // 保存到localStorage
      setItem(TOKEN, data)
    },
    clearToken(state) {
      state.authorization = ''

      removeItem(TOKEN)
    },
    setCollapse(state, data) {
      state.sidebar.collapse = data
      // 保存到localStorage
      setItem(COLLAPSE, data)
    },
    clearCollapse(state) {
      state.sidebar.collapse = ''

      removeItem(COLLAPSE)
    },
    setDevice(state, device) {
      state.device = device
    },
  },
  actions: {
    clearToken({ commit }) {
      // 清除token
      commit('clearToken')
      // 清除用户信息
      commit('account/clearUserinfo', '', { root: true })
      // 清除标签栏
      commit('tags/CLEAR_ALL_TAGS', '', { root: true })
      // 清空menus
      commit('menu/SET_MENUS', [], { root: true })
    },
    setScreenCode({ commit, state }, password) {
      const authorization = toRaw(state.authorization)

      if (!password) {
        try {
          delete authorization.screenCode
        } catch (err) {
          console.log(err)
        }
        commit('setToken', authorization)

        return
      }

      // 对密码加密
      const screenCode = new AesEncryption().encryptByAES(password)

      commit('setToken', {
        ...authorization,
        screenCode,
      })
    },
  },
}
