<template>

  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
          <div class="insure-check-title">請填寫聯絡資料</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <form class="form-bottom">
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label insure-label">手機</label>
        <div class="col-sm-12">
          <input type="text" class="form-control insure-input" :value="GetUpCashPostData.phone" readonly="readonly">
        </div>
      </div>
      <div class="col-sm-12">
        <div class="insure-tips">
          ※如需修改請至「我的資料管理」修改並通過驗證
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label insure-label">電話</label>
        <div class="col-sm-12">
          <input type="text" class="form-control insure-input" v-model="phone_area">
          <input type="text" class="form-control insure-input" v-model="phone_main">
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">同通訊地址</label>
        <div class="col-sm-12">
          <input type="text" class="form-control insure-input" :value="GetUpCashPostData.address1" :disabled="!GetContactCheckBox">
        </div>
        <div :class="{checkbox: true, checked: GetContactCheckBox}" @click="OnRegisterAddr('comm')"></div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">輸入新的通訊地址</label>
        <div class="col-sm-12">
          <template>
            <div v-show="cbNewAddr">
              <select class="form-control data-input insure-select insure-input-edit" :disabled="!cbNewAddr" v-model="city2">
                <option selected="selected" value="0">請選擇</option>
                <option v-for="(item, index) in GetCityData" :key="index" :value="item.City">{{item.City}}</option>
              </select>
              <select class="form-control data-input insure-select insure-input-edit" :disabled="!cbNewAddr" v-model="district2">
                <option selected="selected" value="0">請選擇</option>
                <option v-for="(item, index) in GetDistrictData" :key="index" :value="item.Zip + '-' +item.Area">{{item.Area}}</option>
              </select>
              <input type="text" class="form-control insure-input-block" placeholder="為保障您的權益，此欄位不可為空白" v-model="road2" />
            </div>
          </template>
        </div>
        <div :class="{checkbox: true, checked: !GetContactCheckBox}" @click="OnRegisterAddr('cbNewAddr')"></div>
      </div>
      <div class="col-sm-12">
        <div class="insure-tips">
          ※將同步更新客戶基本資料
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'

const CITYNAME = '基隆市'
export default {
  data() {
    return {
      cbOldAddr: true,
      cbNewAddr: false,
      tempZip2: '',
      tempCity2: '',
      tempDistrict2: '',
      tempRoad2: ''
    }
  },
  created() {
    this.FuncGetCityData()
    this.FuncGetDistrictData(CITYNAME)
  },
  mounted() {
    // 暫存舊的通訊地址
    this.tempZip2 = this.GetUpCashPostData.zip2
    this.tempCity2 = this.GetUpCashPostData.city2
    this.tempDistrict2 = this.GetUpCashPostData.district2
    this.tempRoad2 = this.GetUpCashPostData.road2
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData,
      'GetCityData',
      'GetDistrictData',
      'GetContactCheckBox'
    ]),
    phone_area: {
      get() {
        return this.GetUpCashPostData.phone_area
      },
      set(value) {
        this.GetUpCashPostData.phone_area = value
      }
    },
    phone_main: {
      get() {
        return this.GetUpCashPostData.phone_main
      },
      set(value) {
        this.GetUpCashPostData.phone_main = value
      }
    },
    // 輸入戶籍地址-縣市
    city2: {
      get() {
        return this.GetUpCashPostData.city2
      },
      set(value) {
        this.GetUpCashPostData.city2 = value
        // 重新選取縣市, 要更新區域下拉框並清空區域原先的值
        this.FuncGetDistrictData(value)
        this.GetUpCashPostData.district2 = 0
      }
    },
    // 輸入戶籍地址-區域
    district2: {
      get() {
        if (this.GetUpCashPostData.district2 === 0) return 0
        return (`${this.GetUpCashPostData.zip2}-${this.GetUpCashPostData.district2}`) || 0
      },
      set(value) {
        // item.Zip|item.Area
        let data = value.split('-')
        this.GetUpCashPostData.zip2 = data[0]
        this.GetUpCashPostData.district2 = data[1]
      }
    },
    // 輸入戶籍地址-路
    road2: {
      get() {
        return this.GetUpCashPostData.road2
      },
      set(value) {
        this.GetUpCashPostData.road2 = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetCityData',
      'FuncGetDistrictData'
    ]),
    OnRegisterAddr(target) {
      let result = !this.$store.state.CONTACTCHECKBOX
      // 輸入新的戶籍地址
      if (target === 'cbNewAddr') {
        this.cbNewAddr = true
      } else { // 原本的戶籍地址
        this.cbNewAddr = false
        this.GetUpCashPostData.zip2 = this.tempZip2
        this.GetUpCashPostData.city2 = this.tempCity2
        this.GetUpCashPostData.district2 = this.tempDistrict2
        this.GetUpCashPostData.road2 = this.tempRoad2
      }
      this.$store.state.CONTACTCHECKBOX = result
    }
  }
}

</script>
