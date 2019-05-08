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
          <div class="insure-input-block">{{GetIGoingPostData.ins_type_name}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">保險期間</label>
        <div class="col-sm-12">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="po_issue_date">
            <option v-for="(item, index) in insDateArr" :key="index" :value="item.utc">自{{item.roc}}起</option>
          </select>
          <div class="form-control insure-select" id="matured_date"></div>
        </div>
      </div>
      <!-- 投保額度 -->
      <PremiumsComponent :stateData="GetIGoingPostData"></PremiumsComponent>
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
import $ from 'jquery'
import moment from 'moment'
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
import { InitColumnData } from '../../../../utils/initColumnData'
import PremiumsComponent from '../../Common/premiums'

export default {
  components: {
    PremiumsComponent
  },
  data() {
    return {
      insDateArr: []
    }
  },
  created() {
    for (let i = 1; i <= 7; i++) {
      this.insDateArr.push({
        utc: moment().add(`${i}`, 'days').format(`YYYY-MM-DD`),
        roc: moment().add(`${i}`, 'days').format(`民國${parseInt(new Date().getFullYear()) - 1911}年MM月DD日午夜十二時`)
      })
    }
  },
  mounted() {
    // 頁面加載完成 將保險期間訖日傳值
    let maturedDate = moment().add(`1`, 'days').format(`民國${parseInt(new Date().getFullYear()) + 1 - 1911}年 MM 月 DD 日午夜十二時`)
    $('#matured_date').html(`至 ${maturedDate}`)
    $('#CalcAmtDesc1').html(this.GetIGoingPostData.face_amt || 450)
    $('#CalcAmtDesc2').html(this.GetIGoingPostData.face_amt || 450)
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIGoingPostData
    ]),
    /**
     * 保險期間 投保始期
     */
    po_issue_date: {
      get() {
        this.GetIGoingPostData.po_issue_date = InitColumnData(this.GetIGoingPostData.po_issue_date, moment().add(`1`, 'days').format(`YYYY-MM-DD`))
        return this.GetIGoingPostData.po_issue_date
      },
      set(value) {
        this.GetIGoingPostData.po_issue_date = value
        this.GetIGoingPostData.mode_prem = 0
        let maturedDate = moment(this.GetIGoingPostData.po_issue_date, 'YYYY-MM-DD').format(`民國${parseInt(new Date().getFullYear()) + 1 - 1911}年 MM 月 DD 日午夜十二時`)
        $('#matured_date').html(`至 ${maturedDate}`)
      }
    },
    /**
     * 投保額度
     */
    face_amt: {
      get() {
        return this.GetIGoingPostData.face_amt > 450 ? 450 : this.GetIGoingPostData.face_amt
      },
      set(value) {
        this.GetIGoingPostData.face_amt = value
        this.GetIGoingPostData.mode_prem = 0
        $('#CalcAmtDesc1').html(this.GetIGoingPostData.face_amt)
        $('#CalcAmtDesc2').html(this.GetIGoingPostData.face_amt)
      }
    }
  }
}

</script>
