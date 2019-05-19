<template>
  <div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check">
              <img src="../../../../../static/img/insurance.png" alt>
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
            <div class="insure-input-block">{{GetAccidentPostData.ins_type_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label insure-label">投保始期</label>
          <div class="col-sm-12">
            <select class="form-control data-input insure-select insure-input-block-edit" v-model="po_issue_date">
              <option v-for="(item, index) in insDateArr" :key="index" :value="item.utc">{{item.utc}}</option>
            </select>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-tips-text  first-blue insure-text-explan">
            自午夜十二時起
          </div>
        </div>
      </form>
    </div>

    <!-- 投保額度 -->
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
      <div class="border-bottom-line"></div>
      <!-- 投保額度 -->
      <PremiumsComponent :stateData="GetAccidentPostData"></PremiumsComponent>
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
import $ from 'jquery'
import moment from 'moment'
import { mapGetters } from 'vuex'
import PremiumsComponent from '../../Common/premiums'
import GetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes.js'

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
        utc: moment().add(`${i}`, 'days').format(`YYYY/MM/DD`),
        roc: moment().add(`${i}`, 'days').format(`民國${parseInt(new Date().getFullYear()) - 1911}年MM月DD日午夜十二時`)
      })
    }
    setTimeout(() => {
      // 不為空則為未完成保單進入, 需帶入預設值
      console.log(this.$store.state.UNFINISHID)
      if (this.$store.state.UNFINISHID !== null) {
        let result = moment(this.GetAccidentPostData.po_issue_date, 'YYYY/MM/DD').format(`YYYY/MM/DD`)
        this.po_issue_date = result
      }
    }, 2000)
  },
  mounted() {
    // 頁面加載完成 將保險期間訖日傳值
    $('#CalcAmtDesc1').html(this.GetAccidentPostData.face_amt || 450)
    $('#CalcAmtDesc2').html(this.GetAccidentPostData.face_amt || 450)
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetAccidentPostData
    ]),
    /**
     * 保險期間 投保始期
     */
    po_issue_date: {
      get() {
        if (this.GetAccidentPostData.po_issue_date === null || this.GetAccidentPostData.po_issue_date === undefined || this.GetAccidentPostData.po_issue_date === '') {
          this.GetAccidentPostData.po_issue_date = moment().add(`1`, 'days').format(`YYYY/MM/DD`)
        }
        return this.GetAccidentPostData.po_issue_date
      },
      set(value) {
        this.GetAccidentPostData.po_issue_date = value
        this.GetAccidentPostData.mode_prem = 0
      }
    },
    /**
     * 投保額度
     */
    face_amt: {
      get() {
        return this.GetAccidentPostData.mode_prem === 0 ? this.GetPremiums[0] : this.GetAccidentPostData.face_amt
      },
      set(value) {
        this.GetAccidentPostData.face_amt = value
        this.GetAccidentPostData.mode_prem = 0
        $('#CalcAmtDesc1').html(this.GetAccidentPostData.face_amt)
        $('#CalcAmtDesc2').html(this.GetAccidentPostData.face_amt)
      }
    }
  }
}

</script>
