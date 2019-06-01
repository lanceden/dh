<template>
  <CommunityAddressComponent :stateData="GetMyWayPostData" :useType="send"></CommunityAddressComponent>
</template>


<script>
import { mapGetters } from 'vuex'
import CommunityAddressComponent from '../../Common/communityAddress'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'

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
      GetterTypes.GetMyWayPostData
    ])
  }
}

</script>
