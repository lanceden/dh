<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/chat.png"></div>
          <div class="insure-check-title" style="text-align:left;">FATCA及CRS個人客戶自我聲明書 - 基本資料</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <form class="form-bottom">
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">被保險人</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.client_names}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">被保險人身分證字號</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.client_id}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">被保險人出生年月日</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.Birthday_Full}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">戶籍地址</label>
        <div class="col-sm-12">
          <div class="insure-input-block">同本次申請文件之地址</div>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">出生地-國家</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.CRSData.birth_national}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">出生地-城市</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{stateData.CRSData.birth_city}}</div>
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
