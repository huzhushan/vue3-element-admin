/*
 *
 *    ┏┓　　　┏┓
 *  ┏┛┻━━━┛┻┓
 *  ┃　　　　　　　┃
 *  ┃　　　━　　　┃
 *  ┃　＞　　　＜　┃
 *  ┃　　　　　　　┃
 *  ┃...　⌒　...　┃
 *  ┃　　　　　　　┃
 *  ┗━┓　　　┏━┛
 *      ┃　　　┃
 *      ┃　　　┃
 *      ┃　　　┃
 *      ┃　　　┃  神兽保佑
 *      ┃　　　┃  代码无bug
 *      ┃　　　┃
 *      ┃　　　┗━━━┓
 *      ┃　　　　　　　┣┓
 *      ┃　　　　　　　┏┛
 *      ┗┓┓┏━┳┓┏┛
 *        ┃┫┫　┃┫┫
 *        ┗┻┛　┗┻┛
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-29 10:52:41
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

import { onMounted, onBeforeUnmount, reactive, toRefs, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { isAffix } from './useTags'

export const useContextMenu = tagList => {
  const store = useStore()
  const router = useRouter()
  const route = useRoute()

  const state = reactive({
    visible: false,
    top: 0,
    left: 0,
    selectedTag: {},
    openMenu(tag, e) {
      state.visible = true
      state.left = e.clientX
      state.top = e.clientY
      state.selectedTag = tag
    },
    closeMenu() {
      state.visible = false
    },
    refreshSelectedTag(tag) {
      store.commit('tags/DEL_CACHE_LIST', tag)
      const { fullPath } = tag
      nextTick(() => {
        router.replace({
          path: '/redirect' + fullPath,
        })
      })
    },
    closeTag(tag) {
      if (isAffix(tag)) return

      const closedTagIndex = tagList.value.findIndex(
        item => item.fullPath === tag.fullPath
      )
      store.dispatch('tags/delTag', tag)
      if (isActive(tag)) {
        toLastTag(closedTagIndex - 1)
      }
    },
    closeOtherTags() {
      store.dispatch('tags/delOtherTags', state.selectedTag)
      router.push(state.selectedTag)
    },
    closeLeftTags() {
      state.closeSomeTags('left')
    },
    closeRightTags() {
      state.closeSomeTags('right')
    },
    closeSomeTags(direction) {
      const index = tagList.value.findIndex(
        item => item.fullPath === state.selectedTag.fullPath
      )

      if (
        (direction === 'left' && index <= 0) ||
        (direction === 'right' && index >= tagList.value.length - 1)
      ) {
        return
      }

      const needToClose =
        direction === 'left'
          ? tagList.value.slice(0, index)
          : tagList.value.slice(index + 1)
      store.dispatch('tags/delSomeTags', needToClose)
      router.push(state.selectedTag)
    },
    closeAllTags() {
      store.dispatch('tags/delAllTags')
      router.push('/')
    },
  })

  const isActive = tag => {
    return tag.fullPath === route.fullPath
  }

  const toLastTag = lastTagIndex => {
    const lastTag = tagList.value[lastTagIndex]
    if (lastTag) {
      router.push(lastTag.fullPath)
    } else {
      router.push('/')
    }
  }

  onMounted(() => {
    document.addEventListener('click', state.closeMenu)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', state.closeMenu)
  })

  return toRefs(state)
}
