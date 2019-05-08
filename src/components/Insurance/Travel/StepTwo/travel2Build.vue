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
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-2.png'
  },
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
