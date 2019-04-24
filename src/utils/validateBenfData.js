 import $ from 'jquery'
 // 檢查的function
 function checkBenefInfoOne(benfData) {
   console.log($('#test').val())
   var mergeMessage = ''
   var benData = {
     text: '(一)',
     name: benfData.benf_name,
     id: benfData.benf_id,
     sequence: benfData.relation_ben_death_seq,
     percent: benfData.relation_ben_death_seq_percent,
     relation: benfData.relation_ben_death,
     dob: benfData.benf_dob,
     phone: benfData.benf_phone,
     city: benfData.BenfAdd_City,
     county: benfData.BenfAdd_County,
     street: benfData.BenfAddRemain,
     nationality: benfData.BenfNationality
   }
   var errors = CheckBeneficiaryData(benData)
   for (var er in errors) {
     mergeMessage += errors[er] + '\r\n'
   }

   // 驗證客戶登打受益人出生日期是否為有效日期
   mergeMessage += checkedBirthday(1, benfData.benf_dob)

   if (mergeMessage !== '') {
     return mergeMessage
   }

   var inputData = { ID: benfData.benf_id }
   $.ajax({
     type: 'POST',
     url: '/m/Insure/UpCash/checkID',
     data: inputData,
     async: false,
     success: function(rtn) {
       if (rtn.IsSuccess !== true) {
         mergeMessage = '身故受益人(一)身分證字號輸入錯誤，請檢查。\r\n'
       }

       // 受益人個數
       if ($('#beneficiaryNumber').val() === 1) {
         var bData = {
           num: 1,
           beneficiary: [{
             no: 1,
             text: '(一)',
             sequence: parseInt(benfData.relation_ben_death_seq),
             percent: parseInt(benfData.relation_ben_death_seq_percent)
           }]
         }
         var errors = CheckBeneficiarySequence(bData)
         var message = ''
         if (errors && errors.length > 0) {
           for (var er in errors) {
             message += errors[er] + '\r\n'
           }

           mergeMessage = message
         }
       }
       mergeMessage = bankAccountCheck(benfData.relation_ben_death !== '8', 1)
     }
   })
   return mergeMessage
 }

 function CheckBeneficiarySequence(data, max) {
   var error = []

   if (data === undefined || data.num === undefined || isNaN(data.num) || data.num < 0 || data.beneficiary === undefined || !Array.isArray(data.beneficiary)) {
     return error
   }

   if (data.num !== data.beneficiary.length) {
     error.push('身故受益人有錯誤，請確認')

     return error
   }

   var val = data.beneficiary.filter(function(el, i) {
     return isNaN(el.no) || el.text === undefined || isNaN(el.sequence) || isNaN(el.percent)
   })
   if (val.length > 0) {
     error.push('身故受益人有錯誤，請確認')

     return error
   }

   max = max || 3

   var bNo = data.num
   for (var b = 0; b < data.beneficiary.length; ++b) {
     var ben = data.beneficiary[b]
     var benTxt = ben.text || ''

     if (ben.sequence < 1 || ben.sequence > data.num) {
       error.push('身故受益人' + benTxt + '「給付順位」有異，請確認')
     }
     if (ben.percent < 1 || ben.percent > 100) {
       error.push('身故受益人' + benTxt + '「給付比例」有異，請確認')
     }
   }

   if (error.length > 0) return error

   if (bNo === 1) {
     if (data.beneficiary[0].sequence !== 1) {
       error.push('無身故受益人給付順位 1，請確認')
     }
     if (data.beneficiary[0].percent !== 100) {
       error.push('身故受益人「給付比例」應為 100%，請確認')
     }

     return error
   }

   let seqData = []
   for (var s = 0; s < max; ++s) {
     var seq = data.beneficiary.filter(function(el, i) {
       return el.sequence === (s + 1)
     })

     if (s > 0 && seqData[s - 1].length === 0 && seq.length > 0) {
       /* dont have previous sequence, out of order */
       error.push('無身故受益人「給付順位' + s + '」不可有「給付順位' + (s + 1) + '」，請確認')

       return error
     }

     seqData.push(seq)
   }

   for (var i = 0; i < seqData.length; ++i) {
     var per = seqData[i].reduce(function(a, c) {
       if (c === undefined || c.percent === undefined) {
         return a + 0
       }

       return a + c.percent
     }, 0)

     if (per !== 100 && seqData[i].length > 0) {
       /* 有受益人順位資料, 且總和不是 100% */
       error.push('身故受益人給付順位' + seqData[i][0].sequence + '「給付比例」總和應為 100%，請確認')
     }
   }
   return error
 }

 function CheckBeneficiaryData(data) {
   var error = []
   if (data === undefined) {
     return error
   }
   var txt = data.text || ''
   if (data.name === '') {
     error.push('請填寫「身故受益人' + txt + '姓名」')
   }
   if (data.sequence === '') {
     error.push('請選擇「身故受益人' + txt + '給付順位」')
   }
   if (isNaN(data.percent)) {
     error.push('身故受益人' + txt + '「給付比例」請填寫數字')
   } else if (data.percent < 1 || data.percent > 100) {
     error.push('身故受益人' + txt + '「給付比例」需大於0，但不可大於100%')
   }

   if (data.relation === '') {
     error.push('請選擇與「身故受益人' + txt + '關係」')
   } else if (data.relation !== '8') {
     if (data.nationality === '') {
       error.push('請填寫「身故受益人' + txt + '國籍」')
     }
     if (data.id === '') {
       error.push('請填寫「身故受益人' + txt + '身分證字號」')
     }
     if (!data.dob) {
       error.push('請填寫「身故受益人' + txt + '出生日期」')
     }
     if (data.phone === '') {
       error.push('請填寫「身故受益人' + txt + '聯絡電話」')
     }
     if (data.city === '') {
       error.push('請選擇「身故受益人' + txt + '聯絡城市」')
     }
     if (data.county === '') {
       error.push('請選擇「身故受益人' + txt + '聯絡地區」')
     }
     if (data.street === '') {
       error.push('請填寫「身故受益人' + txt + '聯絡地址」')
     }
   }
   return error
 }

 // 檢查受益人出生日期
 // benfNo 受益人(?) 一:1 二:2 三:3
 // relation_ben_death 受益人關係
 // benfbirthdat 受益人出生日期
 function checkedBirthday(benfNo, benfbirthdat) {
   var mergeMessage = ''
   var benfNoCh = benfNo === 1 ? '一' : benfNo === 2 ? '二' : benfNo === 3 ? '三' : benfNo === 4 ? '滿期金' : ''

   var dateValid = /^([0-9]{4})[-]{1}([0-9]{1,2})[-]{1}([0-9]{1,2})$/
   if (!dateValid.test(benfbirthdat) && benfbirthdat !== '') {
     if (benfNoCh === 4) {
       return '滿期受益人出生日期格式錯誤\r\n'
     } else {
       return '身故受益人(' + benfNoCh + ')' + ' 出生日期格式錯誤\r\n'
     }
   }
   if (benfbirthdat !== '') {
     var currentDate = new Date()
     var currnetYear = currentDate.getFullYear()
     var minYear = currnetYear - 100
     var birthYear = benfbirthdat.split('/')

     if (birthYear[0] < minYear) {
       if (benfNoCh === 4) {
         mergeMessage += '滿期受益人出生日期不得低於' + minYear + '\r\n'
       } else {
         mergeMessage += '身故受益人(' + benfNoCh + ') 出生日期不得低於' + minYear + '\r\n'
       }
     }
     if (new Date(benfbirthdat) > new Date()) {
       if (benfNoCh === 4) {
         mergeMessage += '滿期受益人出生日期不得大於今天' + '\r\n'
       } else {
         mergeMessage += '身故受益人(' + benfNoCh + ') 出生日期不得大於今天' + '\r\n'
       }
     }
   }
   return mergeMessage
 }

 function bankAccountCheck(isValid, num) {
   var error = ''
   if (isValid) {
     var accountIdent = ''
     var accountName = ''
     var displayLabel = ''

     switch (num) { // 0:要保人 1.2.3:受益人
       case 0:
         accountIdent = 'F129532925'
         accountName = '鄧羽翔'
         displayLabel = '要保人匯款帳戶'
         break
       case 1:
         accountIdent = $('#beneficiaryId1').val()
         accountName = $('#beneficiaryName1').val()
         displayLabel = '身故受益人(一)'
         break
       case 2:
         accountIdent = $('#beneficiaryId2').val()
         accountName = $('#beneficiaryName2').val()
         displayLabel = '身故受益人(二)'
         break
       case 3:
         accountIdent = $('#beneficiaryId3').val()
         accountName = $('#beneficiaryName3').val()
         displayLabel = '身故受益人(三)'
         break
       default:
         break
     }
     if (num !== '0') {
       if ($('#beneficiaryId' + num).val() === '' || $('#beneficiaryId' + num).val() === undefined) {
         error += '請填寫' + displayLabel + '身分證字號\n'
       }
       if ($('#beneficiaryName' + num).val() === '' || $('#beneficiaryName' + num).val() === undefined) {
         error += '請填寫' + displayLabel + '姓名\n'
       }
       if (error !== '') {
         return error
       }
     }
     var checkAccountData = {
       userIdn: accountIdent,
       userFullName: accountName,
       bankCode: $('#bankNum-' + num).val(),
       branchCode: $('#bankBranchNum-' + num).val(),
       accountNo: $('#bankAccount-' + num).val()
     }
     $.ajax({
       type: 'POST',
       url: '/m/Insure/UpCash/ValidateBankAccount',
       data: checkAccountData,
       async: false,
       success: function(rtn) {
         if (rtn) {
           if (rtn.IsSuccess) {
             error = ''
           } else if (rtn.Msg) {
             error = '親愛的客戶謝謝申購保險，' + displayLabel + '：' + rtn.Msg + '，或請撥打客服電話詢問，造成您的不便我們深感抱歉，再次感謝您的惠顧。\r\n'
           } else {
             error = 'SystemError'
           }
         }
       },
       error: function() {
         error = 'SystemError'
       }
     })
     return error
   }
   return ''
 }

 export {
   checkBenefInfoOne
 }
