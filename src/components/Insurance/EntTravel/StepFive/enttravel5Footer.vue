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
import EntTravelGetterTypes from '../../../../store/modules/EntTravel/Types/EntTravelGetterTypes.js'
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
    GoToNext() {
      // 本人及本人加子女
      if (this.GetEntTravelPostData.TargetType === '0' || this.GetEntTravelPostData.TargetType === '2') {
        this.$router.push('/travel-6')
      } else {
        this.$router.push('/travel-7')
      }
    }
  }
}

</script>
