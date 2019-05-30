export default {
  SetTitle(state, title) {
    state.PLANNAME = title
  },
  SetShowLoading(state) {
    state.ShowLoading = true
  },
  SethideLoading(state) {
    setTimeout(() => {
      state.ShowLoading = false
    }, 1000)
  },
  SetHttp(state, { http }) {
    state.Http = http
  },
  SetApiToken(state, { token }) {
    state.ApiToken = token
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
   * 取得客戶約定帳戶
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncEachAccount(state, { result }) {
    state.EACHACCOUNT = result.Data.Result
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
   * @param {使用地址陣列} target community:通訊地址 空:一般使用
   */
  FuncGetDistrictData(state, { result, target }) {
    // 戶籍地址
    if (target !== 'community') {
      state.DISTRICTDATA = result.Data.Result
    } else {
      state.DISTRICTDATACOMMUNITY = result.Data.Result
    }
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
   * 本人旅平附約保額(申根非申根)
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetInsTravelSupplCoverageSli(state, { result }) {
    state.TRAVELSUPPL = result.Data.Result
  },
  /**
   * 旅平子女主約保額
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetInsTravelChildCoverageSli(state, { result }) {
    state.CHILDCOVERAGESLI = result.Data.Result
  },
  /**
   * 旅平子女附約保額
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetInsTravelChildSupplCoverageSli(state, { result }) {
    state.CHILDSUPPLCOVERAGESLI = result.Data.Result
  },
  /**
   * 檢查是否為企業客戶
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncVerifyEmploymentId(state, { result }) {
    state.ISENTERPRISECODE = result.Data.Result
  },
  /**
   * 取回上一張保單受益人
   * @param {當前Vuex狀態} state VuexStoreState
   * @param {請求結果} param1 請求回傳結果
   */
  FuncGetBeneficiary(state, { result, planCode, stateData }) {
    state.BENEFICIARY = result.ResultCode !== '0000' ? [] : result.Data
    stateData.benf_num = state.BENEFICIARY.length
    // 非旅平
    if (planCode !== '62020' && planCode !== '66020') {
      if (stateData.benf_num > 0) {
        state.BENEFICIARY.forEach((item, index) => {
          if (index === 0) {
            stateData.relation_ben_death = item.Relationship
            stateData.benf_phone = item.PhoneNo
            stateData.benf_name = item.Name
            stateData.BenfNationalityCode = item.NalCode
            stateData.BenfNationality = item.NalName
            stateData.benf_id = item.IdNo
            if (item.DobYear !== null) stateData.benf_dob = `${item.DobYear}-${item.DobMonth}-${item.DobDay}`
            stateData.BenfBankCode1 = item.Bank_Code1
            stateData.BenfAddZip = item.AddrZipCode
            stateData.BenfAdd_City = item.AddrCity
            stateData.BenfAdd_County = item.AddrCounty
            stateData.BenfAddRemain = item.AddrStreet
            stateData.BenfAddress = `${item.AddrCity}${item.AddrCounty}${item.AddrStreet}`
            stateData.BenfBankAccount1 = item.Account
          }
          if (index === 1) {
            stateData.relation_ben_death2 = item.Relationship
            stateData.benf_phone2 = item.PhoneNo
            stateData.benf_name2 = item.Name
            stateData.BenfNationalityCode2 = item.NalCode
            stateData.BenfNationality2 = item.NalName
            stateData.benf_id2 = item.IdNo
            if (item.DobYear !== null) stateData.benf_dob2 = `${item.DobYear}-${item.DobMonth}-${item.DobDay}`
            stateData.BenfBankCode2 = item.Bank_Code1
            stateData.BenfAddZip2 = item.AddrZipCode
            stateData.BenfAdd_City2 = item.AddrCity
            stateData.BenfAdd_County2 = item.AddrCounty
            stateData.BenfAddRemain2 = item.AddrStreet
            stateData.BenfAddress2 = `${item.AddrCity}${item.AddrCounty}${item.AddrStreet}`
            stateData.BenfBankAccount2 = item.Account
          }
          if (index === 2) {
            stateData.relation_ben_death3 = item.Relationship
            stateData.benf_phone3 = item.PhoneNo
            stateData.benf_name3 = item.Name
            stateData.BenfNationalityCode3 = item.NalCode
            stateData.BenfNationality3 = item.NalName
            stateData.benf_id3 = item.IdNo
            if (item.DobYear !== null) stateData.benf_dob3 = `${item.DobYear}-${item.DobMonth}-${item.DobDay}`
            stateData.BenfBankCode13 = item.Bank_Code1
            stateData.BenfAddZip3 = item.AddrZipCode
            stateData.BenfAdd_City3 = item.AddrCity
            stateData.BenfAdd_County3 = item.AddrCounty
            stateData.BenfAddRemain3 = item.AddrStreet
            stateData.BenfAddress3 = `${item.AddrCity}${item.AddrCounty}${item.AddrStreet}`
            stateData.BenfBankAccount3 = item.Account
          }
        })
      }
    } else { // ENTTRAVELPOSTDATA
      let benfData = planCode === '66020' ? state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo : state.EntTravel.ENTTRAVELPOSTDATA.PolicyData.InsuredInfo
      benfData.forEach((item, index) => {
        if (index === 0) {
          item.BeneficiaryData = []
          item.BeneficiaryData.push({
            Relationship: state.BENEFICIARY[index].Relationship,
            Nationality: state.BENEFICIARY[index].NalName,
            Name: state.BENEFICIARY[index].Name,
            IdNo: state.BENEFICIARY[index].IdNo,
            Dob: `${state.BENEFICIARY[index].DobYear}/${state.BENEFICIARY[index].DobMonth}/${state.BENEFICIARY[index].DobDay}`,
            ContactNumber: state.BENEFICIARY[index].PhoneNo,
            Address: {
              City: state.BENEFICIARY[index].AddrCity,
              District: state.BENEFICIARY[index].AddrCounty,
              Street: state.BENEFICIARY[index].AddrStreet
            }
          })
          state.BENEFICIARY[index].BeneficiaryQty = 1
        }
      })
    }
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
   * 匯入子女資料
   * @param {當前Vuex狀態} commit VuexStoreState.commit
   * @param {string} para 請求參數
   */
  FuncImportChildren(state, { result, planCode }) {
    let childData = result.Data.Result
    let importLength = childData.length
    // 判斷當前險種為旅平或企旅
    if (planCode === '66020') {
      state.Travel.TRAVELPOSTDATA.PolicyData.ChildrenNo = importLength
      state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo = []
      // 本人加子女，要保留本人資料
      if (parseInt(state.Travel.TRAVELPOSTDATA.TargetType) === 2) {
        state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.push({
          Index: 0,
          Relation: 1,
          PersonalData: {
            ID: state.Travel.TRAVELPOSTDATA.PolicyData.ProposerInfo[0].ID,
            Name: state.Travel.TRAVELPOSTDATA.PolicyData.ProposerInfo[0].Name,
            Dob: state.Travel.TRAVELPOSTDATA.PolicyData.ProposerInfo[0].Dob
          },
          HasAuthRep: null
        })
      }
      for (let i = 1; i <= importLength; i++) {
        state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.push({
          Index: i,
          Relation: 3,
          PersonalData: {
            ID: childData[i - 1].ID,
            Name: childData[i - 1].Name,
            Dob: childData[i - 1].Dob
          },
          HasAuthRep: null
        })
      }
    } else {
      state.EntTravel.ENTTRAVELPOSTDATA.PolicyData.ChildrenNo = importLength
      state.EntTravel.ENTTRAVELPOSTDATA.PolicyData.InsuredInfo = []
      // 本人加子女，要保留本人資料
      if (parseInt(state.EntTravel.ENTTRAVELPOSTDATA.TargetType) === 2) {
        state.EntTravel.ENTTRAVELPOSTDATA.PolicyData.InsuredInfo.push({
          Index: 0,
          Relation: 1,
          PersonalData: {
            ID: state.EntTravel.ENTTRAVELPOSTDATA.PolicyData.ProposerInfo[0].ID,
            Name: state.EntTravel.ENTTRAVELPOSTDATA.PolicyData.ProposerInfo[0].Name,
            Dob: state.EntTravel.ENTTRAVELPOSTDATA.PolicyData.ProposerInfo[0].Dob
          },
          HasAuthRep: null
        })
      }
      for (let i = 1; i <= importLength; i++) {
        state.EntTravel.ENTTRAVELPOSTDATA.PolicyData.InsuredInfo.push({
          Index: i,
          Relation: 3,
          PersonalData: {
            ID: childData[i - 1].ID,
            Name: childData[i - 1].Name,
            Dob: childData[i - 1].Dob
          },
          HasAuthRep: null
        })
      }
    }
  }
}
