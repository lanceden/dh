<template>
  <TravelEight :stateData="GetTravelPostData"></TravelEight>
</template>

<script>
import { mapGetters } from 'vuex'
import TravelGetterTypes from '../../../store/modules/Travel/Types/TravelGetterTypes'
import TravelEight from '../Common/travelEight.vue'

export default {
  components: {
    TravelEight
  },
  computed: {
    ...mapGetters([
      TravelGetterTypes.GetTravelPostData
    ])
  }
}

</script>
