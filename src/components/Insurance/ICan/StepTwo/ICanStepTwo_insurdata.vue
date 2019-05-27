<template>
  <div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check">
              <img src="../../../../../static/img/insurance.png">
            </div>
            <div class="insure-check-title">請填寫投保資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <!-- 主險種名稱 -->
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label insure-label">主險種名稱</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetICanPostData.ins_type_name}}</div>
          </div>
        </div>
        <!-- 投保始期 -->
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保始期</label>
          <div class="col-sm-12 insure-select-align">
            <select class="form-control data-input insure-select insure-input-block-edit" v-model="po_issue_date">
              <option v-for="(item, index) in insDateArr" :key="index" :value="item.utc">自{{item.roc}}</option>
            </select>
          </div>
          <div class="col-sm-12">
            <div class="form-control insure-input-block second" id="matured_date"></div>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-tips-text  first-blue insure-text-explan">
            自午夜十二時起
          </div>
        </div>
        <!-- 投保期間 -->
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label insure-label">投保期間</label>
          <div class="col-sm-12">
            <select class="form-control data-input insure-select insure-input-block-edit" v-model="TrvDays">
              <option v-for="n in 30" :key="n" :value="31 - n">{{31 - n}}天</option>
            </select>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-tips-text insure-text-explan">
            最高受理天數30天
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
              <img src="../../../../../static/img/insurance.png">
            </div>
            <div class="insure-check-title">請填寫投保額度</div>
          </div>
        </div>
      </div>
      <!-- 投保額度 -->
      <PremiumsComponent :stateData="GetICanPostData"></PremiumsComponent>
      <div class="col-sm-12">
        <div class="insure-tips-text first-blue">
          驗證方式為簡訊OTP動態密碼者，新光既有保戶同業累積限450萬、非既有保戶限225萬
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">傷害醫療</label>
        <div class="col-sm-12">
          <select id="face_amt" name="face_amt" class="form-control data-input insure-select insure-input-block-edit" disabled="disabled">
            <option value="2">2萬</option>
          </select>
        </div>
      </div>
      <form class="form-bottom">
        <div class="col-sm-12">
          <div class="insure-tips-text">
            <ul>
              <li class="decimal">本商品一律附加實支實付型傷害醫療保險限額2萬。</li>
              <li class="decimal">網路投保個人傷害醫療實支實付型保單（含主、附約），累計本公司及同業以投保1單為限</li>
              <li class="decimal">本商品附加實支實付型傷害醫療保險投保金額會列入網路投保傷害保險累積限額計算</li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import moment from 'moment'
import $ from 'jquery'
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
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
    var maxPerc = 1.75
    var minPerc = 0.1 / 4
    var maxAmt = initFaceAmt * maxPerc / 100
    var minAmt = initFaceAmt * minPerc / 100
    $('#broken-bones-acc-amt').text(minAmt + '萬' + ' ~ ' + maxAmt + '萬')

    let maturedDate = moment().add(`31`, 'days')
      .format(`民國${parseInt(new Date().getFullYear()) - 1911}年 MM 月 DD 日`)
    $('#matured_date').html(`至 ${maturedDate}起`)
  },
  created() {
    for (let i = 1; i <= 7; i++) {
      this.insDateArr.push({
        utc: moment().add(`${i}`, 'days').format(`YYYY-MM-DD`),
        roc: moment().add(`${i}`, 'days').format(`民國${parseInt(new Date().getFullYear()) - 1911}年MM月DD日`)
      })
    }
    setTimeout(() => {
      // 不為空則為未完成保單進入, 需帶入預設值
      if (this.$store.state.UNFINISHID !== null) {
        let result = moment(this.GetICanPostData.po_issue_date, 'YYYY-MM-DD').format(`YYYY-MM-DD`)
        this.po_issue_date = result
      }
    }, 2000)
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetICanPostData
    ]),
    /**
     * 保險期間 投保始期
     */
    po_issue_date: {
      get() {
        this.GetICanPostData.po_issue_date = InitColumnData(this.GetICanPostData.po_issue_date, moment().add(`1`, 'days').format(`YYYY-MM-DD`))
        return this.GetICanPostData.po_issue_date
      },
      set(value) {
        this.GetICanPostData.po_issue_date = value
        this.GetICanPostData.mode_prem = 0
        let maturedDate = moment(value, 'YYYY-MM-DD').add(`${parseInt(this.GetICanPostData.TrvDays)}`, 'days').format(`民國${parseInt(new Date().getFullYear()) - 1911}年 MM 月 DD 日`)
        $('#matured_date').html(`至 ${maturedDate}起`)
      }
    },
    /**
     * 保險期間 天數
     */
    TrvDays: {
      get() {
        let result = InitColumnData(this.GetICanPostData.TrvDays, 0)
        if (parseInt(result) === 0) {
          this.GetICanPostData.TrvDays = 30
          result = 30
        } else {
          this.GetICanPostData.TrvDays = result
        }
        return result
      },
      set(value) {
        this.GetICanPostData.TrvDays = value
        this.GetICanPostData.mode_prem = 0
        let maturedDate = moment(this.GetICanPostData.po_issue_date, 'YYYY-MM-DD').add(`${parseInt(value)}`, 'days').format(`民國${parseInt(new Date().getFullYear()) - 1911}年 MM 月 DD 日`)
        $('#matured_date').html(`至 ${maturedDate}起`)
      }
    }
  }
}

</script>
