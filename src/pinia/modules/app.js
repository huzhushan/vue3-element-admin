/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 15:42:35
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

import { defineStore } from 'pinia'
import { getItem, setItem, removeItem } from '@/utils/storage' //getItem和setItem是封装的操作localStorage的方法
import { AesEncryption } from '@/utils/encrypt'
import { toRaw } from 'vue'
import { useAccount } from './account'
import { useTags } from './tags'
import { useMenus } from './menu'
export const TOKEN = 'VEA-TOKEN'
const COLLAPSE = 'VEA-COLLAPSE'

export const useApp = defineStore('app', {
  state: () => ({
    title: 'Vue3 Element Admin',
    authorization: getItem(TOKEN),
    sidebar: {
      collapse: getItem(COLLAPSE),
    },
    device: 'desktop',
  }),
  actions: {
    setCollapse(data) {
      this.sidebar.collapse = data
      // 保存到localStorage
      setItem(COLLAPSE, data)
    },
    clearCollapse() {
      this.sidebar.collapse = ''
      removeItem(COLLAPSE)
    },
    setDevice(device) {
      this.device = device
    },
    setToken(data) {
      this.authorization = data
      // 保存到localStorage
      setItem(TOKEN, data)
    },
    initToken(data) {
      this.clearToken()
      this.setToken(data)
    },
    clearToken() {
      // 清除token
      this.authorization = ''
      removeItem(TOKEN)
      // 清除用户信息
      useAccount().clearUserinfo()
      // 清除标签栏
      useTags().clearAllTags()
      // 清空menus
      useMenus().setMenus([])
    },
    setScreenCode(password) {
      const authorization = toRaw(this.authorization)

      if (!password) {
        try {
          delete authorization.screenCode
        } catch (err) {
          console.log(err)
        }

        this.authorization = authorization
        // 保存到localStorage
        setItem(TOKEN, authorization)

        return
      }

      // 对密码加密
      const screenCode = new AesEncryption().encryptByAES(password)

      const res = {
        ...authorization,
        screenCode,
      }
      this.authorization = res
      // 保存到localStorage
      setItem(TOKEN, res)
    },
  },
})
