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
 * @LastEditTime: 2021-04-21 12:49:02
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

import router from '@/router'
import store from '@/store'
import { TOKEN } from '@/store/modules/app' // TOKEN变量名

const getPageTitle = title => {
  const appTitle = store.state.app.title
  if (title) {
    return `${title} - ${appTitle}`
  }
  return appTitle
}

// 白名单，里面是路由对象的name
const WhiteList = ['login', 'forbidden', 'server-error', 'not-found']

// vue-router4的路由守卫不再是通过next放行，而是通过return返回true或false或者一个路由地址
router.beforeEach(async to => {
  document.title = getPageTitle(!!to.meta && to.meta.title)

  if (WhiteList.includes(to.name)) {
    return true
  }
  if (!window.localStorage[TOKEN]) {
    return {
      name: 'login',
      query: {
        redirect: to.path, // redirect是指登录之后可以跳回到redirect指定的页面
      },
      replace: true,
    }
  } else {
    let userinfo = store.state.account.userinfo
    if (!userinfo) {
      try {
        // 获取用户信息
        userinfo = await store.dispatch('account/getUserinfo')
      } catch (err) {
        return false
      }
    }
    // 如果没有权限，跳转到403页面
    if (
      !!to.meta &&
      !!to.meta.roles &&
      !to.meta.roles.includes(userinfo.role)
    ) {
      return { path: '/403', replace: true }
    }
  }
})
