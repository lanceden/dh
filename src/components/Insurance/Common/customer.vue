<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check">
            <img src="../../../../static/img/insurance.png" alt>
          </div>
          <div class="insure-check-title">基本資料</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <form class="form-bottom">
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label">被保險人</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{this.stateData.client_names}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label">被保險人出生年月日</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{this.stateData.Birthday_Full}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label">被保險人身分證字號</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{this.stateData.client_id}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label">被保險人性別</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{this.stateData.client_rate_sex === 1 ? '男性' : '女性'}}</div>
        </div>
      </div>
      <div class="row col-width">
        <div class="col-sm-12">
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="insure-text">
        主管機關規定，要保人及被保人資料需為同一人，如需修改個人資料，請洽本公司客戶服務中心。
      </div>
      <div class="col-sm-12">
        <div class="insure-tips-text">
          <img src="../../../../static/img/tel.png" class="tel">
          <a class="insure-tips-text first-blue" href="tel:0800-031-115">0800 031 115</a>
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
