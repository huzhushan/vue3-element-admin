<!--
 * _______________#########_______________________ 
 * ______________############_____________________ 
 * ______________#############____________________ 
 * _____________##__###########___________________ 
 * ____________###__######_#####__________________ 
 * ____________###_#######___####_________________ 
 * ___________###__##########_####________________ 
 * __________####__###########_####_______________ 
 * ________#####___###########__#####_____________ 
 * _______######___###_########___#####___________ 
 * _______#####___###___########___######_________ 
 * ______######___###__###########___######_______ 
 * _____######___####_##############__######______ 
 * ____#######__#####################_#######_____ 
 * ____#######__##############################____ 
 * ___#######__######_#################_#######___ 
 * ___#######__######_######_#########___######___ 
 * ___#######____##__######___######_____######___ 
 * ___#######________######____#####_____#####____ 
 * ____######________#####_____#####_____####_____ 
 * _____#####________####______#####_____###______ 
 * ______#####______;###________###______#________ 
 * ________##_______####________####______________ 
 * 
 * @Descripttion: 
 * @version: 
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-21 12:46:00
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 -->

<template>
  <div class="wrapper">
    <sidebar />
    <div class="right">
      <div class="top">
        <topbar />
        <tagsbar />
      </div>
      <div class="main">
        <Content />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import Sidebar from './components/Sidebar/index.vue'
import Topbar from './components/Topbar/index.vue'
import Tagsbar from './components/Tagsbar/index.vue'
import Content from './components/Content/index.vue'
import { useResizeHandler } from './hooks/useResizeHandler'

export default defineComponent({
  name: 'layout',
  components: {
    Sidebar,
    Topbar,
    Tagsbar,
    Content,
  },
  setup() {
    useResizeHandler()
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 100%;

  .right {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .top {
      background: #fff;
    }
    .main {
      flex: 1;
      background: #f0f2f5;
      padding: 16px;
      overflow: auto;
    }
  }
}
</style>
