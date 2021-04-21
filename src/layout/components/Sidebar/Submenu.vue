<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-21 09:35:44
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
-->
<template>
  <el-menu-item v-if="!menu.children" :index="menu.url">
    <item :icon="menu.icon" :title="menu.title" />
  </el-menu-item>
  <el-submenu v-else :index="menu.url">
    <template #title>
      <item :icon="menu.icon" :title="menu.title" />
    </template>
    <submenu
      v-for="submenu in menu.children"
      :key="submenu.url"
      :is-nest="true"
      :menu="submenu"
    />
  </el-submenu>
</template>
<script>
import { defineComponent } from 'vue'
import Item from './Item.vue'
export default defineComponent({
  name: 'Submenu',
  components: {
    Item,
  },
  props: {
    menu: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
