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
 * @LastEditTime: 2021-04-21 12:47:07
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

import { ref } from 'vue'

export const useScrollbar = tagsItem => {
  const scrollContainer = ref(null)

  const handleScroll = e => {
    const eventDelta = e.wheelDelta || -e.deltaY
    scrollContainer.value.wrap.scrollLeft -= eventDelta / 4
  }

  const moveToTarget = currentTag => {
    const containerWidth = scrollContainer.value.scrollbar.offsetWidth
    const scrollWrapper = scrollContainer.value.wrap
    const tagList = tagsItem.value

    let firstTag = null
    let lastTag = null

    if (tagList.length > 0) {
      firstTag = tagList[0]
      lastTag = tagList[tagList.length - 1]
    }
    if (firstTag === currentTag) {
      scrollWrapper.scrollLeft = 0
    } else if (lastTag === currentTag) {
      scrollWrapper.scrollLeft = scrollWrapper.scrollWidth - containerWidth
    } else {
      const el = currentTag.$el.nextElementSibling
      scrollWrapper.scrollLeft =
        el.offsetLeft + el.offsetWidth > containerWidth
          ? el.offsetLeft - el.offsetWidth
          : 0
    }
  }

  return {
    scrollContainer,
    handleScroll,
    moveToTarget,
  }
}
