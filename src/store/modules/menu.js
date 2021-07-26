/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-07-26 18:22:01
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
import { fixedRoutes, asyncRoutes } from '@/router'
import { GetMenus } from '@/api/menu'
import router from '@/router'

// const hasPermission = (role, route) => {
//   if (!!route.meta && !!route.meta.roles && !route.meta.roles.includes(role)) {
//     return false
//   }
//   return true
// }

const generateUrl = (path, parentPath) => {
  return path.startsWith('/')
    ? path
    : path
    ? `${parentPath}/${path}`
    : parentPath
}

const getFilterRoutes = (targetRoutes, ajaxRoutes) => {
  const filterRoutes = []

  ajaxRoutes.forEach(item => {
    const target = targetRoutes.find(target => target.name === item.name)

    if (target) {
      const { children: targetChildren, ...rest } = target
      const route = {
        ...rest,
      }

      if (item.children) {
        route.children = getFilterRoutes(targetChildren, item.children)
      }

      filterRoutes.push(route)
    }
  })

  return filterRoutes
}

const getFilterMenus = (arr, parentPath = '') => {
  const menus = []

  arr.forEach(item => {
    if (!item.hidden) {
      const menu = {
        url: generateUrl(item.path, parentPath),
        title: item.meta.title,
        icon: item.icon,
      }
      if (item.children) {
        if (item.children.filter(child => !child.hidden).length <= 1) {
          menu.url = generateUrl(item.children[0].path, menu.url)
        } else {
          menu.children = getFilterMenus(item.children, menu.url)
        }
      }
      menus.push(menu)
    }
  })

  return menus
}

export default {
  namespaced: true,
  state: {
    menus: [],
  },
  mutations: {
    SET_MENUS(state, data) {
      state.menus = data
    },
  },
  actions: {
    async generateMenus({ commit }, userinfo) {
      // // 方式一：只有固定菜单
      // const menus = getFilterMenus(fixedRoutes)
      // commit('SET_MENUS', menus)

      // 方式二：有动态菜单
      // 从后台获取菜单
      const { code, data } = await GetMenus({ role: userinfo.role })

      if (+code === 200) {
        // 过滤出需要添加的动态路由
        const filterRoutes = getFilterRoutes(asyncRoutes, data)
        filterRoutes.forEach(route => router.addRoute(route))

        // 生成菜单
        const menus = getFilterMenus([...fixedRoutes, ...filterRoutes])
        commit('SET_MENUS', menus)
      }
    },
  },
}
