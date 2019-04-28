<template>
  <div>
    <loading v-show="GetLoading" />
    <StepThreeContact></StepThreeContact>
    <StepThreeFooter></StepThreeFooter>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import StepThreeContact from './stepThree_contact'
import StepThreeFooter from './stepThree_footer'
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
