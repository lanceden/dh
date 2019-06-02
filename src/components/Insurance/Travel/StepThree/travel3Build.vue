<template>
  <div class="">
    <loading v-show="GetLoading" />
    <!-- 本人 -->
    <TravelThreePremiumsOwn 
    v-for="n in GetTravelPostData.PolicyData.InsuredInfo.length" 
    :key="n" 
    :index="n - 1" 
    :stateData="GetTravelPostData"></TravelThreePremiumsOwn>

    <!-- 子女 -->
    <TravelThreePremiumsChild 
    v-for="n in GetTravelPostData.PolicyData.InsuredInfo.length" 
    :key="n + 'c'" 
    :index="n - 1"
    :stateData="GetTravelPostData"></TravelThreePremiumsChild>

    <!-- 下一步 -->
    <TravelThreeFooter></TravelThreeFooter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TravelGetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes'
import TravelThreePremiumsOwn from '../../Common/travel/travelThreePremiumsOwn'
import TravelThreePremiumsChild from '../../Common/travel/travelThreePremiumsChild'
import TravelThreeFooter from './travel3Footer'

export default {
  computed: {
    ...mapGetters([
      'GetLoading',
      TravelGetterTypes.GetTravelPostData
    ])
  },
  components: {
    TravelThreePremiumsOwn,
    TravelThreePremiumsChild,
    TravelThreeFooter
  }
}

</script>
