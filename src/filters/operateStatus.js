// 處理狀態
export const operateStatus = (val) => {
  switch (parseInt(val)) {
    case 0: return '無狀態'
    case 1: return '未處理'
    case 2: return '處理中'
    case 3: return '結案(一般)'
    case 4: return '結案（全退）'
    case 5: return '結案（部退）'
    case 6: return '取消'
  }
}
