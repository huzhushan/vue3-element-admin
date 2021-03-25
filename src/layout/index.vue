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
import { defineComponent, onBeforeMount } from "vue";
import { useStore } from "vuex";
import Sidebar from "./components/Sidebar/index.vue";
import Topbar from "./components/Topbar/index.vue";
import Tabsbar from "./components/Tabsbar/index.vue";
import { GetUserinfo } from "@/api/app";
export default defineComponent({
  components: {
    Sidebar,
    Topbar,
    Tabsbar,
  },
  setup() {
    const store = useStore();
    const getUserinfo = async () => {
      const { code, data } = await GetUserinfo();
      if (+code === 200) {
        store.commit("app/setUserinfo", data);
      }
    };
    onBeforeMount(() => {
      getUserinfo();
    });
  },
});
</script>

<style lang="less" scoped>
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