<template>
  <dl>
    <dt>有以下两种方式设置页面不缓存：</dt>
    <dd>- 当前页面不设置name属性</dd>
    <dd>- 或者路由配置的meta增加noCache: true</dd>
  </dl>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'test-no-cache', // 该name必须跟路由配置的name一致，不一致或者不设置name则不缓存
  setup() {
    console.log('nocache')
  },
})
</script>
