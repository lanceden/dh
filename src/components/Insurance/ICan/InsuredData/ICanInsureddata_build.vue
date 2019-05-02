<template>
  <div>
    <loading v-show="GetLoading" />
    <Insureddata></Insureddata>
    <InsureddataFooter></InsureddataFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Insureddata from './ICanInsureddata'
import InsureddataFooter from './ICanInsureddata_footer'
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
