<template>
  <div>
    <loading v-show="GetLoading" />
    <BenfSetup :stateData="stateData"></BenfSetup>
    <BenfOne :stateData="stateData"></BenfOne>
    <BenfOneAccount :stateData="stateData"></BenfOneAccount>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BenfSetup from './benfsetup'
import BenfOne from './benfone'
import BenfOneAccount from './benfoneAccount'
import BenfFooter from './benffooter'
export default {
  data() {
    return {
      stateData: []
    }
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
      case 'accident':
        console.log('this.GetAccidentPostData')
        this.stateData = this.GetAccidentPostData
        break
      case 'health':
        console.log('this.GetHealthPostData')
        this.stateData = this.GetHealthPostData
        break
      case 'travel':
        console.log('this.GetTravelPostData')
        this.stateData = this.GetTravelPostData
        break
      case 'enttravel':
        console.log('this.GetEntTravelPostData')
        this.stateData = this.GetEntTravelPostData
        break
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
      'GetEntTravelPostData',
    ])
  },
  components: {
    BenfSetup,
    BenfOne,
    BenfOneAccount,
    BenfFooter
  }
}

</script>
