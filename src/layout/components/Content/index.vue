<template>
  <div class="main">
    <router-view v-slot="{ Component }">

      <keep-alive :include="cacheList">
        <component
          :is="Component"
          :key="key"
        />
      </keep-alive>

    </router-view>
  </div>
</template>
<script>
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();
    const cacheList = computed(() => store.state.tags.cacheList);
    const key = computed(() => route.path);

    return {
      cacheList,
      key,
    };
  },
});
</script>

<style lang="scss" scoped>
.main {
  flex: 1;
  background: #f0f2f5;
  padding: 16px;
  overflow: auto;
}
</style>