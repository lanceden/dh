<template>
  <div>
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label">被保險人</label>
      <div class="col-sm-12">
        <div class="insure-input-block">{{stateData.client_names}} (要被保人須為同一人)</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
      <div class="col-sm-12">
        <div class="insure-input-block">{{stateData.Birthday_Full}}</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label">投保年齡</label>
      <div class="col-sm-12">
        <div class="insure-input-block">{{stateData.Age}}</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
      <div class="col-sm-12">
        <div class="insure-input-block">{{stateData.client_id}}</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label">性別</label>
      <div class="col-sm-12">
        <div class="insure-input-block">{{stateData.client_rate_sex === '1' ? '男' : '女'}}</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
      <div class="col-sm-12">
        <div class="insure-input-block">電話：{{stateData.phone_area}}{{stateData.phone_main}}{{stateData.phone_ext}}<br>手機：{{stateData.phone_mobile}}</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label">通訊地址</label>
      <div class="col-sm-12">
        <div class="insure-input-block">{{stateData.address1}}</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label">戶籍地址</label>
      <div class="col-sm-12">
        <div class="insure-input-block">{{stateData.address2}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'stateData'
  ]
}

</script>
