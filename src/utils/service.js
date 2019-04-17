import Url from './constUrl'

class Service {
  constructor(http) {
    this.http = http
  }
  /**
   * 取回職業類別
   */
  GetJob() {
    console.log(this.http)
    this.http.post('https://test-impcust.skl.com.tw/sub/api/Main/GetVipLevel', {
      payMode: 1,
      amount: 10,
      year: 6
    }).then(response => { // `${Url.Job}`
      console.log('GetJob: ', response)
    }).catch(error => {
      console.log('GetJob: ', error)
    })
  }
  /**
   * 取回職業名稱
   * @param {string} planCode 險種代碼
   * @param {string} occupationCode 職業類別代碼
   */
  static GetOccupation(planCode, occupationCode) {
    this.http.post(`${Url.Occupation}`, {
      PlanCode: planCode,
      OccupationCode: occupationCode
    }).then(response => {
      console.log('GetOccupation: ', response)
    }).catch(error => {
      console.log('GetOccupation: ', error)
    })
  }
  /**
   * 取回國籍清單
   * @param {string} nationalityCode 國籍代號
   */
  static GetNationality(nationalityCode) {
    this.http.post(`${Url.Nationality}?code=${nationalityCode}`).then(response => {
      console.log('GetNationality: ', response)
    }).catch(error => {
      console.log('GetNationality: ', error)
    })
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
  static GetCity() {
    this.http.post(`${Url.City}`).then(response => {
      console.log('GetCity: ', response)
    }).catch(error => {
      console.log('GetCity: ', error)
    })
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
  static ValidateAccount(para) {
    this.http.post(`${Url.ValidateAccount}`, para).then(response => {
      console.log('UpCash SubmitOrder: ', response)
    }).catch(error => {
      console.log('UpCash SubmitOrder: ', error)
    })
  }
}
export default Service
