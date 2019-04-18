import Url from '../../../utils/constUrl'
import stateTypes from './Types/UpCashStateTypes'
import getterTypes from './Types/UpCashGetterTypes'
import functionTypes from './Types/UpCashFunctionTypes'
import NationData from './nationMockData'
import JobData from './jobMockData'
import OccupationData from './occupationMockData'
import rootState from '../../state'

const planCode = 'UC099'
const state = {
  [stateTypes.JOB]: '',
  [stateTypes.JOBDATA]: JobData,
  [stateTypes.NATION]: '',
  [stateTypes.NATIONDATA]: NationData,
  [stateTypes.OCCUPATION]: '',
  [stateTypes.OCCUPATIONDATA]: OccupationData
}
const getters = {
  [getterTypes.GetJob]: state => state.JOB,
  [getterTypes.GetJobData]: state => state.JOBDATA,
  [getterTypes.GetNation]: state => state.NATION,
  [getterTypes.GetNationData]: state => state.NATIONDATA,
  [getterTypes.GetOccupation]: state => state.OCCUPATION,
  [getterTypes.GetOccupationData]: state => state.OCCUPATIONDATA
}
const actions = {
  async [functionTypes.FuncGetJob]({ commit }) {
    // $http({
    //   method: 'post',
    //   url: `/api/Account/post`
    // }).then(model => {
    //   commit(functionTypes.FuncGetJob, { model: model.data })
    // })
    await commit(functionTypes.FuncGetJob, { model: { word: 'Commit' } })
  },
  [functionTypes.FuncGetNationality]({ commit }, { id, http }) {
    http
      .get(`/api/Account/GetAdmin/${id}`)
      .then(val => {
        commit(functionTypes.FuncGetNationality, val.data.data)
      })
  },
  [functionTypes.FuncGetOccupation]({ commit }, { occupationCode }) {
    rootState.Http.axios.post(`${Url.Occupation}`, {
      PlanCode: planCode,
      OccupationCode: occupationCode
    }).then(response => {
      commit(functionTypes.FuncGetOccupation, { data: response.data })
    })
  }
}

const mutations = {
  [functionTypes.FuncGetJob](state, { model }) {
    // state.AdminList = item
    // return state.AdminList
    console.log(model.word)
  },
  [functionTypes.AdminAccountAddPost](state, { model, rootState }) {
    switch (model.statu) {
      case 'ok':
        rootState.isAdd = false
        state.AdminList = model.data
        break
      case 'err':
        alert(model.msg)
        break
    }
  },
  [functionTypes.FuncGetOccupation](state, { data }) {
    state.OCCUPATIONDATA = data.Result
    state.OCCUPATION = data.Result[0].OCCUPATION_CODE
    console.log(data.Result)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
