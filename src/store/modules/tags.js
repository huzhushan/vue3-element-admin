import { getItem, setItem, removeItem } from "@/utils/storage"; //getItem和setItem是封装的操作localStorage的方法

const TAGLIST = 'VEA-TAGLIST'

const state = {
  tagList: getItem(TAGLIST) || [],
  cacheList: [],
  activePosition: 0
}

const mutations = {
  ADD_TAG_LIST: (state, { path, fullPath, name, meta }) => {
    if (state.tagList.some(v => v.path === path)) return false;

    state.tagList.splice(
      state.activePosition + 1,
      0,
      Object.assign({}, { path, fullPath, name, meta }, {
        title: meta.title || '未命名',
        fullPath: fullPath || path
      })
    )

    // 保存到localStorage
    setItem(TAGLIST, state.tagList);
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
    setItem(TAGLIST, state.tagList);
  },
  DEL_CACHE_LIST: (state, tag) => {
    state.cacheList = state.cacheList.filter(v => v !== tag.name)
  },

  DEL_OTHER_TAG_LIST: (state, tag) => {
    state.tagList = state.tagList.filter(v => !!v.meta.affix || v.path === tag.path)
    // 保存到localStorage
    setItem(TAGLIST, state.tagList);
  },
  DEL_OTHER_CACHE_LIST: (state, tag) => {
    state.cacheList = state.cacheList.filter(v => v === tag.name)
  },

  DEL_ALL_TAG_LIST: state => {
    state.tagList = state.tagList.filter(v => !!v.meta.affix)
    // 保存到localStorage
    removeItem(TAGLIST);
  },
  DEL_ALL_CACHE_LIST: state => {
    state.cacheList = []
  },

  UPDATE_TAG_LIST: (state, tag) => {
    const index = state.tagList.findIndex(v => v.path === tag.path);
    if (index > -1) {
      state.tagList[index] = Object.assign({}, state.tagList[index], tag)
      // 保存到localStorage
      setItem(TAGLIST, state.tagList);
    }
  },

  SAVE_ACTIVE_POSITION: (state, index) => {
    state.activePosition = index
  },
}

const actions = {
  saveActivePosition ({ commit }, index) {
    commit('SAVE_ACTIVE_POSITION', index)
  },
  addTag ({ dispatch }, tag) {
    dispatch('addTagList', tag)
    dispatch('addCacheList', tag)
  },
  addTagList ({ commit }, tag) {
    commit('ADD_TAG_LIST', tag)
  },
  addCacheList ({ commit }, tag) {
    commit('ADD_CACHE_LIST', tag)
  },

  delTag ({ dispatch }, tag) {
    dispatch('delTagList', tag)
    dispatch('delCacheList', tag)
  },
  delTagList ({ commit }, tag) {
    commit('DEL_TAG_LIST', tag)
  },
  delCacheList ({ commit }, tag) {
    commit('DEL_CACHE_LIST', tag)
  },

  delOtherTags ({ dispatch }, tag) {
    dispatch('delOtherTagList', tag)
    dispatch('delOtherCacheList', tag)
  },
  delOtherTagList ({ commit }, tag) {
    commit('DEL_OTHER_TAG_LIST', tag)
  },
  delOtherCacheList ({ commit }, tag) {
    commit('DEL_OTHER_CACHE_LIST', tag)
  },

  delAllTags ({ dispatch }) {
    dispatch('delAllTagList')
    dispatch('delAllCacheList')
  },
  delAllTagList ({ commit }) {
    commit('DEL_ALL_TAG_LIST')
  },
  delAllCacheList ({ commit }) {
    commit('DEL_ALL_CACHE_LIST')
  },

  updateTagList ({ commit }, tag) {
    commit('UPDATE_TAG_LIST', tag)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
