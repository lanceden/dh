<template>
  <div>
    <TravelOneInsureData v-for="n in $store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.length" :key="n" :index="n - 1"></TravelOneInsureData>
    <TravelOneInsureDataFooter></TravelOneInsureDataFooter>
  </div>
</template>

<script>
import TravelOneInsureData from './travel1-insuredata'
import TravelOneInsureDataFooter from './travel1-insuredataFooter'
export default {
  components: {
    TravelOneInsureData,
    TravelOneInsureDataFooter
  }
}

</script>
