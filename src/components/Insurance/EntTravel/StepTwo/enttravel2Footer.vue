<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-4 footer-title footer-left" @click="GoToPrev()">回前一頁</div>
        <div class="col-sm-8 footer-title footer-right" @click="GotoNext()">確認送出</div>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import EntTravelGetterTypes from '../../../../store/modules/EntTravel/Types/EntTravelGetterTypes.js'
import { toggleModalShow } from '../../../../utils/toggleModal'

export default {
  computed: {
    ...mapGetters([
      EntTravelGetterTypes.GetEntTravelPostData
    ])
  },
  methods: {
    GoToPrev() {
      this.$router.push(`/enttravel-1?token=${this.$store.state.ApiToken}`)
    },
    GotoNext() {
      // 請選擇您的旅遊地點-國外要判斷是否有選擇前往國家
      if (parseInt(this.GetEntTravelPostData.PolicyData.TravelType) === 2) {
        let result = parseInt(this.GetEntTravelPostData.PolicyData.TravelCountry)
        if (result === 0) {
          toggleModalShow('請選擇您的旅遊地點', '貼心提醒您')
          return
        }
        // 前往國家為其他地區-要判斷是否有填寫旅遊地點
        if (result === 6) {
          let etcContury = this.GetEntTravelPostData.PolicyData.EtcCountry
          if (etcContury === '') {
            toggleModalShow('請選擇您的旅遊地點', '貼心提醒您')
            return
          }
        }
      }
      // 前往被保人填寫資料頁
      this.$router.push('/enttravel-3')
    }
  }
}

</script>
