<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../static/img/smartphone.png" alt=""></div>
            <div class="insure-check-title">驗證身分- OTP憑證</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="insure-text">
        我們將透過簡訊發送『OTP動態密碼驗證』至您的手機：<span class="text-red-i">{{this.GetAccountData.CustMobile}}</span>，及您客戶資料中所留存的電子信箱：<span class="text-red-i">{{this.GetAccountData.CusteMail}}</span>。
      </div>
      <div class="row col-width">
        <div class="col-sm-12">
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="col-sm-12">
        <div class="insure-tips-text insure-tips-mt-20">
          <img src="../../../static/img/insure-link.png" />>變更手機號碼：新光人壽客戶服務中心>客戶資料管理>客戶認證資料修改。
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'GetAccountData'
    ])
  }
}

</script>
