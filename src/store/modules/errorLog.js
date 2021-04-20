const state = {
  logs: [],
}

const mutations = {
  ADD_ERROR_LOG: (state, log) => {
    state.logs.push(log)
  },
  CLEAR_ERROR_LOG: state => {
    state.logs.splice(0)
  },
}

const actions = {
  addErrorLog({ commit }, log) {
    // 可以根据需要将错误上报给服务器
    // ....code.......

    // 触发mutations
    commit('ADD_ERROR_LOG', log)
  },
  clearErrorLog({ commit }) {
    commit('CLEAR_ERROR_LOG')
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
