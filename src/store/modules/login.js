import types from '../types'

const state = {
  auth: false
}

const getters = {
  [types.GetAuth]: (state) => {
    return state.auth
  }
}
const actions = {
  [types.AuthLogin]({ commit }, loginModel) {
    if (loginModel.account === 'admin' && loginModel.password === '1234') {
      commit(types.AuthLogin, loginModel)
    } else {
      alert('帳號密碼不正確!')
      return
    }
  }
}
const mutations = {
  /**
   * 驗證當前User是否登入
   * state.auto:是否登入
   */
  [types.AuthLogin](state) {
    state.auth = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
