<template>
  <div>
    <loading v-show="GetLoading" />
    <TravelFive 
    v-for="n in GetEntTravelPostData.PolicyData.InsuredInfo.length" 
    :key="n" 
    :index="n - 1" 
    :stateData="GetEntTravelPostData"></TravelFive>
    <TravelFiveFooter></TravelFiveFooter>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TravelFive from '../../Common/travelFive.vue'
import TravelFiveFooter from './enttravel5Footer'
import EntTravelGetterTypes from '../../../../store/modules/EntTravel/Types/EntTravelGetterTypes'

export default {
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-3.png'
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      EntTravelGetterTypes.GetEntTravelPostData
    ])
  },
  components: {
    TravelFive,
    TravelFiveFooter
  }
}

</script>
