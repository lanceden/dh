import Url from '../utils/constUrl'
import rootState from './state'

export default {
  SetTitle({ commit }, title) {
    commit('SetTitle', title)
  },
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
  /**
   * 設定受益人關係輸入框是否關閉
   * @param {commit} param0 提夜狀態
   * @param {bool} isDisable true:關閉輸入 false:開啟輸入
   */
  SetBenfinheritDisable({ commit }, { benfIndex, isDisable }) {
    commit('SetBenfinheritDisable', { benfIndex, isDisable })
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
   * 取得客戶約定帳戶
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncEachAccount({ commit }) {
    rootState.Http.axios.post(`${Url.EachAccount}`).then(response => {
      commit('FuncEachAccount', { result: response.data })
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
  /**
   * 取回國籍
   * @param {當前Vuex狀態} commit VuexStoreState
   */
  FuncGetNationality({ commit }, nationalityCode) {
    rootState.Http.axios.post(`${Url.Nationality}?code=${nationalityCode}`).then(response => {
      commit('FuncGetNationality', { result: response.data })
    })
  },
  /**
   * 取回職業類別名稱
   * @param {commit} param0 提交狀態
   * @param {string} para 銀行代碼
   */
  async FuncGetOccupation({ commit }, para) {
    await rootState.Http.axios.post(`${Url.Occupation}`, para).then(response => {
      commit('FuncGetOccupation', { result: response.data, para })
    })
  },
  /**
   * 取回縣市
   * @param {當前Vuex狀態} commit VuexStoreState
   */
  async FuncGetCityData({ commit }) {
    await rootState.Http.axios.post(`${Url.City}`).then(response => {
      commit('FuncGetCityData', { result: response.data })
    })
  },
  /**
   * 取回縣市返回Promise
   */
  FuncGetCityDataPromise() {
    return new Promise((resolve, reject) => {
      rootState.Http.axios.post(`${Url.City}`).then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  },
  /**
   * 取回區域
   * @param {當前Vuex狀態} commit VuexStoreState
   */
  async FuncGetDistrictData({ commit }, { cityName, target }) {
    await rootState.Http.axios.post(`${Url.District}?cityName=${cityName}`).then(response => {
      commit('FuncGetDistrictData', { result: response.data, target })
    })
  },
  /**
   * 取回區域返回Promise
   */
  FuncGetDistrictDataPromise(context, cityName) {
    return new Promise((resolve, reject) => {
      rootState.Http.axios.post(`${Url.District}?cityName=${cityName}`).then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
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
   * @param {object} para 請求參數
   */
  async FuncGetPremiums({ commit }, para) {
    await rootState.Http.axios.post(`${Url.Premiums}`, para).then(response => {
      commit('FuncGetPremiums', { result: response.data })
    })
  },
  /**
   * 本人旅平附約保額(申根非申根)
   * @param {當前Vuex狀態} commit VuexStoreState
   * @param {object} para 請求參數
   */
  async FuncGetInsTravelSupplCoverageSli({ commit }, para) {
    await rootState.Http.axios.post(`${Url.InsTravelSupplCoverageSli}`, para).then(response => {
      commit('FuncGetInsTravelSupplCoverageSli', { result: response.data })
    })
  },
  /**
   * 旅平子女主約保額
   * @param {當前Vuex狀態} commit VuexStoreState
   * @param {object} para 請求參數
   */
  FuncGetInsTravelChildCoverageSli() {
    return new Promise((resolve, reject) => {
      rootState.Http.axios.post(`${Url.InsTravelChildCoverageSli}`).then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  },
  /**
   * 旅平子女附約保額
   * @param {當前Vuex狀態} commit VuexStoreState
   * @param {object} para 請求參數
   */
  FuncGetInsTravelChildSupplCoverageSli(context, schengen) {
    return new Promise((resolve, reject) => {
      rootState.Http.axios.post(`${Url.InsTravelChildSupplCoverageSli}?schengen=${schengen}`).then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  },
  /**
   * 檢查是否為企業客戶
   * @param {當前Vuex狀態} commit VuexStoreState
   * @param {object} para 請求參數
   */
  FuncVerifyEmploymentId({ commit }, entCode) {
    rootState.Http.axios.post(`${Url.VerifyEmploymentId}?empId=${entCode}`).then(response => {
      commit('FuncVerifyEmploymentId', { result: response.data })
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
   * @param {string} provisionName 同意書名稱
   */
  FuncGetProvision({ commit }, provisionName) {
    setTimeout(rootState.Http.axios.post(`${Url.Provision}?provisionName=${provisionName}`).then(response => {
      commit('FuncGetProvision', { provisionName, result: response.data })
    }), 1000)
  },
  /**
   * 驗證是否為花旗銀行卡
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {string} cardNo 信用卡前六碼
   */
  FuncIsCityBank({ commit }, cardNo) {
    rootState.Http.axios.post(`${Url.IsCityBank}?cardNo=${cardNo}`).then(response => {
      commit('FuncIsCityBank', { result: response.data })
    })
  },
  /**
   * 匯入子女資料
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {string} planCode 險種代碼
   */
  FuncImportChildren({ commit }, { planCode }) {
    rootState.Http.axios.post(`${Url.ImportChildren}`).then(response => {
      commit('FuncImportChildren', { result: response.data, planCode })
    })
  },
  /**
   * 抓取優惠活動列表
   */
  FuncPromotionList({ commit }) {
    rootState.Http.axios.post(`${Url.PromotionList}`).then(response => {
      commit('FuncPromotionList', { result: response.data })
    })
  }
}
