export default {
  SetShowLoading(state) {
    state.ShowLoading = true
  },
  SethideLoading(state) {
    setTimeout(() => {
      state.ShowLoading = false
    }, 1000)
  },
  SetIsShowModal(state, isShow) {
    state.isShowModal = isShow
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
  },
  /**
   * 取回職業類別名稱
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetOccupation(state, { result, para }) {
    if (para.Type === '4') {
      state.OCCUPATIONDATA = result.Data.Result
    } else {
      state.JOBSUBOCCUPATIONDATA = result.Data.Result[0]
    }
  },
  /**
   * 取回城市
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetCityData(state, { result }) {
    state.CITYDATA = result.Data.Result
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
   * 取回保戶帳號資料
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetAccountData(state, { result }) {
    state.ACCOUNTDATA = result.Data.Result
  },
  /**
   * 取回各商品不同身份別保額
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetPremiums(state, { result }) {
    state.PREMIUMS = result.Data.Result
  },
  /**
   * 取回上一張保單受益人
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetBeneficiary(state, { result }) {
    state.BENEFICIARY = result.ResultCode !== '0000' ? [] : result.Data
  },
  /**
   * 發送OTP
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncSendOTP(state, { result, router }) {
    state.OTPSENDCODE = result.Data.Result.SendCode
    state.OTPSENDTIME = result.Data.Result.OtpSendTime
    state.OTPLASTTIME = result.Data.Result.OtpLastTime
    router.push('/otpverify')
  },
  /**
   * 驗證OTP
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncCheckOTP(state, { result, router }) {
    // OTP驗證成功跳轉至付款頁
    if (result.ResultCode === '0000') {
      state.OTPVALIDSTETIME = result.Data.Result.OtpValidateTime
      router.push('/payment')
    } else {
      alert('OTP驗證失敗')
    }
  },
  /**
   * 取回同意書
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetProvision(state, { provisionName, result }) {
    state.PROVISIONDATA.push({
      provisionName,
      Result: result.Data.Result
    })
  },
  /**
   * 驗證是否為花錢銀行卡
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncIsCityBank(state, { result }) {
    state.ISCITYBANKCARD = result.ResultCode === '0000'
  },
  /**
   * 取得客戶約定帳戶
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetEachAccount(state, { result }) {
    state.EACHACCOUNT = result.Data.Result
    return state.EACHACCOUNT
  }
}
