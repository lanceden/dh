/**
 * 根目錄網址
 */
// const Domain = 'https://test-online.skl.com.tw/InsuranceWebApi'
// const Domain = 'https://ea5af470-fbb3-4cf8-b060-301a1bccb034.mock.pstmn.io'
const Domain = process.env.URL
/**
 * 職業類別
 */
const Job = `${Domain}/Query/Job`
/**
 * 是否為花旗銀行卡
 */
const IsCityBank = `${Domain}/Query/IsCityBank`
/**
 * 職業名稱
 */
const Occupation = `${Domain}/Query/Occupation`
/**
 * 取回同意書
 */
const Provision = `${Domain}/Query/Provision`
/**
 * 取回金融機構
 */
const Banks = `${Domain}/Query/Banks`
/**
 * 取回金融機構分行
 */
const BankBranches = `${Domain}/Query/BankBranches`
/**
 * 檢核銀行帳號
 */
const ValidateAccount = `${Domain}/Query/ValidateAccount`
/**
 * 取回縣市
 */
const City = `${Domain}/Query/City`
/**
 * 取回鄉鎮市區
 */
const District = `${Domain}/Query/District`
/**
 * 取回國籍
 */
const Nationality = `${Domain}/Query/Nationality`
/**
 * 取回上一張保單受益人
 */
const Beneficiary = `${Domain}/Query/Beneficiary`
/**
 * 發送OTP
 */
const SendOTP = `${Domain}/OTP/Send`
/**
 * 驗證OTP
 */
const CheckOTP = `${Domain}/OTP/Check`

/**
 * UpCash初始化
 */
const UpCashInit = `${Domain}/UpCash/Initialize`
/**
 * UpCash投保流程試算
 */
const UpCashEstimate = `${Domain}/UpCash/Estimate`
/**
 * UpCash投保流程下一步
 */
const UpCashSubmitQuote = `${Domain}/UpCash/SubmitQuote`
/**
 * UpCash成立訂單
 */
const UpCashSubmitOrder = `${Domain}/UpCash/SubmitOrder`

/**
 * EZCash初始化
 */
const EZCashInit = `${Domain}/EZCash/Initialize`
/**
 * EZCash投保流程試算
 */
const EZCashEstimate = `${Domain}/EZCash/Estimate`
/**
 * EZCash投保流程下一步
 */
const EZCashSubmitQuote = `${Domain}/EZCash/SubmitQuote`
/**
 * UpCash成立訂單
 */
const EZCashSubmitOrder = `${Domain}/EZCash/SubmitOrder`

/**
 * ICan初始化
 */
const ICanInit = `${Domain}/ICan/Initialize`
/**
 * ICan投保流程試算
 */
const ICanEstimate = `${Domain}/ICan/Estimate`
/**
 * ICan投保流程下一步
 */
const ICanSubmitQuote = `${Domain}/ICan/SubmitQuote`
/**
 * ICan成立訂單
 */
const ICanSubmitOrder = `${Domain}/ICan/SubmitOrder`

/**
 * IWell初始化
 */
const IWellInit = `${Domain}/IWell/Initialize`
/**
 * IWell投保流程試算
 */
const IWellEstimate = `${Domain}/IWell/Estimate`
/**
 * IWell投保流程下一步
 */
const IWellSubmitQuote = `${Domain}/IWell/SubmitQuote`
/**
 * IWell成立訂單
 */
const IWellSubmitOrder = `${Domain}/IWell/SubmitOrder`

/**
 * MyWay初始化
 */
const MyWayInit = `${Domain}/MyWay/Initialize`
/**
 * MyWay投保流程試算
 */
const MyWayEstimate = `${Domain}/MyWay/Estimate`
/**
 * MyWay投保流程下一步
 */
const MyWaySubmitQuote = `${Domain}/MyWay/SubmitQuote`
/**
 * UpCash成立訂單
 */
const MyWaySubmitOrder = `${Domain}/MyWay/SubmitOrder`

/**
 * IGoing初始化
 */
const IGoingInit = `${Domain}/IGoing/Initialize`
/**
 * IGoing投保流程試算
 */
const IGoingEstimate = `${Domain}/IGoing/Estimate`
/**
 * IGoing投保流程下一步
 */
const IGoingSubmitQuote = `${Domain}/IGoing/SubmitQuote`
/**
 * UpCash成立訂單
 */
const IGoingSubmitOrder = `${Domain}/IGoing/SubmitOrder`

export default {
  Domain,
  Job,
  IsCityBank,
  Occupation,
  Nationality,
  Provision,
  City,
  District,
  Banks,
  BankBranches,
  ValidateAccount,
  Beneficiary,
  SendOTP,
  CheckOTP,
  UpCashInit,
  UpCashEstimate,
  UpCashSubmitQuote,
  UpCashSubmitOrder,
  EZCashInit,
  EZCashEstimate,
  EZCashSubmitQuote,
  EZCashSubmitOrder,
  ICanInit,
  ICanEstimate,
  ICanSubmitQuote,
  ICanSubmitOrder,
  IWellInit,
  IWellEstimate,
  IWellSubmitQuote,
  IWellSubmitOrder,
  IGoingInit,
  IGoingEstimate,
  IGoingSubmitQuote,
  IGoingSubmitOrder,
  MyWayInit,
  MyWayEstimate,
  MyWaySubmitQuote,
  MyWaySubmitOrder
}
