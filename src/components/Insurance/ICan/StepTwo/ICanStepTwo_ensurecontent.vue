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
      <label for class="col-sm-12 col-form-label insure-label insure-label">意外身故保險金或喪葬費用保險金</label>
      <div class="col-sm-12">
        
        <div class="insure-input-block">依失能程度按契約附表比例計算，最高為</div>
        <div class="insure-input-block"><span id="CalcAmtDesc2"></span> </div>

      </div>
    </div>
    <div class="form-group row">
      <label for class="col-sm-12 col-form-label insure-label insure-label">意外失能保險金</label>
      <div class="col-sm-12">
        <div class="insure-input-block"><span id="CalcAmtDesc3"></span> </div>
      </div>
    </div>
    <div class="form-group row">
      <label for class="col-sm-12 col-form-label insure-label insure-label">意外骨折保險金</label>
      <div class="col-sm-12">
        <div class="insure-input-block"><span id="broken-bones-acc-amt"></span> </div>
      </div>
    </div>
    <div class="form-group row">
      <label for class="col-sm-12 col-form-label insure-label insure-label">傷害醫療保險金</label>
      <div class="col-sm-12">
        <div class="insure-input-block">2 萬元</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}

</script>
