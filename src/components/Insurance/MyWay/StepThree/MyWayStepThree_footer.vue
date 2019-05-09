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
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetMyWayPostData,
      'GetContactCheckBox'
    ])
  },
  methods: {
    GoPrev() {
      this.$router.push(`/MyWay-3`)
    },
    GoNext() {
      // 戶籍地址-輸入新的戶籍地址
      if ($('#txtNewAddress2').val() !== '') {
        this.GetMyWayPostData.address2 = $('#txtNewAddress2').val()
      }
      // 要保人匯款帳戶驗證
      if(this.GetMyWayPostData.Applicant_BankCode === '' || this.GetMyWayPostData.Applicant_BankCode === undefined) {
        alert('請選擇要保人匯款帳戶金融機構代碼')
        return
      }
      // 要保人匯款帳戶驗證
      if(this.GetMyWayPostData.Applicant_BranchCode === '' || this.GetMyWayPostData.Applicant_BranchCode === undefined) {
        alert('請選擇要保人匯款帳戶金融機構分行代號')
        return
      }
      // 要保人匯款帳戶驗證
      if(this.GetMyWayPostData.Applicant_BranchCode === '' || this.GetMyWayPostData.Applicant_BranchCode === undefined) {
        alert('請填寫要保人匯款帳戶銀行帳號')
        return
      }
      this.$router.push('/benf?instypename=myway')
    }
  }
}

</script>
