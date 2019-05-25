<template>
  <div>
    <loading v-show="GetLoading" />
    <TravelTwoEstimateData :stateData="GetTravelPostData"></TravelTwoEstimateData>
    <TravelTwoFooter></TravelTwoFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TravelGetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes.js'
import TravelTwoEstimateData from '../../Common/travelTwoEstimateData.vue'
import TravelTwoFooter from './travel2Footer'

export default {
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-2.png'
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      TravelGetterTypes.GetTravelPostData
    ])
  },
  components: {
    TravelTwoEstimateData,
    TravelTwoFooter
  }
}

</script>
