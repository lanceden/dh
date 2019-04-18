import Url from './constUrl'

const APICODE = 'InsuranceWeb'

class ServiceUpcash {
  /**
   * UpCah投保流程初始化-無參數
   */
  static Init() {
    this.$http.post(`${Url.UpCashInit}`, {
      CoreData: {
        ID: ''
      },
      InsurerSourceID: `${APICODE}`
    }).then(response => {
      console.log('UpCash Init: ', response)
    }).catch(error => {
      console.log('UpCash Init: ', error)
    })
  }
  /**
   * UpCash投保流程試算
   * @param {string} coreData 試算資料
   */
  static Estimate(coreData) {
    this.$http.post(`${Url.UpCashEstimate}`, {
      CoreData: coreData,
      InsurerSourceID: `${APICODE}`
    }).then(response => {
      console.log('UpCash Estimate: ', response)
    }).catch(error => {
      console.log('UpCash Estimate: ', error)
    })
  }
  /**
   * UpCash投保流程下一步
   * @param {string} coreData 投保流程資料
   */
  static SubmitQuote(coreData) {
    this.$http.post(`${Url.UpCashSubmitQuote}`, {
      CoreData: coreData,
      InsurerSourceID: `${APICODE}`
    }).then(response => {
      console.log('UpCash SubmitQuote: ', response)
    }).catch(error => {
      console.log('UpCash SubmitQuote: ', error)
    })
  }
  static SubmitOrder(coreData) {
    this.$http.post(`${Url.UpCashSubmitOrder}`, {
      CoreData: coreData,
      InsurerSourceID: `${APICODE}`
    }).then(response => {
      console.log('UpCash SubmitOrder: ', response)
    }).catch(error => {
      console.log('UpCash SubmitOrder: ', error)
    })
  }
}
export default ServiceUpcash
