<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2021-04-21 09:18:32
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-21 09:31:10
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
-->
<template>
  <div class="errPage-container">
    <ErrorA />
    <ErrorB />
    <h2>这个页面是测试错误日志功能的</h2>
    <h4>
      本页面主动抛出了错误（任何页面报错都会记录到错误日志中），现在你可以点击右上角的`debugger`图标查看错误日志
    </h4>
    <div>
      你可以在`store/modules/errorLog.js`的`addErrorLog`方法中将错误上报到服务器
    </div>
    <br />
    <div>
      如果你的项目不需要错误日志功能，你需要把`src/error-log.js`中的flag变量设为false
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import ErrorA from './components/ErrorTestA.vue'
import ErrorB from './components/ErrorTestB.vue'
import { TestError } from '@/api/test'

export default defineComponent({
  name: 'test-error-log',
  components: { ErrorA, ErrorB },
  setup() {
    onMounted(async () => {
      await TestError() // 该接口抛出500错误
    })
  },
})
</script>

<style scoped>
.errPage-container {
  padding: 30px;
}
</style>
