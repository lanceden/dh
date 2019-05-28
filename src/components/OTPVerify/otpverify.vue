<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../static/img/smartphone.png"></div>
          <div class="insure-check-title">請輸入『OTP動態密碼驗證』</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <form class="form-bottom">
      <div class="otp-input-group row">
        <div class="col-sm-2 otp-col-padding">
          <input type="number" class="form-control insure-input otp-form-input" id="codeOne" maxlength="1" v-model="codeOne" @keyup="keyup('codeTwo', codeOne)">
        </div>
        <div class="col-sm-2 otp-col-padding">
          <input type="number" class="form-control insure-input otp-form-input" id="codeTwo" maxlength="1" v-model="codeTwo" @keyup="keyup('codeThree', codeTwo)">
        </div>
        <div class="col-sm-2 otp-col-padding">
          <input type="number" class="form-control insure-input otp-form-input" id="codeThree" maxlength="1" v-model="codeThree" @keyup="keyup('codeFour', codeThree)">
        </div>
        <div class="col-sm-2 otp-col-padding">
          <input type="number" class="form-control insure-input otp-form-input" id="codeFour" maxlength="1" v-model="codeFour" @keyup="keyup('codeFive', codeFive)">
        </div>
        <div class="col-sm-2 otp-col-padding">
          <input type="number" class="form-control insure-input otp-form-input" id="codeFive" maxlength="1" v-model="codeFive" @keyup="keyup('codeSix', codeSix)">
        </div>
        <div class="col-sm-2 otp-col-padding">
          <input type="number" class="form-control insure-input otp-form-input" id="codeSix" maxlength="1" v-model="codeSix">
        </div>
      </div>
      <div class="row">
        <div class="otp-time">
          <img src="../../../static/img/otp-time.png">
          <!-- https://vac.js.org/zh/guide/#methods -->
          <countdown :end-time="new Date().getTime() + 300000">
            <span slot="process" slot-scope="lastTime">
              {{ `${lastTime.timeObj.m}:${lastTime.timeObj.s}` }}
            </span>
            <span slot="finish">驗證碼失效</span>
          </countdown>
        </div>
      </div>
    </form>
    <div class="insure-text text-center">
      密碼有效時間 <span class="text-red-i">{{OtpLastTime}}</span>
    </div>
    <div class="border-bottom-line"></div>
    <div class="col-sm-12" @click="isShowOtp = !isShowOtp">
      <div class="insure-tips-text insure-tips-mt-25 pointer">
        為什麼我的手機無法收到『簡訊OTP動態密碼』
        <img class="arrowblue" src="../../../static/img/arrow_blue_up.png" v-show="isShowOtp">
        <img class="arrowblue" src="../../../static/img/arrow_blue_down.png" v-show="!isShowOtp">
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <form class="form-bottom" v-show="isShowOtp">
      <div class="insure-text insure-text-explan">
        煩請您先確認下列事項：
        <ul class="insure-tips-text insure-text-explan insure-text-explancontent ul-indentation">
          <li class="decimal first">您於本公司留存的手機號碼是正確的，如需要變更手機號碼，請至「客戶基本資料修改」進行變更。</li>
          <li class="decimal">您的手機為開機狀態。</li>
          <li class="decimal">您的手機其簡訊記憶體空間為足夠。</li>
          <li class="decimal">請洽詢您的行動電話系統業者，是否有阻擋企業簡訊、垃圾簡訊或是簡訊功能未開啟等狀況。</li>
          <li class="decimal">如有任何疑問，請洽本公司客服中心。</li>
        </ul>
      </div>
      <div class="col-sm-12">
        <div class="insure-tips-text">
          <img src="../../../static/img/tel.png" class="tel">
          <a class="insure-tips-text first-blue" href="tel:0800-031-115">0800 031 115</a>
        </div>
      </div>
    </form>

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
      'GetAccountData'
    ]),
    OtpLastTime: {
      get() {
        return this.$store.state.OTPLASTTIME || 0
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncCheckOTP'
    ]),
    startCallBack: function(x) {
      console.log(x)
    },
    GoPrev() {
      this.$router.push(`/otp`)
    },
    /**
     * 付款頁
     */
    GoNext() {
      let verifyCode = `${this.codeOne}${this.codeTwo}${this.codeThree}${this.codeFour}${this.codeFive}${this.codeSix}`
      console.log('verifyCode', verifyCode)
      console.log('this.$store.state.OTPSENDCODE', this.$store.state.OTPSENDCODE)
      let sendData = {
        verify: {
          MobileNum: this.GetAccountData.CustMobile,
          OTPMail: this.GetAccountData.CusteMail,
          OTPPassword: verifyCode,
          UserIDN: this.GetAccountData.CustIDN,
          SendCode: this.$store.state.OTPSENDCODE
        },
        router: this.$router
      }
      this.FuncCheckOTP(sendData)
    },
    keyup(inputId, value) {
      document.getElementById(inputId).focus()
    }
  }
}

</script>
