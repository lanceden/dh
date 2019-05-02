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
