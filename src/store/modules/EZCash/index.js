import Url from '../../../utils/constUrl'
import stateTypes from './Types/EZCashStateTypes'
import getterTypes from './Types/EZCashGetterTypes'
import functionTypes from './Types/EZCashFunctionTypes'
import rootState from '../../state'

const APICODE = 'InsuranceWeb'

const state = {
  [stateTypes.EZCASHISINIT]: false,
  [stateTypes.POSTDATA]: []
}
const getters = {
  [getterTypes.GetEZCashIsInit]: state => state.EZCASHISINIT,
  [getterTypes.GetEZCashPostData]: state => state.POSTDATA
}
const actions = {
  /**
   * 設置投保流程是否已初始化
   * @param {commit} param0 提交狀態
   * @param {bool} MYWAYISINIT 是否已初始化
   */
  [functionTypes.FuncEZCashIsInit]({ commit }, EZCASHISINIT) {
    commit(functionTypes.FuncEZCashIsInit, { result: EZCASHISINIT })
  },
  /**
   * EZCash 投保流程初始化
   * @param {commit} param0 提交狀態
   */
  [functionTypes.FuncEZCashInit]({ commit }) {
    rootState.Http.axios.post(`${Url.EZCashInit}`, {
      CoreData: {},
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncEZCashInit, { result: response.data })
    })
  },
  /**
   * EZCash 投保流程試算
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncEZCashEstimate]({ commit }, { para, router }) {
    rootState.Http.axios.post(`${Url.EZCashEstimate}`, {
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncEZCashEstimate, { result: response.data, router })
    })
  },
  /**
   * EZCash 投保流程下一步
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncEZCashSubmitQuote]({ commit }, { para, router }) {
    rootState.Http.axios.post(`${Url.EZCashSubmitQuote}`, {
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncEZCashSubmitQuote, { result: response.data, router })
    })
  },
  /**
   * EZCash 投保流程送出訂單
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncEZCashSubmitOrder]({ commit }, { nccModels, para, router }) {
    console.log(para)
    rootState.Http.axios.post(`${Url.EZCashSubmitOrder}`, {
      NCCCModels: nccModels,
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncEZCashSubmitOrder, { result: response.data, router })
    })
  }
}

const mutations = {
  /**
   * 設置投保流程是否已初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncEZCashIsInit](state, { result }) {
    state.EZCASHISINIT = result
  },
  /**
   * EZCash 投保流程初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncEZCashInit](state, { result }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
  },
  /**
   * EZCash 投保流程試算
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncEZCashEstimate(state, { result, router }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
    router.push(`/ezcash-Estimate`)
  },
  /**
   * EZCash 投保流程下一步
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncEZCashSubmitQuote](state, { result, router }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
    router.push(`/ezcash-insureddata`)
  },
  /**
   * EZCash 投保流程送出訂單
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncEZCashSubmitOrder](state, { result, router }) {
    if (result.ResultCode !== '0000') return
    rootState.PAYMENTCOMPLETE = result.Data.Result
    // 全繳網
    if (rootState.PAYTYPE.toUpperCase() === 'B' && !rootState.PAYMENTPREFER) {
      router.push(`/ebillform`)
    } else {
      router.push(`/paymentcomplete`)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
