<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
          <div class="insure-check-title">保單寄送地址</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <div class="insure-form">
      保險單形式：<span class="insure-form-im">紙本保單</span>
    </div>
    <form class="form-bottom">
      <CommunityAddressComponent :stateData="GetIGoingPostData"></CommunityAddressComponent>
      <div class="col-sm-12">
        <div class="insure-tips">
          ※將同步更新客戶基本資料
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import CommunityAddressComponent from '../../Common/communityAddress'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'

export default {
  components: {
    CommunityAddressComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIGoingPostData
    ])
  }
}

</script>
