// 樣式狀態
export const ItemStatus = (val) => {
  switch (parseInt(val)) {
    case 1: return '正常販售'
    case 2: return '預購(1)'
    case 3: return '預購(2)'
    case 4: return '完售'
  }
}

// 樣式狀態
export const ImageType = (val) => {
  switch (parseInt(val)) {
    case 1: return '商品主圖'
    case 2: return '商品樣式圖'
    case 3: return '文章圖'
    case 4: return '商品輪播_上半'
    case 5: return '商品輪播_下半'
  }
}
