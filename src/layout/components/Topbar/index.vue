<template>
  <div class="header">
    <div class="navigation">
      <logo v-if="device === 'mobile'" class="mobile" />
      <hamburger />
      <breadcrumbs />
    </div>
    <div class="action">
      <userinfo />
    </div>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue'
import Logo from '@/layout/components/Sidebar/Logo.vue'
import Hamburger from './Hamburger.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import Userinfo from './Userinfo.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    Logo,
    Hamburger,
    Breadcrumbs,
    Userinfo,
  },
  setup() {
    const store = useStore()
    const device = computed(() => store.state.app.device)

    return {
      device,
    }
  },
})
</script>
<style lang="scss" scoped>
.header {
  height: 48px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
  .navigation {
    display: flex;
    align-items: center;
    overflow: hidden;
  }
}
.mobile {
  padding-right: 0;
  ::v-deep(.logo) {
    max-width: 24px;
    max-height: 24px;
  }
  ::v-deep(.title) {
    display: none;
  }
}
</style>
