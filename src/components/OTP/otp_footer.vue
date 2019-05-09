<template>
  <div>
    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-12 footer-title footer-right" @click="GoNext()">發送簡訊驗證</div>
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
