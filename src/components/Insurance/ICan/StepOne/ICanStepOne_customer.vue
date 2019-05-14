<template>
  <CustomerComponent :stateData="GetICanPostData"></CustomerComponent>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
import CustomerComponent from '../../Common/customer'
export default {
  components: {
    CustomerComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetICanPostData
    ])
  }
}

</script>
