<template>
  <div>
    <loading v-show="GetLoading" />
    <PaymentAmount :stateData="stateData" :planName="planName"></PaymentAmount>
    <PaymentFooter :stateData="stateData"></PaymentFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PaymentAmount from './payment_payamount'
import PaymentFooter from './payment_footer'
import { data } from './mockData'

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
    this.$store.state.PLANNAME = 'travel'
    this.$store.state.ApiToken = 'eGGIHfm3YaHaSCweG4FVPQKP6WGwnVSZWzLOSQBawnx6I6FSLBCbKCDGkPfwU869PIFkPiZNU9I2ni+6ceuI8TcKGkXt101mW/IFc3wKIziNQz+zFGpvqCPTRBlxa9JIcAZ7WNR8K6ioco+Xuyyal0lhE/7rVj9MovYRnx+r+mKTMt/gKYwcOVdfFYd0R1ulE4VGELW9G+SftOW0drwNPS5cBuyJw8R8QVvMK2xPVIxzXzMi0WKQMTBHMUGwwudhPeDXUZQ0PqsKquXXFNPdgibHtNJcCo+XFTbWbCIlpu8='
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
        this.stateData = data.Data.Result // this.GetTravelPostData
        console.log(this.stateData)
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
