<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
          <div class="insure-check-title">年金約定</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <form class="form-bottom">
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label insure-label">給付開始日：保險年齡</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-edit" v-model="fst_anny_pay_age">
            <option selected="selected" :value="fst_anny_pay_age">{{fst_anny_pay_age}}</option>
            <option v-for="n in 86 - fst_anny_pay_age" :key="n" :value="fst_anny_pay_age + n">{{fst_anny_pay_age + n}}</option>
          </select>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="insure-tips">
          歲之保單週年日
        </div>
        <div class="insure-tips-text">
          ※年金累積期間不得低於6年
        </div>
      </div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="top col-sm-12" @click="OnEnsure('one')">
            <div class="insure-notice-box">
              <div class="insure-check"><img :src="ensure.anny_frequenceOne" alt=""></div>
              <div class="insure-check-content">一次給付</div>
            </div>
          </div>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="top col-sm-12" @click="OnEnsure('more')">
            <div class="insure-notice-box">
              <div class="insure-check"><img :src="ensure.anny_frequenceMore" alt=""></div>
              <div class="insure-check-content">分期給付</div>
            </div>
          </div>
        </div>
      </form>
      <div class="form-group row" v-show="parseInt(GetEZCashPostData.anny_frequence) !== 0">
        <label for="" class="col-sm-12 col-form-label insure-label insure-label">分期給付方式</label>
        <div class="col-sm-12 insure-select-align">
          <select id="" class="form-control data-input insure-select insure-input-edit" v-model="anny_frequence_computed">
            <option selected="selected" value="0">未選擇</option>
            <option value="12">年</option>
            <option value="6">半年</option>
            <option value="3">季</option>
            <option value="1">月</option>
          </select>
        </div>
      </div>
      <div class="form-group row" v-show="parseInt(GetEZCashPostData.anny_frequence) !== 0">
        <label for="" class="col-sm-12 col-form-label insure-label insure-label">保證期間</label>
        <div class="col-sm-12 insure-select-align">
          <select id="" class="form-control data-input insure-select insure-input-edit" v-model="qpoop_19_year">
            <option selected="selected" value="0">未選擇</option>
            <option value="10">10年</option>
            <option value="15">15年</option>
            <option value="20">20年</option>
          </select>
        </div>
      </div>
      <div class="border-bottom-line col-sm-12"></div>
      <form class="form-bottom">
        <div class="col-sm-12">
          <div class="insure-tips-text text-red-i">
            年金給付帳戶：限要保人匯款帳戶。
          </div>
        </div>
      </form>
    </form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'
import { InitColumnData } from '../../../../utils/initColumnData'
export default {
  data() {
    return {
      tempAnnyFrequence: 0,
      ensure: {
        anny_frequenceOne: '../../../../../static/img/oval.png',
        anny_frequenceMore: '../../../../../static/img/oval.png'
      }
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetEZCashPostData
    ]),
    // 給付方式: 0一次給付 1分期給付
    anny_frequence: {
      get() {
        let result = InitColumnData(this.GetEZCashPostData.anny_frequence, 0)
        this.GetEZCashPostData.anny_frequence = result
        return parseInt(result) !== 0 ? 1 : 0
      },
      set(value) {
        // 若是一次給付, 則要清空分期給付
        if (parseInt(value) === 0) {
          this.GetEZCashPostData.qpoop_19_year = ''
        }
        this.GetEZCashPostData.mode_prem = 0
        this.GetEZCashPostData.anny_frequence = parseInt(value)
      }
    },
    // 分期給付方式
    anny_frequence_computed: {
      get() {
        return this.tempAnnyFrequence
      },
      set(value) {
        this.GetEZCashPostData.mode_prem = 0
        this.GetEZCashPostData.anny_frequence = parseInt(value)
        this.tempAnnyFrequence = parseInt(value)
      }
    },
    // 給付開始日：保險年齡
    fst_anny_pay_age: {
      get() {
        this.GetEZCashPostData.fst_anny_pay_age = parseInt(this.GetEZCashPostData.Age) + 6
        return parseInt(this.GetEZCashPostData.Age) + 6
      },
      set(value) {
        this.GetEZCashPostData.mode_prem = 0
        this.GetEZCashPostData.fst_anny_pay_age = value
        console.log(this.GetEZCashPostData.fst_anny_pay_age)
      }
    },
    // 保證期間
    qpoop_19_year: {
      get() {
        let result = InitColumnData(this.GetEZCashPostData.qpoop_19_year, 0)
        return result
      },
      set(value) {
        this.GetEZCashPostData.mode_prem = 0
        this.GetEZCashPostData.qpoop_19_year = value
      }
    }
  },
  methods: {
    OnEnsure(target) {
      switch (target) {
        case 'one': // 一次
          this.ensure.anny_frequenceOne = '../../../../../static/img/oval-ed.png'
          this.ensure.anny_frequenceMore = '../../../../../static/img/oval.png'
          this.anny_frequence = 0
          break
        case 'more': // 分期
          this.ensure.anny_frequenceOne = '../../../../../static/img/oval.png'
          this.ensure.anny_frequenceMore = '../../../../../static/img/oval-ed.png'
          this.anny_frequence = 1
          break
      }
    }
  }
}

</script>
