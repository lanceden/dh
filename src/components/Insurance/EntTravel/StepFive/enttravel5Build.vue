<template>
  <div>
    <loading v-show="GetLoading" />
    <TravelFive v-for="n in this.GetEntTravelPostData.PolicyData.InsuredInfo.length" :key="n" :index="n - 1"></TravelFive>
    <TravelFiveFooter></TravelFiveFooter>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TravelFive from './enttravel5'
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
