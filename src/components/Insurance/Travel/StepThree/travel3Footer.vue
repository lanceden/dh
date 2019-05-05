<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-4 footer-title footer-left" @click="GoToPrev()">回前一頁</div>
        <div class="col-sm-8 footer-title footer-right" @click="Estimate()">保費試算</div>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import TravelGetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes.js'
import { toggleModalShow } from '../../../../utils/toggleModal'

export default {
  computed: {
    ...mapGetters([
      TravelGetterTypes.GetTravelPostData
    ])
  },
  methods: {
    GoToPrev() {
      this.$router.push('/travel-1-1')
    },
    Estimate() {
      console.log('PolicyData.TravelType', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelType)
      console.log('PolicyData.TravelCountry', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelCountry)
      console.log('PolicyData.EtcCountry', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EtcCountry)
      console.log('InsStartDate', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsStartDate)
      console.log('PolicyData.TravelDay', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelDay)
      console.log('PolicyData.InsType', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsType)
      console.log('PolicyData.InsuredInfo[0].Index', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].Index)
      console.log('PolicyData.InsuredInfo[0].Relation', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].Relation)
      console.log('PolicyData.InsuredInfo[0].PersonalData.ID', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].PersonalData.ID)
      console.log('PolicyData.InsuredInfo[0].PrimaryPolicy.FaceAmt', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].PrimaryPolicy.FaceAmt)
      console.log('PolicyData.InsuredInfo[0].SupplementPolicy[0].PlanCode', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].SupplementPolicy[0].PlanCode)
      console.log('PolicyData.InsuredInfo[0].SupplementPolicy[0].FaceAmt', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].SupplementPolicy[0].FaceAmt)
      console.log('PolicyData.InsuredInfo[0].SupplementPolicy[1].PlanCode', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].SupplementPolicy[1].PlanCode)
      console.log('PolicyData.InsuredInfo[0].SupplementPolicy[1].FaceAmt', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].SupplementPolicy[1].FaceAmt)
      console.log('PolicyData.InsuredInfo[1].Index', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[1].Index)
      console.log('PolicyData.InsuredInfo[1].Relation', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[1].Relation)
      console.log('PolicyData.InsuredInfo[1].PersonalData.ID', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[1].PersonalData.ID)
      console.log('PolicyData.InsuredInfo[1].PrimaryPolicy.FaceAmt', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[1].PrimaryPolicy.FaceAmt)
      console.log('PolicyData.InsuredInfo[1].SupplementPolicy[0].PlanCode', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[1].SupplementPolicy[0].PlanCode)
      console.log('PolicyData.InsuredInfo[1].SupplementPolicy[0].FaceAmt', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[1].SupplementPolicy[0].FaceAmt)
      console.log('PolicyData.InsuredInfo[1].SupplementPolicy[1].PlanCode', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[1].SupplementPolicy[1].PlanCode)
      console.log('PolicyData.InsuredInfo[1].SupplementPolicy[1].FaceAmt', this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[1].SupplementPolicy[1].FaceAmt)
      return
    }
  }
}

</script>
