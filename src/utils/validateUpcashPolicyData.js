function valPolicyData(postData) {
  var errors = ''
  // 市話
  if (postData.phone_area === '' || postData.phone_main === '') {
    errors += '請輸入聯絡電話。\n'
  }

  // 戶籍地址
  var city2 = $('#UpCashRegisteredCity').val()
  var district = $('#UpCashRegisteredCounty').val()
  var zip2 = district.length > 0 ? district.substring(0, 3) : ''
  var district2 = district.length > 3 ? district.substring(3) : ''
  var road2 = $('#UpCashRegisteredRoad').val()

  // 戶籍地址
  if ($('input[name='RegisteredAddr']:checked').val() == undefined || $('input[name='RegisteredAddr']:checked').val() == '') {
    errors += '請選擇戶籍地址。\n'
  }
  if ($('input[name='RegisteredAddr']:checked').val() == '' && '花蓮縣富里鄉富里路1號' == '') {
    errors += '無現有戶籍地址，請輸入新的戶籍地址。\n'
  }
  if ($('input[name='RegisteredAddr']:checked').val() == 'n_a') {
    if (city2 == '') {
      errors += '請選擇戶籍地址-城市。\n'
    }

    if (district2 == '') {
      errors += '請選擇戶籍地址-地區。\n'
    }

    if (road2 == '') {
      errors += '請填寫戶籍地址。\n'
    }
  }

  // 要保人匯款帳戶
  if ($('#bankNum-0').val() == '') {
    errors += '請填寫要保人總行代碼。\n'
  }
  if ($('#bankBranchNum-0').val() == '') {
    errors += '請選擇要保人分行代碼。\n'
  }
  if ($('#bankAccount-0').val() == '') {
    errors += '請填寫要保人銀行帳戶。\n'
  }

  var bac_error = bankAccountCheck(true, 0)
  if (bac_error != '') {
    return bac_error
  }

  errors += checkBenefInfo()
  if ($('#beneficiaryNumber').val() == 2) {
    errors += checkBenefInfo2()
  }
  else if ($('#beneficiaryNumber').val() == 3) {
    errors += checkBenefInfo2()
    errors += checkBenefInfo3()
  }

  if ($('#income').val() == '') {
    errors += '請填寫年收入。\n'
  }
  else if (isNaN($('#income').val())) {
    errors += '年收入請填寫數字。\n'
  }
  else if ($('#income').val() < 0) {
    errors += '年收入必須大於 0。\n'
  }

  if ($('#homeIncome').val() == '') {
    errors += '請填寫家庭年收入。\n'
  }
  else if (isNaN($('#homeIncome').val())) {
    errors += '家庭年收入請填寫數字。\n'
  }
  else if ($('#homeIncome').val() + $('#income').val() <= 0) {
    errors += '年收入 + 家庭年收入 必須大於 0。\n'
  }

  var time1 = $('#PhoneCallTime1').prop('checked') ? '1' : '0'
  var time2 = $('#PhoneCallTime2').prop('checked') ? '1' : '0'
  var time3 = $('#PhoneCallTime3').prop('checked') ? '1' : '0'
  if (time1 == '0' && time2 == '0' && time3 == '0') {
    errors += '請選擇電訪時間。\n'
  }


  var city1 = $('#mailCity').val()
  var tempDistrict2 = $('#mailCounty').val()
  var zip1 = tempDistrict2.length > 0 ? tempDistrict2.substring(0, 3) : ''
  var district1 = tempDistrict2.length > 3 ? tempDistrict2.substring(3) : ''
  var road1 = $('#mailAddress').val()
  if ($('input[name='MailToAddress']:checked').val() == undefined || $('input[name='RegisteredAddr']:checked').val() == '') {
    errors += '請選擇保單寄送地址。\n'
  }
  if ($('input[name='MailToAddress']:checked').val() == 'o_a' && '台東縣臺東市臺東路1號1樓' == '') {
    errors += '無現有保單寄送地址，請輸入新的保單寄送地址。\n'
  }
  if ($('input[name='MailToAddress']:checked').val() == 'n_a') {
    if (city1 == '') {
      errors += '請選擇保單寄送地址-城市。\n'
    }

    if (district1 == '') {
      errors += '請選擇保單寄送地址-地區。\n'
    }

    if (road1 == '') {
      errors += '請填寫保單寄送地址。\n'
    }
  }
  return errors
}
