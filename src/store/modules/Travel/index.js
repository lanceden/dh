import Url from '../../../utils/constUrl'
import stateTypes from './Types/TravelStateTypes'
import getterTypes from './Types/TravelGetterTypes'
import functionTypes from './Types/TravelFunctionTypes'
import rootState from '../../state'

const APICODE = 'InsuranceWeb'

const state = {
  [stateTypes.TRAVELISINIT]: false,
  [stateTypes.TRAVELPOSTDATA]: []
}
const getters = {
  [getterTypes.GetTravelIsInit]: state => state.TRAVELISINIT,
  [getterTypes.GetTravelPostData]: state => state.TRAVELPOSTDATA
}
const actions = {
  /**
   * 設置投保流程是否已初始化
   * @param {commit} param0 提交狀態
   * @param {bool} TRAVELISINIT 是否已初始化
   */
  [functionTypes.FuncTravelIsInit]({ commit }, TRAVELISINIT) {
    commit(functionTypes.FuncTravelIsInit, { result: TRAVELISINIT })
  },
  /**
   * Travel 投保流程初始化
   * @param {commit} param0 提交狀態
   */
  async [functionTypes.FuncTravelInit]({ commit }) {
    await rootState.Http.axios.post(`${Url.TravelInit}`, {
      InsurerSourceID: APICODE,
      TravelRq_Order: {
        ProcessId: ''
      }
    }).then(response => {
      commit(functionTypes.FuncTravelInit, { result: response.data })
    })
  },
  /**
   * Travel 處理被保人資料
   * @param {commit} param0 提交狀態
   * @param {object} para 請求參數
   */
  [functionTypes.FuncTravelInsuredData]({ commit }, { para, router }) {
    rootState.Http.axios.post(`${Url.TravelInsuredData}`, {
      InsurerSourceID: APICODE,
      TravelRq_Order: para
    }).then(response => {
      commit(functionTypes.FuncTravelInsuredData, { result: response.data, router })
    })
  },
  /**
   * Travel 投保流程試算
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncTravelEstimate]({ commit }, { para, router }) {
    rootState.Http.axios.post(`${Url.TravelEstimate}`, {
      InsurerSourceID: APICODE,
      TravelRq_Order: para
    }).then(response => {
      commit(functionTypes.FuncTravelEstimate, { result: response.data, router })
    })
  },
  /**
   * Travel 投保流程下一步
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncTravelSubmitQuote]({ commit }, { para, router }) {
    rootState.Http.axios.post(`${Url.TravelSubmitQuote}`, {
      InsurerSourceID: APICODE,
      TravelRq_Order: para
    }).then(response => {
      commit(functionTypes.FuncTravelSubmitQuote, { result: response.data, router })
    })
  },
  /**
   * Travel 投保流程送出訂單
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncTravelSubmitOrder]({ commit }, { nccModels, para, router }) {
    console.log(para)
    rootState.Http.axios.post(`${Url.TravelSubmitOrder}`, {
      InsurerSourceID: APICODE,
      NCCCModels: nccModels,
      TravelRq_Order: para
    }).then(response => {
      commit(functionTypes.FuncTravelSubmitOrder, { result: response.data, router })
    })
  }
}

const mutations = {
  /**
   * 設置投保流程是否已初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncTravelIsInit](state, { result }) {
    state.TRAVELISINIT = result
  },
  /**
   * Travel 投保流程初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncTravelInit](state, { result }) {
    if (result.ResultCode !== '0000') return
    state.TRAVELPOSTDATA = result.Data.Result
  },
  /**
   * Travel 處理被保人資料
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncTravelInsuredData](state, { result, router }) {
    if (result.ResultCode !== '0000') return
    state.TRAVELPOSTDATA = result.Data.Result
    router.push('/travel-2')
  },
  /**
   * Travel 投保流程試算
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncTravelEstimate](state, { result, router }) {
    if (result.ResultCode !== '0000') return
    state.TRAVELPOSTDATA = result.Data.Result
    state.TRAVELPOSTDATA.PolicyData.InsuredInfo.forEach(item => {
      item.BeneficiaryData = []
      item.BeneficiaryData.push({
        Relationship: '',
        Nationality: '',
        Name: '',
        IdNo: '',
        Dob: '',
        ContactNumber: '',
        Address: {
          City: '',
          District: '',
          Street: ''
        }
      })
      item.BeneficiaryQty = 1
    })
    router.push('/travel-4')
  },
  /**
   * Travel 投保流程下一步
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncTravelSubmitQuote](state, { result, router }) {
    if (result.ResultCode !== '0000') return
    state.TRAVELPOSTDATA = result.Data.Result
    router.push(`/travel-insureddata`)
  },
  /**
   * Travel 投保流程送出訂單
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncTravelSubmitOrder](state, { result, router }) {
    if (result.ResultCode !== '0000') return
    rootState.PAYMCOMPLETE = result.Data.Result
    if (rootState.PAYTYPE.toUpperCase() === 'B') {
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
