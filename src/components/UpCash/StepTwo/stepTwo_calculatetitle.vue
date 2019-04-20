<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">主要給付項目：年金</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="form-bottom">
        <div class="row col-width">
          <div class="col-sm-12">
            <button class="button-blue btn-block" @click="Estimate()">保費試算</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FunctionTypes from '../../../store/modules/Upcash/Types/UpCashFunctionTypes.js'
import GetterTypes from '../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.Estimate
    ]),
    Estimate() {
      console.log(this.GetPostData.QusAns)
      console.log(this.GetPostData.CRSData.birth_national)
      console.log(this.GetPostData.CRSData.birth_city)
      console.log(this.GetPostData.IsTaiwanTaxDuty)
      console.log(this.GetPostData.client_occupation_class)
      console.log(this.GetPostData.client_occupation_class_code)
      console.log(this.GetPostData.client_occupation_class_code_name)
      console.log(this.GetPostData.po_issue_date)
      console.log(this.GetPostData.IsOneTimePayment)
      console.log(this.GetPostData.face_amt)
      console.log(this.GetPostData.init_method)
      console.log(this.GetPostData.fst_anny_pay_age)
      console.log(this.GetPostData.anny_frequence)
      console.log(this.GetPostData.value_ind)
      console.log(this.GetPostData.email)
    }
  }
}

</script>
