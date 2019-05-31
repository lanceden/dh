<template>
  <CommunityAddressComponent :stateData="GetEZCashPostData" :useType="send"></CommunityAddressComponent>
</template>


<script>
import { mapGetters } from 'vuex'
import CommunityAddressComponent from '../../Common/communityAddress.vue'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'

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
      GetterTypes.GetEZCashPostData
    ])
  }
}

</script>
