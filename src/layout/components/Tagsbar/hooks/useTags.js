/*
 *                   ___====-_  _-====___
 *             _--^^^#####//      \\#####^^^--_
 *          _-^##########// (    ) \\##########^-_
 *         -############//  |\^^/|  \\############-
 *       _/############//   (@::@)   \############\_
 *      /#############((     \\//     ))#############\
 *     -###############\\    (oo)    //###############-
 *    -#################\\  / VV \  //#################-
 *   -###################\\/      \//###################-
 *  _#/|##########/\######(   /\   )######/\##########|\#_
 *  |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
 *  `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
 *     `   `  `      `   / | |  | | \   '      '  '   '
 *                      (  | |  | |  )
 *                     __\ | |  | | /__
 *                    (vvv(VVV)(VVV)vvv)
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *                神兽保佑            永无BUG
 *
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-11-23 10:56:09
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

import { useScrollbar } from './useScrollbar'
import { watch, computed, ref, nextTick, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export const isAffix = tag => {
  return !!tag.meta && !!tag.meta.affix
}

export const useTags = () => {
  const store = useStore()
  const router = useRouter()
  const route = router.currentRoute
  const routes = computed(() => router.getRoutes())
  const tagList = computed(() => store.state.tags.tagList)

  const tagsItem = ref([])

  const setItemRef = (i, el) => {
    tagsItem.value[i] = el
  }

  const scrollbar = useScrollbar(tagsItem)

  watch(
    () => tagList.value.length,
    () => {
      tagsItem.value = []
    }
  )

  const filterAffixTags = routes => {
    return routes.filter(route => isAffix(route))
  }

  const initTags = () => {
    const affixTags = filterAffixTags(routes.value)

    for (const tag of affixTags) {
      if (tag.name) {
        store.dispatch('tags/addTag', tag)
      }
    }

    // 不在路由中的所有标签，需要删除
    const noUseTags = tagList.value.filter(tag =>
      routes.value.every(route => route.name !== tag.name)
    )
    noUseTags.forEach(tag => {
      store.dispatch('tags/delTag', tag)
    })
  }

  const addTag = () => {
    const tag = route.value
    if (!!tag.name && tag.matched[0].components.default.name === 'layout') {
      store.dispatch('tags/addTag', tag)
    }
  }

  const saveActivePosition = tag => {
    const index = tagList.value.findIndex(
      item => item.fullPath === tag.fullPath
    )

    store.dispatch('tags/saveActivePosition', Math.max(0, index))
  }

  const moveToCurrentTag = () => {
    nextTick(() => {
      for (const tag of tagsItem.value) {
        if (!!tag && tag.to.path === route.value.path) {
          scrollbar.moveToTarget(tag)

          if (tag.to.fullPath !== route.value.fullPath) {
            store.dispatch('tags/updateTagList', route.value)
          }
          break
        }
      }
    })
  }

  onBeforeMount(() => {
    initTags()
    addTag()
    moveToCurrentTag()
  })

  watch(route, (newRoute, oldRoute) => {
    saveActivePosition(oldRoute) // 保存标签的位置
    addTag()
    moveToCurrentTag()
  })

  return {
    tagList,
    setItemRef,
    isAffix,
    ...scrollbar,
  }
}
