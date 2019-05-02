import Url from '../../../utils/constUrl'
import stateTypes from './Types/AccidentStateTypes'
import getterTypes from './Types/AccidentGetterTypes'
import functionTypes from './Types/AccidentFunctionTypes'
import rootState from '../../state'

const APICODE = 'InsuranceWeb'

const state = {
  [stateTypes.AccidentISINIT]: false,
  [stateTypes.POSTDATA]: []
}
const getters = {
  [getterTypes.GetAccidentIsInit]: state => state.AccidentISINIT,
  [getterTypes.GetAccidentPostData]: state => state.POSTDATA
}
const actions = {
  /**
   * 設置投保流程是否已初始化
   * @param {commit} param0 提交狀態
   * @param {bool} MYWAYISINIT 是否已初始化
   */
  [functionTypes.FuncAccidentIsInit]({ commit }, AccidentISINIT) {
    commit(functionTypes.FuncAccidentIsInit, { result: AccidentISINIT })
  },
  /**
   * Accident 投保流程初始化
   * @param {commit} param0 提交狀態
   */
  [functionTypes.FuncAccidentInit]({ commit }) {
    rootState.Http.axios.post(`${Url.AccidentInit}`, {
      CoreData: {},
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncAccidentInit, { result: response.data })
    })
  },
  /**
   * Accident 投保流程試算
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncAccidentEstimate]({ commit }, { para }) {
    rootState.Http.axios.post(`${Url.AccidentEstimate}`, {
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncAccidentEstimate, { result: response.data })
    })
  },
  /**
   * Accident 投保流程下一步
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncAccidentSubmitQuote]({ commit }, { para, router }) {
    rootState.Http.axios.post(`${Url.AccidentSubmitQuote}`, {
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncAccidentSubmitQuote, { result: response.data, router })
    })
  },
  /**
   * Accident 投保流程送出訂單
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncAccidentSubmitOrder]({ commit }, { nccModels, para, router }) {
    console.log(para)
    rootState.Http.axios.post(`${Url.AccidentSubmitOrder}`, {
      NCCCModels: nccModels,
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncAccidentSubmitOrder, { result: response.data, router })
    })
  }
}

const mutations = {
  /**
   * 設置投保流程是否已初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncAccidentIsInit](state, { result }) {
    state.AccidentISINIT = result
  },
  /**
   * Accident 投保流程初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncAccidentInit](state, { result }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
    state.POSTDATA.QusAns = [{ Answar: false }, { Answar: false }, { Answar: false },
      { Answar: false }, { Answar: false }
    ]
  },
  /**
   * Accident 投保流程試算
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncAccidentEstimate(state, { result }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
  },
  /**
   * Accident 投保流程下一步
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncAccidentSubmitQuote](state, { result, router }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
    router.push(`/Accident-insureddata`)
  },
  /**
   * Accident 投保流程送出訂單
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncAccidentSubmitOrder](state, { result, router }) {
    if (result.ResultCode !== '0000') return
    rootState.PAYMENTCOMPLETE = result.Data.Result
    router.push(`/paymentcomplete`)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
