<template>
  <div>
    <loading v-show="GetLoading" />
    <ContactComponent :stateData="GetUpCashPostData"></ContactComponent>
    <MoneyTransfer :stateData="GetUpCashPostData"></MoneyTransfer>
    <StepThreeFooter></StepThreeFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes'
import MoneyTransfer from '../../Common/moneyTransfer.vue'
import ContactComponent from '../../Common/contact.vue'
import StepThreeFooter from './UpCashStepThree_footer'

export default {
  created() {
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-3.png'
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetUpCashPostData
    ])
  },
  components: {
    MoneyTransfer,
    ContactComponent,
    StepThreeFooter
  }
}

</script>
