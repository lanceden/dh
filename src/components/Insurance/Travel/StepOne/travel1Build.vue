<template>
  <div>
    <loading v-show="GetLoading" />
    <TravelOne></TravelOne>
    <!-- 基本資料 End -->
    <template>
      <div v-if="GetTravelPostData.length !== 0">
        <template>
          <div v-if="GetTravelPostData.PolicyData.InsuredInfo !== null">
            <TravelOneInsuredData 
            v-for="n in GetTravelPostData.PolicyData.InsuredInfo.length" :key="n" 
            :stateData="GetTravelPostData"
            :index="n-1"></TravelOneInsuredData>
          </div>
        </template>
      </div>
    </template>
    <TravelOneFooter></TravelOneFooter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FunctionTypes from '../../../../store/modules/Travel/Types/TravelFunctionTypes.js'
import GetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes.js'
import TravelOne from './travel1'
import TravelOneInsuredData from '../../Common/travel/travelOneInsuredData.vue'
import TravelOneFooter from './travel1Footer'
import { getQueryStringParameterByKey } from '../../../../utils/getQueryStringParameterByKey'

export default {
  created() {
    this.$store.state.UNFINISHID = getQueryStringParameterByKey('id')
      // 初始化旅平險資料
    if (!this.GetTravelIsInit) {
      this.FuncTravelInit(this.$store.state.UNFINISHID)
      this.$store.state.PLANNAME = 'TRAVEL'
    }
  },
  components: {
    TravelOne,
    TravelOneInsuredData,
    TravelOneFooter
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      GetterTypes.GetTravelIsInit,
      GetterTypes.GetTravelPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncTravelInit
    ])
  }
}

</script>
