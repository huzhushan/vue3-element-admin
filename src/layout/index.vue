<template>
  <div class="wrapper">
    <sidebar />
    <div class="right">
      <div class="top">
        <topbar />
        <tagsbar />
      </div>
      <div class="main">
        <Content />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import Sidebar from './components/Sidebar/index.vue';
import Topbar from './components/Topbar/index.vue';
import Tagsbar from './components/Tagsbar/index.vue';
import Content from './components/Content/index.vue';
import { useResizeHandler } from './hooks/useResizeHandler';

export default defineComponent({
  name: 'layout',
  components: {
    Sidebar,
    Topbar,
    Tagsbar,
    Content,
  },
  setup() {
    useResizeHandler();
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 100%;

  .right {
    flex: 1;
    overflow: hidden;
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
