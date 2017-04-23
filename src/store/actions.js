import types from './types'

export default {
  [types.ShowLoading]({commit}) {
    commit(types.ShowLoading)
  },
  [types.HideLoading]({commit}) {
    commit(types.HideLoading)
  },
  [types.MetuItem]({commit}) {
    commit(types.MetuItem)
  },
  [types.MemberList]({commit}) {
    commit(types.MemberList)
  },
  [types.AdminList]({
    commit
  }, http) {
    http
      .post('http://localhost:53912/Account/GetAdminList')
      .then(adminList => {
        commit(types.AdminList, adminList.data.data)
      })
  },
  [types.EditAdmin]({
    commit
  }, {id, http}) {
    http
      .get(`http://localhost:53912/Account/GetAdmin/${id}`)
      .then(val => {
        commit(types.EditAdmin, val)
      })
  },
  [types.GetMember]({
    commit
  }, mem) {
    commit(types.GetMember, mem)
  },
  [types.GetVipList]({commit}) {
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
  [types.AddVipList]({
    commit
  }, vipModel) {
    commit(types.AddVipList, vipModel)
  }
}
