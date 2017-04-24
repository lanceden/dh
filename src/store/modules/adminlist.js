import types from '../types'

const state = {
  /**
   * 後臺管理員帳號列表
   */
  AdminList: [],
  Admin: {}
}

const getters = {
  [types.GetAdminList]: (state) => state.AdminList,
  [types.GetAdmin]: (state) => state.Admin
}

const actions = {
  [types.AdminList]({ commit }, http) {
    http
      .post('http://localhost:53912/Account/GetAdminList')
      .then(adminList => {
        commit(types.AdminList, adminList.data.data)
      })
  },
  [types.AdminGet]({ commit }, { id, http }) {
    http
      .get(`http://localhost:53912/Account/GetAdmin/${id}`)
      .then(val => {
        commit(types.AdminGet, val.data.data)
      })
  },
  [types.AdminEdit]({ commit }, { http, model }) {
    http
      .put(`http://localhost:53912/Account/GetAdmin/${model.AccountId}`, model)
      .then(val => console.log(val))
  }
}

const mutations = {
  [types.AdminList](state, item) {
    state.AdminList = item
    return state.AdminList
  },
  [types.AdminGet](state, admin) {
    state.Admin = admin
    console.log(state.Admin)
    return state.Admin
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
