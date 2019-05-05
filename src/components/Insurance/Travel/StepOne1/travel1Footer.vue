<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-4 footer-title footer-left">回前一頁</div>
        <div class="col-sm-8 footer-title footer-right" @click="GotoNext()">確認送出</div>
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
    GotoNext() {
      // 驗證是否有選擇請確認保障對象
      if (this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TargetType === undefined || this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TargetType === '') {
        toggleModalShow('請確認保障對象')
        return
      }
      // 前往被保人填寫資料頁
      this.$router.push('/travel-1-1')
    }
  }
}

</script>
