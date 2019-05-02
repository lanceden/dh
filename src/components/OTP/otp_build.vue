<template>
  <div>
    <Otp></Otp>
    <OtpFooter :stateData="stateData"></OtpFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Otp from './otp'
import OtpFooter from './otp_footer'
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
    // 當前險種名稱-進入每個險種時會初始化`PLANNAME`值
    let planName = this.$store.state.PLANNAME.toLowerCase()
    switch (planName) {
      case 'upcash':
        console.log('this.GetUpCashPostData')
        this.stateData = this.GetUpCashPostData
        break
      case 'ezcash':
        console.log('this.GetEZCashPostData')
        this.stateData = this.GetEZCashPostData
        break
      case 'ican':
        console.log('this.GetICanPostData')
        this.stateData = this.GetICanPostData
        break
      case 'iwell':
        console.log('this.GetIWellPostData')
        this.stateData = this.GetIWellPostData
        break
      case 'igoing':
        console.log('this.GetIGoingPostData')
        this.stateData = this.GetIGoingPostData
        break
      case 'myway':
        console.log('this.GetMyWayPostData')
        this.stateData = this.GetMyWayPostData
        break
    }
  },
  components: {
    Otp,
    OtpFooter
  }
}

</script>
