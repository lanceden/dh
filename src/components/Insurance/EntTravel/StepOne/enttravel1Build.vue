<template>
  <div>
    <loading v-show="GetLoading" />
    <TravelOne></TravelOne>
    <!-- 基本資料 End -->
    <template>
      <div v-if="GetEntTravelPostData.length !== 0">
        <template>
          <div v-if="GetEntTravelPostData.PolicyData.InsuredInfo !== null">
            <TravelOneInsuredData 
            v-for="n in GetEntTravelPostData.PolicyData.InsuredInfo.length" :key="n" 
            :stateData="GetEntTravelPostData"
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
import EntTravelFunctionTypes from '../../../../store/modules/EntTravel/Types/EntTravelFunctionTypes.js'
import EntTravelGetterTypes from '../../../../store/modules/EntTravel/Types/EntTravelGetterTypes.js'
import TravelOne from './enttravel1'
import TravelOneInsuredData from '../../Common/travelOneInsuredData.vue'
import TravelOneFooter from './enttravel1Footer'
import { getQueryStringParameterByKey } from '../../../../utils/getQueryStringParameterByKey'

export default {
  created() {
    this.$store.state.UNFINISHID = getQueryStringParameterByKey('id')
    if (!this.GetEntTravelIsInit) {
      // 初始化企業旅平險資料
      this.FuncEntTravelInit(this.$store.state.UNFINISHID)
      this.$store.state.PLANNAME = 'ENTTRAVEL'
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
      EntTravelGetterTypes.GetEntTravelIsInit,
      EntTravelGetterTypes.GetEntTravelPostData
    ])
  },
  methods: {
    ...mapActions([
      EntTravelFunctionTypes.FuncEntTravelInit
    ])
  }
}

</script>
