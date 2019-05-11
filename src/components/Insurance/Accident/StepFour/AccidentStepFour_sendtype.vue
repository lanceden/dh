<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
          <div class="insure-check-title">保單寄送資料</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line col-sm-12"></div>
    <div class="insure-text">
      保險單形式：<span class="insure-form-im">紙本保單</span>
    </div>
    <CommunityAddressComponent :stateData="GetAccidentPostData"></CommunityAddressComponent>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import CommunityAddressComponent from '../../Common/communityAddress'
import GetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes.js'

export default {
  components: {
    CommunityAddressComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetAccidentPostData
    ])
  }
}

</script>
