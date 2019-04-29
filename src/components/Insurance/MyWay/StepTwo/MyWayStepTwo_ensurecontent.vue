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
              <li>身故保險金或喪葬費用保險金註為 {{GetMyWayPostData.face_amt}}萬元</li>
              <li>完全失能保險金註為 {{GetMyWayPostData.face_amt}}萬元</li>
              <li>註：本公司另加計按日數比例計算當期已繳付之未到期保險費，併入身故保險金或喪葬費用保險金或完全失能保險金內給付。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
