<template>
  <div>
    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-4 footer-title footer-left" @click="GoPrev()">回前一頁</div>
          <div class="col-sm-8 footer-title footer-right" @click="GoNext()">確認送出</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'GetAccountData'
    ])
  },
  methods: {
    ...mapActions([
      'FuncSendOTP'
    ]),
    GoPrev() {
      this.$router.push(`${this.$store.state.PLANNAME.toLowerCase()}-insureddata`)
    },
    GoNext() {
      let sendData = {
        para: {
          MobileNum: this.GetAccountData.CustMobile,
          OTPMail: this.GetAccountData.CusteMail,
          UserIDN: this.GetAccountData.CustIDN
        },
        router: this.$router
      }
      this.FuncSendOTP(sendData)
    }
  }
}

</script>
