<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check">
            <img src="images/chat.png" alt>
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
            <input type="text" class="form-control insure-input-block" id placeholder v-model="GetPostData.client_names" disabled="disabled" />
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">被保險人出生年月日</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id placeholder v-model="GetPostData.client_birth" disabled="disabled" />
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">被保險人身分證字號</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" v-model="GetPostData.client_id" disabled="disabled" />
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">戶籍地址</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" v-model="GetPostData.InsAddress" disabled="disabled" />
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">選擇國籍</label>
          <div class="col-sm-12 insure-select-align">
            <select id class="form-control data-input insure-select insure-input-block-edit" v-model="nation" ref="nation" @change="OnNationChange()">
              <option value="0">請選擇</option>
              <option v-for="item in GetNationData" :value="item.Code">{{item.Name}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">城市</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" ref="city" placeholder="請填寫城市" v-model="city" @blur="OnCityChange()" />
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import FunctionTypes from '../../../store/modules/Upcash/Types/UpCashFunctionTypes'
import GetterTypes from '../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
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
    if (!this.GetIsInit) {
      this.FuncGetNationality('')
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIsInit,
      GetterTypes.GetNation,
      GetterTypes.GetNationData,
      GetterTypes.GetCity,
      GetterTypes.GetCityData,
      GetterTypes.GetPostData
    ]),
    nation: {
      get() {
        return this.GetNation
      },
      set(value) {
        this.$store.state.UpCash.NATION = value
        this.$store.state.UpCash.POSTDATA.CRSData.birth_national = value
      }
    },
    city: {
      get() {
        return this.GetCity
      },
      set(value) {
        this.$store.state.UpCash.CITY = value
        this.$store.state.UpCash.POSTDATA.CRSData.birth_city = value
      }
    }
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncGetNationality
    ]),
    OnNationChange() {
      if (this.nation === '0') {
        this.$refs.nation.focus()
        return
      }
      this.$store.state.UpCash.POSTDATA.CRSData.birth_national = this.nation
    },
    OnCityChange() {
      console.log('OnCityChange')
    }
  }
}

</script>
