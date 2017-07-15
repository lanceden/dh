import types from './orderTypes'
import { noty } from '../../../assets/commons'

const state = {
  OrderList: [],
  OrderDtList: [],
  Order: {},
  Orderdt: {},
  OrderPageCount: 0
}

const getters = {
  [types.GetOrderList]: (state) => state.OrderList,
  [types.GetOrderDtList]: (state) => state.OrderDtList,
  [types.GetOrder]: (state) => state.Order,
  [types.GetOrderdt]: (state) => state.Orderdt,
  [types.GetOrderPageCount]: (state) => state.OrderPageCount
}

const actions = {
  [types.OrderList]({ commit }, { http, model }) {
    http({
      method: 'get',
      url: '/api/Order/Get',
      params: model
    }).then(Order => {
      commit(types.OrderList, Order.data)
    })
  },
  [types.OrderDtList]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/Order/GetDt/${id}`
    }).then(Orderdt => {
      commit(types.OrderDtList, Orderdt.data)
    })
  },
  [types.OrderEditGet]({ commit }, { http, id }) {
    http({
      method: 'get',
      url: `/api/Order/GetEdit/${id}`
    }).then(model => {
      commit(types.OrderEditGet, model.data)
    })
  },
  [types.OrderEditPut]({ commit, rootState }, { http, model, dtModel }) {
    http({
      method: 'put',
      url: `/api/Order/Put/${model.OrderNum}`,
      data: {
        Order: model,
        Orderdts: dtModel
      }
    }).then(emp => {
      commit(types.OrderEditPut, { model: emp.data, rootState })
    })
  },
  [types.OrderAddGet]({ commit }) {
    commit(types.OrderAddGet)
  },
  [types.OrderAddPost]({ commit, rootState }, { http, model, dtModel }) {
    console.log(dtModel)
    http({
      method: 'post',
      url: `/api/Order/post`,
      data: {
        Order: model,
        Orderdts: dtModel
      }
    }).then(emp => {
      commit(types.OrderAddPost, { model: emp.data, rootState })
    })
  },
  [types.OrderDelete]({ commit }, { id, http }) {
    http({
      method: 'delete',
      url: `/api/Order/delete/${id}`
    }).then(model => {
      commit(types.OrderDelete, model.data)
    })
  },
  [types.OrderdtAddGet]({ commit }) {
    commit(types.OrderdtAddGet)
  },
  [types.OrderdtEditGet]({ commit }, index) {
    state.Orderdt = state.OrderDtList[index]
    commit(types.OrderdtEditGet)
  },
  [types.OrderdtDelete]({ commit }, { http, no, orderNum }) {
    http({
      method: 'delete',
      url: `/api/Order/DeleteDt/${no}`,
      data: {
        No: no,
        OrderNum: orderNum
      }
    }).then(model => {
      commit(types.OrderdtDelete, model.data)
    })
  }
}

const mutations = {
  [types.OrderList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.OrderList = model.data.list
        state.OrderPageCount = model.data.PageCount
        return state.OrderList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.OrderDtList](state, model) {
    switch (model.statu) {
      case 'ok':
        state.OrderDtList = model.data
        return state.OrderDtList
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.OrderEditGet](state, model) {
    switch (model.statu) {
      case 'ok':
        state.Order = model.data.order
        state.OrderDtList = model.data.orderDt
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.OrderEditPut](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        noty.TopRightShow('修改成功!')
        rootState.isAdd = false
        state.OrderList = model.data.list
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.OrderAddGet](state) {
    state.Order = {}
    state.OrderDtList = []
    return state.Order
  },
  [types.OrderAddPost](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        noty.TopRightShow('新增成功!')
        rootState.isAdd = false
        state.OrderList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.OrderDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.OrderList = model.data.list
        state.OrderPageCount = model.data.PageCount
        noty.TopRightShow('刪除成功!')
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [types.OrderdtAddGet](state) {
    state.Orderdt = {}
    return state.Orderdt
  },
  [types.OrderdtEditGet](state) {
    return state.Orderdt
  },
  [types.OrderdtDelete](state, model) {
    switch (model.statu) {
      case 'ok':
        state.OrderDtList = model.data
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
