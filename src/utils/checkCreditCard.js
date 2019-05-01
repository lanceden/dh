/**
 * 信用卡號碼檢查 : 正確回傳true 錯誤回傳false
 * @param {string} sCheckCardno 信用卡號碼
 */
function CheckCardno(sCheckCardno) {
  var iSumCheck = 0
  if (sCheckCardno.length !== 16) {
    return false
  }
  for (var i = sCheckCardno.length; i > 0; i--) {
    var iC = sCheckCardno.substring((17 - i - 1), (17 - i))
    if (isNaN(iC)) {
      return false
    }
    var iCS = iC * ((i + 1) % 2 + 1)
    iSumCheck += (iCS - iCS % 10) / 10 + (iCS % 10)
  }
  return iSumCheck % 10 === 0
}

export {
  CheckCardno
}
