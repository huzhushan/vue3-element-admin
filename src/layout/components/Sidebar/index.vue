<template>
  <div
    class="left"
    :class="{collapse:collapse}"
  >
    <div class="brand">
      <img
        class="logo"
        src="~@/assets/logo.png"
      >
      <div class="title">ERP管理系统</div>
    </div>
    <el-menu
      class="menu"
      :collapse="collapse"
      :uniqueOpened="true"
      default-active="2"
      background-color="#2d3a4b"
      text-color="#fff"
      active-text-color="#fff"
    >
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item
        index="3"
        disabled
      >
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
      <el-submenu index="5">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="5-1">选项1</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="5-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    const collapse = computed(() => !!store.state.app.sidebar.collapse);

    return {
      collapse,
    };
  },
});
</script>

<style lang="less" scoped>
.left {
  width: 210px;
  background: #2d3a4b;
  transition: all 0.3s;
  overflow: hidden;
  &.collapse {
    width: 64px;
    .brand .title {
      display: none;
    }
  }
  .brand {
    height: 48px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
      max-width: 32px;
      max-height: 32px;
    }
    .title {
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      white-space: nowrap;
      margin-left: 8px;
      transition: all 0.5s;
    }
  }
  .menu {
    border: none;
  }
  ::v-deep(.el-menu-item.is-active) {
    background: #0174df !important;
  }
}
</style>