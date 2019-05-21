<template>
  <ContactComponent :stateData="GetICanPostData"></ContactComponent>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
import ContactComponent from '../../Common/contact'

export default {
  components: {
    ContactComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetICanPostData
    ])
  }
}

</script>
