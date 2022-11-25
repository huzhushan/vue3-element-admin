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
 * @LastEditTime: 2022-09-27 16:35:06
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */

import { ElLoading } from 'element-plus'
import router from '@/router'
// import store from '@/store'
import { TOKEN } from '@/pinia/modules/app' // TOKEN变量名
import { nextTick } from 'vue'
import { useApp } from './pinia/modules/app'
import { useAccount } from './pinia/modules/account'
import { useMenus } from './pinia/modules/menu'

const getPageTitle = title => {
  const { title: appTitle } = useApp()
  if (title) {
    return `${title} - ${appTitle}`
  }
  return appTitle
}

// 白名单，里面是路由对象的name
const WhiteList = ['login', 'lock']

let loadingInstance = null

// vue-router4的路由守卫不再是通过next放行，而是通过return返回true或false或者一个路由地址
router.beforeEach(async to => {
  loadingInstance = ElLoading.service({
    lock: true,
    // text: '正在加载数据，请稍候~',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  if (WhiteList.includes(to.name)) {
    return true
  }
  if (!window.localStorage[TOKEN]) {
    return {
      name: 'login',
      query: {
        redirect: to.fullPath, // redirect是指登录之后可以跳回到redirect指定的页面
      },
      replace: true,
    }
  } else {
    const { userinfo, getUserinfo } = useAccount()
    // 获取用户角色信息，根据角色判断权限
    if (!userinfo) {
      try {
        // 获取用户信息
        await getUserinfo()
      } catch (err) {
        loadingInstance.close()
        return false
      }

      return to.fullPath
    }

    // 生成菜单（如果你的项目有动态菜单，在此处会添加动态路由）
    const { menus, generateMenus } = useMenus()
    if (menus.length <= 0) {
      try {
        await generateMenus()
        return to.fullPath // 添加动态路由后，必须加这一句触发重定向，否则会404
      } catch (err) {
        loadingInstance.close()
        return false
      }
    }

    // 判断是否处于锁屏状态
    if (to.name !== 'lock') {
      const { authorization } = useApp()
      if (!!authorization && !!authorization.screenCode) {
        return {
          name: 'lock',
          query: {
            redirect: to.path,
          },
          replace: true,
        }
      }
    }
  }
})

router.afterEach(to => {
  loadingInstance.close()
  if (router.currentRoute.value.name === to.name) {
    nextTick(() => {
      document.title = getPageTitle(!!to.meta && to.meta.truetitle)
    })
  }
})
