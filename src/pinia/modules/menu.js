/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 16:41:46
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
import { defineStore } from 'pinia'
import { fixedRoutes, asyncRoutes } from '@/router'
import { GetMenus } from '@/api/menu'
import router from '@/router'
import { ref } from 'vue'

export const useMenus = defineStore('menu', () => {
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
          if (item.children.filter(child => !child.hidden).length <= 0) {
            delete menu.children
          } else {
            menu.children = getFilterMenus(item.children, menu.url)
          }
        }
        menus.push(menu)
      }
    })

    return menus
  }

  // 扁平化树形数据
  const flattenTree = tree => {
    let result = []
    tree.forEach(node => {
      result.push(node) // 将当前节点添加到结果数组中
      if (node.children && node.children.length) {
        // 如果有子节点，将子节点添加到结果数组中
        result = result.concat(flattenTree(node.children))
        delete node.children
      }
    })
    return result
  }

  const optimizeRoutes = (arr, parentPath = '', parentName = '') => {
    return arr.map(obj => {
      const item = {
        ...obj,
      }
      item.path = item.path.startsWith('/')
        ? item.path
        : parentPath
        ? `${parentPath}/${item.path}`
        : item.path
      if (parentName) {
        item.meta.parent = parentName
      }
      if (item.children) {
        item.children = optimizeRoutes(item.children, item.path, item.name)
      }
      return item
    })
  }

  const formatRoutes = routes => {
    return routes.map(route => ({
      ...route,
      children: flattenTree(optimizeRoutes(route.children || [])),
    }))
  }

  const menus = ref([])
  const setMenus = data => {
    menus.value = data
  }
  const generateMenus = async () => {
    // // 方式一：只有固定菜单
    // const menus = getFilterMenus(fixedRoutes)
    // commit('SET_MENUS', menus)

    // 方式二：有动态菜单
    // 从后台获取菜单
    const { code, data } = await GetMenus()

    if (+code === 200) {
      // 添加路由之前先删除所有动态路由
      asyncRoutes.forEach(item => {
        router.removeRoute(item.name)
      })
      // 过滤出需要添加的动态路由
      const filterRoutes = getFilterRoutes(asyncRoutes, data)

      // 生成菜单
      const menus = getFilterMenus([...fixedRoutes, ...filterRoutes])
      setMenus(menus)

      // 添加动态路由，由于只做了二级路由，所以需要将三级之后的children提到二级
      const arr = formatRoutes(filterRoutes)
      arr.forEach(route => router.addRoute(route))
    }
  }
  return {
    menus,
    setMenus,
    generateMenus,
  }
})
