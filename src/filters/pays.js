// 付款方式
export const payType = (val) => {
  switch (parseInt(val)) {
    case 1: return 'ATM'
    case 2: return '信用卡'
    case 3: return '信用卡(分三期)'
    case 4: return '信用卡(分六期)'
    case 5: return '貨到付款'
  }
}
// 付款狀態
export const payStatus = (val) => {
  switch (parseInt(val)) {
    case 1: return '未付款'
    case 2: return '已付款'
    case 3: return '退款中'
    case 4: return '已退款'
  }
}
