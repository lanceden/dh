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
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">投保額度</label>
        <div class="col-sm-12">
          <select name="face_amt" id="face_amt" class="form-control data-input insure-select insure-input-edit" v-model="face_amt">
            <option value="220" selected="selected">220萬</option>
            <option value="210">210萬</option>
            <option value="200">200萬</option>
            <option value="190">190萬</option>
            <option value="180">180萬</option>
            <option value="170">170萬</option>
            <option value="160">160萬</option>
            <option value="150">150萬</option>
            <option value="140">140萬</option>
            <option value="130">130萬</option>
            <option value="120">120萬</option>
            <option value="110">110萬</option>
            <option value="100">100萬</option>
            <option value="90">90萬</option>
            <option value="80">80萬</option>
            <option value="70">70萬</option>
            <option value="60">60萬</option>
            <option value="50">50萬</option>
            <option value="40">40萬</option>
            <option value="30">30萬</option>
            <option value="20">20萬</option>
          </select>
        </div>
      </div>
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
export default {
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
