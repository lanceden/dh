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
import StepThreeAccount from './UpCashStepThree_account'
import StepThreeContact from './UpCashStepThree_contact'
import StepThreeFooter from './UpCashStepThree_footer'
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
