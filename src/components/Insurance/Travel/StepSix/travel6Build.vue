<template>
  <div class="">
    <loading v-show="GetLoading" />
    <TravelSix 
    v-for="n in GetTravelPostData.PolicyData.InsuredInfo.length" 
    :key="n" 
    :index="n - 1"
    :stateData="GetTravelPostData"
    ></TravelSix>
    <TravelSixFooter></TravelSixFooter>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TravelGetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes.js'
import TravelSix from '../../Common/travelSix.vue'
import TravelSixFooter from './travel6Footer'

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
    TravelSix,
    TravelSixFooter
  }
}

</script>
