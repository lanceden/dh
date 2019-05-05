<template>
  <div>
    <loading v-show="GetLoading" />
    <TravelOneInsureData v-for="n in $store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.length" :key="n" :index="n - 1"></TravelOneInsureData>
    <TravelOneInsureDataFooter></TravelOneInsureDataFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TravelOneInsureData from './travel1-insuredata'
import TravelOneInsureDataFooter from './travel1-insuredataFooter'
export default {
  computed: {
    ...mapGetters([
      'GetLoading'
    ])
  },
  components: {
    TravelOneInsureData,
    TravelOneInsureDataFooter
  }
}

</script>
