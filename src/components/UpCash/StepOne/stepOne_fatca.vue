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
            <input type="text" class="form-control insure-input-block" id placeholder value="廖士儼">
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">被保險人出生年月日</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id placeholder value="民國66年7月23日">
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">被保險人身分證字號</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id placeholder value="A123456789">
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">戶籍地址</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" id placeholder value="同本次申請文件之地址">
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">選擇國籍</label>
          <div class="col-sm-12 insure-select-align">
            <select id class="form-control data-input insure-select insure-input-block-edit" v-model="nation">
              <option v-for="item in GetNationData" :value="item.Code">{{item.Name}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">選擇城市</label>
          <div class="col-sm-12 insure-select-align">
            <select id class="form-control data-input insure-select insure-input-block-edit" v-model="city">
              <option v-for="item in cityData" :value="item.City">{{item.City}}</option>
            </select>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import Service from '../../../utils/service.js'
import FunctionTypes from '../../../store/modules/Upcash/Types/UpCashFunctionTypes'
import GetterTypes from '../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  data() {
    return {
      nation: '',
      nationData: ['請選擇'],
      city: '',
      cityData: [],
      service: new Service(this.$http)
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.Getnation,
      GetterTypes.GetNationData
    ])
  },
  created() {
    console.log(this.GetNationData)
    // this.FuncGetJob()
    // this.getNationality()
    // this.getCity()
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncGetJob,
      FunctionTypes.FuncGetNationality
    ]),
    async getNationality() {
      let data = await this.service.GetNationality('')
      this.nationData = data.Result
      this.nation = this.nationData[0].Code
    },
    async getCity() {
      let data = await this.service.GetCity()
      this.cityData = data.Result
      this.city = this.cityData[0].City
    }
  }
}

</script>
