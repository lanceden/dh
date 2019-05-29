<template>
  <div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/insurance.png" /></div>
            <div class="insure-check-title">保單寄送資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="insure-text">
        保險單形式：<span class="text-red-i">紙本保單</span>
      </div>
    </div>
    <CommunityAddressComponent :stateData="GetEZCashPostData"></CommunityAddressComponent>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import CommunityAddressComponent from '../../Common/communityAddress.vue'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'

export default {
  components: {
    CommunityAddressComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetEZCashPostData
    ])
  }
}

</script>
