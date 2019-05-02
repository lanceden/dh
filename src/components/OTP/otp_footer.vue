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
import { mapActions } from 'vuex'
export default {
  props: [
    'stateData'
  ],
  methods: {
    ...mapActions([
      'FuncSendOTP'
    ]),
    /**
     * OTP Verify
     */
    GoNext() {
      let sendData = {
        para: {
          MobileNum: this.stateData.phone_mobile,
          OTPMail: this.stateData.email,
          UserIDN: this.stateData.client_id
        },
        router: this.$router
      }
      this.FuncSendOTP(sendData)
    }
  }
}

</script>
