<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-6 footer-title footer-left" @click="GoPrev()">回前一頁</div>
        <div class="col-sm-6 footer-title footer-right" @click="doPayment()">確認付款</div>
      </nav>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapActions } from 'vuex'
import UpCashFunctionTypes from '../../store/modules/Upcash/Types/UpCashFunctionTypes.js'
import EZCashFunctionTypes from '../../store/modules/EZCash/Types/EZCashFunctionTypes.js'
import ICanFunctionTypes from '../../store/modules/ICan/Types/ICanFunctionTypes.js'
import IGoingFunctionTypes from '../../store/modules/IGoing/Types/IGoingFunctionTypes.js'
import IWellFunctionTypes from '../../store/modules/IWell/Types/IWellFunctionTypes.js'
import MyWayFunctionTypes from '../../store/modules/MyWay/Types/MyWayFunctionTypes.js'
import AccidentFunctionTypes from '../../store/modules/Accident/Types/AccidentFunctionTypes.js'
import HealthFunctionTypes from '../../store/modules/Health/Types/HealthFunctionTypes.js'
import TravelFunctionTypes from '../../store/modules/Travel/Types/TravelFunctionTypes.js'
import { CheckCardno } from '../../utils/checkCreditCard.js'
import { toggleModalShow } from '../../utils/toggleModal.js'

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
      TravelFunctionTypes.FuncTravelSubmitOrder
    ]),
    GoPrev() {
      this.$router.push(`/otpverify`)
    },
    doPayment() {
      // 當前險種名稱-進入每個險種時會初始化`PLANNAME`值
      let planName = this.$store.state.PLANNAME.toLowerCase()

      // OTP發送及驗證時間賦值
      this.stateData.OtpSendTime = this.$store.state.OTPSENDTIME
      this.stateData.OtpValidateTime = this.$store.state.OTPVALIDSTETIME

      // 年金險用init_method 其餘用PAYTYPE
      if (this.$store.state.PAYTYPE === '') {
        toggleModalShow('請選擇繳費管道。')
        return
      }
      // 判斷是否為信用卡繳費, 若是則要驗證卡號
      if (this.$store.state.PAYTYPE === 'C') {
        let validateResult = CheckCardno(postData.NCCCModels.CardNo)
        if (!validateResult) {
          toggleModalShow('信用卡號不正確，請重新輸入。')
          return
        }
      }

      // 付款資料
      let postData = {
        NCCCModels: {
          CardNo: this.$store.state.CREDITCARD || '',
          StrDate: ($('#cc_from_year').val() || '') + ($('#cc_from_month').val() || ''),
          ExpDate: ($('#cc_exp_year').val() || '') + ($('#cc_exp_month').val() || ''),
          PeriodNo: $(`[name='periodNo']:checked`).val(),
          CVV: this.$store.state.CVV || ''
        },
        CoreData: this.stateData,
        router: this.$router
      }
      console.log('postData.CoreData', JSON.stringify(postData.CoreData))
      console.log('postData.NCCCModels', postData.NCCCModels)
      console.log('postData.CoreData', JSON.stringify(postData.CoreData))

      // 執行付款
      postData.CoreData.OtpSendTime = this.$store.state.OTPSENDTIME
      postData.CoreData.OtpValidateTime = this.$store.state.OTPVALIDSTETIME
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
          postData.CoreData.PolicyData.PayType = this.$store.state.PAYTYPE
          postData.CoreData.PolicyData.OtpSendTime = this.$store.state.OTPSENDTIME
          postData.CoreData.PolicyData.OtpValidateTime = this.$store.state.OTPVALIDSTETIME
          this.FuncTravelSubmitOrder({ nccModels: postData.NCCCModels, para: postData.CoreData, router: postData.router })
          break
        case 'enttravel':
          console.log('this.FuncTravelSubmitQuote')
          postData.CoreData.PolicyData.PayType = this.$store.state.PAYTYPE
          postData.CoreData.PolicyData.OtpSendTime = this.$store.state.OTPSENDTIME
          postData.CoreData.PolicyData.OtpValidateTime = this.$store.state.OTPVALIDSTETIME
          this.FuncTravelSubmitQuote({ nccModels: postData.NCCCModels, para: postData.CoreData, router: postData.router })
          break
      }
    }
  }
}

</script>
