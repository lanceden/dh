export default {
  SetShowLoading(state) {
    state.ShowLoading = true
  },
  SethideLoading(state) {
    state.ShowLoading = false
  },
  SetHttp(state, { http }) {
    state.Http = http
  },
  SetApiToken(state, { token }) {
    state.ApiToken = token
  },
  SetHeaderIsActive(state, isAcvie) {
    state.HeaderIsActive = isAcvie
  },
  /**
   * 設定受益人一關係輸入框是否關閉
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  SetBenfinheritOneDisable(state, isDisable) {
    state.BenfinheritOneDisable = isDisable
  },
  /**
   * 取回職業類別
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetJob(state, { result }) {
    state.JOBDATA = result.Data.Result
    state.JOB = result.Data.Result[0].OCCUPATION_CODE
  },
  /**
   * 取回金融機構分行
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetBankBranches(state, { result }) {
    state.BANKBRANCHESDATA = result.Data.Result
  },
  /**
   * 取回國籍
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetNationality(state, { result }) {
    state.NATIONDATA = result.Data.Result
    state.NATION = '0'
  },
  /**
   * 取回職業類別名稱
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetOccupation(state, { result, occupationCode }) {
    state.OCCUPATIONDATA = result.Data.Result
    state.OCCUPATION = result.Data.Result[0].OCCUPATION_CODE
    state.JOB = occupationCode
  },
  /**
   * 取回城市
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetCityData(state, { result }) {
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
    state.BENEFICIARY = result.ResultCode !== '0000' ? [] : result.Data
    console.log(state.BENEFICIARY)
  }
}
