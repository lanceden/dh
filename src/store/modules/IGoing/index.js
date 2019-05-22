import Url from '../../../utils/constUrl'
import stateTypes from './Types/IGoingStateTypes'
import getterTypes from './Types/IGoingGetterTypes'
import functionTypes from './Types/IGoingFunctionTypes'
import rootState from '../../state'

const APICODE = 'InsuranceWeb'

const state = {
  [stateTypes.IGoingISINIT]: false,
  [stateTypes.POSTDATA]: []
}
const getters = {
  [getterTypes.GetIGoingIsInit]: state => state.IGoingISINIT,
  [getterTypes.GetIGoingPostData]: state => state.POSTDATA
}
const actions = {
  /**
   * 設置投保流程是否已初始化
   * @param {commit} param0 提交狀態
   * @param {bool} MYWAYISINIT 是否已初始化
   */
  [functionTypes.FuncIGoingIsInit]({ commit }, IGoingISINIT) {
    commit(functionTypes.FuncIGoingIsInit, { result: IGoingISINIT })
  },
  /**
   * IGoing 投保流程初始化
   * @param {commit} param0 提交狀態
   */
  [functionTypes.FuncIGoingInit]({ commit }, id) {
    rootState.Http.axios.post(`${Url.IGoingInit}`, {
      CoreData: {
        ID: id
      },
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncIGoingInit, { result: response.data })
    })
  },
  /**
   * IGoing 投保流程試算
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncIGoingEstimate]({ commit }, { para, router }) {
    rootState.Http.axios.post(`${Url.IGoingEstimate}`, {
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncIGoingEstimate, { result: response.data, router })
    })
  },
  /**
   * IGoing 投保流程下一步
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncIGoingSubmitQuote]({ commit }, { para, router }) {
    rootState.Http.axios.post(`${Url.IGoingSubmitQuote}`, {
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncIGoingSubmitQuote, { result: response.data, router })
    })
  },
  /**
   * IGoing 投保流程送出訂單
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncIGoingSubmitOrder]({ commit }, { nccModels, para, router }) {
    console.log(para)
    rootState.Http.axios.post(`${Url.IGoingSubmitOrder}`, {
      NCCCModels: nccModels,
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncIGoingSubmitOrder, { result: response.data, router })
    })
  }
}

const mutations = {
  /**
   * 設置投保流程是否已初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncIGoingIsInit](state, { result }) {
    state.IGoingISINIT = result
  },
  /**
   * IGoing 投保流程初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncIGoingInit](state, { result }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
    if (rootState.UNFINISHID === '' || rootState.UNFINISHID === null) {
      state.POSTDATA.QusAns = [{ Answar: '0' }, { Answar: '0' },
        { Answar: '0' }, { Answar: '0' }
      ]
    }
  },
  /**
   * IGoing 投保流程試算
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncIGoingEstimate(state, { result, router }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
    router.push(`/igoing-Estimate`)
  },
  /**
   * IGoing 投保流程下一步
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncIGoingSubmitQuote](state, { result, router }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
    router.push(`/igoing-insureddata`)
  },
  /**
   * IGoing 投保流程送出訂單
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncIGoingSubmitOrder](state, { result, router }) {
    if (result.ResultCode !== '0000') return
    rootState.PAYMENTCOMPLETE = result.Data.Result
    rootState.PAYMENTCOMPLETE.InsName = result.Data.Code
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
