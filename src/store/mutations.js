import types from './types'

export default {
  [types.MetuItem] (state) {
    return state.MenuItemList
  },
  [types.MemberList] (state) {
    return state.MemberList
  },
  [types.AdminList](state) {
    return state.AdminList
  },
  [types.EditAdmin](state, item) {
    console.log('mutations', item)
    state.AdminList.forEach(admin => {
      if (admin.id === item) {
        console.log(admin)
        return admin
      }
    })
  },
  [types.GetMember] (state, { name, id, mobile }) {
    if(state.MemberListTemp.length === 0) state.MemberListTemp = state.MemberList
    let newArr = state.MemberList.filter(mem => {
      if (mem.name === name || mem.id === id || mem.phone === mobile) {
        return mem
      }
    })
    if(newArr.length === 0) state.MemberList = state.MemberListTemp
    else state.MemberList = newArr
    return state.MemberList
  },
  [types.GetVipList](state) {
    return state.VipList
  },
  /**
   * 驗證當前User是否登入
   * @param {*} state.auto:是否登入
   */
  [types.AuthLogin](state) {
    state.auth = true
  },
  [types.AddVipList](state, vipModel) {
    state.VipList.push({
      vlevel: vipModel.vlevel,
      totalamount: vipModel.totalamount,
      discounted: vipModel.discounted
    })
  }
}
