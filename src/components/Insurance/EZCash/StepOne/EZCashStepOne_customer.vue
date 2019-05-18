<template>
  <CustomerComponent :stateData="GetEZCashPostData"></CustomerComponent>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'
import CustomerComponent from '../../Common/customer'
export default {
  components: {
    CustomerComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetEZCashPostData
    ])
  }
}

</script>
