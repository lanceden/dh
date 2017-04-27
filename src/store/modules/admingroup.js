import types from '../types'

const state = {
  /**
   * 後臺管理員帳號列表
   */
  AdminGroupList: [],
  AdminGroup: {}
}

const getters = {
  [types.GetAdminGroupList]: (state) => state.AdminGroupList,
  [types.GetAdminGroup]: (state) => state.AdminGroup
}

const actions = {
  [types.AdminGroupList]({ commit }, { http, router }) {
    http({
      method: 'get',
      url: '/api/AccountGroup/Get'
    }).then(adminList => {
      commit(types.AdminGroupList, adminList.data.data)
    })
  },
  [types.AdminAddGet]({ commit }) {
    commit(types.AdminAddGet)
  },
  [types.AdminAddPost]({ commit, rootState }, { http, model }) {
    http({
      method: 'post',
      url: `/api/Account/post`,
      data: model
    }).then(model => {
      commit(types.AdminAddPost, { model: model.data, rootState })
    })
  },
  [types.AdminEditGet]({ commit }, { id, http }) {
    http
      .get(`/api/Account/GetAdmin/${id}`)
      .then(val => {
        commit(types.AdminEditGet, val.data.data)
      })
  },
  [types.AdminEditPut]({ commit, rootState }, { http, model }) {
    http({
      method: 'put',
      url: `/api/Account/put/${model.AccountId}`,
      data: model
    }).then(model => {
      commit(types.AdminEditPut, { model: model.data, rootState })
    })
  },
  [types.AdminGroupDel]({ commit }, { id, http }) {
    http({
      method: 'delete',
      url: `/api/AccountGroup/delete/${id}`
    }).then(model => {
      commit(types.AdminGroupDel, { model: model.data })
    })
  }
}

const mutations = {
  [types.AdminGroupList](state, item) {
    state.AdminGroupList = item
    return state.AdminGroupList
  },
  [types.AdminAddGet](state) {
    state.Admin = {}
  },
  [types.AdminAddPost](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        rootState.isAdd = false
        state.AdminList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.AdminEditGet](state, admin) {
    state.Admin = admin
    return state.Admin
  },
  [types.AdminEditPut](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        rootState.isAdd = false
        state.AdminList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.AdminGroupDel](state, { model }) {
    switch (model.statu) {
      case 'ok':
        state.AdminList = model.data
        alert('刪除成功')
        break
      case 'err':
        alert(model.msg)
        break
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
