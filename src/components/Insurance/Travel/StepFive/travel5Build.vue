<template>
  <div class="container">
    <div class="progress-bar">
      <img src="../../../../../static/img/progress-bar-06-2.png">
    </div>
    <loading v-show="GetLoading" />
    <TravelFive v-for="n in this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.length" :key="n" :index="n - 1"></TravelFive>
    <TravelFiveFooter></TravelFiveFooter>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TravelFive from './travel5'
import TravelFiveFooter from './travel5Footer'
export default {
  computed: {
    ...mapGetters([
      'GetLoading'
    ])
  },
  components: {
    TravelFive,
    TravelFiveFooter
  }
}

</script>
