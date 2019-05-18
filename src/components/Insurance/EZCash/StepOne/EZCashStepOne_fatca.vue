<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
          <div class="insure-check-title text-left">FATCA及CRS個人客戶自我聲明書 - 基本資料</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line col-sm-12"></div>
    <form class="form-bottom">
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label">被保險人</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetEZCashPostData.client_names}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label">被保險人身分證字號</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetEZCashPostData.client_id}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label">被保險人出生年月日</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{GetEZCashPostData.Birthday_Full}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label">戶籍地址</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">同本次申請文件地址</div>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label">選擇國籍</label>
        <div class="col-sm-12 insure-select-align">
          <select id class="form-control data-input insure-select insure-input-block-edit" v-model="birth_national" ref="birth_national">
            <option value="0">請選擇</option>
            <option v-for="(item, index) in GetNationData" :key="index" :value="item.Name">{{item.Name}}</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label">城市</label>
        <div class="col-sm-12">
          <input type="text" class="form-control insure-input-block" ref="birth_city" placeholder="請填寫城市" v-model="birth_city" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'
import { mapGetters, mapActions } from 'vuex'
export default {
  created() {
    if (!this.GetEZCashIsInit) {
      this.FuncGetNationality('')
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetEZCashIsInit,
      GetterTypes.GetEZCashPostData,
      'GetNationData'
    ]),
    birth_national: {
      get() {
        if(this.GetEZCashPostData.CRSData === undefined) return 0
        return (this.GetEZCashPostData.CRSData.birth_national === undefined || this.GetEZCashPostData.CRSData.birth_national === null || this.GetEZCashPostData.CRSData.birth_national === 'null') ? 0 : this.GetEZCashPostData.CRSData.birth_national
      },
      set(value) {
        this.GetEZCashPostData.CRSData.birth_national = value
      }
    },
    birth_city: {
      get() {
        if(this.GetEZCashPostData.CRSData === undefined) return ''
        return (this.GetEZCashPostData.CRSData.birth_city === undefined || this.GetEZCashPostData.CRSData.birth_city === null || this.GetEZCashPostData.CRSData.birth_city === 'null') ? '' : this.GetEZCashPostData.CRSData.birth_city
      },
      set(value) {
        this.GetEZCashPostData.CRSData.birth_city = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetNationality'
    ])
  }
}

</script>

<style scoped>
  .text-left{
    text-align: left;
  }
</style>
