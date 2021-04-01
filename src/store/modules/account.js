import { GetUserinfo } from '@/api/login'

export default {
  namespaced: true,
  state: {
    userinfo: null
  },
  mutations: {
    setUserinfo (state, data) {
      state.userinfo = data;
    },
    clearUserinfo (state) {
      state.userinfo = null;
    }
  },
  actions: {
    async getUserinfo ({ commit }) {
      const { code, data } = await GetUserinfo();
      if (+code === 200) {
        commit("setUserinfo", data);
        return Promise.resolve(data)
      }
    }
  },
};