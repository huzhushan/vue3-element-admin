import { getItem, setItem, removeItem } from "@/utils/storage"; //getItem和setItem是封装的操作localStorage的方法
export const TOKEN = "TOKEN";

export default {
  namespaced: true,
  state: {
    title: 'Vue3 Element Admin',
    authorization: getItem(TOKEN),
    sidebar: {
      collapse: getItem('collapse')
    }
  },
  mutations: {
    setToken (state, data) {
      state.authorization = data;
      // 保存到localStorage
      setItem(TOKEN, data);
    },
    clearToken (state) {
      state.authorization = '';
      // 保存到localStorage
      removeItem(TOKEN);
    },
    setCollapse (state, data) {
      state.sidebar.collapse = data;
      // 保存到localStorage
      setItem('collapse', data);
    },
    clearCollapse (state) {
      state.sidebar.collapse = '';
      // 保存到localStorage
      removeItem('collapse');
    }
  },
  actions: {},
};