<template>
  <div>
    <loading v-show="GetLoading" />
    <StepThreeContact></StepThreeContact>
    <StepThreeFooter></StepThreeFooter>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import StepThreeContact from './ICanStepThree_contact'
import StepThreeFooter from './ICanStepThree_footer'
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
