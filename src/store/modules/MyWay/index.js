import Url from '../../../utils/constUrl'
import stateTypes from './Types/MyWayStateTypes'
import getterTypes from './Types/MyWayGetterTypes'
import functionTypes from './Types/MyWayFunctionTypes'
import rootState from '../../state'

const APICODE = 'InsuranceWeb'

const state = {
  [stateTypes.MYWAYISINIT]: false,
  [stateTypes.POSTDATA]: []
}
const getters = {
  [getterTypes.GetMyWayIsInit]: state => state.MYWAYISINIT,
  [getterTypes.GetMyWayPostData]: state => state.POSTDATA
}
const actions = {
  /**
   * 設置投保流程是否已初始化
   * @param {commit} param0 提交狀態
   * @param {bool} MYWAYISINIT 是否已初始化
   */
  [functionTypes.FuncMyWayIsInit]({ commit }, MYWAYISINIT) {
    commit(functionTypes.FuncMyWayIsInit, { result: MYWAYISINIT })
  },
  /**
   * MyWay 投保流程初始化
   * @param {commit} param0 提交狀態
   */
  [functionTypes.FuncMyWayInit]({ commit }) {
    rootState.Http.axios.post(`${Url.MyWayInit}`, {
      CoreData: {},
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncMyWayInit, { result: response.data })
    })
  },
  /**
   * MyWay 投保流程試算
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncMyWayEstimate]({ commit }, { para }) {
    rootState.Http.axios.post(`${Url.MyWayEstimate}`, {
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncMyWayEstimate, { result: response.data })
    })
  },
  /**
   * MyWay 投保流程下一步
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncMyWaySubmitQuote]({ commit }, { para, router }) {
    rootState.Http.axios.post(`${Url.MyWaySubmitQuote}`, {
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncMyWaySubmitQuote, { result: response.data, router })
    })
  },
  /**
   * MyWay 投保流程送出訂單
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncMyWaySubmitOrder]({ commit }, { nccModels, para, router }) {
    console.log(para)
    rootState.Http.axios.post(`${Url.MyWaySubmitOrder}`, {
      NCCCModels: nccModels,
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncMyWaySubmitOrder, { result: response.data, router })
    })
  }
}

const mutations = {
  /**
   * 設置投保流程是否已初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncMyWayIsInit](state, { result }) {
    state.MYWAYISINIT = result
  },
  /**
   * MyWay 投保流程初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncMyWayInit](state, { result }) {
    state.POSTDATA = result.Data.Result
    state.POSTDATA.QusAns = [
      { Answar: false }, { Answar: false }, { Answar: false },
      { Answar: false }, { Answar: false }, { Answar: false },
      { Answar: false }, { Answar: false }, { Answar: false }
    ]
  },
  /**
   * MyWay 投保流程試算
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncMyWayEstimate(state, { result }) {
    state.POSTDATA = result.Data.Result
  },
  /**
   * MyWay 投保流程下一步
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncMyWaySubmitQuote](state, { result, router }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
    router.push(`/myway-insureddata`)
  },
  /**
   * MyWay 投保流程送出訂單
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncMyWaySubmitOrder](state, { result, router }) {
    if (result.ResultCode !== '0000') return
    state.PAYMENTCOMPLETE = result.Data.Result
    router.push(`/paymentcomplete`)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
