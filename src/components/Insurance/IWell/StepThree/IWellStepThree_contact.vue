<template>
  <ContactComponent :stateData="GetIWellPostData"></ContactComponent>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
import ContactComponent from '../../Common/contact'

export default {
  components: {
    ContactComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIWellPostData
    ])
  }
}

</script>
