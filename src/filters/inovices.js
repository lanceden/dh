// 發票狀態
export const inoviceStatus = (val) => {
  return parseInt(val) === 1 ? '未開發票' : '已開發票'
}
// 發票類型
export const inoviceType = (val) => {
  switch (parseInt(val)) {
    case 1: return '電子發票'
    case 2: return '紙本發票'
    case 3: return '捐贈發票'
    case 4: return '公司三連發票'
  }
}
