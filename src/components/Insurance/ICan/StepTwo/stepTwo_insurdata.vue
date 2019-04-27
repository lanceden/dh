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
      </form>
    </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
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
        return this.GetICanPostData.po_issue_date || moment().add(`1`, 'days').format(`YYYY-MM-DD`)
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
        return this.GetICanPostData.TrvDays || 30
      },
      set(value) {
        this.GetICanPostData.TrvDays = value
      }
    },
    /**
     * 投保額度
     */
    face_amt: {
      get() {
        return this.GetICanPostData.face_amt || 400
      },
      set(value) {
        this.GetICanPostData.face_amt = value
      }
    }
  },
  methods: {}
}

</script>
