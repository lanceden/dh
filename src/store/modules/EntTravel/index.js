import Url from '../../../utils/constUrl'
import stateTypes from './Types/EntTravelStateTypes'
import getterTypes from './Types/EntTravelGetterTypes'
import functionTypes from './Types/EntTravelFunctionTypes'
import rootState from '../../state'
import { toggleModalShow } from '../../../utils/toggleModal'

const APICODE = 'InsuranceWeb'

const state = {
  [stateTypes.ENTTRAVELISINIT]: false,
  [stateTypes.ENTTRAVELPOSTDATA]: []
}
const getters = {
  [getterTypes.GetEntTravelIsInit]: state => state.ENTTRAVELISINIT,
  [getterTypes.GetEntTravelPostData]: state => state.ENTTRAVELPOSTDATA
}
const actions = {
  /**
   * 設置投保流程是否已初始化
   * @param {commit} param0 提交狀態
   * @param {bool} ENTTRAVELISINIT 是否已初始化
   */
  [functionTypes.FuncEntTravelIsInit]({ commit }, ENTTRAVELISINIT) {
    commit(functionTypes.FuncEntTravelIsInit, { result: ENTTRAVELISINIT })
  },
  /**
   * EntTravel 投保流程初始化
   * @param {commit} param0 提交狀態
   */
  [functionTypes.FuncEntTravelInit]({ commit }) {
    rootState.Http.axios.post(`${Url.TravelInit}`, {
      InsurerSourceID: APICODE,
      TravelRq_Order: {
        ProcessId: ''
      }
    }).then(response => {
      commit(functionTypes.FuncEntTravelInit, { result: response.data })
    })
  },
  /**
   * 企業客戶代碼驗證
   * @param {commit} param0 提交狀態
   * @param {bool} ENTTRAVELISINIT 是否已初始化
   */
  async [functionTypes.FuncEntTravelValidate]({ commit }, entCode) {
    await rootState.Http.axios.post(`${Url.VerifyEmploymentId}?empId=${entCode}`).then(response => {
      commit(functionTypes.FuncEntTravelValidate, { result: response.data })
    })
  },
  /**
   * Travel 處理被保人資料
   * @param {commit} param0 提交狀態
   * @param {object} para 請求參數
   */
  async [functionTypes.FuncEntTravelInsuredData]({ commit, dispatch }, { para, router, entCode }) {
    await dispatch('FuncEntTravelValidate', entCode)
    if (!rootState.ISENTERPRISECODE) {
      toggleModalShow('您輸入的代碼驗證失敗，請洽詢您公司的負責窗口。', '貼心提醒您')
      return
    }
    rootState.Http.axios.post(`${Url.TravelInsuredData}`, {
      InsurerSourceID: APICODE,
      TravelRq_Order: para
    }).then(response => {
      commit(functionTypes.FuncEntTravelInsuredData, { result: response.data, router })
    })
  },
  /**
   * EntTravel 投保流程試算
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncEntTravelEstimate]({ commit }, { para, router }) {
    rootState.Http.axios.post(`${Url.TravelEstimate}`, {
      InsurerSourceID: APICODE,
      TravelRq_Order: para
    }).then(response => {
      commit(functionTypes.FuncEntTravelEstimate, { result: response.data, router })
    })
  },
  /**
   * EntTravel 投保流程下一步
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncEntTravelSubmitQuote]({ commit }, { para, router }) {
    rootState.Http.axios.post(`${Url.TravelSubmitQuote}`, {
      InsurerSourceID: APICODE,
      TravelRq_Order: para
    }).then(response => {
      commit(functionTypes.FuncEntTravelSubmitQuote, { result: response.data, router })
    })
  },
  /**
   * EntTravel 投保流程送出訂單
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncEntTravelSubmitOrder]({ commit }, { nccModels, para, router }) {
    console.log(para)
    rootState.Http.axios.post(`${Url.TravelSubmitOrder}`, {
      InsurerSourceID: APICODE,
      NCCCModels: nccModels,
      TravelRq_Order: para
    }).then(response => {
      commit(functionTypes.FuncEntTravelSubmitOrder, { result: response.data, router })
    })
  }
}

const mutations = {
  /**
   * 設置投保流程是否已初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncEntTravelIsInit](state, { result }) {
    state.ENTTRAVELISINIT = result
  },
  /**
   * EntTravel 投保流程初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncEntTravelInit](state, { result }) {
    if (result.ResultCode !== '0000') {
      toggleModalShow('親愛的保戶您好,由於系統更新中,請您稍候在試!')
      return
    }
    state.ENTTRAVELPOSTDATA = result.Data.Result
  },
  /**
   * EntTravel 投保流程初始化
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncEntTravelValidate](state, { result }) {
    rootState.ISENTERPRISECODE = result.ResultCode === '0000'
  },
  /**
   * 企業客戶代碼驗證
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncEntTravelInsuredData](state, { result, router }) {
    if (result.ResultCode !== '0000') return
    state.ENTTRAVELPOSTDATA = result.Data.Result
    router.push('/enttravel-2')
  },
  /**
   * EntTravel 投保流程試算
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncEntTravelEstimate](state, { result, router }) {
    if (result.ResultCode !== '0000') return
    state.ENTTRAVELPOSTDATA = result.Data.Result
    state.ENTTRAVELPOSTDATA.PolicyData.InsuredInfo.forEach(item => {
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
    router.push('/enttravel-4')
  },
  /**
   * EntTravel 投保流程下一步
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncEntTravelSubmitQuote](state, { result, router }) {
    if (result.ResultCode !== '0000') return
    state.TRAVELPOSTDATA = result.Data.Result
    router.push(`/enttravel-insureddata`)
  },
  /**
   * EntTravel 投保流程送出訂單
   * @param {state} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncEntTravelSubmitOrder](state, { result, router }) {
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
