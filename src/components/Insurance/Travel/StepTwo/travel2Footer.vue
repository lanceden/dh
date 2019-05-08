<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-4 footer-title footer-left" @click="GoToPrev()">回前一頁</div>
        <div class="col-sm-8 footer-title footer-right" @click="GotoNext()">確認送出</div>
        <div class="col-sm-12 footer-title footer-gray" @click="test()">tt</div>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TravelGetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes.js'
import { toggleModalShow } from '../../../../utils/toggleModal'

export default {
  computed: {
    ...mapGetters([
      TravelGetterTypes.GetTravelPostData
    ])
  },
  methods: {
    GoToPrev() {
      this.$router.go(-1)
    },
    test() {
      this.$router.push('/travel-3')
    },
    GotoNext() {
      // 請選擇您的旅遊地點
      if (this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelCountry === undefined || this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelCountry === '' || this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelCountry === null) {
        toggleModalShow('請選擇您的旅遊地點')
        return
      }
      // 前往被保人填寫資料頁
      this.$router.push('/travel-3')
    }
  }
}

</script>
