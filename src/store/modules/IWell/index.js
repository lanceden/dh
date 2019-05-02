import Url from '../../../utils/constUrl'
import stateTypes from './Types/IWellStateTypes'
import getterTypes from './Types/IWellGetterTypes'
import functionTypes from './Types/IWellFunctionTypes'
import rootState from '../../state'

const APICODE = 'InsuranceWeb'

const state = {
  [stateTypes.IWellElecFormIsRead]: false,
  [stateTypes.IWellISINIT]: false,
  [stateTypes.POSTDATA]: []
}
const getters = {
  [getterTypes.GetIWellElecFormIsRed]: state => state.IWellElecFormIsRead,
  [getterTypes.GetIWellIsInit]: state => state.IWellISINIT,
  [getterTypes.GetIWellPostData]: state => state.POSTDATA
}
const actions = {
  /**
   * IWell 是否已同意電子保單
   * @param {commit} param0 提交狀態
   * @param {bool} MYWAYISINIT 是否已初始化
   */
  [functionTypes.FuncIWellElecFormIsRead]({ commit }, IWellElecFormIsRead) {
    commit(functionTypes.FuncIWellElecFormIsRead, { result: IWellElecFormIsRead })
  },
  /**
   * 設置投保流程是否已初始化
   * @param {commit} param0 提交狀態
   * @param {bool} MYWAYISINIT 是否已初始化
   */
  [functionTypes.FuncIWellIsInit]({ commit }, IWellISINIT) {
    commit(functionTypes.FuncIWellIsInit, { result: IWellISINIT })
  },
  /**
   * IWell 投保流程初始化
   * @param {commit} param0 提交狀態
   */
  [functionTypes.FuncIWellInit]({ commit }) {
    rootState.Http.axios.post(`${Url.IWellInit}`, {
      CoreData: {},
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncIWellInit, { result: response.data })
    })
  },
  /**
   * IWell 投保流程試算
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncIWellEstimate]({ commit }, { para }) {
    rootState.Http.axios.post(`${Url.IWellEstimate}`, {
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncIWellEstimate, { result: response.data })
    })
  },
  /**
   * IWell 投保流程下一步
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncIWellSubmitQuote]({ commit }, { para, router }) {
    rootState.Http.axios.post(`${Url.IWellSubmitQuote}`, {
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncIWellSubmitQuote, { result: response.data, router })
    })
  },
  /**
   * IWell 投保流程送出訂單
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncIWellSubmitOrder]({ commit }, { nccModels, para, router }) {
    console.log(para)
    rootState.Http.axios.post(`${Url.IWellSubmitOrder}`, {
      NCCCModels: nccModels,
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncIWellSubmitOrder, { result: response.data, router })
    })
  }
}

const mutations = {
  /**
   * IWell 是否已同意電子保單
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncIWellElecFormIsRead](state, { result }) {
    state.IWellElecFormIsRead = result
  },
  /**
   * 設置投保流程是否已初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncIWellIsInit](state, { result }) {
    state.IWellISINIT = result
  },
  /**
   * IWell 投保流程初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncIWellInit](state, { result }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
    state.POSTDATA.QusAns = [{ Answar: false }, { Answar: false }, { Answar: false },
      { Answar: false }, { Answar: false }
    ]
  },
  /**
   * IWell 投保流程試算
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncIWellEstimate(state, { result }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
  },
  /**
   * IWell 投保流程下一步
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncIWellSubmitQuote](state, { result, router }) {
    if (result.ResultCode !== '0000') return
    state.POSTDATA = result.Data.Result
    router.push(`/iwell-insureddata`)
  },
  /**
   * IWell 投保流程送出訂單
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncIWellSubmitOrder](state, { result }) {
    state.PAYMENTCOMPLETE = result.Data.Result
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
