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

export default {
  computed: {
    ...mapGetters([
      EntTravelGetterTypes.GetEntTravelPostData
    ])
  },
  methods: {
    GoToPrev() {
      // 只有子女不會有本人的受益人需跳過此步驟
      if (parseInt(this.GetEntTravelPostData.TargetType) !== 1) {
        this.$router.push('/enttravel-5')
      } else {
        this.$router.push('/enttravel-4')
      }
    },
    GotoNext() {
      this.$router.push('/enttravel-7')
    }
  }
}

</script>
