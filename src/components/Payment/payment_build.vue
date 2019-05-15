<template>
  <div>
    <loading v-show="GetLoading" />
    <PaymentAmount :stateData="stateData" :planName="planName"></PaymentAmount>
    <PaymentFooter :stateData="stateData"></PaymentFooter>
  </div>
</template>

<script>
import PaymentAmount from './payment_payamount'
import PaymentFooter from './payment_footer'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      planName: '',
      stateData: []
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
    this.planName = this.$store.state.PLANNAME.toLowerCase()
    switch (this.planName) {
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
  },
  components: {
    PaymentAmount,
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
