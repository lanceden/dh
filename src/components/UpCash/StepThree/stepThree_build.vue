<template>
  <div>
    <StepThreeContact></StepThreeContact>
    <StepThreeAccount></StepThreeAccount>
    <StepThreeFooter></StepThreeFooter>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FunctionTypes from '../../../store/modules/Upcash/Types/UpCashFunctionTypes.js'
import StepThreeAccount from './stepThree_account'
import StepThreeContact from './stepThree_contact'
import StepThreeFooter from './stepThree_footer'
export default {
  created() {
    this.FuncGetBeneficiary()
  },
  components: {
    StepThreeAccount,
    StepThreeContact,
    StepThreeFooter
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncGetBeneficiary
    ])
  }
}

</script>
