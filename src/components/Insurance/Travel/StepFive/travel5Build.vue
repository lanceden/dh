<template>
  <div>
    <loading v-show="GetLoading" />
    <TravelFive 
    v-for="n in GetTravelPostData.PolicyData.InsuredInfo.length" 
    :key="n" 
    :index="n - 1" 
    :stateData="GetTravelPostData"></TravelFive>
    <TravelFiveFooter></TravelFiveFooter>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TravelFive from '../../Common/travel/travelFive.vue'
import TravelFiveFooter from './travel5Footer'
import TravelGetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes'

export default {
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-3.png'
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      TravelGetterTypes.GetTravelPostData
    ])
  },
  components: {
    TravelFive,
    TravelFiveFooter
  }
}

</script>
