<template>
  <div class="wrapper">
    <sidebar />
    <div class="right">
      <div class="top">
        <topbar />
        <tabsbar />
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Sidebar from "./components/Sidebar/index.vue";
import Topbar from "./components/Topbar/index.vue";
import Tabsbar from "./components/Tabsbar/index.vue";

export default defineComponent({
  components: {
    Sidebar,
    Topbar,
    Tabsbar,
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 100%;

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    .top {
      background: #fff;
    }
    .main {
      flex: 1;
      background: #f0f2f5;
      padding: 16px;
      overflow: auto;
    }
  }
}
</style>