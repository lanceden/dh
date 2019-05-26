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
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes'

export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData
    ])
  },
  methods: {
    GoPrev() {
      this.$router.push(`/upcash-Estimate`)
    },
    GoNext() {
      if (this.GetUpCashPostData.Applicant_BankCode === '' || this.GetUpCashPostData.Applicant_BankCode === null) {
        toggleModalShow('請填寫要保人匯款帳戶金融機構代碼', '貼心提醒您')
        return
      }
      if (this.GetUpCashPostData.Applicant_BranchCode === '' || this.GetUpCashPostData.Applicant_BranchCode === null) {
        toggleModalShow('請填寫要保人匯款金融機構分行代號', '貼心提醒您')
        return
      }
      if (this.GetUpCashPostData.Applicant_Account === '' || this.GetUpCashPostData.Applicant_Account === null) {
        toggleModalShow('請填寫要保人匯款帳戶銀行帳號', '貼心提醒您')
        return
      }
      this.$router.push('/benf?instypename=upcash')
    }
  }
}

</script>
