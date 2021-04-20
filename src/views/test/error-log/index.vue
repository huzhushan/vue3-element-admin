<template>
  <div class="errPage-container">
    <ErrorA />
    <ErrorB />
    <h3>这个页面是测试错误上报功能的</h3>
    <div>
      本页面主动抛出了错误，你现在可以点击右上角的`debugger`图标查看错误日志
    </div>
  </div>
</template>

<script>
import ErrorA from './components/ErrorTestA.vue'
import ErrorB from './components/ErrorTestB.vue'

export default {
  name: 'test-error-log',
  components: { ErrorA, ErrorB },
}
</script>

<style scoped>
.errPage-container {
  padding: 30px;
}
</style>
