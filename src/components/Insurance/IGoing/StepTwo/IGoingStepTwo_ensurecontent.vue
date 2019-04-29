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
              <li>交通意外身故保險金或喪葬費用保險金 > <span id="CalcAmtDesc1"></span>萬 元</li>
              <li>交通意外失能保險金 > 依失能程度按契約附表比例計算，最高為 <span id="CalcAmtDesc2"></span>萬 元</li>
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
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
export default {
  updated() {
    $('#CalcAmtDesc1').html(this.GetIGoingPostData.face_amt || 450)
    $('#CalcAmtDesc2').html(this.GetIGoingPostData.face_amt || 450)
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIGoingPostData
    ])
  }
}

</script>
