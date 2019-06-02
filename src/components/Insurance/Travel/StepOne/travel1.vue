<template>
  <!-- 基本資料 -->
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
          <div class="insure-check-title">基本資料</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <div class="insure-text">
      主管機關規定，要保人及被保人資料需為同一人，如需修改個人資料，請洽本公司客戶服務中心。
    </div>
    <form class="form-bottom">
      <!-- 要保險人 -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">要保險人</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.length === 0 ? '' : GetTravelPostData.PolicyData.ProposerInfo[0].Name}}</div>
        </div>
      </div>
      <!-- 要保險人身分證字號 -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">要保險人身分證字號</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.length === 0 ? '' : GetTravelPostData.PolicyData.ProposerInfo[0].ID}}</div>
        </div>
      </div>
      <!-- 要保險人性別 -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">要保險人性別</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetTravelPostData.length === 0 ? '' : GetTravelPostData.PolicyData.ProposerInfo[0].Gender === '1' ? '男' : '女'}}</div>
        </div>
      </div>
    </form>
    <!-- 請確認保障對象 -->
    <TravelOneEnsure :stateData="GetTravelPostData"></TravelOneEnsure>
  </div>
  <!-- 基本資料 End -->
</template>

<script>
import { mapGetters } from 'vuex'
import TravelGetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes.js'
import TravelOneEnsure from '../../Common/travel/travelOneEnsure'

export default {
  components: {
    TravelOneEnsure
  },
  computed: {
    ...mapGetters([
      TravelGetterTypes.GetTravelPostData
    ])
  }
}

</script>
