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
import TravelGetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes.js'

export default {
  computed: {
    ...mapGetters([
      TravelGetterTypes.GetTravelPostData
    ])
  },
  methods: {
    GoToPrev() {
      // 只有子女不會有本人的受益人需跳過此步驟
      if (parseInt(this.GetTravelPostData.TargetType) !== 1) {
        this.$router.push('/travel-5')
      } else {
        this.$router.push('/travel-4')
      }
    },
    GotoNext() {
      this.$router.push('/travel-7')
    }
  }
}

</script>
