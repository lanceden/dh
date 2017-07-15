// 運送方式
export const deliveryType = (val) => {
  switch (parseInt(val)) {
    case 1: return '宅配'
    case 2: return ''
    case 3: return ''
    case 4: return ''
  }
}
export const deliveryStatus = (val) => {
  switch (parseInt(val)) {
    case 1: return '未出貨'
    case 2: return '已出貨'
    case 3: return '已送達'
    case 4: return '退貨中'
    case 5: return '已退貨'
  }
}
