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
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import { mapGetters, mapActions } from 'vuex'
export default {
  created() {
    if (!this.GetUpCashIsInit) {
      this.FuncGetNationality('')
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashIsInit,
      GetterTypes.GetUpCashPostData,
      'GetNationData',
      'GetCityData'
    ]),
    birth_national: {
      get() {
        return (this.GetUpCashPostData.CRSData.birth_national === undefined || this.GetUpCashPostData.CRSData.birth_national === null || this.GetUpCashPostData.CRSData.birth_national === 'null') ? 0 : this.GetUpCashPostData.CRSData.birth_national
      },
      set(value) {
        this.GetUpCashPostData.CRSData.birth_national = value
      }
    },
    birth_city: {
      get() {
        return (this.GetUpCashPostData.CRSData.birth_city === undefined || this.GetUpCashPostData.CRSData.birth_city === null || this.GetUpCashPostData.CRSData.birth_city === 'null') ? 0 : this.GetUpCashPostData.CRSData.birth_city
      },
      set(value) {
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
