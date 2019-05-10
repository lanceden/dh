<template>
  <div class="container">
    <loading v-show="GetLoading" />
    <TravelFive v-for="n in this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.length" :key="n" :index="n - 1"></TravelFive>
    <TravelFiveFooter></TravelFiveFooter>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TravelFive from './travel5'
import TravelFiveFooter from './travel5Footer'
import { data } from './mockData.js'

export default {
  created() {
    console.log(data)
    this.$store.state.Travel.TRAVELPOSTDATA = data.Data.Result
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-3.png'
  },
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
