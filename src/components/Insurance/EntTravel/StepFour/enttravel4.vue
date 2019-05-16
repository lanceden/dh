<template>
  <div>
    <loading v-show="GetLoading" />
    <div class="">
      <div class="bg-radius">
        <div class="top">
          <div class="top-title">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="../../../../../static/img/notepad.png" alt=""></div>
              <div class="insure-check-title">保險費合計結果</div>
            </div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="bg-money">
          <div class="col-sm-12">
            <div class="font-label">您所支付的保險費為：</div>
            <div class="font-money">{{GetEntTravelPostData.PolicyData.TotalPremiumDisplay}}</div>
            <div class="money-icon"><img src="../../../../../static/img/coins.png" alt=""></div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="bg-time">
          <div class="col-sm-12">
            <div class="font-label">保障期間：</div>
            <div class="font-label text-red-i">自民國 {{GetEntTravelPostData.PolicyData.InsStartDisplay}}起</div>
            <div class="font-label text-red-i">自民國 {{GetEntTravelPostData.PolicyData.InsEndDisplay}}止</div>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="footer-content">
          <nav class="navbar navbar-dark row">
            <div class="col-sm-4 footer-title footer-left" @click="GoToPrev()">回前一頁</div>
            <div class="col-sm-8 footer-title footer-right" @click="GoToNext()">前往填寫身故受益人資料</div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EntTravelGetterTypes from '../../../../store/modules/EntTravel/Types/EntTravelGetterTypes.js'

export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      EntTravelGetterTypes.GetEntTravelPostData
    ])
  },
  methods: {
    GoToPrev() {
      this.$router.push(`/enttravel-3`)
    },
    GoToNext() {
      // 只有子女不會有本人的受益人需跳過此步驟
      console.log('this.GetEntTravelPostData.TargetType', this.GetEntTravelPostData.TargetType)
      if (parseInt(this.GetEntTravelPostData.TargetType) !== 1) {
        this.$router.push('/enttravel-5')
      } else {
        this.$router.push('/enttravel-6')
      }
    }
  }
}

</script>
