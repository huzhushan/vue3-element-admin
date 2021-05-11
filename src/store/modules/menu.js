/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-04-21 09:34:17
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
import { allMenus } from '@/router'
// import { GetMenus } from '@/api/menu';

const hasPermission = (role, route) => {
  if (!!route.meta && !!route.meta.roles && !route.meta.roles.includes(role)) {
    return false
  }
  return true
}

const generateUrl = (path, parentPath) => {
  return path.startsWith('/')
    ? path
    : path
    ? `${parentPath}/${path}`
    : parentPath
}

const getFilterMenus = (arr, role, parentPath = '') => {
  const menus = []

  arr.forEach(item => {
    if (hasPermission(role, item) && !item.hidden) {
      const menu = {
        url: generateUrl(item.path, parentPath),
        title: item.meta.title,
        icon: item.icon,
      }
      if (item.children) {
        if (item.children.filter(child => !child.hidden).length <= 1) {
          menu.url = generateUrl(item.children[0].path, menu.url)
        } else {
          menu.children = getFilterMenus(item.children, role, menu.url)
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
    async generateMenus({ commit }, role) {
      // 方式一：根据角色生成菜单
      const menus = getFilterMenus(allMenus, role)
      commit('SET_MENUS', menus)

      // // 方式二：从后台获取菜单
      // const { code, data } = await GetMenus();
      // if (+code === 200) {
      //   commit('SET_MENUS', data)
      // }
    },
  },
}
