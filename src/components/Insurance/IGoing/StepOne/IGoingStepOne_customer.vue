<template>
  <CustomerComponent :stateData="GetIGoingPostData"></CustomerComponent>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
import CustomerComponent from '../../Common/customer'
export default {
  components: {
    CustomerComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIGoingPostData
    ])
  }
}

</script>
