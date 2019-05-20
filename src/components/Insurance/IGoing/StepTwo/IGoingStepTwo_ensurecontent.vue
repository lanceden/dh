<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
          <div class="insure-check-title">保障內容</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label">交通意外身故保險金或喪葬費用保險金</label>
      <div class="col-sm-12">
        <div class="form-control insure-input-block"><span id="CalcAmtDesc1"></span>萬元</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label">交通意外失能保險金</label>
      <div class="col-sm-12">
        <div class="form-control insure-input-block"> 依失能程度按契約附表比例計算，最高為 <span id="CalcAmtDesc2"></span>萬元</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}

</script>
