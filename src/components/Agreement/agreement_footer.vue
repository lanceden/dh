<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-12 footer-title footer-gary" @click="GoNext">我已同意並閱讀完成</div>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import UpCashFunctionTypes from '../../store/modules/Upcash/Types/UpCashFunctionTypes.js'
import EZCashFunctionTypes from '../../store/modules/EZCash/Types/EZCashFunctionTypes.js'
import ICanFunctionTypes from '../../store/modules/ICan/Types/ICanFunctionTypes.js'
import IGoingFunctionTypes from '../../store/modules/IGoing/Types/IGoingFunctionTypes.js'
import IWellFunctionTypes from '../../store/modules/IWell/Types/IWellFunctionTypes.js'
import MyWayFunctionTypes from '../../store/modules/MyWay/Types/MyWayFunctionTypes.js'
import AccidentFunctionTypes from '../../store/modules/Accident/Types/AccidentFunctionTypes.js'
// import UpCashFunctionTypes from '../../store/modules/Upcash/Types/UpCashFunctionTypes.js'
// import UpCashFunctionTypes from '../../store/modules/Upcash/Types/UpCashFunctionTypes.js'
export default {
  props: [
    'insname'
  ],
  computed: {
    ...mapGetters([
      'GetUpCashPostData',
      'GetEZCashPostData',
      'GetICanPostData',
      'GetIWellPostData',
      'GetIGoingPostData',
      'GetMyWayPostData',
      'GetAccidentPostData'
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
      AccidentFunctionTypes.FuncAccidentSubmitQuote
    ]),
    /**
     * 投保資訊
     */
    GoNext() {
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
          this.FuncICanSubmitQuote({ para: this.GetICanPostData, router: this.$router })
          break
        case 'iwell':
          console.log('this.FuncIWellSubmitQuote')
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
      }
    }
  }
}

</script>
