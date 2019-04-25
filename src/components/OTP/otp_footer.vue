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
import GetterTypes from '../../store/modules/Upcash/Types/UpCashGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData
    ])
  },
  methods: {
    ...mapActions([
      'FuncSendOTP'
    ]),
    /**
     * OTP Verify
     */
    GoNext() {
      this.FuncSendOTP({
        MobileNum: this.GetUpCashPostData.phone_mobile,
        OTPMail: this.GetUpCashPostData.email,
        UserIDN: this.GetUpCashPostData.client_id
      })
      this.$router.push('/otpverify')
    }
  }
}

</script>
