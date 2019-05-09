<template>
  <div>
    <loading v-show="GetLoading" />
    <IGoingInsureddata></IGoingInsureddata>
    <IGoingInsureddataFooter></IGoingInsureddataFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IGoingInsureddata from './IGoingInsureddata'
import IGoingInsureddataFooter from './IGoingInsureddata_footer'
export default {
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-4.png'
  },
  computed: {
    ...mapGetters([
      'GetLoading'
    ])
  },
  components: {
    IGoingInsureddata,
    IGoingInsureddataFooter
  }
}

</script>
