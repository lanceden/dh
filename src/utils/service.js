import Url from './constUrl'
import HttpHelper from './http'

class Service {
  constructor(http) {
    this.http = new HttpHelper(http)
  }
  /**
   * 取回職業類別
   */
  async GetJob() {
    return await this.http.SendPost(`${Url.Job}`, 'GetJob', null)
  }
  /**
   * 取回職業名稱
   * @param {string} planCode 險種代碼
   * @param {string} occupationCode 職業類別代碼
   */
  async GetOccupation(planCode, occupationCode) {
    return await this.http.SendPost(`${Url.Occupation}`, 'GetOccupation', {
      PlanCode: planCode,
      OccupationCode: occupationCode
    })
  }
  /**
   * 取回國籍清單
   * @param {string} nationalityCode 國籍代號
   */
  async GetNationality(nationalityCode) {
    return await this.http.SendPost(`${Url.Nationality}?code=${nationalityCode}`, 'GetNationality')
  }
  /**
   * 取回同意書
   * @param {string} provisionName 同意書名稱
   */
  static GetProvision(provisionName) {
    this.http.post(`${Url.Provision}?provisionName=${provisionName}`).then(response => {
      console.log('GetProvision: ', response)
    }).catch(error => {
      console.log('GetProvision: ', error)
    })
  }
  /**
   * 取回縣市
   */
  async GetCity() {
    return await this.http.SendPost(`${Url.City}`, 'GetCity')
  }
  /**
   * 取回鄉鎮市區
   * @param {string} cityName 縣市名稱
   */
  static GetDistrict(cityName) {
    this.http.post(`${Url.District}?cityName=${cityName}`).then(response => {
      console.log('GetDistrict: ', response)
    }).catch(error => {
      console.log('GetDistrict: ', error)
    })
  }
  /**
   * 取回金融機構
   */
  static GetBanks() {
    this.http.post(`${Url.Banks}`).then(response => {
      console.log('GetBanks: ', response)
    }).catch(error => {
      console.log('GetBanks: ', error)
    })
  }
  /**
   * 取回分行
   * @param {string} bankCode 金融機構代號
   */
  static GetBankBranches(bankCode) {
    this.http.post(`${Url.BankBranches}?bankCode=${bankCode}`).then(response => {
      console.log('GetBankBranches: ', response)
    }).catch(error => {
      console.log('GetBankBranches: ', error)
    })
  }
  /**
   * 驗證輸入之銀行帳號是否正確
   * @param {ValidateModel} para 驗證帳號
   */
  static ValidateAccount(para) {
    this.http.post(`${Url.ValidateAccount}`, para).then(response => {
      console.log('UpCash SubmitOrder: ', response)
    }).catch(error => {
      console.log('UpCash SubmitOrder: ', error)
    })
  }
  /**
   * 取回上一張保單受益人
   */
  static GetBeneficiary() {
    this.http.post(`${Url.Beneficiary}`).then(response => {
      console.log('GetBeneficiary: ', response)
    }).catch(error => {
      console.log('GetBeneficiary: ', error)
    })
  }
}
export default Service
