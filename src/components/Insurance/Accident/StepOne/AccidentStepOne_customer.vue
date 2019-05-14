<template>
  <CustomerComponent :stateData="GetAccidentPostData"></CustomerComponent>
</template>

<script>
import { mapGetters } from 'vuex'
import AccidentGetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes.js'
import CustomerComponent from '../../Common/customer'
export default {
  components: {
    CustomerComponent
  },
  computed: {
    ...mapGetters([
      AccidentGetterTypes.GetAccidentPostData
    ])
  }
}

</script>
