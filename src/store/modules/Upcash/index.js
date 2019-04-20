import Url from '../../../utils/constUrl'
import stateTypes from './Types/UpCashStateTypes'
import getterTypes from './Types/UpCashGetterTypes'
import functionTypes from './Types/UpCashFunctionTypes'
import rootState from '../../state'
// import JobData from './jobMockData'
// import NationData from './nationMockData'
// import OccupationData from './occupationMockData'

const planCode = 'UC099'
const APICODE = 'InsuranceWeb'

const state = {
  [stateTypes.ISINIT]: false,
  [stateTypes.JOB]: '',
  [stateTypes.JOBDATA]: [],
  [stateTypes.NATION]: '',
  [stateTypes.NATIONDATA]: [],
  [stateTypes.OCCUPATION]: '',
  [stateTypes.OCCUPATIONDATA]: [],
  [stateTypes.POSTDATA]: [],
  [stateTypes.CITY]: '',
  [stateTypes.CITYDATA]: [],
  [stateTypes.BANK]: '',
  [stateTypes.BANKDATA]: []
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
  [getterTypes.GetBankData]: state => state.BANKDATA
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
  [functionTypes.FuncGetBank]({ commit }) {
    rootState.Http.axios.post(`${Url.Banks}`).then(response => {
      commit(functionTypes.FuncGetBank, { result: response.data })
    })
  }
}

const mutations = {
  [functionTypes.FuncIsInit](state, { result }) {
    state.ISINIT = result
    console.log('this.GetIsInit', state.ISINIT)
  },
  [functionTypes.FuncUpCashInit](state, { result }) {
    state.POSTDATA = result.Data.Result
  },
  [functionTypes.FuncGetJob](state, { result }) {
    state.JOBDATA = result.Data.Result
    console.log(result.Data.Result)
  },
  [functionTypes.FuncGetNationality](state, { result }) {
    state.NATIONDATA = result.Data.Result
    state.NATION = result.Data.Result[0].Code
  },
  [functionTypes.FuncGetOccupation](state, { result, occupationCode }) {
    state.OCCUPATIONDATA = result.Data.Result
    state.OCCUPATION = result.Data.Result[0].OCCUPATION_CODE
    state.JOB = occupationCode
    console.log(result.Data.Result)
  },
  [functionTypes.FuncGetCityData](state, { result }) {
    state.CITYDATA = result.Data.Result
    state.CITY = result.Data.Result[0].City
  },
  [functionTypes.FuncGetBank](state, { result }) {
    state.BANKDATA = result.Data.Result
    state.BANK = result.Data.Result[0].bank_code
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
