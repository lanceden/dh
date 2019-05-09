<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-4 footer-title footer-left" @click="GoToPrev()">回前一頁</div>
        <div class="col-sm-8 footer-title footer-right" @click="GoToNext()">確認送出</div>
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
      this.$router.go(-1)
    },
    GoToNext() {
      // 本人及本人加子女
      if (this.$store.state.Travel.TRAVELPOSTDATA.TargetType === '0' || this.$store.state.Travel.TRAVELPOSTDATA.TargetType === '2') {
        this.$router.push('/travel-6')
      } else {
        this.$router.push('/travel-7')
      }
    }
  }
}

</script>
