<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2021-04-21 09:18:32
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-21 09:31:36
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
-->
<template>
  <div class="header">
    <div class="navigation">
      <logo v-if="device === 'mobile'" class="mobile" />
      <hamburger />
      <breadcrumbs />
    </div>
    <div class="action">
      <error-log />
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
import ErrorLog from '@/components/ErrorLog/index.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    Logo,
    Hamburger,
    Breadcrumbs,
    Userinfo,
    ErrorLog,
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
  .action {
    display: flex;
    align-items: center;
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
