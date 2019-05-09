<template>
  <div>
    <loading v-show="GetLoading" />
    <StepThreeContact></StepThreeContact>
    <StepThreeAccount></StepThreeAccount>
    <StepThreeFooter></StepThreeFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StepThreeAccount from './EZCashStepThree_account'
import StepThreeContact from './EZCashStepThree_contact'
import StepThreeFooter from './EZCashStepThree_footer'
export default {
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-3.png'
  },
  computed: {
    ...mapGetters([
      'GetLoading'
    ])
  },
  components: {
    StepThreeAccount,
    StepThreeContact,
    StepThreeFooter
  }
}

</script>
