/*
 *           佛曰:
 *                   写字楼里写字间，写字间里程序员；
 *                   程序人员写程序，又拿程序换酒钱。
 *                   酒醒只在网上坐，酒醉还来网下眠；
 *                   酒醉酒醒日复日，网上网下年复年。
 *                   但愿老死电脑间，不愿鞠躬老板前；
 *                   奔驰宝马贵者趣，公交自行程序员。
 *                   别人笑我忒疯癫，我笑自己命太贱；
 *                   不见满街漂亮妹，哪个归得程序员？
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-21 09:18:32
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 15:53:02
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

import { nextTick } from 'vue'
import { useErrorlog } from './pinia/modules/errorLog'
// import store from '@/store'

// 判断环境，决定是否开启错误监控
//   - import.meta.env.DEV 布尔值，代表开发环境
//   - import.meta.env.PROD 布尔值，代表生产环境

// const flag =  import.meta.env.PROD  // 生产环境才进行错误监控
const flag = true // 为了演示，默认开启错误监控。如果你的项目不需要错误监控，请设为false

export default app => {
  if (flag) {
    app.config.errorHandler = function(err, vm, info) {
      nextTick(() => {
        useErrorlog().addErrorLog({
          err,
          // vm, // 这里不保存vm，否则渲染错误日志的时候控制台会有警告
          info,
          url: window.location.href,
          id: Date.now(),
        })
        console.error(err, info)
      })
    }
  }
}
