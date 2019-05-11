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
            <div class="insure-input-block">{{GetIWellPostData.ins_type_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label insure-label">投保始期</label>
          <div class="col-sm-12">
            <select class="form-control data-input insure-select insure-input-block-edit" v-model="po_issue_date">
              <option v-for="(item, index) in insDateArr" :key="index" :value="item.utc">自{{item.roc}}起</option>
            </select>
            <div class="form-control data-input insure-select insure-input-block-edit" id="matured_date"></div>
            <div class="insure-check-title insure-input-block-edit">自午夜十二時起</div>
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label insure-label">投保期間</label>
          <div class="col-sm-12">
            <select class="form-control data-input insure-select insure-input-block-edit" v-model="TrvDays">
              <option v-for="n in 30" :key="n" :value="31 - n">{{31 - n}}天</option>
            </select>
            <div class="insure-check-title insure-tips">最高受理30天</div>
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
              <img src="../../../../../static/img/edit.png" alt>
            </div>
            <div class="insure-check-title">請填寫投保額度</div>
          </div>
        </div>
      </div>
      <!-- 投保額度 -->
      <PremiumsComponent :stateData="GetIWellPostData"></PremiumsComponent>
      <div class="col-sm-12">
        <div class="insure-tips">
          驗證方式為簡訊OTP動態密碼者，新光既有保戶同業累積限450萬、非既有保戶限225萬
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">傷害醫療</label>
        <div class="col-sm-12">
          <select id="face_amt" name="face_amt" class="form-control data-input insure-select insure-input-block-edit" disabled="disabled">
            <option value="2">2萬</option>
          </select>
          <div class="insure-notice-text">
            <ul class="insure-notice-text-ol">
              <li>​本商品一律附加實支實付型傷害醫療保險限額2萬</li>
              <li>網路投保個人傷害醫療實支實付型保單（含主、附約），累計本公司及同業以投保1單為限</li>
              <li>本商品附加實支實付型傷害醫療保險投保金額會列入網路投保傷害保險累積限額計算</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import $ from 'jquery'
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
import { InitColumnData } from '../../../../utils/initColumnData'
import PremiumsComponent from '../../Common/premiums'

const initFaceAmt = 400
export default {
  components: {
    PremiumsComponent
  },
  data() {
    return {
      startYear: parseInt(new Date().getFullYear()) - 1911,
      startMonth: moment().format(`MM`),
      startDay: moment().format(`DD`),
      insDateArr: []
    }
  },
  mounted() {
    var maxPerc = 100 * 0.5
    var minPerc = 5 * 0.5
    var maxAmt = initFaceAmt * maxPerc / 100
    var minAmt = initFaceAmt * minPerc / 100
    $('#CalcAmtDesc2').text(maxAmt + '萬')
    $('#CalcAmtDesc3').text(maxAmt + '萬')
    $('#blind-acc-amt').text(minAmt + '萬' + ' ~ ' + maxAmt + '萬')
    $('#specific-blind-acc-amt').text(minAmt + '萬' + ' ~ ' + maxAmt + '萬')

    let maturedDate = moment().add(`31`, 'days')
      .format(`民國${parseInt(new Date().getFullYear()) - 1911}年 MM 月 DD 日午夜十二時`)
    $('#matured_date').html(`天至 ${maturedDate}`)
  },
  created() {
    for (let i = 1; i <= 7; i++) {
      this.insDateArr.push({
        utc: moment().add(`${i}`, 'days').format(`YYYY-MM-DD`),
        roc: moment().add(`${i}`, 'days').format(`民國${parseInt(new Date().getFullYear()) - 1911}年MM月DD日午夜十二時`)
      })
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIWellPostData
    ]),
    /**
     * 保險期間 投保始期
     */
    po_issue_date: {
      get() {
        this.GetIWellPostData.po_issue_date = InitColumnData(this.GetIWellPostData.po_issue_date, moment().add(`1`, 'days').format(`YYYY-MM-DD`))
        return this.GetIWellPostData.po_issue_date
      },
      set(value) {
        this.GetIWellPostData.po_issue_date = value
        this.GetIWellPostData.mode_prem = 0
        let maturedDate = moment(value, 'YYYY-MM-DD').add(`${parseInt(this.GetIWellPostData.TrvDays)}`, 'days').format(`民國${parseInt(new Date().getFullYear()) - 1911}年 MM 月 DD 日午夜十二時`)
        $('#matured_date').html(`天至 ${maturedDate}`)
      }
    },
    /**
     * 保險期間 天數
     */
    TrvDays: {
      get() {
        let result = InitColumnData(this.GetIWellPostData.TrvDays, 0)
        if (parseInt(result) === 0) {
          this.GetIWellPostData.TrvDays = 30
          result = 30
        } else {
          this.GetIWellPostData.TrvDays = result
        }
        return result
      },
      set(value) {
        this.GetIWellPostData.TrvDays = value
        this.GetIWellPostData.mode_prem = 0
        let maturedDate = moment(this.GetIWellPostData.po_issue_date, 'YYYY-MM-DD').add(`${parseInt(value)}`, 'days').format(`民國${parseInt(new Date().getFullYear()) - 1911}年 MM 月 DD 日午夜十二時`)
        $('#matured_date').html(`至 ${maturedDate}`)
      }
    }
  }
}

</script>
