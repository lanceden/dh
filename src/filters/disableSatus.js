// 運送方式
export const disableStatus = (val) => {
  switch (parseInt(val)) {
    case 0: return '可用'
    case 1: return '停用'
  }
}
