/*
 * @Descripttion:
 * @version:
 * @Date: 2021-04-20 11:06:21
 * @LastEditors: huzhushan@126.com
 * @LastEditTime: 2022-09-27 16:49:31
 * @Author: huzhushan@126.com
 * @HomePage: https://huzhushan.gitee.io/vue3-element-admin
 * @Github: https://github.com/huzhushan/vue3-element-admin
 * @Donate: https://huzhushan.gitee.io/vue3-element-admin/donate/
 */
import { defineStore } from 'pinia'
import { getItem, setItem, removeItem } from '@/utils/storage' //getItem和setItem是封装的操作localStorage的方法
const TAGLIST = 'VEA-TAGLIST'

export const useTags = defineStore('tags', {
  state: () => ({
    tagList: getItem(TAGLIST) || [],
    cacheList: [],
    activePosition: -1,
  }),
  actions: {
    saveActivePosition(index) {
      this.activePosition = index
    },
    addTag({ path, fullPath, name, meta, params, query }) {
      if (this.tagList.some(v => v.path === path)) return false
      // 添加tagList
      const target = Object.assign(
        {},
        { path, fullPath, name, meta, params, query },
        {
          title: meta.title || '未命名',
          fullPath: fullPath || path,
        }
      )
      if (this.activePosition === -1) {
        if (name === 'home') {
          this.tagList.unshift(target)
        } else {
          this.tagList.push(target)
        }
      } else {
        this.tagList.splice(this.activePosition + 1, 0, target)
      }
      // 保存到localStorage
      setItem(TAGLIST, this.tagList)

      // 添加cacheList
      if (this.cacheList.includes(name)) return
      if (!meta.noCache) {
        this.cacheList.push(name)
      }
    },
    deTagList(tag) {
      // 删除tagList
      this.tagList = this.tagList.filter(v => v.path !== tag.path)
      // 保存到localStorage
      setItem(TAGLIST, this.tagList)
    },
    deCacheList(tag) {
      // 删除cacheList
      this.cacheList = this.cacheList.filter(v => v !== tag.name)
    },
    delTag(tag) {
      // 删除tagList
      this.deTagList(tag)

      // 删除cacheList
      this.deCacheList(tag)
    },
    delOtherTags(tag) {
      this.tagList = this.tagList.filter(
        v => !!v.meta.affix || v.path === tag.path
      )
      // 保存到localStorage
      setItem(TAGLIST, this.tagList)

      this.cacheList = this.cacheList.filter(v => v === tag.name)
    },
    delSomeTags(tags) {
      this.tagList = this.tagList.filter(
        v => !!v.meta.affix || tags.every(tag => tag.path !== v.path)
      )
      // 保存到localStorage
      setItem(TAGLIST, this.tagList)

      this.cacheList = this.cacheList.filter(v =>
        tags.every(tag => tag.name !== v)
      )
    },
    delAllTags() {
      this.tagList = this.tagList.filter(v => !!v.meta.affix)
      // 保存到localStorage
      removeItem(TAGLIST)
      this.cacheList = []
    },
    updateTagList(tag) {
      const index = this.tagList.findIndex(v => v.path === tag.path)
      if (index > -1) {
        this.tagList[index] = Object.assign({}, this.tagList[index], tag)
        // 保存到localStorage
        setItem(TAGLIST, this.tagList)
      }
    },
    clearAllTags() {
      this.cacheList = []
      this.tagList = []
      // 保存到localStorage
      removeItem(TAGLIST)
    },
  },
})
