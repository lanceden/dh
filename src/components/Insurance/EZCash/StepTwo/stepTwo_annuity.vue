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
            ※年金累積期間不得低於六年
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="col-sm-12">
            <select class="form-control data-input" v-model="anny_frequence">
              <option selected="selected" value="0">一次給付</option>
              <option value="1">分期給付</option>
            </select>
          </div>
        </div>
        <div class="form-group row" v-show="paytype !== '0'">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">分期給付方式</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-edit" v-model="anny_frequence">
              <option selected="selected" value="0">未選擇</option>
              <option value="12">年</option>
              <option value="6">半年</option>
              <option value="3">季</option>
              <option value="1">月</option>
            </select>
          </div>
        </div>
        <div class="form-group row" v-show="paytype !== '0'">
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
        <div class="col-sm-12">
          <div class="insure-tips">
            年金給付帳戶：限要保人匯款帳戶。
          </div>
        </div>
      </form>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetEZCashPostData
    ]),
    paytype: {
      get() {
        return this.GetEZCashPostData.anny_frequence
      }
    },
    // 分期給付方式
    anny_frequence: {
      get() {
        return (this.GetEZCashPostData.anny_frequence === undefined || this.GetEZCashPostData.anny_frequence === null) ? 0 : this.GetEZCashPostData.anny_frequence
      },
      set(value) {
        this.GetEZCashPostData.mode_prem = 0
        this.GetEZCashPostData.anny_frequence = value
        console.log(typeof this.GetEZCashPostData.anny_frequence)
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
        return this.GetEZCashPostData.qpoop_19_year === '' ? 0 : this.GetEZCashPostData.qpoop_19_year
      },
      set(value) {
        this.GetEZCashPostData.mode_prem = 0
        this.GetEZCashPostData.qpoop_19_year = value
      }
    }
  }
}

</script>
