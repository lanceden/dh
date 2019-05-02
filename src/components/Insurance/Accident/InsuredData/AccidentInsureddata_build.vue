<template>
  <div>
    <loading v-show="GetLoading" />
    <AccidentInsureddata></AccidentInsureddata>
    <AccidentInsureddataFooter></AccidentInsureddataFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AccidentInsureddata from './AccidentInsureddata'
import AccidentInsureddataFooter from './AccidentInsureddata_footer'
export default {
  computed: {
    ...mapGetters([
      'GetLoading'
    ])
  },
  components: {
    AccidentInsureddata,
    AccidentInsureddataFooter
  }
}

</script>
