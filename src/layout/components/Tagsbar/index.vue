<!--
 *           佛曰:  
 *                   写字楼里写字间，写字间里程序员；  
 *                   程序人员写程序，又拿程序换酒钱。  
 *                   酒醒只在网上坐，酒醉还来网下眠；  
 *                   酒醉酒醒日复日，网上网下年复年。  
 *                   但愿老死电脑间，不愿鞠躬老板前；  
 *                   奔驰宝马贵者趣，公交自行程序员。  
 *                   别人笑我忒疯癫，我笑自己命太贱；  
 *                   不见满街漂亮妹，哪个归得程序员？
 * 
 * @Descripttion: 
 * @version: 
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-24 20:38:36
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 -->

<template>
  <div class="tags-container" :class="{ hide: !isTagsbarShow }">
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
          <span class="title">{{ $t(tag.title) }}</span>

          <el-icon
            v-if="!isAffix(tag)"
            class="el-icon-close"
            @click.prevent.stop="closeTag(tag)"
          >
            <Close />
          </el-icon>
        </div>
      </router-link>
    </el-scrollbar>
  </div>
  <ul
    v-show="visible"
    :style="{ left: left + 'px', top: top + 'px' }"
    class="contextmenu"
  >
    <li @click="refreshSelectedTag(selectedTag)">{{ $t('tags.refresh') }}</li>
    <li v-if="!isAffix(selectedTag)" @click="closeTag(selectedTag)">
      {{ $t('tags.close') }}
    </li>
    <li @click="closeOtherTags">{{ $t('tags.other') }}</li>
    <li @click="closeLeftTags">{{ $t('tags.left') }}</li>
    <li @click="closeRightTags">{{ $t('tags.right') }}</li>
    <li @click="closeAllTags">{{ $t('tags.all') }}</li>
  </ul>
</template>

<script>
import { defineComponent, computed, getCurrentInstance } from 'vue'
import { useTags } from './hooks/useTags'
import { useContextMenu } from './hooks/useContextMenu'
import { useLayoutsettings } from '@/pinia/modules/layoutSettings'

export default defineComponent({
  name: 'Tagsbar',
  mounted() {
    const instance = getCurrentInstance()
    instance.appContext.config.globalProperties.$tagsbar = this
  },
  setup() {
    const defaultSettings = useLayoutsettings()
    const isTagsbarShow = computed(() => defaultSettings.tagsbar.isShow)

    const tags = useTags()
    const contextMenu = useContextMenu(tags.tagList)

    const onScroll = e => {
      tags.handleScroll(e)
      contextMenu.closeMenu.value()
    }

    return {
      isTagsbarShow,
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
  border-bottom: 1px solid #e0e4ef;
  &.hide {
    display: none;
  }
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
      color: #303133;
      background: #f5f5f5;
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
      margin-left: 8px;
      width: 16px;
      height: 16px;
      vertical-align: -2px;
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
