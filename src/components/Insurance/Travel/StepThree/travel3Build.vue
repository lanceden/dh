<template>
  <div class="container">
    <loading v-show="GetLoading" />
    <!-- 本人 -->
    <TravelThree v-for="n in this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.length" :key="n" :index="n - 1"></TravelThree>
    <!-- 子女 -->
    <TravelChild v-for="n in this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.length" :key="n + 'c'" :index="n - 1"></TravelChild>
    <TravelThreeFooter></TravelThreeFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TravelThree from './travel3'
import TravelChild from './travel3child'
import TravelThreeFooter from './travel3Footer'
import { mockInsData } from './mockDataOwnWithChild.js'

export default {
  created() {
    this.$store.state.Travel.TRAVELPOSTDATA = mockInsData.Data.Result
    console.log(this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelCountry)
  },
  computed: {
    ...mapGetters([
      'GetLoading'
    ])
  },
  components: {
    TravelThree,
    TravelChild,
    TravelThreeFooter
  }
}

</script>
