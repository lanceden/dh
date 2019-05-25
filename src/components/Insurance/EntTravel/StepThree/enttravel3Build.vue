<template>
  <div>
    <loading v-show="GetLoading" />
    <!-- 本人 -->
    <TravelThreePremiumsOwn 
    v-for="n in GetEntTravelPostData.PolicyData.InsuredInfo.length" 
    :key="n" 
    :index="n - 1" 
    :stateData="GetEntTravelPostData"></TravelThreePremiumsOwn>

    <!-- 子女 -->
    <TravelThreePremiumsChild 
    v-for="n in GetEntTravelPostData.PolicyData.InsuredInfo.length" 
    :key="n + 'c'" 
    :index="n - 1"
    :stateData="GetEntTravelPostData"></TravelThreePremiumsChild>

    <!-- 下一步 -->
    <TravelThreeFooter></TravelThreeFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EntTravelGetterTypes from '../../../../store/modules/EntTravel/Types/EntTravelGetterTypes.js'
import TravelThreePremiumsOwn from '../../Common/travelThreePremiumsOwn.vue'
import TravelThreePremiumsChild from '../../Common/travelThreePremiumsChild.vue'
import TravelThreeFooter from './enttravel3Footer'

export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      EntTravelGetterTypes.GetEntTravelPostData
    ])
  },
  components: {
    TravelThreePremiumsOwn,
    TravelThreePremiumsChild,
    TravelThreeFooter
  }
}

</script>
