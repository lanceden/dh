<template>
  <div>
    <loading v-show="GetLoading" />
    <StepThreeContact></StepThreeContact>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StepThreeContact from './HealthStepThree_contact'
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
    StepThreeContact
  }
}

</script>
