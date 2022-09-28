/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2021-09-18 15:36:04
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
import { getItem, setItem, removeItem } from '@/utils/storage' //getItem和setItem是封装的操作localStorage的方法

const TAGLIST = 'VEA-TAGLIST'

const state = {
  tagList: getItem(TAGLIST) || [],
  cacheList: [],
  activePosition: -1,
}

const mutations = {
  ADD_TAG_LIST: (state, { path, fullPath, name, meta, params, query }) => {
    if (state.tagList.some(v => v.path === path)) return false

    const target = Object.assign(
      {},
      { path, fullPath, name, meta, params, query },
      {
        title: meta.title || '未命名',
        fullPath: fullPath || path,
      }
    )
    if (state.activePosition === -1) {
      if (name === 'home') {
        state.tagList.unshift(target)
      } else {
        state.tagList.push(target)
      }
    } else {
      state.tagList.splice(state.activePosition + 1, 0, target)
    }

    // 保存到localStorage
    setItem(TAGLIST, state.tagList)
  },
  ADD_CACHE_LIST: (state, tag) => {
    if (state.cacheList.includes(tag.name)) return
    if (!tag.meta.noCache) {
      state.cacheList.push(tag.name)
    }
  },

  DEL_TAG_LIST: (state, tag) => {
    state.tagList = state.tagList.filter(v => v.path !== tag.path)
    // 保存到localStorage
    setItem(TAGLIST, state.tagList)
  },
  DEL_CACHE_LIST: (state, tag) => {
    state.cacheList = state.cacheList.filter(v => v !== tag.name)
  },

  DEL_OTHER_TAG_LIST: (state, tag) => {
    state.tagList = state.tagList.filter(
      v => !!v.meta.affix || v.path === tag.path
    )
    // 保存到localStorage
    setItem(TAGLIST, state.tagList)
  },
  DEL_OTHER_CACHE_LIST: (state, tag) => {
    state.cacheList = state.cacheList.filter(v => v === tag.name)
  },

  DEL_SOME_TAG_LIST: (state, tags) => {
    state.tagList = state.tagList.filter(
      v => !!v.meta.affix || tags.every(tag => tag.path !== v.path)
    )
    // 保存到localStorage
    setItem(TAGLIST, state.tagList)
  },

  DEL_SOME_CACHE_LIST: (state, tags) => {
    state.cacheList = state.cacheList.filter(v =>
      tags.every(tag => tag.name !== v)
    )
  },

  DEL_ALL_TAG_LIST: state => {
    state.tagList = state.tagList.filter(v => !!v.meta.affix)
    // 保存到localStorage
    removeItem(TAGLIST)
  },
  DEL_ALL_CACHE_LIST: state => {
    state.cacheList = []
  },
  CLEAR_ALL_TAGS: state => {
    state.cacheList = []
    state.tagList = []
    // 保存到localStorage
    removeItem(TAGLIST)
  },
  UPDATE_TAG_LIST: (state, tag) => {
    const index = state.tagList.findIndex(v => v.path === tag.path)
    if (index > -1) {
      state.tagList[index] = Object.assign({}, state.tagList[index], tag)
      // 保存到localStorage
      setItem(TAGLIST, state.tagList)
    }
  },

  SAVE_ACTIVE_POSITION: (state, index) => {
    state.activePosition = index
  },
}

const actions = {
  saveActivePosition({ commit }, index) {
    commit('SAVE_ACTIVE_POSITION', index)
  },
  addTag({ commit }, tag) {
    commit('ADD_TAG_LIST', tag)
    commit('ADD_CACHE_LIST', tag)
  },
  delTag({ commit }, tag) {
    commit('DEL_TAG_LIST', tag)
    commit('DEL_CACHE_LIST', tag)
  },
  delOtherTags({ commit }, tag) {
    commit('DEL_OTHER_TAG_LIST', tag)
    commit('DEL_OTHER_CACHE_LIST', tag)
  },
  delSomeTags({ commit }, tags) {
    commit('DEL_SOME_TAG_LIST', tags)
    commit('DEL_SOME_CACHE_LIST', tags)
  },
  delAllTags({ commit }) {
    commit('DEL_ALL_TAG_LIST')
    commit('DEL_ALL_CACHE_LIST')
  },
  updateTagList({ commit }, { path, fullPath, name, meta, params, query }) {
    commit('UPDATE_TAG_LIST', { path, fullPath, name, meta, params, query })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
