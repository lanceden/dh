function UpcashEstimateDataValidate({ para }) {
  let error = []
  if (para.init_method === '0') error.push('請選擇首期繳費管道')
  if(!isNaN(para.face_amt) || para.face_amt <= 0) error.push('請填寫第一期保險費')
}
export default {
  UpcashEstimateDataValidate
}
