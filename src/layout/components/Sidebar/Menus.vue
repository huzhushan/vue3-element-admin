<template>
  <el-scrollbar class="scroll">
    <el-menu
      class="menu"
      :collapse="collapse"
      :uniqueOpened="true"
      :router="true"
      :default-active="activePath"
      background-color="#2d3a4b"
      text-color="#fff"
      active-text-color="#fff"
    >

      <submenu :menus="menus" />

    </el-menu>
  </el-scrollbar>
</template>
<script>
import { computed, defineComponent } from "vue";
import Submenu from "./Submenu.vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

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
    const store = useStore();
    const route = useRoute();
    const menus = computed(() => store.state.menu.menus);
    const activePath = computed(() => route.path);

    return {
      menus,
      activePath,
    };
  },
});
</script>
<style lang="less" scoped>
.scroll {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  .menu {
    border: none;
  }
}
::v-deep(.el-menu-item.is-active) {
  background: #0174df !important;
}
</style>