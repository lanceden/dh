<template>
  <CustomerComponent :stateData="GetHealthPostData"></CustomerComponent>
</template>


<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes.js'
import CustomerComponent from '../../Common/customer'
export default {
  components: {
    CustomerComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetHealthPostData
    ])
  }
}

</script>
