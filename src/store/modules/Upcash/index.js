import Url from '../../../utils/constUrl'
import stateTypes from './Types/UpCashStateTypes'
import getterTypes from './Types/UpCashGetterTypes'
import functionTypes from './Types/UpCashFunctionTypes'
import rootState from '../../state'

const planCode = 'UC099'
const APICODE = 'InsuranceWeb'

const state = {
  [stateTypes.ISINIT]: false,
  [stateTypes.JOB]: '',
  [stateTypes.JOBDATA]: [],
  [stateTypes.NATION]: '0',
  [stateTypes.NATIONDATA]: [],
  [stateTypes.OCCUPATION]: '0',
  [stateTypes.OCCUPATIONDATA]: [],
  [stateTypes.POSTDATA]: [],
  [stateTypes.CITY]: '',
  [stateTypes.CITYDATA]: [],
  [stateTypes.BANK]: '',
  [stateTypes.BANKDATA]: [],
  [stateTypes.BANKBRANCHESDATA]: [],
  [stateTypes.BENEFICIARY]: [],
  [stateTypes.DISTRICT]: [],
  [stateTypes.DISTRICTDATA]: []
}
const getters = {
  [getterTypes.GetIsInit]: state => state.ISINIT,
  [getterTypes.GetJob]: state => state.JOB,
  [getterTypes.GetJobData]: state => state.JOBDATA,
  [getterTypes.GetNation]: state => state.NATION,
  [getterTypes.GetNationData]: state => state.NATIONDATA,
  [getterTypes.GetOccupation]: state => state.OCCUPATION,
  [getterTypes.GetOccupationData]: state => state.OCCUPATIONDATA,
  [getterTypes.GetPostData]: state => state.POSTDATA,
  [getterTypes.GetCity]: state => state.CITY,
  [getterTypes.GetCityData]: state => state.CITYDATA,
  [getterTypes.GetBank]: state => state.BANK,
  [getterTypes.GetBankData]: state => state.BANKDATA,
  [getterTypes.GetBankBranches]: state => state.BANKBRANCHESDATA,
  [getterTypes.GetBeneficiary]: state => state.BENEFICIARY,
  [getterTypes.GetDistrict]: state => state.DISTRICT,
  [getterTypes.GetDistrictData]: state => state.DISTRICTDATA
}
const actions = {
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
  [functionTypes.FuncGetBankBranches]({ commit }, bankCode) {
    rootState.Http.axios.post(`${Url.BankBranches}?bankCode=${bankCode}`).then(response => {
      commit(functionTypes.FuncGetBankBranches, { result: response.data })
    })
  },
  [functionTypes.FuncGetJob]({ commit }) {
    rootState.Http.axios.post(`${Url.Job}`).then(response => {
      commit(functionTypes.FuncGetJob, { result: response.data })
    })
  },
  [functionTypes.FuncGetNationality]({ commit }, nationalityCode) {
    rootState.Http.axios.post(`${Url.Nationality}?code=${nationalityCode}`).then(response => {
      commit(functionTypes.FuncGetNationality, { result: response.data })
    })
  },
  [functionTypes.FuncGetOccupation]({ commit }, occupationCode) {
    rootState.Http.axios.post(`${Url.Occupation}`, {
      PlanCode: planCode,
      OccupationCode: occupationCode
    }).then(response => {
      commit(functionTypes.FuncGetOccupation, { result: response.data, occupationCode })
    })
  },
  [functionTypes.FuncGetCityData]({ commit }) {
    rootState.Http.axios.post(`${Url.City}`).then(response => {
      commit(functionTypes.FuncGetCityData, { result: response.data })
    })
  },
  [functionTypes.FuncGetDistrictData]({ commit }, cityName) {
    rootState.Http.axios.post(`${Url.District}?cityName=${cityName}`).then(response => {
      commit(functionTypes.FuncGetDistrictData, { result: response.data })
    })
  },
  /**
   * 取回金融機構
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncGetBank]({ commit }) {
    rootState.Http.axios.post(`${Url.Banks}`).then(response => {
      commit(functionTypes.FuncGetBank, { result: response.data })
    })
  },
  /**
   * 取回上一張保單受益人
   * @param {當前Vuex狀態} commit VuexStoreState
   */
  async [functionTypes.FuncGetBeneficiary]({ commit }) {
    await rootState.Http.axios.post(`${Url.Beneficiary}`).then(response => {
      commit(functionTypes.FuncGetBeneficiary, { result: response.data })
    })
  },
  /**
   * UpCash 投保流程試算
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {object} para 請求參數
   */
  [functionTypes.FuncEstimate]({ commit }, { para }) {
    rootState.Http.axios.post(`${Url.UpCashEstimate}`, para).then(response => {
      commit(functionTypes.FuncGetBank, { result: response.data })
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
  [functionTypes.FuncGetBankBranches](state, { result }) {
    console.log(state.BANKBRANCHESDATA)
    state.BANKBRANCHESDATA = result.Data.Result
  },
  /**
   * 取回職業類別
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncGetJob](state, { result }) {
    state.JOBDATA = result.Data.Result
    console.log(result.Data.Result)
  },
  /**
   * 取回國籍
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncGetNationality](state, { result }) {
    state.NATIONDATA = result.Data.Result
  },
  /**
   * 取回職業類別名稱
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncGetOccupation](state, { result, occupationCode }) {
    state.OCCUPATIONDATA = result.Data.Result
    state.JOB = occupationCode
    console.log(result.Data.Result)
  },
  /**
   * 取回城市
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  [functionTypes.FuncGetCityData](state, { result }) {
    state.CITYDATA = result.Data.Result
    state.CITY = result.Data.Result[0].City
  },
  /**
   * 取回鄉鎮市區
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetDistrictData(state, { result }) {
    state.DISTRICTDATA = result.Data.Result
  },
  /**
   * 取回金融機構
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetBank(state, { result }) {
    state.BANKDATA = result.Data.Result
    state.BANK = result.Data.Result[0].bank_code
  },
  /**
   * 取回上一張保單受益人
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetBeneficiary(state, { result }) {
    state.BENEFICIARY = result.Data
    console.log(state.BENEFICIARY)
  },
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
