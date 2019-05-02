<template>
  <MoneyTransfer :stateData="GetMyWayPostData"></MoneyTransfer>
</template>

<script>
import { mapGetters } from 'vuex'
import MoneyTransfer from '../../Common/moneyTransfer'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes'
export default {
  components: {
    MoneyTransfer
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetMyWayPostData
    ])
  }
}

</script>
