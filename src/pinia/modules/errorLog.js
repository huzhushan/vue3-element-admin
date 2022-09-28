/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-21 09:18:32
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 15:45:36
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
import { defineStore } from 'pinia'

export const useErrorlog = defineStore('errorLog', {
  state: () => ({
    logs: [],
  }),
  actions: {
    addErrorLog(log) {
      // 可以根据需要将错误上报给服务器
      // ....code.......

      this.logs.push(log)
    },
    clearErrorLog() {
      this.logs.splice(0)
    },
  },
})
