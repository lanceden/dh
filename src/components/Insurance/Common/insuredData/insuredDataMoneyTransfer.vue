<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/bank.png" alt=""></div>
          <div class="insure-check-title">要保人匯款帳戶</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <form class="form-bottom">
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構代碼</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.Applicant_BankCode}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構中文名稱</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.Applicant_BranchName}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label insure-label">銀行帳號</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.Applicant_Account}}</div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: [
    'stateData'
  ]
}

</script>
