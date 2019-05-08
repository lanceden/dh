<template>
  <div class="container">
    <loading v-show="GetLoading" />
    <TravelFive v-for="n in this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.length" :key="n" :index="n - 1"></TravelFive>
    <TravelFiveFooter></TravelFiveFooter>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TravelFive from './travel5'
import TravelFiveFooter from './travel5Footer'
import { mockInsData } from './mockData.js'
import { accountData } from './accountData.js'
import { cityData } from './mockCityData.js'

export default {
  created() {
    this.$store.state.ACCOUNTDATA = accountData.Data.Result
    this.$store.state.CITYDATA = cityData.Data.Result
    this.$store.state.Travel.TRAVELPOSTDATA = mockInsData.Data.Result
    this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.forEach(item => {
      item.BeneficiaryData = []
      item.BeneficiaryData.push({
        Relationship: '',
        Name: '',
        IdNo: '',
        Dob: '',
        ContactNumber: '',
        Address: {
          City: '',
          District: '',
          Street: ''
        }
      })
      item.BeneficiaryQty = 1
    })
    this.$store.state.PROGRESSBAR = '../../static/img/progress-bar-06-3.png'
  },
  computed: {
    ...mapGetters([
      'GetLoading'
    ])
  },
  components: {
    TravelFive,
    TravelFiveFooter
  }
}

</script>
