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
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">投保額度</label>
        <div class="col-sm-12">
          <select name="face_amt" id="face_amt" class="form-control data-input insure-select insure-input-block-edit" v-model="face_amt">
            <option value="0" selected="selected">請選擇</option>
            <option value="450">450萬</option>
            <option value="440">440萬</option>
            <option value="430">430萬</option>
            <option value="420">420萬</option>
            <option value="410">410萬</option>
            <option value="400">400萬</option>
            <option value="390">390萬</option>
            <option value="380">380萬</option>
            <option value="370">370萬</option>
            <option value="360">360萬</option>
            <option value="350">350萬</option>
            <option value="340">340萬</option>
            <option value="330">330萬</option>
            <option value="320">320萬</option>
            <option value="310">310萬</option>
            <option value="300">300萬</option>
            <option value="290">290萬</option>
            <option value="280">280萬</option>
            <option value="270">270萬</option>
            <option value="260">260萬</option>
            <option value="250">250萬</option>
            <option value="240">240萬</option>
            <option value="230">230萬</option>
            <option value="220">220萬</option>
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
import $ from 'jquery'
import moment from 'moment'
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
export default {
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
        if (this.GetIGoingPostData.po_issue_date === null || this.GetIGoingPostData.po_issue_date === undefined || this.GetIGoingPostData.po_issue_date === '') {
          this.GetIGoingPostData.po_issue_date = moment().add(`1`, 'days').format(`YYYY-MM-DD`)
        }
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
