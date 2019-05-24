<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-4 footer-title footer-left" @click="GoPrev()">回前一頁</div>
        <div class="col-sm-8 footer-title footer-right" @click="doPayment()">確認付款</div>
      </nav>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapActions } from 'vuex'
import UpCashFunctionTypes from '../../store/modules/Upcash/Types/UpCashFunctionTypes'
import EZCashFunctionTypes from '../../store/modules/EZCash/Types/EZCashFunctionTypes'
import ICanFunctionTypes from '../../store/modules/ICan/Types/ICanFunctionTypes'
import IGoingFunctionTypes from '../../store/modules/IGoing/Types/IGoingFunctionTypes'
import IWellFunctionTypes from '../../store/modules/IWell/Types/IWellFunctionTypes'
import MyWayFunctionTypes from '../../store/modules/MyWay/Types/MyWayFunctionTypes'
import AccidentFunctionTypes from '../../store/modules/Accident/Types/AccidentFunctionTypes'
import HealthFunctionTypes from '../../store/modules/Health/Types/HealthFunctionTypes'
import TravelFunctionTypes from '../../store/modules/Travel/Types/TravelFunctionTypes'
import EntTravelFunctionTypes from '../../store/modules/EntTravel/Types/EntTravelFunctionTypes'
import { CheckCardno } from '../../utils/checkCreditCard'
import { toggleModalShow } from '../../utils/toggleModal'

export default {
  props: [
    'stateData'
  ],
  methods: {
    ...mapActions([
      UpCashFunctionTypes.FuncUpCashSubmitOrder,
      EZCashFunctionTypes.FuncEZCashSubmitOrder,
      ICanFunctionTypes.FuncICanSubmitOrder,
      IWellFunctionTypes.FuncIWellSubmitOrder,
      IGoingFunctionTypes.FuncIGoingSubmitOrder,
      MyWayFunctionTypes.FuncMyWaySubmitOrder,
      AccidentFunctionTypes.FuncAccidentSubmitOrder,
      HealthFunctionTypes.FuncHealthSubmitOrder,
      TravelFunctionTypes.FuncTravelSubmitOrder,
      EntTravelFunctionTypes.FuncEntTravelSubmitOrder
    ]),
    GoPrev() {
      this.$router.push(`/otpverify`)
    },
    doPayment() {
      if (this.$store.state.PAYTYPE === '') {
        toggleModalShow('請選擇繳費管道。')
        return
      }

      // 當前險種名稱-進入每個險種時會初始化`PLANNAME`值
      let planName = this.$store.state.PLANNAME.toLowerCase()
      // 旅平險要另外判斷
      if (planName === 'travel' || planName === 'enttravel') {
        this.stateData.PolicyData.PayType = this.$store.state.PAYTYPE
        this.stateData.PolicyData.OtpSendTime = this.$store.state.OTPSENDTIME
        this.stateData.PolicyData.OtpValidateTime = this.$store.state.OTPVALIDSTETIME
        this.stateData.PolicyData.PaymentPreferredAccoun = this.$store.state.PAYMENTPREFER
      } else {
        this.stateData.init_method = this.$store.state.PAYTYPE
        this.stateData.OtpSendTime = this.$store.state.OTPSENDTIME
        this.stateData.OtpValidateTime = this.$store.state.OTPVALIDSTETIME
        this.stateData.Payment_Prefer = this.$store.state.PAYMENTPREFER
      }

      // 付款資料
      let postData = {
        NCCCModels: {
          CardNo: this.$store.state.CREDITCARD || '',
          StrDate: ($('#cc_from_year').val() || '') + ($('#cc_from_month').val() || ''),
          ExpDate: ($('#cc_exp_year').val() || '') + ($('#cc_exp_month').val() || ''),
          PeriodNo: this.$store.state.PERIODNO,
          CVV: this.$store.state.CVV || ''
        },
        CoreData: this.stateData,
        router: this.$router
      }
      console.log('postData', postData)
      // 判斷是否為信用卡繳費, 若是則要驗證卡號
      if (this.$store.state.PAYTYPE === 'C') {
        if (!CheckCardno(postData.NCCCModels.CardNo)) {
          toggleModalShow('信用卡號不正確，請重新輸入。')
          return
        }
      }
      switch (planName) {
        case 'upcash':
          console.log('this.FuncUpCashSubmitOrder')
          this.FuncUpCashSubmitOrder({ nccModels: postData.NCCCModels, para: postData.CoreData, router: postData.router })
          break
        case 'ezcash':
          console.log('this.FuncEZCashSubmitOrder')
          this.FuncEZCashSubmitOrder({ nccModels: postData.NCCCModels, para: postData.CoreData, router: postData.router })
          break
        case 'ican':
          console.log('this.FuncICanSubmitOrder')
          this.FuncICanSubmitOrder({ nccModels: postData.NCCCModels, para: postData.CoreData, router: postData.router })
          break
        case 'iwell':
          console.log('this.FuncIWellSubmitOrder')
          this.FuncIWellSubmitOrder({ nccModels: postData.NCCCModels, para: postData.CoreData, router: postData.router })
          break
        case 'igoing':
          console.log('this.FuncIGoingSubmitOrder')
          this.FuncIGoingSubmitOrder({ nccModels: postData.NCCCModels, para: postData.CoreData, router: postData.router })
          break
        case 'myway':
          console.log('this.FuncMyWaySubmitOrder')
          this.FuncMyWaySubmitOrder({ nccModels: postData.NCCCModels, para: postData.CoreData, router: postData.router })
          break
        case 'accident':
          console.log('this.FuncAccidentSubmitOrder')
          this.FuncAccidentSubmitOrder({ nccModels: postData.NCCCModels, para: postData.CoreData, router: postData.router })
          break
        case 'health':
          console.log('this.FuncHealthSubmitOrder')
          this.FuncHealthSubmitOrder({ nccModels: postData.NCCCModels, para: postData.CoreData, router: postData.router })
          break
        case 'travel':
          console.log('this.FuncTravelSubmitOrder')
          this.FuncTravelSubmitOrder({ nccModels: postData.NCCCModels, para: postData.CoreData, router: postData.router })
          break
        case 'enttravel':
          console.log('this.FuncEntTravelSubmitOrder')
          this.FuncEntTravelSubmitOrder({ nccModels: postData.NCCCModels, para: postData.CoreData, router: postData.router })
          break
      }
    }
  }
}

</script>
