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
 * @LastEditTime: 2021-07-23 14:39:15
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 -->

<template>
  <div class="wrapper" :class="{ fluid: isFluid }">
    <sidebar v-if="!isHorizontalMenu" />
    <div class="right" :class="{ flex: isTopbarFixed }">
      <div class="top">
        <topbar />
        <menus mode="horizontal" v-if="isHorizontalMenu" />
        <tagsbar />
        <breadcrumbs v-if="isBreadcrumbsShow" />
      </div>
      <div class="main" :class="{ pt0: isBreadcrumbsShow }">
        <Content />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed, inject } from 'vue'
import Sidebar from './components/Sidebar/index.vue'
import Topbar from './components/Topbar/index.vue'
import Menus from './components/Sidebar/Menus.vue'
import Tagsbar from './components/Tagsbar/index.vue'
import Breadcrumbs from './components/Topbar/Breadcrumbs.vue'
import Content from './components/Content/index.vue'
import { useResizeHandler } from './hooks/useResizeHandler'

export default defineComponent({
  name: 'layout',
  components: {
    Sidebar,
    Topbar,
    Menus,
    Tagsbar,
    Breadcrumbs,
    Content,
  },
  setup() {
    useResizeHandler()

    const defaultSettings = inject('defaultSettings')
    const isFluid = computed(() => defaultSettings.layout.isFluid)
    const isTopbarFixed = computed(() => defaultSettings.topbar.isFixed)
    const isHorizontalMenu = computed(
      () => defaultSettings.menus.mode === 'horizontal'
    )
    const isBreadcrumbsShow = computed(
      () => isHorizontalMenu.value && defaultSettings.breadcrumbs.isShow
    )

    return {
      isFluid,
      isTopbarFixed,
      isHorizontalMenu,
      isBreadcrumbsShow,
    }
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  margin: 0 auto;
  width: 1440px;
  height: 100%;
  &.fluid {
    width: 100%;
  }

  .right {
    flex: 1;
    overflow: auto;
    &.flex {
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .top {
      background: #fff;
    }
    .main {
      flex: 1;
      background: #f5f5f5;
      padding: 16px;
      overflow: auto;
      &.pt0 {
        padding-top: 0;
      }
    }
  }
}
</style>
