<template>
  <div>
    <AgreementCheck></AgreementCheck>
    <AgreementContent v-for="n in provisionCount" :key="n" :provisionindex="n - 1"></AgreementContent>
    <AgreementFooter></AgreementFooter>
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
      provisionCount: 0
    }
  },
  created() {
    const urlParams = new URLSearchParams(window.location.search)
    const instypename = urlParams.get('instypename').toLowerCase()
    switch (instypename) {
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
    }
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
