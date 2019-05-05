<template>
  <div class="container">
    <div class="progress-bar">
      <img src="../../../../../static/img/progress-bar-06-2.png">
    </div>
    <loading v-show="GetLoading" />
    <TravelFive v-for="n in this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.length" :key="n" :index="n - 1"></TravelFive>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TravelSixChild from './travel6child'
export default {
  computed: {
    ...mapGetters([
      'GetLoading'
    ])
  },
  components: {
    TravelSixChild
  }
}

</script>
