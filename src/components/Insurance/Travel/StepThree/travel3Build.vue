<template>
  <div class="container">
    <div class="progress-bar">
      <img src="../../../../../static/img/progress-bar-06-2.png">
    </div>
    <!-- 本人 -->
    <TravelThree v-for="n in this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.length" :key="n" :index="n - 1"></TravelThree>
    <!-- 子女 -->
    <TravelChild v-for="n in this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.length" :key="n + 'c'" :index="n - 1"></TravelChild>
    <TravelThreeFooter></TravelThreeFooter>
  </div>
</template>

<script>
import TravelThree from './travel3'
import TravelChild from './travel3child'
import TravelThreeFooter from './travel3Footer'
import { mockInsData } from './mockData.js'

export default {
  components: {
    TravelThree,
    TravelChild,
    TravelThreeFooter
  }
}

</script>
