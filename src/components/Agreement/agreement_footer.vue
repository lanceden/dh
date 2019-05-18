<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-4 footer-title footer-left" @click="GoToPrev()">回前一頁</div>
        <div class="col-sm-8 footer-title " :class="{ 'footer-gary': true, 'footer-right': false }" @click="GoNext()">我已同意並閱讀完成</div>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { toggleModalShow } from '../../utils/toggleModal.js'
import UpCashFunctionTypes from '../../store/modules/Upcash/Types/UpCashFunctionTypes'
import EZCashFunctionTypes from '../../store/modules/EZCash/Types/EZCashFunctionTypes'
import ICanFunctionTypes from '../../store/modules/ICan/Types/ICanFunctionTypes'
import IGoingFunctionTypes from '../../store/modules/IGoing/Types/IGoingFunctionTypes'
import IWellFunctionTypes from '../../store/modules/IWell/Types/IWellFunctionTypes'
import MyWayFunctionTypes from '../../store/modules/MyWay/Types/MyWayFunctionTypes'
import AccidentFunctionTypes from '../../store/modules/Accident/Types/AccidentFunctionTypes'
import HealthFunctionTypes from '../../store/modules/Health/Types/HealthFunctionTypes'
import TravelFunctionTypes from '../../store/modules/Travel/Types/TravelFunctionTypes'
// import UpCashFunctionTypes from '../../store/modules/Upcash/Types/UpCashFunctionTypes.js'
// import UpCashFunctionTypes from '../../store/modules/Upcash/Types/UpCashFunctionTypes.js'
export default {
  props: [
    'insname',
    'provisionCount'
  ],
  computed: {
    ...mapGetters([
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
  },
  methods: {
    ...mapActions([
      UpCashFunctionTypes.FuncUpCashSubmitQuote,
      EZCashFunctionTypes.FuncEZCashSubmitQuote,
      ICanFunctionTypes.FuncICanSubmitQuote,
      IWellFunctionTypes.FuncIWellSubmitQuote,
      IGoingFunctionTypes.FuncIGoingSubmitQuote,
      MyWayFunctionTypes.FuncMyWaySubmitQuote,
      AccidentFunctionTypes.FuncAccidentSubmitQuote,
      HealthFunctionTypes.FuncHealthSubmitQuote,
      TravelFunctionTypes.FuncTravelSubmitQuote
    ]),
    /**
     * 回上一頁
     */
    GoToPrev() {
      let planName = this.$store.state.PLANNAME.toLowerCase()
      if(planName === 'travel' || planName === 'enttravel') {
        this.$router.push(`/travel-8`)
      } else {
        this.$router.push(`/${planName}-4`)
      }
    },
    /**
     * 投保資訊
     */
    GoNext() {
      if (this.$store.state.AGREEMENTCOUNT > 0) {
        toggleModalShow('請閱讀同意書', '貼心提醒您')
        return
      }
      // 當前險種名稱-進入每個險種時會初始化`PLANNAME`值
      let planName = this.$store.state.PLANNAME.toLowerCase()
      // 投保流程下一步
      switch (planName) {
        case 'upcash':
          console.log('this.FuncUpCashSubmitQuote')
          this.FuncUpCashSubmitQuote({ para: this.GetUpCashPostData, router: this.$router })
          break
        case 'ezcash':
          console.log('this.FuncEZCashSubmitQuote')
          this.FuncEZCashSubmitQuote({ para: this.GetEZCashPostData, router: this.$router })
          break
        case 'ican':
          console.log('this.FuncICanSubmitQuote')
          // 驗證完成
          this.GetICanPostData.QusAns[0].Answar = true
          this.GetICanPostData.QusAns[2].Answar = true
          this.GetICanPostData.QusAns[3].Answar = true
          this.GetICanPostData.QusAns[4].Answar = true
          this.FuncICanSubmitQuote({ para: this.GetICanPostData, router: this.$router })
          break
        case 'iwell':
          console.log('this.FuncIWellSubmitQuote')
          // 驗證完成
          this.GetIWellPostData.QusAns[0].Answar = true
          this.GetIWellPostData.QusAns[2].Answar = true
          this.GetIWellPostData.QusAns[3].Answar = true
          this.GetIWellPostData.QusAns[4].Answar = true
          this.FuncIWellSubmitQuote({ para: this.GetIWellPostData, router: this.$router })
          break
        case 'igoing':
          console.log('this.FuncIGoingSubmitQuote')
          this.FuncIGoingSubmitQuote({ para: this.GetIGoingPostData, router: this.$router })
          break
        case 'myway':
          console.log('this.FuncMyWaySubmitQuote')
          this.FuncMyWaySubmitQuote({ para: this.GetMyWayPostData, router: this.$router })
          break
        case 'accident':
          console.log('this.FuncAccidentSubmitQuote')
          this.FuncAccidentSubmitQuote({ para: this.GetAccidentPostData, router: this.$router })
          break
        case 'health':
          console.log('this.FuncHealthSubmitQuote')
          this.FuncHealthSubmitQuote({ para: this.GetHealthPostData, router: this.$router })
          break
        case 'travel':
          console.log('this.FuncTravelSubmitQuote')
          this.FuncTravelSubmitQuote({ para: this.GetTravelPostData, router: this.$router })
          break

      }
    }
  }
}

</script>
