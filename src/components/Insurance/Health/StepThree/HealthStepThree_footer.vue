<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-6 footer-title footer-left" @click="GoPrev">上一步</div>
        <div class="col-sm-6 footer-title footer-right" @click="GoNext()">下一步</div>
      </nav>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetHealthPostData,
      'GetContactCheckBox'
    ])
  },
  methods: {
    GoPrev() {
      this.$router.go(-1)
    },
    GoNext() {
      // 戶籍地址-輸入新的戶籍地址
      if ($('#txtNewAddress2').val() !== '') {
        this.GetHealthPostData.address2 = $('#txtNewAddress2').val()
      }
      // 要保人匯款帳戶驗證
      if(this.GetHealthPostData.Applicant_BankCode === '' || this.GetHealthPostData.Applicant_BankCode === undefined) {
        alert('請選擇要保人匯款帳戶金融機構代碼')
        return
      }
      // 要保人匯款帳戶驗證
      if(this.GetHealthPostData.Applicant_BranchCode === '' || this.GetHealthPostData.Applicant_BranchCode === undefined) {
        alert('請選擇要保人匯款帳戶金融機構分行代號')
        return
      }
      // 要保人匯款帳戶驗證
      if(this.GetHealthPostData.Applicant_BranchCode === '' || this.GetHealthPostData.Applicant_BranchCode === undefined) {
        alert('請填寫要保人匯款帳戶銀行帳號')
        return
      }
      this.$router.push('/health-4')
    }
  }
}

</script>
