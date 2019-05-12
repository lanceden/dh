<template>
  <div>
    <MoneyTransfer :stateData="GetHealthPostData"></MoneyTransfer>
    <HealthStepThreeFooter></HealthStepThreeFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HealthStepThreeFooter from './HealthStepThree_footer'
import MoneyTransfer from '../../Common/moneyTransfer'
import GetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes'
export default {
  components: {
    MoneyTransfer,
    HealthStepThreeFooter
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetHealthPostData
    ])
  }
}

</script>
