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
import {
  defineComponent,
  ref,
  onBeforeMount,
  getCurrentInstance,
  watch,
} from "vue";

export default defineComponent({
  setup() {
    const { ctx } = getCurrentInstance();
    const route = ctx.$router.currentRoute; // 这里不使用useRoute获取当前路由，否则下面watch监听路由的时候会有警告
    const breadcrumbs = ref([]);

    const getBreadcrumbs = (route) => {
      const home = [{ path: "/", meta: { title: "首页" } }];
      if (route.name === "home") {
        return home;
      } else {
        const matched = route.matched.filter(
          (item) => !!item.meta && !!item.meta.title
        );

        return [...home, ...matched];
      }
    };

    onBeforeMount(() => {
      breadcrumbs.value = getBreadcrumbs(route.value);
    });

    watch(route, (newRoute) => {
      breadcrumbs.value = getBreadcrumbs(newRoute);
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