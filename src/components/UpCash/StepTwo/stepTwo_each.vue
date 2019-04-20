<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">年金約定</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">給付開始日：保險年齡</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-edit">
              <option selected>{{parseInt(GetPostData.Age) + 6}}</option>
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
            <select id="" class="form-control data-input" v-model="isOneTimePayment"
            @change="OnisOneTimePayment()">
              <option selected="selected" value="Y">一次給付</option>
              <option value="N">分期給付</option>
            </select>
          </div>
        </div>
        <div class="form-group row" v-show="isShowperiod">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">分期給付方式</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-edit">
              <option>月</option>
              <option>季</option>
              <option selected>年</option>
            </select>
          </div>
        </div>
        <div class="form-group row" v-show="isShowperiod">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">保證期間</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-edit">
              <option selected>10年</option>
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
import GetterTypes from '../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
export default {
  data() {
    return {
      isShowperiod: false,
      isOneTimePayment: 'Y'
    }
  },
  created() {
    console.log(this.GetPostData.Age)
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetPostData
    ])
  },
  methods: {
    OnisOneTimePayment() {
      this.isShowperiod = this.isOneTimePayment === 'N'
    }
  }
}

</script>
