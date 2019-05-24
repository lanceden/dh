<template>
  <div>
    <loading v-show="GetLoading" />
    <AgreementCheck></AgreementCheck>
    <AgreementContent 
    v-for="n in this.$store.state.AGREEMENTCOUNT" 
    :key="n" 
    :provisionindex="n - 1" 
    :provisionname="GetProvision[n-1]" 
    stagger="100"></AgreementContent>
    <AgreementFooter :insname="instypename" :provisionCount="this.$store.state.AGREEMENTCOUNT"></AgreementFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AgreementCheck from './agreement_check'
import AgreementContent from './agreement_content'
import AgreementFooter from './agreement_footer'
import { getQueryStringParameterByKey } from '../../utils/getQueryStringParameterByKey.js'
export default {
  data() {
    return {
      instypename: ''
    }
  },
  created() {
    this.instypename = getQueryStringParameterByKey('instypename').toLowerCase()
    let agreementArr = []
    switch (this.instypename) {
      case 'upcash':
        agreementArr = `新光人壽Up Cash利率變動型年金保險【乙型】商品說明(6),新光人壽Up Cash利率變動型年金保險【乙型】保險單條款(8),人壽保險投保人須知_網路投保(6),要保書填寫說明(2),蒐集、處理及利用個人資料告知事項(53),病歷、醫療及健康檢查等個人資料蒐集、處理及利用聲明事項(3),配合FATCA法案蒐集、處理及利用個人資料告知事項(7),保險特性摘要說明(2),保險費暨保險單借款利息自動轉帳付款委託約定條款(7),電子單據服務約定事項(2),信用卡授權書審閱條款(8)`.split(',')
        break
      case 'ezcash':
        agreementArr = this.GetEZCashPostData.AgreementString.split(',')
        break
      case 'ican':
        agreementArr = this.GetICanPostData.AgreementString.split(',')
        break
      case 'iwell':
        agreementArr = this.GetIWellPostData.AgreementString.split(',')
        break
      case 'myway':
        agreementArr = this.GetMyWayPostData.AgreementString.split(',')
        break
      case 'igoing':
        agreementArr = this.GetIGoingPostData.AgreementString.split(',')
        break
      case 'accident':
        agreementArr = this.GetAccidentPostData.AgreementString.split(',')
        break
      case 'health':
        agreementArr = this.GetHealthPostData.AgreementString.split(',')
        break
      case 'travel':
        agreementArr = this.GetTravelPostData.AgreementTitle.split('『')
        break
      case 'enttravel':
        agreementArr = this.GetEntTravelPostData.AgreementTitle.split('『')
        break
    }
    agreementArr.forEach(item => {
      if (this.instypename === 'travel' || this.instypename === 'enttravel') {
        if (item !== '') {
          this.GetProvision.push(item.split('』')[0])
        }
      } else {
        this.GetProvision.push(item.split('(')[0])
      }
    })
    this.$store.state.AGREEMENTCOUNT = this.GetProvision.length
  },
  components: {
    AgreementCheck,
    AgreementContent,
    AgreementFooter
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      'GetProvision',
      'GetUpCashPostData',
      'GetEZCashPostData',
      'GetICanPostData',
      'GetIWellPostData',
      'GetIGoingPostData',
      'GetMyWayPostData',
      'GetAccidentPostData',
      'GetHealthPostData',
      'GetTravelPostData',
      'GetEntTravelPostData'
    ])
  }
}

</script>
