<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-21 09:36:08
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
-->
<template>
  <i
    class="fold-btn el-icon-s-fold"
    :class="{ collapse: collapse }"
    @click="handleToggleMenu"
  ></i>
</template>
<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const collapse = computed(() => !!store.state.app.sidebar.collapse)
    const handleToggleMenu = () => {
      store.commit('app/setCollapse', +!collapse.value)
    }
    return {
      collapse,
      handleToggleMenu,
    }
  },
})
</script>
<style lang="scss" scoped>
.fold-btn {
  line-height: 48px;
  padding: 0 10px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
  &.collapse {
    transform: scale(-1, 1);
  }
}
</style>
