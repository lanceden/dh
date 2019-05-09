<template>
  <div>
    <loading v-show="GetLoading" />
    <PaymentAmount :amount="amount"></PaymentAmount>
    <PaymentInit :stateData="stateData"></PaymentInit>
    <PaymentFooter :stateData="stateData"></PaymentFooter>
  </div>
</template>

<script>
import PaymentAmount from './payment_payamount'
import PaymentInit from './payment_init'
import PaymentFooter from './payment_footer'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      stateData: [],
      amount: 0
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
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
  },
  created() {
    // 當前險種名稱-進入每個險種時會初始化`PLANNAME`值
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
      case 'accident':
        this.stateData = this.GetAccidentPostData
        break
      case 'health':
        this.stateData = this.GetHealthPostData
        break
      case 'travel':
        this.stateData = this.GetTravelPostData
        break
      case 'enttravel':
        this.stateData = this.GetEntTravelPostData
        break
    }
    if (result === 'travel' || result === 'enttravel') {
      this.amount = this.stateData.PolicyData.TotalPremium
    } else {
      this.amount = this.stateData.mode_prem
    }
  },
  components: {
    PaymentAmount,
    PaymentInit,
    PaymentFooter
  },
  methods: {
    isAccountShow() {
      return true
    },
    // ican iwell life health
    showSuperStore() {
      return this.stateData.IsClose
    }
  }
}

</script>
