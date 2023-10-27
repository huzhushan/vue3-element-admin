<template>
  <el-scrollbar class="scroll">
    <el-menu
      class="menu"
      :mode="mode"
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
import { useRoute } from 'vue-router'
import config from './config/menu.module.scss'
import { storeToRefs } from 'pinia'
import { useMenus } from '@/pinia/modules/menu'

export default defineComponent({
  components: {
    Submenu,
  },
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: 'vertical',
    },
  },
  setup() {
    const route = useRoute()
    const { menus } = storeToRefs(useMenus())

    return {
      menus,
      activePath: computed(() => route.path),
      variables: computed(() => config),
    }
  },
})
</script>
<style lang="scss">
// menu hover
.el-menu-item,
.el-sub-menu__title {
  &:hover {
    background-color: $menuHover !important;
  }
}

.el-sub-menu {
  .el-menu-item,
  .el-sub-menu .el-sub-menu__title {
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
  .el-sub-menu.is-active > .el-sub-menu__title {
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

.el-sub-menu__title i {
  color: $arrowColor;
}

// 水平菜单
.el-menu--horizontal {
  .el-menu-item,
  .el-sub-menu .el-sub-menu__title {
    height: $horizontalMenuHeight;
    line-height: $horizontalMenuHeight;
    border-bottom: none;
  }
  .el-menu-item.is-active,
  .el-sub-menu.is-active .el-sub-menu__title {
    border: none;
  }
}
</style>
<style lang="scss" scoped>
.scroll {
  height: auto;
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  .menu {
    border: none;
  }
}
</style>
