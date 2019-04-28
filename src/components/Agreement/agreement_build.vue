<template>
  <div>
    <AgreementCheck></AgreementCheck>
    <AgreementContent v-for="n in provisionCount" :key="n" :provisionindex="n - 1" :provisionname="GetProvision[n-1]"></AgreementContent>
    <AgreementFooter :insname="instypename"></AgreementFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AgreementCheck from './agreement_check'
import AgreementContent from './agreement_content'
import AgreementFooter from './agreement_footer'
export default {
  data() {
    return {
      instypename: '',
      provisionCount: 0
    }
  },
  created() {
    const urlParams = new URLSearchParams(window.location.search)
    this.instypename = urlParams.get('instypename').toLowerCase()
    switch (this.instypename) {
      case 'upcash':
        this.GetProvision.push('新光人壽Up Cash利率變動型年金保險【乙型】商品說明')
        this.GetProvision.push('新光人壽Up Cash利率變動型年金保險【乙型】保險單條款')
        this.GetProvision.push('人壽保險投保人須知_網路投保')
        this.GetProvision.push('要保書填寫說明')
        this.GetProvision.push('蒐集、處理及利用個人資料告知事項')
        this.GetProvision.push('病歷、醫療及健康檢查等個人資料蒐集、處理及利用聲明事項')
        this.GetProvision.push('配合FATCA法案蒐集、處理及利用個人資料告知事項')
        this.GetProvision.push('保險特性摘要說明')
        this.GetProvision.push('保險費暨保險單借款利息自動轉帳付款委託約定條款')
        this.GetProvision.push('電子單據服務約定事項')
        this.GetProvision.push('信用卡授權書審閱條款')
        this.provisionCount = this.GetProvision.length
        break
      case 'ezcash':
        this.GetProvision.push('新光人壽EZ Cash利率變動型年金保險【乙型】商品說明')
        this.GetProvision.push('新光人壽EZ Cash利率變動型年金保險【乙型】保險單條款')
        this.GetProvision.push('人壽保險投保人須知_網路投保')
        this.GetProvision.push('要保書填寫說明')
        this.GetProvision.push('蒐集、處理及利用個人資料告知事項')
        this.GetProvision.push('病歷、醫療及健康檢查等個人資料蒐集、處理及利用聲明事項')
        this.GetProvision.push('配合FATCA法案蒐集、處理及利用個人資料告知事項')
        this.GetProvision.push('保險費暨保險單借款利息自動轉帳付款委託約定條款')
        this.GetProvision.push('電子單據服務約定事項')
        break
      case 'ican':
        this.GetProvision.push('新光人壽i-can傷害保險商品說明')
        this.GetProvision.push('新光人壽i-can傷害保險保險單條款')
        this.GetProvision.push('新光人壽網路投保傷害醫療保險附加條款')
        this.GetProvision.push('新光人壽網路投保個人傷害險投保人須知')
        this.GetProvision.push('新光人壽網路投保個人傷害保險要保書填寫說明')
        this.GetProvision.push('蒐集、處理及利用個人資料告知事項')
        this.GetProvision.push('病歷、醫療及健康檢查等個人資料蒐集、處理及利用聲明事項')
        this.GetProvision.push('電子單據服務約定事項')
        break
      case 'iwell':
        this.GetProvision.push('新光人壽i-well傷害保險商品說明')
        this.GetProvision.push('新光人壽i-well傷害保險保險單條款')
        this.GetProvision.push('新光人壽網路投保傷害醫療保險附加條款')
        this.GetProvision.push('新光人壽網路投保個人傷害險投保人須知')
        this.GetProvision.push('新光人壽網路投保個人傷害保險要保書填寫說明')
        this.GetProvision.push('蒐集、處理及利用個人資料告知事項')
        this.GetProvision.push('病歷、醫療及健康檢查等個人資料蒐集、處理及利用聲明事項')
        this.GetProvision.push('電子單據服務約定事項')
        break
      case 'myway':
        this.GetProvision.push('新光人壽My Way定期壽險商品說明')
        this.GetProvision.push('新光人壽My Way定期壽險保險單條款')
        this.GetProvision.push('人壽保險投保人須知_網路投保')
        this.GetProvision.push('要保書填寫說明')
        this.GetProvision.push('蒐集、處理及利用個人資料告知事項')
        this.GetProvision.push('審閱期聲明書')
        this.GetProvision.push('病歷、醫療及健康檢查等個人資料蒐集、處理及利用聲明事項')
        this.GetProvision.push('電子單據服務約定事項')
        break
    }
    console.log('this.GetProvision[0]', this.GetProvision[0])
  },
  components: {
    AgreementCheck,
    AgreementContent,
    AgreementFooter
  },
  computed: {
    ...mapGetters([
      'GetProvision'
    ])
  }
}

</script>
