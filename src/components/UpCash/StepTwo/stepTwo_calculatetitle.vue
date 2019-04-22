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
      FunctionTypes.FuncEstimate
    ]),
    Estimate() {
      if (this.GetPostData.face_amt === '' || this.GetPostData.face_amt <= 0) {
        alert('請填寫第一期保險費。')
        return
      }

      console.log('client_rate_sex', this.GetPostData.client_rate_sex)
      console.log('client_occupation_class', this.GetPostData.client_occupation_class)
      console.log('client_occupation_class_code', this.GetPostData.client_occupation_class_code)
      console.log('client_occupation_class_code_name', this.GetPostData.client_occupation_class_code_name)
      console.log('web_appl_ind', this.GetPostData.web_appl_ind)
      console.log('po_issue_date', this.GetPostData.po_issue_date)
      console.log('face_amt', this.GetPostData.face_amt)
      console.log('IsOneTimePayment', this.GetPostData.IsOneTimePayment)
      console.log('init_method', this.GetPostData.init_method)
      console.log('fst_anny_pay_age', this.GetPostData.fst_anny_pay_age)
      console.log('anny_frequence', this.GetPostData.anny_frequence)
      console.log('qpoop_19_year', this.GetPostData.qpoop_19_year)
      console.log('value_ind', this.GetPostData.value_ind)
      console.log('Applicant_BankCode', this.GetPostData.Applicant_BankCode)
      console.log('Applicant_BranchCode', this.GetPostData.Applicant_BranchCode)
      console.log('Applicant_Account', this.GetPostData.Applicant_Account)
      console.log('Applicant_BankName', this.GetPostData.Applicant_BankName)
      console.log('Applicant_BranchName', this.GetPostData.Applicant_BranchName)
      console.log('email', this.GetPostData.email)
      console.log('city3', this.GetPostData.city3)
      console.log('district3', this.GetPostData.district3)
      console.log('road3', this.GetPostData.road3)
      console.log('zip3', this.GetPostData.zip3)
      console.log('EmployeeNo', this.GetPostData.EmployeeNo)
      console.log('QusAns[0][Answar]', this.GetPostData.QusAns[0].Answar)
      console.log('CRSData[birth_city]', this.GetPostData.CRSData.birth_city)
      console.log('CRSData[birth_national]', this.GetPostData.CRSData.birth_national)
      console.log('IsTaiwanTaxDuty', this.GetPostData.IsTaiwanTaxDuty)
      this.FuncEstimate({ para: this.GetPostData })
    }
  }
}

</script>
