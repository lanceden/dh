<template>
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
        <label for class="col-sm-12 col-form-label insure-label insure-label">保險期間</label>
        <div class="col-sm-12">
          <div class="insure-input-block">投保始期自</div>
          <div class="insure-input-block">{{insStartDateROC}} 至 </div>
          <div class="insure-input-block" id="matured_date">{{insEndDateROC}}</div>
        </div>
      </div>
      <!-- 投保額度 -->
      <PremiumsComponent :stateData="GetMyWayPostData"></PremiumsComponent>

      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">注意事項</label>
        <div class="col-sm-12">
          <div class="insure-notice-text">
            變更或增加驗證方式請至：客戶服務中心>客戶資料管理>客戶驗證狀態
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
import moment from 'moment'
import { InitColumnData } from '../../../../utils/initColumnData'
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
    ]),
    /**
     * 投保額度
     */
    face_amt: {
      get() {
        this.GetMyWayPostData.face_amt = InitColumnData(this.GetMyWayPostData.face_amt, 220)
        return this.GetAccidentPostData.face_amt > 220 ? 220 : this.GetAccidentPostData.face_amt
      },
      set(value) {
        this.GetMyWayPostData.mode_prem = 0
        this.GetMyWayPostData.face_amt = value
      }
    }
  }
}

</script>
