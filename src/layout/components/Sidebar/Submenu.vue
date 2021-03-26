<template>
  <el-submenu
    :index="menu.url"
    v-for="(menu, index) in menus"
    :key="index"
  >
    <template #title>
      <i class="el-icon-location"></i>
      <span>{{menu.title}}</span>
    </template>
    <el-menu-item
      :index="submenu.url"
      v-for="(submenu, subindex) in menu.children"
      :key="subindex"
    >{{submenu.title}}</el-menu-item>
  </el-submenu>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    menus: {
      type: Array,
      required: true,
    },
  },
  setup() {},
});
</script>
