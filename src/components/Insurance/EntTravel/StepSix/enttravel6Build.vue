<template>
  <div class="">
    <loading v-show="GetLoading" />
    <TravelSixChild v-for="n in this.$store.state.EntTravel.ENTTRAVELPOSTDATA.PolicyData.InsuredInfo.length" :key="n" :index="n - 1"></TravelSixChild>
    <TravelSixFooter></TravelSixFooter>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TravelSixChild from './enttravel6child'
import TravelSixFooter from './enttravel6Footer'
export default {
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-3.png'
  },
  computed: {
    ...mapGetters([
      'GetLoading'
    ])
  },
  components: {
    TravelSixChild,
    TravelSixFooter
  }
}

</script>
