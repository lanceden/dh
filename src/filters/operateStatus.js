// 處理狀態
export const operateStatus = (val) => {
  switch (parseInt(val)) {
    case 0: return '無狀態'
    case 1: return '未處理'
    case 2: return '處理中'
    case 3: return '結案(未寄出)'
    case 4: return '結案（已寄出）'
    case 5: return '結案（全退）'
    case 6: return '結案（部退）'
    case 7: return '取消'
    case 8: return '處理中(部退)'
    case 9: return '處理中(全退)'
    case 10: return '貨到付款'
  }
}
