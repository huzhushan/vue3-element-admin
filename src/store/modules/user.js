import { getItem, setItem, removeItem } from "@/utils/storage"; //getItem和setItem是封装的操作localStorage的方法
export const TOKEN = "TOKEN";

export default {
  namespaced: true,
  state: {
    authorization: getItem(TOKEN),
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
  },
  actions: {},
};