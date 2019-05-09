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
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-4.png'
  },
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
