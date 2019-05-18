<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
          <div class="insure-check-title">投保資料</div>
        </div>
      </div>
    </div>

    <div class="border-bottom-line"></div>

    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label">您的旅遊地點</label>
      <div class="border-bottom-line col-sm-12"></div>
      <div class="top col-sm-12">
        <div class="insure-notice-box" @click="OnEnsure('in')">
          <div class="insure-check"><img :src="ensure.in" alt=""></div>
          <div class="insure-check-content">國內</div>
        </div>
      </div>
      <div class="border-bottom-line col-sm-12"></div>
      <div class="top col-sm-12">
        <div class="insure-notice-box" @click="OnEnsure('out')">
          <div class="insure-check"><img :src="ensure.out" alt=""></div>
          <div class="insure-check-content">國外</div>
        </div>
      </div>
      <div class="border-bottom-line col-sm-12"></div>
      <div class="col-sm-12 insure-select-align" v-show="this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelType === 2">
        <select id="" class="form-control data-input insure-select  insure-select-withradio" v-model="TravelCountry">
          <option value="0" selected="selected">請選擇准備前往國家</option>
          <option value="2">加拿大</option>
          <option value="7">歐洲 (申根地區)</option>
          <option value="3">歐洲 (非申根地區)</option>
          <option value="4">紐澳</option>
          <option value="5">日本</option>
          <option value="8">韓國</option>
          <option value="9">中港澳</option>
          <option value="A">東南亞</option>
          <option value="6">其他地區</option>
        </select>
        <div class="col-sm-12 insure-select-align" v-show="TravelCountry === '6'">
          <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="請填寫" v-model="EtcCountry">
        </div>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="insure-tips-text first-blue">備註:最高受理天數，國內旅遊：９０天，國外旅遊：１８０天。</div>
    </div>
    <div class="col-sm-12">
      <div class="insure-tips-text ">
        <img src="../../../../../static/img/insure-link.png" alt="">
        <a href="https://www.mofa.gov.tw/News_FAQ.aspx?c=AD6908DFDDB62656&n=C1B19EF0ACDD3C91&sms=867F5398A49F758A" target="_blank">申根地區國查詢</a>
      </div>
    </div>

    <form class="form-bottom">
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">保險生效日</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="col-sm-4 insure-select-align insure-select-withline">
          <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="year">
            <option v-for="n in 2" :key="n" :value="new Date().getFullYear() - 1 + n">{{new Date().getFullYear() - 1 + n}}</option>
          </select>
        </div>
        <div class="col-sm-4 insure-select-align insure-select-withline">
          <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="month">
            <option v-for="n in 12" :key="n" :value="n < 10 ? '0' + n : n">{{n}}</option>
          </select>
        </div>
        <div class="col-sm-4 insure-select-align insure-select-withline">
          <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="day">
            <option v-for="n in 31" :key="n" :value="n < 10 ? '0' + n : n">{{n}}</option>
          </select>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="col-sm-12 insure-select-align insure-select-withline">
          <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="time">
            <template v-for="n in 24">
              <option v-if="n !== 24" :key="n + 'h'" :value="(n < 10 ? ('0' + n) : n) + ':00'">{{(n < 10 ? ('0' + n) : n) + ':00'}}</option>
              <option v-else :key="n + 'h0'" :value="'00:00'">00:00</option>
              <option v-if="n !== 24" :key="n + 'm'" :value="(n < 10 ? ('0' + n) : n) + ':30'">{{(n < 10 ? ('0' + n) : n) + ':30'}}</option>
              <option v-else :key="n + 'm0'" :value="'00:30'">00:30</option>
            </template>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">保險期間天數</label>
        <div class="col-sm-9">
          <input type="number" min="1" class="form-control insure-input insure-input-edit col-sm-10" id="" placeholder="請填寫" v-model="TravelDay">
        </div>
        <label for="" class="col-sm-3 col-form-label insure-label insure-label-day">天</label>
      </div>
    </form>
    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-4 footer-title footer-left">回前一頁</div>
          <div class="col-sm-8 footer-title footer-right">確認送出</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TravelGetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes.js'
import moment from 'moment'

export default {
  data() {
    return {
      ensure: {
        in: '../../../../../static/img/oval.png',
        out: '../../../../../static/img/oval.png'
      }
    }
  },
  mounted() {
    this.OnEnsure(this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelType === 1)
  },
  computed: {
    ...mapGetters([
      TravelGetterTypes.GetTravelPostData
    ]),
    year: {
      get() {
        let result = moment(this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsStartDate, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm').split('-')[0]
        return result
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsStartDate = `${value}-${this.month}-${this.day} ${this.time}`
      }
    },
    month: {
      get() {
        let result = moment(this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsStartDate, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm').split('-')[1]
        return result
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsStartDate = `${this.year}-${value}-${this.day} ${this.time}`
      }
    },
    day: {
      get() {
        let result = moment(this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsStartDate, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm').split('-')[2].split(' ')[0]
        return result
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsStartDate = `${this.year}-${this.month}-${value} ${this.time}`
      }
    },
    time: {
      get() {
        let result = moment(this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsStartDate, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm').split(' ')[1]
        return result
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsStartDate = `${this.year}-${this.month}-${this.day} ${value}`
        console.log(this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsStartDate)
      }
    },
    TravelDay: {
      get() {
        return this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelDay
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelDay = value
      }
    },
    TravelCountry: {
      get() {
        return this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelCountry || 0
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelCountry = value
      }
    },
    EtcCountry: {
      get() {
        return this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EtcCountry
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EtcCountry = value
      }
    }
  },
  methods: {
    /**
     * 設置請確認保障對象
     * @param {string} target 國內:in 國外:out
     */
    OnEnsure(target) {
      switch (target) {
        case 'in': // 國內
          this.ensure.in = '../../../../../static/img/oval-ed.png'
          this.ensure.out = '../../../../../static/img/oval.png'
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelType = 1
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelCountry = 1
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EtcCountry = ''
          break
        case 'out': // 國外
          this.ensure.in = '../../../../../static/img/oval.png'
          this.ensure.out = '../../../../../static/img/oval-ed.png'
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelType = 2
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelCountry = 0
          break
      }
    }
  }
}

</script>
