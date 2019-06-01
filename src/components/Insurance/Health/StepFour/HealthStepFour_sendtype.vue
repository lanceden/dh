<template>
  <CommunityAddressComponent :stateData="GetHealthPostData" :useType="send"></CommunityAddressComponent>
</template>


<script>
import { mapGetters } from 'vuex'
import CommunityAddressComponent from '../../Common/communityAddress'
import GetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes.js'

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
      GetterTypes.GetHealthPostData
    ])
  }
}

</script>
