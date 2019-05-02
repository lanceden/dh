<template>
  <div>
    <loading v-show="GetLoading" />
    <Insureddata></Insureddata>
    <InsureddataFooter></InsureddataFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Insureddata from './HealthInsureddata'
import InsureddataFooter from './HealthInsureddata_footer'
export default {
  computed: {
    ...mapGetters([
      'GetLoading'
    ])
  },
  components: {
    Insureddata,
    InsureddataFooter
  }
}

</script>
