import { nextTick } from 'vue'
import store from '@/store'

export default app => {
  // 判断环境，决定是否需要监控错误，一般生产环境才需要进行错误上报
  // import.meta.env.DEV代表开发环境
  // import.meta.env.PROD代表生产环境

  // if (import.meta.env.PROD) {
  app.config.errorHandler = function(err, vm, info) {
    nextTick(() => {
      store.dispatch('errorLog/addErrorLog', {
        err,
        vm,
        info,
        url: window.location.href,
        id: Date.now(),
      })
      console.error(err, info)
    })
  }
  // }
}
