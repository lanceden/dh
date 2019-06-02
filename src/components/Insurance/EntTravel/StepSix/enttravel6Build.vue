<template>
  <div class="">
    <loading v-show="GetLoading" />
    <TravelSix 
    v-for="n in GetEntTravelPostData.PolicyData.InsuredInfo.length" 
    :key="n" 
    :index="n - 1"
    :stateData="GetEntTravelPostData"
    ></TravelSix>
    <TravelSixFooter></TravelSixFooter>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import EntTravelGetterTypes from '../../../../store/modules/EntTravel/Types/EntTravelGetterTypes'
import TravelSix from '../../Common/travel/travelSix.vue'
import TravelSixFooter from './enttravel6Footer'

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
    TravelSix,
    TravelSixFooter
  }
}

</script>
