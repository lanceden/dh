/**
 * 根目錄網址
 */
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
 * 取得客戶約定帳戶
 */
const EachAccount = `${Domain}/Customer/EachAccount`
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
 * 取得客戶約定帳戶
 */
const EACHAccount = `${Domain}/Customer/EachAccount`
/**
 * 取回各商品不同身份別保額
 */
const Premiums = `${Domain}/Query/Premiums`
/**
 * 旅平附約保額(申根)
 */
const InsTravelSupplCoverageSli = `${Domain}/Query/InsTravelSupplCoverageSli`
/**
 * 旅平子女主約保額
 */
const InsTravelChildCoverageSli = `${Domain}/Query/InsTravelChildCoverageSli`
/**
 * 旅平子女附約保額
 */
const InsTravelChildSupplCoverageSli = `${Domain}/Query/InsTravelChildSupplCoverageSli`
/**
 * 取回各商品不同身份別保額
 */
const GetAccountData = `${Domain}/Account/GetAccountData`
/**
 * 險種的保額表 (驗證與未驗證)
 */
const InsCoverageSelectListItem = `${Domain}/Query/InsCoverageSelectListItem`
/**
 * 發送OTP
 */
const SendOTP = `${Domain}/OTP/Send`
/**
 * 驗證OTP
 */
const CheckOTP = `${Domain}/OTP/Check`
/**
 * 全繳網
 */
const EbillForm = `https://test-online.skl.com.tw/Insure/app/PaymentInfo`
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

/**
 * Accident初始化
 */
const AccidentInit = `${Domain}/Accident/Initialize`
/**
 * Accident投保流程試算
 */
const AccidentEstimate = `${Domain}/Accident/Estimate`
/**
 * Accident投保流程下一步
 */
const AccidentSubmitQuote = `${Domain}/Accident/SubmitQuote`
/**
 * UpCash成立訂單
 */
const AccidentSubmitOrder = `${Domain}/Accident/SubmitOrder`

/**
 * Health初始化
 */
const HealthInit = `${Domain}/Health/Initialize`
/**
 * Health投保流程試算
 */
const HealthEstimate = `${Domain}/Health/Estimate`
/**
 * Health投保流程下一步
 */
const HealthSubmitQuote = `${Domain}/Health/SubmitQuote`
/**
 * UpCash成立訂單
 */
const HealthSubmitOrder = `${Domain}/Health/SubmitOrder`

/**
 * 企業用戶代碼檢查
 */
const VerifyEmploymentId = `${Domain}/EntTravel/VerifyEmploymentId`
/**
 * EntTravel初始化
 */
const EntTravelInit = `${Domain}/EntTravel/Initialize`
/**
 * EntTravel投保流程試算
 */
const EntTravelEstimate = `${Domain}/EntTravel/Estimate`
/**
 * EntTravel投保流程下一步
 */
const EntTravelSubmitQuote = `${Domain}/EntTravel/SubmitQuote`
/**
 * UpCash成立訂單
 */
const EntTravelSubmitOrder = `${Domain}/EntTravel/SubmitOrder`

/**
 * Travel初始化
 */
const TravelInit = `${Domain}/Travel/Initialize`
/**
 * 處理被保人資料
 */
const TravelInsuredData = `${Domain}/Travel/InsuredData`
/**
 * Travel投保流程試算
 */
const TravelEstimate = `${Domain}/Travel/Estimate`
/**
 * Travel投保流程下一步
 */
const TravelSubmitQuote = `${Domain}/Travel/SubmitQuote`
/**
 * UpCash成立訂單
 */
const TravelSubmitOrder = `${Domain}/Travel/SubmitOrder`

/**
 * UpCash 簡易試算
 */
const UpCashSimpleEstimate = `${Domain}/UpCash/SimpleEstimate`
/**
 * UpCash 簡易試算詳
 */
const UpCashSimpleEstimateDetails = `${Domain}/UpCash/SimpleEstimateDetails`

const TravelSimpleEstimate = `${Domain}/Travel/SimpleEstimate`

export default {
  Domain,
  Job,
  IsCityBank,
  Occupation,
  Nationality,
  Provision,
  EachAccount,
  City,
  District,
  Banks,
  BankBranches,
  ValidateAccount,
  Beneficiary,
  EACHAccount,
  Premiums,
  InsTravelSupplCoverageSli,
  InsTravelChildCoverageSli,
  InsTravelChildSupplCoverageSli,
  GetAccountData,
  InsCoverageSelectListItem,
  SendOTP,
  CheckOTP,
  EbillForm,
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
  AccidentInit,
  AccidentEstimate,
  AccidentSubmitQuote,
  AccidentSubmitOrder,
  HealthInit,
  HealthEstimate,
  HealthSubmitQuote,
  HealthSubmitOrder,
  MyWayInit,
  MyWayEstimate,
  MyWaySubmitQuote,
  MyWaySubmitOrder,
  TravelInit,
  TravelInsuredData,
  TravelEstimate,
  TravelSubmitQuote,
  TravelSubmitOrder,
  VerifyEmploymentId,
  EntTravelInit,
  EntTravelEstimate,
  EntTravelSubmitQuote,
  EntTravelSubmitOrder,
  UpCashSimpleEstimate,
  UpCashSimpleEstimateDetails,
  TravelSimpleEstimate
}
