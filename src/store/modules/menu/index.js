import types from './menuTypes'

const state = {
  MenuItemList: []
}
const getters = {
  [types.GetMenuItem]: (state) => {
    return state.MenuItemList
  }
}
const actions = {
  [types.MenuItem]({ commit }, { http }) {
    console.log(window.Lockr.get('antiKey'))
    http({
      method: 'get',
      url: `/api/Menu/Get`,
      headers: { 'X-XSRF-Token': window.Lockr.get('antiKey') }
    }).then(model => {
      commit(types.MenuItem, { model: model.data })
    })
  }
}
const mutations = {
  [types.MenuItem](state, { model }) {
    switch (model.statu) {
      case 'ok':
        state.MenuItemList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
    return state.MenuItemList
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
