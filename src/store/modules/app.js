import { getItem, setItem, removeItem } from "@/utils/storage"; //getItem和setItem是封装的操作localStorage的方法
export const TOKEN = "VEA-TOKEN";
const COLLAPSE = "VEA-COLLAPSE";

export default {
  namespaced: true,
  state: {
    title: 'Vue3 Element Admin',
    authorization: getItem(TOKEN),
    sidebar: {
      collapse: getItem(COLLAPSE)
    },
    device: 'desktop',
  },
  mutations: {
    setToken (state, data) {
      state.authorization = data;
      // 保存到localStorage
      setItem(TOKEN, data);
    },
    clearToken (state) {
      state.authorization = '';

      removeItem(TOKEN);
    },
    setCollapse (state, data) {
      state.sidebar.collapse = data;
      // 保存到localStorage
      setItem(COLLAPSE, data);
    },
    clearCollapse (state) {
      state.sidebar.collapse = '';

      removeItem(COLLAPSE);
    },
    setDevice (state, device) {
      state.device = device
    },
  },
  actions: {},
};