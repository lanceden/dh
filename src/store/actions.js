import types from './types'

export default {
  [types.MetuItem]({ commit }) {
    commit(types.MetuItem)
  },
  [types.MemberList]({ commit }) {
    commit(types.MemberList)
  },
  [types.AdminList]({ commit }) {
    commit(types.AdminList)
  },
  [types.EditAdmin]({ commit }, item) {
    commit(types.EditAdmin, item)
  },
  [types.GetMember]({
    commit
  }, mem) {
    commit(types.GetMember, mem)
  },
  [types.GetVipList]({ commit }) {
    commit(types.GetVipList)
  },
  [types.AuthLogin]({
    commit
  }, loginModel) {
    if (loginModel.account === 'admin' && loginModel.password === '1234') {
      commit(types.AuthLogin, loginModel)
    } else {
      alert('帳號密碼不正確!')
      return
    }
  },
  [types.AddVipList]({ commit }, vipModel) {
    commit(types.AddVipList, vipModel)
  }
}
