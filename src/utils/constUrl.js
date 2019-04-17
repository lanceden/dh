/**
 * 根目錄網址
 */
const Domain = 'https://online.skl.com.tw'
/**
 * 職業類別
 */
const Job = `${Domain}/Query/Job`
/**
 * 職業名稱
 */
const Occupation = `${Domain}/Query/Occupation`
/**
 * 取回國籍
 */
const Nationality = `${Domain}/Query/Nationality`
/**
 * 取回同意書
 */
const Provision = `${Domain}}/Query/Provision`
/**
 * 取回縣市
 */
const City = `${Domain}/Query/City`
/**
 * 取回鄉鎮市區
 */
const District = `${Domain}/Query/District`
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
  UpCashInit,
  UpCashEstimate,
  UpCashSubmitQuote,
  UpCashSubmitOrder
}
