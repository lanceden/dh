<template>
  <MoneyTransfer :stateData="GetHealthPostData"></MoneyTransfer>
</template>

<script>
import { mapGetters } from 'vuex'
import MoneyTransfer from '../../Common/moneyTransfer'
import GetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes'
export default {
  components: {
    MoneyTransfer
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetHealthPostData
    ])
  }
}

</script>
