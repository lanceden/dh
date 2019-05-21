<template>
    <ContactComponent :stateData="GetIGoingPostData"></ContactComponent>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
import ContactComponent from '../../Common/contact'

export default {
  components: {
    ContactComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIGoingPostData
    ])
  }
}

</script>
