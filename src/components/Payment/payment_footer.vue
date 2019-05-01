<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-6 footer-title footer-left">離開投保流程</div>
        <div class="col-sm-6 footer-title footer-right" @click="doPayment()">確認繳費</div>
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
// import UpCashFunctionTypes from '../../store/modules/Upcash/Types/UpCashFunctionTypes.js'
// import UpCashFunctionTypes from '../../store/modules/Upcash/Types/UpCashFunctionTypes.js'
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
      MyWayFunctionTypes.FuncMyWaySubmitOrder
    ]),
    doPayment() {
      // 當前險種名稱
      let planName = this.$store.state.PLANNAME.toLowerCase()
      // 付款資料
      let postData = {
        NCCCModels: {
          CardNo: this.$store.state.CREDITCARD || '',
          StrDate: ($('#cc_from_month').val() || '') + ($('#cc_from_year').val() || ''),
          ExpDate: ($('#cc_exp_month').val() || '') + ($('#cc_exp_year').val() || ''),
          CVV: this.$store.state.CVV || ''
        },
        CoreData: this.stateData,
        router: this.$router
      }
      console.log('postData.NCCCModels', postData.NCCCModels)
      // 執行付款
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
      }
    }
  }
}

</script>
