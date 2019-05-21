<template>
  <ContactComponent :stateData="GetUpCashPostData"></ContactComponent>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes'
import ContactComponent from '../../Common/contact'

export default {
  components: {
    ContactComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData
    ])
  }
}

</script>
