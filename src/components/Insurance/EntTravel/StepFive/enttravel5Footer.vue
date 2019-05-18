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
      this.$router.push(`/enttravel-4`)
    },
    GoToNext() {
      let result = parseInt(this.GetEntTravelPostData.TargetType)
      // 本人
      if (result === 0) {
        this.$router.push('/enttravel-7')
      }
      // 子女
      if (result === 1) {
        this.$router.push('/enttravel-6')
      }
      // 本人及本人加子女
      if (result === 2) {
        this.$router.push('/enttravel-6')
      }
    }
  }
}

</script>
