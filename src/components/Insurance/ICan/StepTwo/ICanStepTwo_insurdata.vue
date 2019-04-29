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
          <div class="insure-input-block">{{GetICanPostData.ins_type_name}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">保險期間</label>
        <div class="col-sm-12">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="po_issue_date">
            <option v-for="(item, index) in insDateArr" :key="index" :value="item.utc">自{{item.roc}}起</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">保險期間</label>
        <div class="col-sm-12">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="TrvDays">
            <option v-for="n in 30" :key="n" :value="31 - n">{{31 - n}}</option>
          </select>
        </div>
        <div class="col-sm-12">
          <div class="insure-notice-text" id="matured_date">
            
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">投保額度</label>
        <div class="col-sm-12">
          <select id="face_amt" name="face_amt" class="form-control data-input insure-select insure-input-block-edit" v-model="face_amt">
            <option value="400">400萬</option>
            <option value="300">300萬</option>
            <option value="200">200萬</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">傷害醫療</label>
        <div class="col-sm-12">
          <select id="face_amt" name="face_amt" class="form-control data-input insure-select insure-input-block-edit" disabled="disabled">
            <option value="2">2萬</option>
          </select>
          <div class="insure-notice-text">
            <ul class="insure-notice-text-ul">
              <li>​本商品一律附加實支實付型傷害醫療保險限額2萬</li>
              <li>網路投保個人傷害醫療實支實付型保單（含主、附約），累計本公司及同業以投保1單為限</li>
              <li>本商品附加實支實付型傷害醫療保險投保金額會列入網路投保傷害保險累積限額計算</li>
            </ul>
          </div>
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
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">保障內容</label>
        <div class="col-sm-12">
          <div class="insure-notice-text">
            <ul class="insure-notice-text-ul">
              <li>意外身故保險金或喪葬費用保險金 > <label id="CalcAmtDesc2"></label>元</li>
              <li>意外失能保險金 > <label id="CalcAmtDesc3"></label>元</li>
              <li>意外骨折保險金 > <label id="broken-bones-acc-amt"></label>元</li>
              <li>傷害醫療保險金 > <label>2 萬</label>元</li>
            </ul>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import moment from 'moment'
import $ from 'jquery'
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
import { InitColumnData } from '../../../../utils/initColumnData'
export default {
  data() {
    return {
      startYear: parseInt(new Date().getFullYear()) - 1911,
      startMonth: moment().format(`MM`),
      startDay: moment().format(`DD`),
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
    console.log(this.insDateArr)
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
        let result = InitColumnData(this.GetICanPostData.po_issue_date, moment().add(`1`, 'days').format(`YYYY-MM-DD`))
        this.GetICanPostData.po_issue_date = result
        return result
      },
      set(value) {
        this.GetICanPostData.po_issue_date = value
      }
    },
    /**
     * 保險期間 天數
     */
    TrvDays: {
      get() {
        let result = this.GetICanPostData.TrvDays
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
        let maturedDate = moment(this.GetICanPostData.po_issue_date, 'YYYY-MM-DD').add(`${parseInt(value)}`, 'days').format(`民國${parseInt(new Date().getFullYear()) - 1911}年 MM 月 DD 日午夜十二時`)
        $('#matured_date').html(`至 ${maturedDate}`)
      }
    },
    /**
     * 投保額度
     */
    face_amt: {
      get() {
        let result = InitColumnData(this.GetICanPostData.face_amt, 400)
        this.GetICanPostData.face_amt = result
        return result
      },
      set(value) {
        this.GetICanPostData.face_amt = value
        $('#CalcAmtDesc2').text($('#face_amt option:selected').text())
        $('#CalcAmtDesc3').text($('#face_amt option:selected').text())
        var prem = parseInt(value)
        var maxPerc = 1.75
        var minPerc = 0.1 / 4
        var maxAmt = prem * maxPerc / 100
        var minAmt = prem * minPerc / 100
        $('#broken-bones-acc-amt').text(minAmt + '萬' + ' ~ ' + maxAmt + '萬')
      }
    }
  },
  methods: {}
}

</script>
