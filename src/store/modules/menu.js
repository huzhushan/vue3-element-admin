import { AllMenus } from '@/router'

const hasPermission = (role, route) => {
  if (!!route.roles && !route.roles.includes(role)) {
    return false
  }
  return true
}

const getRoleMenus = (arr, role, parentPath = '') => {
  const menus = [];
  const routes = [];

  arr.forEach(item => {
    if (hasPermission(role, item)) {
      const menu = {
        url: item.path.startsWith('/') ? item.path : (!!item.path ? `${parentPath}/${item.path}` : parentPath),
        title: item.meta.title,
        icon: item.icon,
      }
      const route = { ...item };
      if (item.children) {
        const { menus, routes } = getRoleMenus(item.children, role, menu.url)
        menu.children = menus
        route.children = routes
      }
      menus.push(menu)
      routes.push(route)
    }
  })

  return { menus, routes }
}

export default {
  namespaced: true,
  state: {
    menus: []
  },
  mutations: {
    SET_MENUS (state, data) {
      state.menus = data;
    }
  },
  actions: {
    generateMenus ({ commit }, role) {
      if (!role || role === 'admin') {
        commit('SET_MENUS', AllMenus)
      } else {
        const { menus, routes } = getRoleMenus(AllMenus, role)
        commit('SET_MENUS', menus)
        return Promise.resolve(routes)
      }
    }
  },
};