<template>
  <div class="container">
    <loading v-show="GetLoading" />
    <TravelFive v-for="n in this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.length" :key="n" :index="n - 1"></TravelFive>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TravelSixChild from './travel6child'
export default {
  computed: {
    ...mapGetters([
      'GetLoading'
    ])
  },
  components: {
    TravelSixChild
  }
}

</script>
