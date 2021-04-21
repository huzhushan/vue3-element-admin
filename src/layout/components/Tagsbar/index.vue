<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-21 09:35:58
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
-->
<template>
  <div class="tags-container">
    <el-scrollbar
      ref="scrollContainer"
      :vertical="false"
      class="scroll-container"
      @wheel.prevent="onScroll"
    >
      <router-link
        v-for="(tag, i) in tagList"
        :key="tag.fullPath"
        :to="tag"
        :ref="el => setItemRef(i, el)"
        custom
        v-slot="{ navigate, isExactActive }"
      >
        <div
          class="tags-item"
          :class="isExactActive ? 'active' : ''"
          @click="navigate"
          @click.middle="closeTag(tag)"
          @contextmenu.prevent="openMenu(tag, $event)"
        >
          <span class="title">{{ tag.title }}</span>
          <span
            v-if="!isAffix(tag)"
            class="el-icon-close"
            @click.prevent.stop="closeTag(tag)"
          />
        </div>
      </router-link>
    </el-scrollbar>
  </div>
  <ul
    v-show="visible"
    :style="{ left: left + 'px', top: top + 'px' }"
    class="contextmenu"
  >
    <li @click="refreshSelectedTag(selectedTag)">刷新</li>
    <li v-if="!isAffix(selectedTag)" @click="closeTag(selectedTag)">关闭</li>
    <li @click="closeOtherTags">关闭其他</li>
    <li @click="closeLeftTags">关闭左侧</li>
    <li @click="closeRightTags">关闭右侧</li>
    <li @click="closeAllTags">关闭全部</li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue'
import { useTags } from './hooks/useTags'
import { useContextMenu } from './hooks/useContextMenu'

export default defineComponent({
  name: 'Tagsbar',
  setup() {
    const tags = useTags()
    const contextMenu = useContextMenu(tags.tagList)

    const onScroll = e => {
      tags.handleScroll(e)
      contextMenu.closeMenu.value()
    }

    return {
      onScroll,
      ...tags,
      ...contextMenu,
    }
  },
})
</script>

<style lang="scss" scoped>
.tags-container {
  height: 32px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eaeaea;

  .scroll-container {
    white-space: nowrap;
    overflow: hidden;
    ::v-deep(.el-scrollbar__bar) {
      bottom: 0px;
    }
  }

  .tags-item {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    box-sizing: border-box;
    border-left: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    color: #5c5c5c;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: -1px;
    vertical-align: bottom;
    cursor: pointer;
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      color: $mainColor;
      border-bottom: 2px solid $mainColor;
    }
    .title {
      display: inline-block;
      vertical-align: top;
      max-width: 200px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .el-icon-close {
      color: #5c5c5c;
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
.contextmenu {
  margin: 0;
  background: #fff;
  z-index: 3000;
  position: fixed;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  li {
    margin: 0;
    padding: 8px 16px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>
