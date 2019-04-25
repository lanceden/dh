import Url from '../utils/constUrl'
import rootState from './state'

const planCode = 'UC099'
export default {
  SetShowLoading({ commit }) {
    commit('SetShowLoading')
  },
  SethideLoading({ commit }) {
    commit('SethideLoading')
  },
  SetHttp({ commit }, { http }) {
    commit('SetHttp', { http })
  },
  SetApiToken({ commit }, { token }) {
    commit('SetApiToken', { token })
  },
  SetHeaderIsActive({ commit }, isActive) {
    commit('SetHeaderIsActive', isActive)
  },
  /**
   * 設定受益人一關係輸入框是否關閉
   * @param {commit} param0 提夜狀態
   * @param {bool} isDisable true:關閉輸入 false:開啟輸入
   */
  SetBenfinheritOneDisable({ commit }, isDisable) {
    commit('SetBenfinheritOneDisable', isDisable)
  },
  /**
   * 取回職業類別
   * @param {commit} param0 提交狀態
   */
  FuncGetJob({ commit }) {
    rootState.Http.axios.post(`${Url.Job}`).then(response => {
      commit('FuncGetJob', { result: response.data })
    })
  },
  /**
   * 取回銀行
   * @param {commit} param0 提交狀態
   * @param {string} bankCode 銀行代碼
   */
  FuncGetBankBranches({ commit }, bankCode) {
    rootState.Http.axios.post(`${Url.BankBranches}?bankCode=${bankCode}`).then(response => {
      commit('FuncGetBankBranches', { result: response.data })
    })
  },
  FuncGetNationality({ commit }, nationalityCode) {
    rootState.Http.axios.post(`${Url.Nationality}?code=${nationalityCode}`).then(response => {
      commit('FuncGetNationality', { result: response.data })
    })
  },
  FuncGetOccupation({ commit }, occupationCode) {
    rootState.Http.axios.post(`${Url.Occupation}`, {
      PlanCode: planCode,
      OccupationCode: occupationCode
    }).then(response => {
      commit('FuncGetOccupation', { result: response.data, occupationCode })
    })
  },
  FuncGetCityData({ commit }) {
    rootState.Http.axios.post(`${Url.City}`).then(response => {
      commit('FuncGetCityData', { result: response.data })
    })
  },
  FuncGetDistrictData({ commit }, cityName) {
    rootState.Http.axios.post(`${Url.District}?cityName=${cityName}`).then(response => {
      commit('FuncGetDistrictData', { result: response.data })
    })
  },
  /**
   * 取回金融機構
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetBank({ commit }) {
    rootState.Http.axios.post(`${Url.Banks}`).then(response => {
      commit('FuncGetBank', { result: response.data })
    })
  },
  /**
   * 取回上一張保單受益人
   * @param {當前Vuex狀態} commit VuexStoreState
   */
  async FuncGetBeneficiary({ commit }) {
    await rootState.Http.axios.post(`${Url.Beneficiary}`).then(response => {
      commit('FuncGetBeneficiary', { result: response.data })
    })
  },
  /**
   * 發送OTP
   * @param {當前Vuex狀態} commit VuexStoreState
   */
  FuncSendOTP({ commit }) {
    rootState.Http.axios.post(`${Url.SendOTP}`).then(response => {
      commit('FuncGetBeneficiary', { result: response.data })
    })
  },
  /**
   * 驗證OTP
   * @param {當前Vuex狀態} commit VuexStoreState
   */
  FuncCheckOTP({ commit }) {
    rootState.Http.axios.post(`${Url.SendOTP}`).then(response => {
      commit('FuncGetBeneficiary', { result: response.data })
    })
  },
  /**
   * 取回同意書
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {string} para 請求參數
   */
  FuncGetProvision({ commit }, provisionName) {
    rootState.Http.axios.post(`${Url.Provision}?provisionName=${provisionName}`).then(response => {
      commit('FuncGetProvision', { provisionName, result: response.data })
    })
  }
}
