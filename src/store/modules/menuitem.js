import types from '../types'

const state = {
  /**
   * 功能列表
   */
  MenuItemList: [
    {
      name: '首頁',
      baseUrl: '/index',
      itemClass: 'fa fa-home',
      showItemClass: false
    }, {
      name: '訂單管理',
      baseUrl: '/order',
      itemClass: 'fa fa-info-circle',
      showItemClass: false
    }, {
      name: '報表系統',
      baseUrl: '/report',
      itemClass: 'fa fa-pie-chart',
      showItemClass: false
    }, {
      name: '電子報管理',
      baseUrl: '/edm',
      itemClass: 'fa fa-table',
      showItemClass: false
    }, {
      name: '會員系統',
      baseUrl: '#',
      childItem: [
        {
          childName: '會員列表',
          childUrl: '/Member'
        }, {
          childName: '會員等級設定',
          childUrl: '/MemberLevel'
        }
      ],
      itemClass: 'fa fa-user',
      showItemClass: true
    }, {
      name: '後臺權限管理',
      baseUrl: '#',
      childItem: [
        {
          childName: '管理者列表',
          childUrl: '/adminlist'

        }, {
          childName: '管理者群組',
          childUrl: '/admingroup'
        }
      ],
      itemClass: 'fa fa-lock',
      showItemClass: true
    }, {
      name: '文章管理',
      baseUrl: '#',
      childItem: [
        {
          childName: '文章列表',
          childUrl: '/adminlist'
        }, {
          childName: '文章上架',
          childUrl: '/adminedit'
        }
      ],
      itemClass: 'fa fa-newspaper-o',
      showItemClass: true
    }
  ]
}

// getters
const getters = {
  [types.GetMetuItem]: (state) => {
    return state.MenuItemList
  }
}

// actions
const actions = {
  [types.MetuItem]({ commit }) {
    commit(types.MetuItem)
  }
}

// mutations
const mutations = {
  [types.MetuItem] (state) {
    return state.MenuItemList
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
