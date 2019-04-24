function valEstimateData(postData, notifyArr) {
  var errors = ''

  // 本人僅為台灣之稅務居民
  if (postData.IsTaiwanTaxDuty === undefined || postData.IsTaiwanTaxDuty === '') {
    errors += '請選擇告知事項。\n'
  } else if (postData.IsTaiwanTaxDuty === '0') {
    alert('親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。')
    return
  }

  // 職業類別
  if (postData.client_occupation_class_code === '') {
    errors += '請選擇職業類別。\n'
  }
  // 出生地-國家 出生地-城市
  if (postData.CRSData.birth_national === '' || postData.CRSData.birth_city === '') {
    errors += '為確保您的權益，請將FATCA及CRS個人客戶自我聲明書-基本資料填寫完整。\n'
  } else {
    var intReg = new RegExp('[0-9\uFF10-\uFF19]')
    if (intReg.test(postData.CRSData.birth_city)) {
      errors += '請輸入正確的「出生地-城市」格式。\n'
    }
  }

  // 躉繳
  if (postData.IsOneTimePayment === undefined || postData.IsOneTimePayment === '') {
    errors += '請選擇是否躉繳。\n'
  }

  // 首期繳費管道 init_method
  if (postData.init_method === '') {
    errors += '請選擇首期繳費管道。\n'
  }
  // 第一期保費
  var msg = CheckFirstPayAmt(postData)
  if (msg !== '') {
    errors += (msg + '\n')
  }

  // 續期(非躉繳時檢驗) 是否躉繳
  if (!postData.IsOneTimePayment) {
    // 約定續期繳法別: 不定Y 分期N
    var modx99ind = postData.modx_99_ind
    var qpoop25premorg = postData.qpoop_25_prem
    var qpoop25prem = parseInt(qpoop25premorg) || 0
    var qpoop25modx = postData.qpoop_25_modx

    if (modx99ind === '' || modx99ind === undefined) {
      errors += '請選續期繳法別。\n'
    } else if (modx99ind === 'N') {
      if (qpoop25prem === 0) {
        errors += '續期保險費金額不可為空白。\n'
      } else {
        if (!(/^(\+|-)?\d+$/.test(qpoop25premorg))) {
          errors += '續期保險費限輸入整數。\n'
        } else if (qpoop25prem < 3000 || qpoop25prem > 750000) {
          errors += '續期繳費限輸入3,000~750,000元。\n'
        }
      }
      if (qpoop25modx === '') {
        errors += '請選擇續期繳別。\n'
      }
      // 續期繳費管道
      if (postData.method === '') {
        errors += '請選擇續期繳費管道。\n'
      }
      if (postData.init_method !== 'C' && postData.method === 'C') {
        errors += '因選擇信用卡繳費，首期繳費管道必須為信用卡。\n'
      }
      if (postData.method === 'B') {
        // 帳號在partial先檢驗
        // if (!data.PreferredValidateState) {
        //   $('#input-BankAccount').trigger('blur')
        //   return 'BankAccountError'
        // }
      }
    }
  }

  // 保險年齡年金給付開始日
  let fstAnnyPayAge = postData.fst_anny_pay_age
  // 年金給付方式
  var annyFrequence = postData.anny_frequence
  // 保證期間
  var qpoop19year = postData.qpoop_19_year

  if (fstAnnyPayAge === '') {
    errors += '給付開始日未填。\n'
  } else if (fstAnnyPayAge > 86) {
    errors += '給付開始日不能超過86。\n'
  }

  if (annyFrequence === '' || annyFrequence === undefined) {
    errors += '請選擇給付方式。\n'
  } else {
    // 分期給付
    if (annyFrequence !== '0') {
      if (qpoop19year === '') {
        errors += '請選擇年金約定之分期給付保證期間。\n'
      }
    }
  }

  // 保價金通知方式
  var CashNoticeType = postData.value_ind
  if (CashNoticeType === undefined || CashNoticeType === '') {
    errors += '請選擇保價金通知方式。\n'
  } else {
    if (CashNoticeType === '4' && notifyArr[2] && postData.email === '') {
      errors += '請輸入保價金通知方式新的電子郵件。\n'
    }
    if (CashNoticeType === '2') {
      var city3 = postData.city3
      var district3 = postData.district3
      var road3 = postData.road3
      if (city3 === '') {
        errors += '請選擇保價金通知方式 - 城市。\n'
      }
      if (district3 === '') {
        errors += '請選擇保價金通知方式 - 地區。\n'
      }
      if (road3 === '') {
        errors += '請填寫保價金通知方式 - 地址。\n'
      }
    }
  }
  return errors
}
/**
 * 驗證第一期保險費
 */
function CheckFirstPayAmt(postData) {
  var amtorg = postData.face_amt
  var amt = parseInt(amtorg) || 0
  if (!(/^(\+|-)?\d+$/.test(amtorg))) {
    return '第一期保險費只能輸入無小數點的數字。'
  }

  var limitAmt = GetInitialPaymentRange(postData)
  if (amt < limitAmt.min || amt > limitAmt.max) {
    return '第一期保險費限輸入" + limitAmt.min.toLocaleString() + "~" + limitAmt.max.toLocaleString() + "元，請調整。'
  }
  return ''
}

// 取首期最高最小金額
function GetInitialPaymentRange(postData) {
  var hasEdda = 'True'
  let minAmt = 3000
  let maxAmt = 750000
  let initPayType = postData.init_method
  if (initPayType === 'C') {
    maxAmt = 750000
  } else if (hasEdda === 'False') {
    maxAmt = 100000
  } else {
    maxAmt = 750000
  }
  // 是否躉繳
  var isOneTimePay = postData.IsOneTimePayment
  if (isOneTimePay) {
    minAmt = 10000
  } else if (postData.qpoop_25_modx === '1' && postData.modx_99_ind === 'N') { // 續期保險費每期 繳別
    // 續期月繳
    maxAmt = maxAmt / 2
  }

  var range = {
    min: minAmt,
    max: maxAmt
  }

  return range
}

function setDataOnEstimateStep(postData) {
  console.log('client_rate_sex', postData.client_rate_sex)
  console.log('client_occupation_class', postData.client_occupation_class)
  console.log('client_occupation_class_code', postData.client_occupation_class_code)
  console.log('client_occupation_class_code_name', postData.client_occupation_class_code_name)
  console.log('web_appl_ind', postData.web_appl_ind)
  console.log('po_issue_date', postData.po_issue_date)
  console.log('face_amt', postData.face_amt)
  console.log('IsOneTimePayment', postData.IsOneTimePayment)
  console.log('init_method', postData.init_method)
  console.log('fst_anny_pay_age', postData.fst_anny_pay_age)
  console.log('anny_frequence', postData.anny_frequence)
  console.log('qpoop_19_year', postData.qpoop_19_year)
  console.log('value_ind', postData.value_ind)
  console.log('Applicant_BankCode', postData.Applicant_BankCode)
  console.log('Applicant_BranchCode', postData.Applicant_BranchCode)
  console.log('Applicant_Account', postData.Applicant_Account)
  console.log('Applicant_BankName', postData.Applicant_BankName)
  console.log('Applicant_BranchName', postData.Applicant_BranchName)
  console.log('email', postData.email)
  console.log('city3', postData.city3)
  console.log('district3', postData.district3)
  console.log('road3', postData.road3)
  console.log('zip3', postData.zip3)
  console.log('EmployeeNo', postData.EmployeeNo)
  console.log('QusAns[0][Answar]', postData.QusAns[0].Answar)
  console.log('CRSData[birth_city]', postData.CRSData.birth_city)
  console.log('CRSData[birth_national]', postData.CRSData.birth_national)
  console.log('IsTaiwanTaxDuty', postData.IsTaiwanTaxDuty)
}

export {
  valEstimateData,
  setDataOnEstimateStep
}
