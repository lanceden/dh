<template>
  <div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check">
              <img src="../../../../../static/img/chat.png" alt>
            </div>
            <div class="insure-check-title">請填寫投保資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label insure-label">主險種名稱</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetMyWayPostData.ins_type_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label insure-label">投保始期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">自{{insStartDateROC}}</div>
            <div class="insure-input-block" id="matured_date">至{{insEndDateROC}}</div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check">
              <img src="../../../../../static/img/insurance.png" alt>
            </div>
            <div class="insure-check-title">請填寫投保額度</div>
          </div>
        </div>
      </div>
      <!-- 投保額度 -->
      <PremiumsComponent :stateData="GetMyWayPostData"></PremiumsComponent>
      <form class="form-bottom">
        <div class="col-sm-12">
          <div class="insure-tips-text first-blue">
            驗證方式為簡訊OTP動態密碼者，新光既有保戶同業累積限450萬、非既有保戶限225萬。
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
import moment from 'moment'
import PremiumsComponent from '../../Common/premiums'

export default {
  components: {
    PremiumsComponent
  },
  data() {
    return {
      insStartDateROC: moment().format(`民國${parseInt(new Date().getFullYear()) - 1911}年MM月DD日午夜十二時`),
      insEndDateROC: moment().format(`民國${parseInt(new Date().getFullYear()) + 1 - 1911}年MM月DD日午夜十二時`)
    }
  },
  created() {
    this.GetMyWayPostData.po_issue_date = moment().format('YYYY-MM-DD')
    this.GetMyWayPostData.AuthorizedRep = false
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetMyWayPostData
    ])
  }
}

</script>
