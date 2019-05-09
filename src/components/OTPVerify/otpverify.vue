<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../static/img/smartphone.png" alt=""></div>
          <div class="insure-check-title">請輸入『OTP動態密碼驗證』</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <form class="form-bottom">
      <div class="otp-input-group row">
        <div class="col-sm-2 otp-col-padding">
          <input type="text" class="form-control insure-input otp-form-input" id="codeOne" maxlength="1" v-model="codeOne" @keyup="keyup('codeTwo')">
        </div>
        <div class="col-sm-2 otp-col-padding">
          <input type="text" class="form-control insure-input otp-form-input" id="codeTwo" maxlength="1" v-model="codeTwo" @keyup="keyup('codeThree')">
        </div>
        <div class="col-sm-2 otp-col-padding">
          <input type="text" class="form-control insure-input otp-form-input" id="codeThree" maxlength="1" v-model="codeThree" @keyup="keyup('codeFour')">
        </div>
        <div class="col-sm-2 otp-col-padding">
          <input type="text" class="form-control insure-input otp-form-input" id="codeFour" maxlength="1" v-model="codeFour" @keyup="keyup('codeFive')">
        </div>
        <div class="col-sm-2 otp-col-padding">
          <input type="text" class="form-control insure-input otp-form-input" id="codeFive" maxlength="1" v-model="codeFive" @keyup="keyup('codeSix')">
        </div>
        <div class="col-sm-2 otp-col-padding">
          <input type="text" class="form-control insure-input otp-form-input" id="codeSix" maxlength="1" v-model="codeSix">
        </div>
      </div>
      <div class="row">
        <div class="otp-time"><img src="../../../static/img/otp-time.png" alt="">05:00</div>
      </div>
    </form>
    <div class="insure-text text-center">
      密碼有效時間 <span class="text-red-i">{{OtpLastTime}}</span>
    </div>
    <div class="border-bottom-line"></div>
    <div class="col-sm-12" @click="isShowOtp = !isShowOtp">
      <div class="insure-tips-text insure-tips-mt-25 pointer">
        <img src="../../../static/img/insure-link.png" alt="">為什麼我的手機無法收到『簡訊OTP動態密碼』
      </div>
    </div>

    <div class="col-sm-12" v-show="isShowOtp">
      <ul class="insure-tips-text">
        <div class="font-label text-red-i">煩請您先確認下列事項：</div>
        <li  class="decimal">
          您於本公司留存的手機號碼是正確的，如需要變更手機號碼，請至「客戶基本資料修改」進行變更。
        </li>
        <li class="decimal">
          您的手機為開機狀態。
        </li>
        <li class="decimal">
          您的手機其簡訊記憶體空間為足夠。
        </li>
        <li class="decimal">
          請洽詢您的行動電話系統業者，是否有阻擋企業簡訊、垃圾簡訊或是簡訊功能未開啟等狀況。
        </li>
        <li class="decimal">
          如您已確認無法收到「簡訊OTP動態密碼」，若您持有金融憑證，需要開通金融憑證投保，請至我的客戶資料管理/認證資料修改，開通以金融憑證進行投保。
        </li>
        <li class="decimal">
          如有任何疑問，請洽本公司客服中心免付費電話0800-031-115。
        </li>

      </ul>
    </div>
    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-12 footer-title footer-right" @click="GoNext()">驗證</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GetterTypes from '../../store/modules/Upcash/Types/UpCashGetterTypes.js'
export default {
  data() {
    return {
      codeOne: '',
      codeTwo: '',
      codeThree: '',
      codeFour: '',
      codeFive: '',
      codeSix: '',
      isShowOtp: false
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData
    ]),
    OtpLastTime: {
      get() {
        return this.$store.state.OTPLASTTIME
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncCheckOTP'
    ]),
    /**
     * 付款頁
     */
    GoNext() {
      let verifyCode = `${this.codeOne}${this.codeTwo}${this.codeThree}${this.codeFour}${this.codeFive}${this.codeSix}`

      let sendData = {
        verify: {
          MobileNum: this.GetUpCashPostData.phone_mobile,
          OTPMail: this.GetUpCashPostData.email,
          OTPPassword: verifyCode,
          UserIDN: this.GetUpCashPostData.client_id,
          SendCode: this.$store.state.OTPSENDCODE
        },
        router: this.$router
      }
      this.FuncCheckOTP(sendData)
    },
    keyup(inputId) {
      document.getElementById(inputId).focus()
    }
  }
}

</script>
