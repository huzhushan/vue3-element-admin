<template>
  <div class="header">
    <div class="navigation">
      <hamburger />
      <breadcrumbs />
    </div>
    <div class="action">
      <userinfo />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Hamburger from "./Hamburger.vue";
import Breadcrumbs from "./Breadcrumbs.vue";
import Userinfo from "./Userinfo.vue";
export default defineComponent({
  components: {
    Hamburger,
    Breadcrumbs,
    Userinfo,
  },
  setup() {},
});
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
  }
}
</style>