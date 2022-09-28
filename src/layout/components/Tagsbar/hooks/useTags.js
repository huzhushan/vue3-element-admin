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
 * @LastEditTime: 2022-09-27 18:28:33
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
import { storeToRefs } from 'pinia'
import { useTags as useTagsbar } from '@/pinia/modules/tags'
import { useScrollbar } from './useScrollbar'
import { watch, computed, ref, nextTick, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

export const isAffix = tag => {
  return !!tag.meta && !!tag.meta.affix
}

export const useTags = () => {
  const tagStore = useTagsbar()
  const { tagList } = storeToRefs(tagStore)
  const { addTag, delTag, saveActivePosition, updateTagList } = tagStore
  const router = useRouter()
  const route = router.currentRoute
  const routes = computed(() => router.getRoutes())

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
        addTag(tag)
      }
    }
    // 不在路由中的所有标签，需要删除
    const noUseTags = tagList.value.filter(tag =>
      routes.value.every(route => route.name !== tag.name)
    )
    noUseTags.forEach(tag => {
      delTag(tag)
    })
  }

  const addTagList = () => {
    const tag = route.value
    if (!!tag.name && tag.matched[0].components.default.name === 'layout') {
      addTag(tag)
    }
  }

  const saveTagPosition = tag => {
    const index = tagList.value.findIndex(
      item => item.fullPath === tag.fullPath
    )

    saveActivePosition(Math.max(0, index))
  }

  const moveToCurrentTag = () => {
    nextTick(() => {
      for (const tag of tagsItem.value) {
        if (!!tag && tag.to.path === route.value.path) {
          scrollbar.moveToTarget(tag)

          if (tag.to.fullPath !== route.value.fullPath) {
            updateTagList(route.value)
          }
          break
        }
      }
    })
  }

  onBeforeMount(() => {
    initTags()
    addTagList()
    moveToCurrentTag()
  })

  watch(route, (newRoute, oldRoute) => {
    saveTagPosition(oldRoute) // 保存标签的位置
    addTagList()
    moveToCurrentTag()
  })

  return {
    tagList,
    setItemRef,
    isAffix,
    ...scrollbar,
  }
}
