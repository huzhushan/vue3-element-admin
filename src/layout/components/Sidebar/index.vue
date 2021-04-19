<template>
  <div
    class="left"
    :class="{ collapse: collapse, mobile: device === 'mobile' }"
  >
    <logo />
    <menus :collapse="collapse" />
  </div>
  <div class="mask" @click="closeSidebar"></div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import Logo from './Logo.vue'
import Menus from './Menus.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    Logo,
    Menus,
  },
  setup() {
    const store = useStore()
    const collapse = computed(() => !!store.state.app.sidebar.collapse)
    const device = computed(() => store.state.app.device)

    const closeSidebar = () => {
      store.commit('app/setCollapse', 1)
    }

    return {
      collapse,
      device,
      closeSidebar,
    }
  },
})
</script>

<style lang="scss" scoped>
.left {
  width: 210px;
  background: $menuBg;
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
  &.mobile {
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    & + .mask {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      z-index: 9;
    }
    &.collapse {
      transform: translateX(-100%);
      & + .mask {
        display: none;
      }
    }
  }
}
</style>
