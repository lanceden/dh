/**
 * 根目錄網址
 */
// const Domain = 'https://test-online.skl.com.tw/InsuranceWebApi'
// const Domain = 'https://ea5af470-fbb3-4cf8-b060-301a1bccb034.mock.pstmn.io'
const Domain = 'http://localhost:57246'
/**
 * 職業類別
 */
const Job = `${Domain}/Query/Job`
/**
 * 職業名稱
 */
const Occupation = `${Domain}/Query/Occupation`
/**
 * 取回同意書
 */
const Provision = `${Domain}}/Query/Provision`
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
 * EZCash成立訂單
 */
const EZCashSubmitOrder = `${Domain}/EZCash/SubmitOrder`

export default {
  Domain,
  Job,
  Occupation,
  Nationality,
  Provision,
  City,
  District,
  Banks,
  BankBranches,
  ValidateAccount,
  Beneficiary,
  UpCashInit,
  UpCashEstimate,
  UpCashSubmitQuote,
  UpCashSubmitOrder,
  EZCashInit,
  EZCashEstimate,
  EZCashSubmitQuote,
  EZCashSubmitOrder
}
