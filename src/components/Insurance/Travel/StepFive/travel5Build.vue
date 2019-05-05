<template>
  <div class="container">
    <div class="progress-bar">
      <img src="../../../../../static/img/progress-bar-06-2.png">
    </div>
    <TravelFive></TravelFive>
    <TravelFiveChild></TravelFiveChild>
    <TravelFiveFooter></TravelFiveFooter>
  </div>
</template>
<script>
import TravelFive from './travel5'
import TravelFiveChild from './travel5child'
import TravelFiveFooter from './travel5Footer'
import { data } from './mockData.js'
export default {
  mounted() {
    this.$store.state.Travel.TRAVELPOSTDATA.PolicyData = data.Data.Result
  },
  components: {
    TravelFive,
    TravelFiveChild,
    TravelFiveFooter
  }
}

</script>
