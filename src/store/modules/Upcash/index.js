import Url from '../../../utils/constUrl'
import stateTypes from './Types/UpCashStateTypes'
import getterTypes from './Types/UpCashGetterTypes'
import functionTypes from './Types/UpCashFunctionTypes'
import rootState from '../../state'

const APICODE = 'InsuranceWeb'

const state = {
  [stateTypes.ISINIT]: false,
  [stateTypes.POSTDATA]: []
}
const getters = {
  [getterTypes.GetIsInit]: state => state.ISINIT,
  [getterTypes.GetPostData]: state => state.POSTDATA
}
const actions = {
  /**
   * 設置投保流程是否已初始化
   * @param {commit} param0 提交狀態
   * @param {bool} isInit 是否已初始化
   */
  [functionTypes.FuncIsInit]({ commit }, isInit) {
    commit(functionTypes.FuncIsInit, { result: isInit })
  },
  /**
   * UpCash 投保流程初始化
   * @param {commit} param0 提交狀態
   */
  [functionTypes.FuncUpCashInit]({ commit }) {
    rootState.Http.axios.post(`${Url.UpCashInit}`, {
      CoreData: {},
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncUpCashInit, { result: response.data })
    })
  },
  /**
   * UpCash 投保流程試算
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncEstimate]({ commit }, { para }) {
    rootState.Http.axios.post(`${Url.UpCashEstimate}`, {
      CoreData: para,
      InsurerSourceID: APICODE
    }).then(response => {
      commit(functionTypes.FuncEstimate, { result: response.data })
    })
  }
}

const mutations = {
  [functionTypes.FuncIsInit](state, { result }) {
    state.ISINIT = result
  },
  [functionTypes.FuncUpCashInit](state, { result }) {
    state.POSTDATA = result.Data.Result
  },
  /**
   * UpCash投保流程試算
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncEstimate(state, { result }) {
    state.POSTDATA = result.Data.Result
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
