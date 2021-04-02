<template>
  <div class="wrapper">
    <sidebar />
    <div class="right">
      <div class="top">
        <topbar />
        <tagsbar />
      </div>
      <content />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Sidebar from "./components/Sidebar/index.vue";
import Topbar from "./components/Topbar/index.vue";
import Tagsbar from "./components/Tagsbar/index.vue";
import Content from "./components/Content/index.vue";

export default defineComponent({
  components: {
    Sidebar,
    Topbar,
    Tagsbar,
    Content,
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
  }
}
</style>