<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-21 09:35:38
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
-->
<template>
  <el-scrollbar class="scroll">
    <el-menu
      class="menu"
      :collapse="collapse"
      :uniqueOpened="true"
      :router="true"
      :default-active="activePath"
      :background-color="variables.menuBg"
      :text-color="variables.menuTextColor"
      :active-text-color="variables.menuActiveTextColor"
    >
      <submenu v-for="menu in menus" :key="menu.url" :menu="menu" />
    </el-menu>
  </el-scrollbar>
</template>
<script>
import { computed, defineComponent } from 'vue'
import Submenu from './Submenu.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import config from './config/menu.module.scss'

export default defineComponent({
  components: {
    Submenu,
  },
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    store.dispatch(
      'menu/generateMenus',
      store.state.account.userinfo && store.state.account.userinfo.role
    )

    return {
      menus: computed(() => store.state.menu.menus),
      activePath: computed(() => route.path),
      variables: computed(() => config),
    }
  },
})
</script>
<style lang="scss">
// menu hover
.el-menu-item,
.el-submenu__title {
  &:hover {
    background-color: $menuHover !important;
  }
}

.el-submenu {
  .el-menu-item,
  .el-submenu .el-submenu__title {
    background-color: $subMenuBg !important;

    &:hover {
      background-color: $subMenuHover !important;
    }
  }
}
.el-menu-item.is-active {
  background-color: $menuActiveBg !important;
  &:hover {
    background-color: $menuActiveBg !important;
  }
}

.el-menu--collapse {
  .el-menu-item.is-active,
  .el-submenu.is-active > .el-submenu__title {
    position: relative;
    background-color: $collapseMenuActiveBg !important;
    color: $collapseMenuActiveColor !important;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: $collapseMenuActiveBorderWidth;
      height: 100%;
      background-color: $collapseMenuActiveBorderColor;
    }
  }
}

.el-submenu__title i {
  color: $arrowColor;
}
</style>
<style lang="scss" scoped>
.scroll {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  .menu {
    border: none;
  }
}
</style>
