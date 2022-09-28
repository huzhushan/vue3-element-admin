<!--
 *           佛曰:  
 *                   写字楼里写字间，写字间里程序员；  
 *                   程序人员写程序，又拿程序换酒钱。  
 *                   酒醒只在网上坐，酒醉还来网下眠；  
 *                   酒醉酒醒日复日，网上网下年复年。  
 *                   但愿老死电脑间，不愿鞠躬老板前；  
 *                   奔驰宝马贵者趣，公交自行程序员。  
 *                   别人笑我忒疯癫，我笑自己命太贱；  
 *                   不见满街漂亮妹，哪个归得程序员？
 * 
 * @Descripttion: 
 * @version: 
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-24 16:44:28
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 -->

<template>
  <el-menu-item v-if="!menu.children" :index="menu.url">
    <item :icon="menu.icon" :title="menu.title" />
  </el-menu-item>
  <el-sub-menu v-else :index="menu.url">
    <template #title>
      <item :icon="menu.icon" :title="menu.title" />
    </template>
    <submenu
      v-for="submenu in menu.children"
      :key="submenu.url"
      :is-nest="true"
      :menu="submenu"
    />
  </el-sub-menu>
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
