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
  },
  /**
   * MyWay投保流程試算
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncMyWayEstimate(state, { result }) {
    state.POSTDATA = result.Data.Result
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
