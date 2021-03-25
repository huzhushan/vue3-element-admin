<template>
  <el-breadcrumb
    separator="/"
    class="breadcrumb"
  >
    <el-breadcrumb-item
      v-for="(item, index) in breadcrumbs"
      :key="item.path"
      :class="{no_link: index === breadcrumbs.length - 1}"
      :to="index < breadcrumbs.length - 1 ? item.path : ''"
    >
      {{item.meta.title}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
import { defineComponent, ref, onBeforeMount } from "vue";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const routes = router.getRoutes();
    const breadcrumbs = ref([]);

    const getBreadcrumbs = (route) => {
      const res = [{ path: "/", meta: { title: "首页" } }];
      const { parentBreadcrumb } = route.meta;
      if (!!parentBreadcrumb) {
        const parents = routes.filter((item) =>
          parentBreadcrumb.includes(item.name)
        );
        res.push(...parents);
      }
      if (route.name !== "home") res.push(route);
      breadcrumbs.value = res;
    };

    onBeforeMount(() => {
      getBreadcrumbs(route);
    });

    onBeforeRouteUpdate((to) => {
      getBreadcrumbs(to);
    });

    return {
      breadcrumbs,
    };
  },
});
</script>

<style lang="less" scoped>
.breadcrumb {
  margin-left: 10px;
  ::v-deep(a),
  ::v-deep(.is-link) {
    font-weight: normal;
  }

  .no_link {
    ::v-deep(.el-breadcrumb__inner) {
      color: #97a8be !important;
    }
  }
}
</style>