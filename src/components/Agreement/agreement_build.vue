<template>
  <div>
    <loading v-show="GetLoading" />
    <AgreementCheck></AgreementCheck>
    <AgreementContent v-for="n in provisionCount" :key="n" :provisionindex="n - 1" :provisionname="GetProvision[n-1]" stagger="100"></AgreementContent>
    <AgreementFooter :insname="instypename"></AgreementFooter>
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
      instypename: '',
      provisionCount: 0
    }
  },
  created() {
    this.instypename = getQueryStringParameterByKey('instypename').toLowerCase()
    let agreementArr = []
    switch (this.instypename) {
      case 'upcash':
        agreementArr = this.GetUpCashPostData.AgreementString.split(',')
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
    }
    agreementArr.forEach(item => {
      this.GetProvision.push(this.instypename === 'travel' ? item.split('』')[0] : item.split('(')[0])
    })
    this.provisionCount = this.GetProvision.length
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
      'GetTravelPostData'
    ])
  }
}

</script>
