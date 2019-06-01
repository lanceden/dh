<template>
  <CommunityAddressComponent :stateData="GetIGoingPostData" :useType="send"></CommunityAddressComponent>
</template>


<script>
import { mapGetters } from 'vuex'
import CommunityAddressComponent from '../../Common/communityAddress'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'

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
      GetterTypes.GetIGoingPostData
    ])
  }
}

</script>
