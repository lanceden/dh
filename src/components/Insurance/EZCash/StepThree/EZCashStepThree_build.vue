<template>
  <div>
    <loading v-show="GetLoading" />
    <StepThreeContact></StepThreeContact>
    <StepThreeAccount></StepThreeAccount>
    <StepThreeFooter></StepThreeFooter>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import StepThreeAccount from './EZCashStepThree_account'
import StepThreeContact from './EZCashStepThree_contact'
import StepThreeFooter from './EZCashStepThree_footer'
export default {
  created() {
    this.FuncGetBeneficiary()
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
  },
  methods: {
    ...mapActions([
      'FuncGetBeneficiary'
    ])
  }
}

</script>
