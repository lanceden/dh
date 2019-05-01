<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="images/chat.png" alt=""></div>
          <div class="insure-check-title">保單寄送地址</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <div class="insure-form">
      保險單形式：<span class="insure-form-im">紙本保單</span>
    </div>
    <form class="form-bottom">
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label" @click="OnCheck('cbOldAddr')">同通訊地址</label>
        <div class="col-sm-12">
          <div class="insure-input-block" v-show="cbOldAddr">{{GetUpCashPostData.InsAddress}}</div>
        </div>
        <div :class="{ checked: cbOldAddr }" class="checkbox" @click="OnCheck('cbOldAddr')"></div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label" @click="OnCheck('cbNewAddr')">輸入新的客戶住所(通訊地址) ※將同步更新客戶基本資料 </label>
        <div class="col-sm-12">
          <input type="text" class="form-control insure-input-block" id="" v-show="cbNewAddr" placeholder="為保障您的權益，此欄位不可為空白" value="">
        </div>
        <div class="col-sm-12" v-show="cbNewAddr">
          <select class="form-control data-input insure-select insure-input-edit" :disabled="!cbNewAddr" v-model="city1">
            <option selected="selected">請選擇</option>
            <option v-for="(item, index) in GetCityData" :key="index" :value="item.City">{{item.City}}</option>
          </select>
          <select class="form-control data-input insure-select insure-input-edit" :disabled="!cbNewAddr" v-model="district1">
            <option selected="selected">請選擇</option>
            <option v-for="(item, index) in GetDistrictData" :key="index" :value="item.Zip + '-' +item.Area">{{item.Area}}</option>
          </select>
          <input type="text" class="form-control insure-input-block" placeholder="為保障您的權益，此欄位不可為空白" v-model="road1" :disabled="!cbNewAddr" />
        </div>
        <div :class="{ checked: cbNewAddr }" class="checkbox" @click="OnCheck('cbNewAddr')"></div>
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
      tempAddr: ''
    }
  },
  created() {
    this.tempAddr = this.GetUpCashPostData.InsAddress
    this.FuncGetCityData()
    this.FuncGetDistrictData(CITYNAME)
  },
  computed: {
    ...mapGetters([
      'GetCityData',
      'GetDistrictData',
      GetterTypes.GetUpCashPostData
    ]),
    // 輸入新的客戶住所(通訊地址)-縣市
    city1: {
      get() {
        return this.GetUpCashPostData.city1
      },
      set(value) {
        this.GetUpCashPostData.city1 = value
        // 重新選取縣市, 要更新區域下拉框並清空區域原先的值
        this.FuncGetDistrictData(value)
        this.GetUpCashPostData.district1 = 0
      }
    },
    // 輸入新的客戶住所(通訊地址)-區域
    district1: {
      get() {
        if (this.GetUpCashPostData.district1 === 0) return 0
        return (`${this.GetUpCashPostData.zip1}-${this.GetUpCashPostData.district1}`) || 0
      },
      set(value) {
        // item.Zip|item.Area
        let data = value.split('-')
        this.GetUpCashPostData.zip1 = data[0]
        this.GetUpCashPostData.district1 = data[1]
      }
    },
    // 輸入新的客戶住所(通訊地址)-路
    road1: {
      get() {
        return this.GetUpCashPostData.road1
      },
      set(value) {
        this.GetUpCashPostData.road1 = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetCityData',
      'FuncGetDistrictData'
    ]),
    OnCheck(type) {
      switch (type) {
        case 'cbOldAddr':
          this.cbOldAddr = true
          this.cbNewAddr = false
          this.GetUpCashPostData.InsAddress = this.tempAddr
          break
        case 'cbNewAddr':
          this.cbOldAddr = false
          this.cbNewAddr = true
          this.GetUpCashPostData.InsAddress = ''
          break
      }
    }
  }
}

</script>
