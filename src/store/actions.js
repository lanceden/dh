import Url from '../utils/constUrl'
import rootState from './state'

export default {
  SetShowLoading({ commit }) {
    commit('SetShowLoading')
  },
  SethideLoading({ commit }) {
    commit('SethideLoading')
  },
  SetIsShowModal({ commit }, isShow) {
    commit('SetIsShowModal', isShow)
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
  /**
   * 取回職業類別名稱
   * @param {commit} param0 提交狀態
   * @param {string} bankCode 銀行代碼
   */
  FuncGetOccupation({ commit }, para) {
    rootState.Http.axios.post(`${Url.Occupation}`, para).then(response => {
      commit('FuncGetOccupation', { result: response.data, para })
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
   * 取回上一張保單受益人
   * @param {當前Vuex狀態} commit VuexStoreState
   */
  async FuncGetBeneficiary({ commit }, { planCode, stateData }) {
    await rootState.Http.axios.post(`${Url.Beneficiary}`).then(response => {
      commit('FuncGetBeneficiary', { result: response.data, planCode, stateData })
    })
  },
  /**
   * 取回保戶帳號資料
   * @param {當前Vuex狀態} commit VuexStoreState
   */
  async FuncGetAccountData({ commit }) {
    await rootState.Http.axios.post(`${Url.GetAccountData}`).then(response => {
      commit('FuncGetAccountData', { result: response.data })
    })
  },
  /**
   * 險種的保額表 (驗證與未驗證)
   * @param {當前Vuex狀態} commit VuexStoreState
   * @param {object} parpa 請求參數
   */
  async FuncGetPremiums({ commit }, parpa) {
    await rootState.Http.axios.post(`${Url.Premiums}`, parpa).then(response => {
      commit('FuncGetPremiums', { result: response.data })
    })
  },
  /**
   * 發送OTP
   * @param {當前Vuex狀態} commit VuexStoreState
   */
  FuncSendOTP({ commit }, { para, router }) {
    rootState.Http.axios.post(`${Url.SendOTP}`, para).then(response => {
      commit('FuncSendOTP', { result: response.data, router })
    })
  },
  /**
   * 驗證OTP
   * @param {當前Vuex狀態} commit VuexStoreState
   */
  FuncCheckOTP({ commit }, { verify, router }) {
    rootState.Http.axios.post(`${Url.CheckOTP}`, verify).then(response => {
      commit('FuncCheckOTP', { result: response.data, router })
    })
  },
  /**
   * 取回同意書
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {string} para 請求參數
   */
  FuncGetProvision({ commit }, provisionName) {
    setTimeout(rootState.Http.axios.post(`${Url.Provision}?provisionName=${provisionName}`).then(response => {
      commit('FuncGetProvision', { provisionName, result: response.data })
    }), 1000)
  },
  /**
   * 驗證是否為花錢銀行卡
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {string} para 請求參數
   */
  FuncIsCityBank({ commit }, cardNo) {
    rootState.Http.axios.post(`${Url.IsCityBank}?cardNo=${cardNo}`).then(response => {
      commit('FuncIsCityBank', { result: response.data })
    })
  },
  /**
   * 取得客戶約定帳戶
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   */
  FuncGetEachAccount({ commit }) {
    rootState.Http.axios.post(`${Url.EACHAccount}`).then(response => {
      commit('FuncIsCityBank', { result: response.data })
    })
  }
}
