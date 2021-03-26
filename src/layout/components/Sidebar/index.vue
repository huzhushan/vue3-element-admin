<template>
  <div
    class="left"
    :class="{collapse:collapse}"
  >
    <logo />
    <menus :collapse="collapse" />
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import Logo from "./Logo.vue";
import Menus from "./Menus.vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Logo,
    Menus,
  },
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
  display: flex;
  flex-direction: column;
  &.collapse {
    width: 64px;
    ::v-deep(.brand .title) {
      display: none;
    }
  }
}
</style>