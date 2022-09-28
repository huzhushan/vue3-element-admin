/*
 *
 * 　　┏┓　　　┏┓+ +
 * 　┏┛┻━━━┛┻┓ + +
 * 　┃　　　　　　　┃
 * 　┃　　　━　　　┃ ++ + + +
 *  ████━████ ┃+
 * 　┃　　　　　　　┃ +
 * 　┃　　　┻　　　┃
 * 　┃　　　　　　　┃ + +
 * 　┗━┓　　　┏━┛
 * 　　　┃　　　┃
 * 　　　┃　　　┃ + + + +
 * 　　　┃　　　┃
 * 　　　┃　　　┃ +  神兽保佑
 * 　　　┃　　　┃    代码无bug
 * 　　　┃　　　┃　　+
 * 　　　┃　 　　┗━━━┓ + +
 * 　　　┃ 　　　　　　　┣┓
 * 　　　┃ 　　　　　　　┏┛
 * 　　　┗┓┓┏━┳┓┏┛ + + + +
 * 　　　　┃┫┫　┃┫┫
 * 　　　　┗┻┛　┗┻┛+ + + +
 *
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-08-20 11:15:27
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 16:15:56
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

import { useTags } from '@/pinia/modules/tags'
import { reactive, toRefs, getCurrentInstance } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// 关闭当前标签
export default () => {
  const instance = getCurrentInstance()
  const router = useRouter()
  const route = useRoute()
  const { delTag } = useTags()
  const state = reactive({
    /**
     * @param {String} fullPath 要跳转到那个页面的地址
     * @param {Boolean} reload 是否在跳转后重新渲染页面组件
     * @param {Boolean} f5 是否在跳转后刷新页面
     * @return {*}
     */
    closeTag({ fullPath, reload, f5 } = {}) {
      delTag(route)
      fullPath ? router.push(fullPath) : router.back()
      reload &&
        setTimeout(() => {
          instance.appContext.config.globalProperties.$tagsbar.refreshSelectedTag(
            route
          )
        }, 500)

      f5 && setTimeout(() => window.location.reload(), 500)
    },
  })

  return toRefs(state)
}
