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
      this.$router.go(-1)
    },
    GotoNext() {
      // 請選擇您的旅遊地點
      if (this.GetEntTravelPostData.PolicyData.TravelCountry === undefined || this.GetEntTravelPostData.PolicyData.TravelCountry === '' || this.GetEntTravelPostData.PolicyData.TravelCountry === null) {
        toggleModalShow('請選擇您的旅遊地點')
        return
      }
      // 前往被保人填寫資料頁
      this.$router.push('/travel-3')
    }
  }
}

</script>
