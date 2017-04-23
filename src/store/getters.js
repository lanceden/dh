import types from './types'

export default {
  [types.GetMetuItem]: (state) => state.MenuItemList,
  [types.GetMemberList]: (state) => state.MemberList,
  [types.GetVipList]: (state) => state.VipList,
  [types.GetAdminList]: (state) => state.AdminList,
  [types.GetAdmin]: (state) => state.Admin,
  [types.GetShowLoading]: (state) => state.ShowLoading
}
