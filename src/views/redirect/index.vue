<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-28 15:27:11
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
-->
<script>
import { h } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    router.replace(route.fullPath.replace(/^\/redirect/, ''))
  },
  render() {
    return h('div')
  },
}
</script>
