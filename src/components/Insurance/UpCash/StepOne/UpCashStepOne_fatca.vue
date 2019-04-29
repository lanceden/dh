<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check">
            <img src="../../../../../static/img/chat.png" alt>
          </div>
            <div class="insure-check-title">FATCA及CRS個人客戶自我聲明書- 基本資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">被保險人</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id placeholder v-model="GetUpCashPostData.client_names" disabled="disabled" />
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">被保險人出生年月日</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id placeholder v-model="GetUpCashPostData.client_birth" disabled="disabled" />
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">被保險人身分證字號</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" v-model="GetUpCashPostData.client_id" disabled="disabled" />
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">戶籍地址</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" v-model="GetUpCashPostData.InsAddress" disabled="disabled" />
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">選擇國籍</label>
          <div class="col-sm-12 insure-select-align">
            <select id class="form-control data-input insure-select insure-input-block-edit" v-model="nation" ref="nation">
              <option value="0">請選擇</option>
              <option v-for="(item, index) in GetNationData" :key="index" :value="item.Name">{{item.Name}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">城市</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" ref="city" placeholder="請填寫城市" v-model="city" />
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  data() {
    return {
      nationData: ['請選擇'],
      cityData: []
    }
  },
  created() {
    if (!this.GetUpCashIsInit) {
      this.FuncGetNationality('')
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashIsInit,
      GetterTypes.GetUpCashPostData,
      'GetNation',
      'GetNationData',
      'GetCity',
      'GetCityData'
    ]),
    nation: {
      get() {
        return (this.GetUpCashPostData.NATION === undefined || this.GetUpCashPostData.NATION === null) ? 0 : this.GetUpCashPostData.NATION
      },
      set(value) {
        this.GetUpCashPostData.NATION = value
        this.GetUpCashPostData.CRSData.birth_national = value
      }
    },
    city: {
      get() {
        return this.GetCity
      },
      set(value) {
        this.GetUpCashPostData.CITY = value
        this.GetUpCashPostData.CRSData.birth_city = value
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
