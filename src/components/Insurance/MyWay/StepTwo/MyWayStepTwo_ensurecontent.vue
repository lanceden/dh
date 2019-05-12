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
      <label for="" class="col-sm-12 col-form-label insure-label">身故保險金或喪葬費用保險金</label>
      <div class="col-sm-12">
        <div class="form-control insure-input-block"><span id="CalcAmtDesc1"></span>萬元</div>
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label">完全失能保險金</label>
      <div class="col-sm-12">
        <div class="form-control insure-input-block"> 依失能程度按契約附表比例計算，最高為 </div>
      </div>
      <div class="col-sm-12">
        <div class="form-control insure-input-block"><span id="CalcAmtDesc2"></span>萬元</div>
      </div>
    </div>
    <form class="form-bottom">
      <div class="col-sm-12">
        <div class="insure-tips-text text-red-i">
          本公司另加計按日數比例計算當期已繳付之未到期保險費，併入身故保險金或喪葬費用保險金或完全失能保險金內給付。
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetMyWayPostData
    ])
  }
}

</script>
