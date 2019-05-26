<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-4 footer-title footer-left" @click="GoPrev()">回前一頁</div>
        <div class="col-sm-8 footer-title footer-right" @click="GoNext()">確認送出</div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { toggleModalShow } from '../../../../utils/toggleModal'
import EZCashGetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes'

export default {
  computed: {
    ...mapGetters([
      EZCashGetterTypes.GetEZCashPostData
    ])
  },
  methods: {
    GoPrev() {
      this.$router.push(`/EZCash-Estimate`)
    },
    GoNext() {
      if(this.GetEZCashPostData.Applicant_BankCode === '' || this.GetEZCashPostData.Applicant_BankCode === null) {
        toggleModalShow('請填寫要保人匯款帳戶金融機構代碼', '貼心提醒您')
        return
      }
      if(this.GetEZCashPostData.Applicant_BranchCode === '' || this.GetEZCashPostData.Applicant_BranchCode === null) {
        toggleModalShow('請填寫要保人匯款金融機構分行代號', '貼心提醒您')
        return
      }
      if(this.GetEZCashPostData.Applicant_Account === '' || this.GetEZCashPostData.Applicant_Account === null) {
        toggleModalShow('請填寫要保人匯款帳戶銀行帳號', '貼心提醒您')
        return
      }
      this.$router.push('/benf?instypename=EZCash')
    }
  }
}

</script>
