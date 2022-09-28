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
 * @LastEditTime: 2022-08-13 14:50:23
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

import { ref } from 'vue'

export const useScrollbar = tagsItem => {
  const scrollContainer = ref(null)
  const scrollLeft = ref(0)

  const doScroll = val => {
    scrollLeft.value = val
    scrollContainer.value.setScrollLeft(scrollLeft.value)
  }

  const handleScroll = e => {
    const $wrap = scrollContainer.value.wrap$
    if ($wrap.offsetWidth + scrollLeft.value > $wrap.children[0].scrollWidth) {
      doScroll($wrap.children[0].scrollWidth - $wrap.offsetWidth)
      return
    } else if (scrollLeft.value < 0) {
      doScroll(0)
      return
    }
    const eventDelta = e.wheelDelta || -e.deltaY
    doScroll(scrollLeft.value - eventDelta / 4)
  }

  const moveToTarget = currentTag => {
    const $wrap = scrollContainer.value.wrap$
    const tagList = tagsItem.value

    let firstTag = null
    let lastTag = null

    if (tagList.length > 0) {
      firstTag = tagList[0]
      lastTag = tagList[tagList.length - 1]
    }
    if (firstTag === currentTag) {
      doScroll(0)
    } else if (lastTag === currentTag) {
      doScroll($wrap.children[0].scrollWidth - $wrap.offsetWidth)
    } else {
      const el = currentTag.$el.nextElementSibling

      el.offsetLeft + el.offsetWidth > $wrap.offsetWidth
        ? doScroll(el.offsetLeft - el.offsetWidth)
        : doScroll(0)
    }
  }

  return {
    scrollContainer,
    handleScroll,
    moveToTarget,
  }
}
