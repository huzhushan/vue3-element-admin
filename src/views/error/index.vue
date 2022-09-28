<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-24 21:52:50
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
-->
<template>
  <div class="error">
    <template v-if="error === '403'">
      <span class="code-403">403</span>
      <svg-icon name="error-icons-403" class="error-img" />
      <h2 class="title">{{ $t('error.noauth') }}</h2>
    </template>
    <template v-else-if="error === '500'">
      <svg-icon name="error-icons-500" class="error-img" />
      <h2 class="title">{{ $t('error.servererror') }}</h2>
    </template>
    <template v-else-if="error === '404'">
      <svg-icon name="error-icons-404" class="error-img" />
      <h2 class="title">{{ $t('error.notfound') }}</h2>
    </template>

    <router-link to="/">
      <el-button type="primary">{{ $t('error.backhome') }}</el-button>
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['error'],
})
</script>

<style lang="scss" scoped>
.error {
  position: relative;
  text-align: center;
  padding-top: 48px;
  .code-403 {
    position: absolute;
    font-size: 50px;
    top: 148px;
    left: 50%;
    transform: translateX(32px);
    font-family: arial;
    color: #ee5c42;
  }
  .error-img {
    font-size: 320px;
    pointer-events: none;
  }
  .title {
    font-size: 20px;
    margin: 32px 0;
  }
}
</style>
