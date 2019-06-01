<template>
  <CommunityAddressComponent :stateData="GetAccidentPostData" :useType="send"></CommunityAddressComponent>
</template>


<script>
import { mapGetters } from 'vuex'
import CommunityAddressComponent from '../../Common/communityAddress'
import GetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes.js'

export default {
  data() {
    return {
      send: 'send'
    }
  },
  components: {
    CommunityAddressComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetAccidentPostData
    ])
  }
}

</script>
