<template>
  <div>
    <PaymentAmount :amount="stateData.mode_prem"></PaymentAmount>
    <PaymentAccount v-show="false"></PaymentAccount>
    <PaymentCreditcard :amount="stateData.mode_prem"></PaymentCreditcard>
    <PaymentFooter :stateData="stateData"></PaymentFooter>
  </div>
</template>

<script>
import PaymentAmount from './payment_payamount'
import PaymentAccount from './payment_account'
import PaymentCreditcard from './payment_creditcard'
import PaymentFooter from './payment_footer'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      stateData: []
    }
  },
  computed: {
    ...mapGetters([
      'GetUpCashPostData',
      'GetEZCashPostData',
      'GetICanPostData',
      'GetIWellPostData',
      'GetIGoingPostData',
      'GetMyWayPostData'
    ])
  },
  created() {
    let result = this.$store.state.PLANNAME.toLowerCase()
    switch (result) {
      case 'upcash':
        this.stateData = this.GetUpCashPostData
        break
      case 'ezcash':
        this.stateData = this.GetEZCashPostData
        break
      case 'ican':
        this.stateData = this.GetICanPostData
        break
      case 'iwell':
        this.stateData = this.GetIWellPostData
        break
      case 'igoing':
        this.stateData = this.GetIGoingPostData
        break
      case 'myway':
        this.stateData = this.GetMyWayPostData
        break
    }
    console.log('this.stateData', this.stateData)
  },
  components: {
    PaymentAmount,
    PaymentAccount,
    PaymentCreditcard,
    PaymentFooter
  }
}

</script>
