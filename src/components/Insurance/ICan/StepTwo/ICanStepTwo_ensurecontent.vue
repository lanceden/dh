<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/notepad.png" alt=""></div>
          <div class="insure-check-title">保障內容</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <div class="form-group row">
      <label for class="col-sm-12 col-form-label insure-label insure-label">意外身故保險金或喪葬費用保險金</label>
      <div class="col-sm-12">
        <div class="insure-input-block"><span id="CalcAmtDesc2"></span> 萬元</div>
      </div>
    </div>
    <div class="form-group row">
      <label for class="col-sm-12 col-form-label insure-label insure-label">意外失能保險金</label>
      <div class="col-sm-12">
        <div class="insure-input-block"><span id="CalcAmtDesc3"></span> 萬元</div>
      </div>
    </div>
    <div class="form-group row">
      <label for class="col-sm-12 col-form-label insure-label insure-label">意外骨折保險金</label>
      <div class="col-sm-12">
        <div class="insure-input-block"><span id="broken-bones-acc-amt"></span> 萬元</div>
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
import $ from 'jquery'
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetICanPostData
    ])
  },
  updated() {
    $('#CalcAmtDesc2').text($('#face_amt option:selected').text())
    $('#CalcAmtDesc3').text($('#face_amt option:selected').text())
    var prem = parseInt(this.GetICanPostData.face_amt)
    var maxPerc = 1.75
    var minPerc = 0.1 / 4
    var maxAmt = prem * maxPerc / 100
    var minAmt = prem * minPerc / 100
    $('#broken-bones-acc-amt').text(minAmt + '萬' + ' ~ ' + maxAmt + '萬')
  }
}

</script>
