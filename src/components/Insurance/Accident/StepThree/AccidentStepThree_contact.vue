<template>
  <ContactComponent :stateData="GetAccidentPostData"></ContactComponent>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes.js'
import ContactComponent from '../../Common/contact'

export default {
  components: {
    ContactComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetAccidentPostData
    ])
  }
}

</script>
