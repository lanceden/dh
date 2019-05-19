import Url from '../../../utils/constUrl'
import stateTypes from './Types/HealthStateTypes'
import getterTypes from './Types/HealthGetterTypes'
import functionTypes from './Types/HealthFunctionTypes'
import rootState from '../../state'

const APICODE = 'InsuranceWeb'

const state = {
  [stateTypes.HealthISINIT]: false,
  [stateTypes.POSTDATA]: []
}
const getters = {
  [getterTypes.GetHealthIsInit]: state => state.HealthISINIT,
  [getterTypes.GetHealthPostData]: state => state.POSTDATA
}
const actions = {
  /**
   * 設置投保流程是否已初始化
   * @param {commit} param0 提交狀態
   * @param {bool} HealthISINIT 是否已初始化
   */
  [functionTypes.FuncHealthIsInit]({ commit }, HealthISINIT) {
    commit(functionTypes.FuncHealthIsInit, { result: HealthISINIT })
  },
  /**
   * Health 投保流程初始化
   * @param {commit} param0 提交狀態
   */
  [functionTypes.FuncHealthInit]({ commit }, id) {
    rootState.Http.axios.post(`${Url.HealthInit}`, {
      CoreData: {
        ID: id
      },
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncHealthInit, { result: response.data })
    })
  },
  /**
   * Health 投保流程試算
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncHealthEstimate]({ commit }, { para, router }) {
    rootState.Http.axios.post(`${Url.HealthEstimate}`, {
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncHealthEstimate, { result: response.data, router })
    })
  },
  /**
   * Health 投保流程下一步
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncHealthSubmitQuote]({ commit }, { para, router }) {
    rootState.Http.axios.post(`${Url.HealthSubmitQuote}`, {
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncHealthSubmitQuote, { result: response.data, router })
    })
  },
  /**
   * Health 投保流程送出訂單
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncHealthSubmitOrder]({ commit }, { nccModels, para, router }) {
    console.log(para)
    rootState.Http.axios.post(`${Url.HealthSubmitOrder}`, {
      NCCCModels: nccModels,
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncHealthSubmitOrder, { result: response.data, router })
    })
  }
}

const mutations = {
  /**
   * 設置投保流程是否已初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncHealthIsInit](state, { result }) {
    state.HealthISINIT = result
  },
  /**
   * Health 投保流程初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncHealthInit](state, { result }) {
    state.POSTDATA = result.Data.Result
    state.POSTDATA.QusAns = [{ Answar: true }, { Answar: true }, { Answar: true },
      { Answar: true }, { Answar: true }, { Answar: true },
      { Answar: true }, { Answar: true }, { Answar: true },
      { Answar: false }, { Answar: false }
    ]
  },
  /**
   * Health 投保流程試算
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncHealthEstimate(state, { result, router }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
    router.push(`/health-Estimate`)
  },
  /**
   * Health 投保流程下一步
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncHealthSubmitQuote](state, { result, router }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
    router.push(`/Health-insureddata`)
  },
  /**
   * Health 投保流程送出訂單
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncHealthSubmitOrder](state, { result, router }) {
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
