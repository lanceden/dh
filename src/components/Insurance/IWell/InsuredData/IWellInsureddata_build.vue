<template>
  <div>
    <loading v-show="GetLoading" />
    <Insureddata></Insureddata>
    <InsureddataFooter></InsureddataFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Insureddata from './IWellInsureddata'
import InsureddataFooter from './IWellInsureddata_footer'
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
    Insureddata,
    InsureddataFooter
  }
}

</script>
