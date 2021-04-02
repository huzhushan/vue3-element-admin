<template>
  <div
    id="tags-view-container"
    class="tags-view-container"
  >
    <scroll-bar
      ref="scrollBar"
      class="tags-view-wrapper"
      @scroll="handleScroll"
    >
      <router-link
        v-for="tag in tagList"
        ref="tags"
        :key="tag.path"
        :class="isActive(tag)?'active':''"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        tag="span"
        class="tags-view-item"
        @click.middle="!isAffix(tag)?closeSelectedTag(tag):''"
        @contextmenu.prevent="openMenu(tag,$event)"
      >
        {{ tag.title }}
        <span
          v-if="!isAffix(tag)"
          class="el-icon-refresh"
          @click.prevent.stop="refreshSelectedTag(tag)"
        />
        <span
          v-if="!isAffix(tag)"
          class="el-icon-close"
          @click.prevent.stop="closeSelectedTag(tag)"
        />
      </router-link>
    </scroll-bar>
    <ul
      v-show="visible"
      :style="{left:left+'px',top:top+'px'}"
      class="contextmenu"
    >
      <li @click="refreshSelectedTag(selectedTag)">刷新</li>
      <li
        v-if="!isAffix(selectedTag)"
        @click="closeSelectedTag(selectedTag)"
      >关闭</li>
      <li @click="closeOthersTags">关闭其他</li>
      <li @click="closeAllTags(selectedTag)">关闭全部</li>
    </ul>
  </div>
</template>

<script>
import ScrollBar from "./ScrollBar.vue";
import path from "path";
import {
  computed,
  defineComponent,
  reactive,
  watch,
  toRefs,
  onMounted,
  onBeforeUnmount,
  ref,
  nextTick,
} from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Tagsbar",
  components: { ScrollBar },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = router.currentRoute;

    const tags = ref(null);
    const scrollBar = ref(null);

    const tagList = computed(() => store.state.tags.tagList);
    const routes = computed(() => router.getRoutes());

    const state = reactive({
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {},
      affixTags: [],
      isReload: false,
      isActive(tag) {
        return tag.path === route.value.path;
      },
      isAffix(tag) {
        return !!tag.meta && !!tag.meta.affix;
      },
      filterAffixTags(routes) {
        return routes.filter((route) => !!route.meta && !!route.meta.affix);
      },
      initTags() {
        const affixTags = (state.affixTags = state.filterAffixTags(
          routes.value
        ));
        for (const tag of affixTags) {
          // Must have tag name
          if (!!tag.name) {
            store.dispatch("tags/addTagList", tag);
          }
        }
      },
      closeTag(tag) {
        store.dispatch("tags/delTag", tag);
      },
      addTags() {
        if (route.value.name) {
          store.dispatch("tags/addTag", route.value);
        }
        return false;
      },
      saveActivePosition(oldRoute) {
        const index = tagList.value.findIndex(
          (item) => item.fullPath === oldRoute.fullPath
        );

        store.dispatch("tags/saveActivePosition", Math.max(0, index));
      },
      moveToCurrentTag(callback) {
        nextTick(() => {
          for (const tag of tagList.value) {
            if (tag.path === route.value.path) {
              // scrollBar.value.moveToTarget(tag);

              if (tag.fullPath !== route.value.fullPath) {
                store.dispatch("tags/updateTagList", route.value);
              }
              callback && callback();
              break;
            }
          }
        });
      },
      reload() {
        // this.refreshSelectedTag(this.$route)
        state.isReload = true;
      },
      refreshSelectedTag(tag) {
        store.dispatch("tags/delCacheList", tag).then(() => {
          const { fullPath } = tag;
          nextTick(() => {
            router.replace({
              path: "/redirect" + fullPath,
            });
          });
        });
      },
      closeSelectedTag(tag) {
        const closedTagIndex = tagList.value.findIndex(
          (item) => item.fullPath === tag.fullPath
        );
        store.dispatch("tags/delTag", tag).then(({ tagList }) => {
          if (state.isActive(tag)) {
            state.toLastView(tagList, tag, closedTagIndex - 1);
          }
        });
      },
      closeOthersTags() {
        router.push(state.selectedTag);
        store.dispatch("tags/delOtherTags", state.selectedTag).then(() => {
          state.moveToCurrentTag();
        });
      },
      closeAllTags(view) {
        const closedTagIndex = tagList.value.findIndex(
          (item) => item.fullPath === view.fullPath
        );
        store.dispatch("tags/delAllTags").then(({ tagList }) => {
          if (state.affixTags.some((tag) => tag.path === view.path)) {
            return;
          }
          state.toLastView(tagList, view, closedTagIndex - 1);
        });
      },
      toLastView(tagList, view, lastTagIndex) {
        const lastTag = tagList[lastTagIndex];
        if (!!lastTag) {
          router.push(lastTag.fullPath);
        } else {
          router.push("/");
        }
      },
      openMenu(tag, e) {
        state.left = e.clientX;
        state.top = e.clientY;
        state.visible = true;
        state.selectedTag = tag;
      },
      closeMenu() {
        state.visible = false;
      },
      handleScroll() {
        state.closeMenu();
      },
    });

    watch(route, (newRoute, oldRoute) => {
      console.log("监听路由", newRoute, oldRoute);
      state.saveActivePosition(oldRoute); // 保存上一个tag页签的位置
      state.addTags();
      state.moveToCurrentTag(() => {
        if (state.isReload) {
          state.isReload = false;
          state.refreshSelectedTag(this.$route);
        }
      });
    });

    onMounted(() => {
      state.initTags();
      state.addTags();
      document.addEventListener("click", state.closeMenu);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", state.closeMenu);
    });

    return {
      tagList,
      routes,
      tags,
      scrollBar,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      line-height: 31px;
      border-left: 1px solid #e6e6e6;
      border-right: 1px solid #e6e6e6;
      color: #5c5c5c;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: -1px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color: #f6f7f6;
        color: #333;
        border-color: #f6f7f6;
        border-top: 2px solid #333;
        border-left: 1px solid #e6e6e6;
        // &::before {
        //   content: '';
        //   width: 8px;
        //   height: 8px;
        //   position: relative;
        // }
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>

<style lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close,
    .el-icon-refresh {
      margin-left: 2px;
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(0.8);
        display: inline-block;
        vertical-align: -2px;
      }
      &:hover {
        background-color: #333;
        color: #fff;
      }
    }
  }
}
</style>
