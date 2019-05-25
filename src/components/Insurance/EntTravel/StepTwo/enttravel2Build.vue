<template>
  <div>
    <loading v-show="GetLoading" />
    <TravelTwoEstimateData :stateData="GetEntTravelPostData"></TravelTwoEstimateData>
    <TravelTwoFooter></TravelTwoFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EntTravelGetterTypes from '../../../../store/modules/EntTravel/Types/EntTravelGetterTypes.js'
import TravelTwoEstimateData from '../../Common/travelTwoEstimateData.vue'
import TravelTwoFooter from './enttravel2Footer'

export default {
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-2.png'
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      EntTravelGetterTypes.GetEntTravelPostData
    ])
  },
  components: {
    TravelTwoEstimateData,
    TravelTwoFooter
  }
}

</script>
