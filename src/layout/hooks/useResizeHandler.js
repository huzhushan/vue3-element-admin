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
 * @LastEditTime: 2021-04-29 11:31:50
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

import { onBeforeMount, onBeforeUnmount /*watch*/ } from 'vue'
// import { useRouter } from 'vue-router';
import { useStore } from 'vuex'

const WIDTH = 768
export const useResizeHandler = () => {
  const store = useStore()
  // const router = useRouter();
  // const route = router.currentRoute;

  const isMobile = () => {
    return window.innerWidth < WIDTH
  }

  const resizeHandler = () => {
    if (isMobile()) {
      store.commit('app/setDevice', 'mobile')
      store.commit('app/setCollapse', 1)
    } else {
      store.commit('app/setDevice', 'desktop')
      store.commit('app/setCollapse', 0)
    }
  }

  onBeforeMount(() => {
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler)
  })

  // // 监听路由的时候不能使用useRoute获取路由，否则会有警告
  // watch(route, () => {
  //   if (store.state.app.device === 'mobile' && !store.state.app.sidebar.collapse) {
  //     store.commit('app/setCollapse', 1)
  //   }
  // })
}
