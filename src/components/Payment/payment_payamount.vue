<template>
  <div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../static/img/calculator.png" alt=""></div>
            <div class="insure-check-title">保費金額</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="bg-money">
        <div class="col-sm-12">
          <div class="font-label">您所支付的第一期保險費為：</div>
          <div class="font-money"> NT$ {{amount}} 元</div>
          <div class="money-icon"><img src="../../../static/img/coins.png" alt=""></div>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="insure-tips insure-tips-mt-20">
          請注意！！<br>首期選擇活期性存款帳戶進必須使用要保人本人的帳戶，且必須立即完成繳費成功，才算完成投保！
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'amount'
  ]
}

</script>
