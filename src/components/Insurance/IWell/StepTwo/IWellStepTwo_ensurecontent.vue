<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
          <div class="insure-check-title">保障內容</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <div class="form-bottom">
      <div class="row col-width">
        <div class="col-sm-12">
          <div class="insure-notice-text">
            <ul class="insure-notice-text-ul">
              <li>意外身故保險金或喪葬費用保險金 > <span id="CalcAmtDesc2"></span>元</li>
              <li>特定意外身故保險金或喪葬費用保險金(額外給付) > <span id="CalcAmtDesc3"></span>元</li>
              <li>意外失能保險金 > <span id="blind-acc-amt"></span>元</li>
              <li>特定意外失能保險金(額外給付) > <span id="specific-blind-acc-amt">2 萬</span>元</li>
              <li>傷害醫療保險金 > <span>2 萬</span>元</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetIWellPostData
    ])
  },
  updated() {
    var prem = parseInt(this.GetIWellPostData.face_amt)
    var maxPerc = 100 * 0.5
    var minPerc = 5 * 0.5
    var maxAmt = prem * maxPerc / 100
    var minAmt = prem * minPerc / 100
    $('#CalcAmtDesc2').text(maxAmt + '萬')
    $('#CalcAmtDesc3').text(maxAmt + '萬')
    $('#blind-acc-amt').text(minAmt + '萬' + ' ~ ' + maxAmt + '萬')
    $('#specific-blind-acc-amt').text(minAmt + '萬' + ' ~ ' + maxAmt + '萬')
  }
}

</script>
