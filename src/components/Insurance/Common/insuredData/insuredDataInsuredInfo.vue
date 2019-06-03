<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/notepad.png" alt=""></div>
          <div class="insure-check-title">投保資訊</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <form class="form-bottom">
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">驗證身份方式</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block" v-show="stateData.VerifyTypeList['1']">使用「富邦證券」金融憑證驗證</div>
          <div class="form-control insure-input-block" v-show="stateData.VerifyTypeList['2']">簡訊OTP動態密碼驗證</div>
          <div class="form-control insure-input-block" v-show="stateData.VerifyTypeList['3']">簡訊OTP動態密碼驗證</div>
          <div class="form-control insure-input-block" v-show="stateData.VerifyTypeList['4']">簡訊OTP動態密碼驗證</div>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">保單形式</label>
        <div class="col-sm-12">
          <div class="insure-input-block" v-if="isElecForm">電子保單</div>
          <div class="insure-input-block" v-else>紙本保單</div>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">保險單寄送地址</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.city1}}{{stateData.district1}}{{stateData.road1}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label" v-if="isAnnuity">第一期應繳保險費</label>
        <label class="col-sm-12 col-form-label insure-label" v-else>總保險費</label>
        <div class="col-sm-12">
          <div class="insure-input-block">NT$ {{stateData.mode_prem|decimalComma}} </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: [
    'stateData'
  ],
  computed: {
    // 是否為電子保單
    isElecForm() {
      let planCode = this.stateData.plan_code
      switch (planCode) {
        case '20530':
        case '20540':
          return true
        default:
          return false
      }
    },
    // 是否為年金險
    isAnnuity() {
      return this.stateData.plan_code === 'UC099' || this.stateData.plan_code === 'UCA99' || this.stateData.plan_code === 'EZA99'
    }
  }
}

</script>
