<template>
  <div>
    <loading v-show="GetLoading" />
    <TravelTwo></TravelTwo>
    <TravelTwoFooter></TravelTwoFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TravelTwo from './travel2'
import TravelTwoFooter from './travel2Footer'
export default {
  computed: {
    ...mapGetters([
      'GetLoading'
    ])
  },
  components: {
    TravelTwo,
    TravelTwoFooter
  }
}

</script>
