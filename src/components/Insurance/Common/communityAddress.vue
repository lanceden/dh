<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../static/img/insurance.png" alt=""></div>
          <div class="insure-check-title">通訊地址</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line col-sm-12"></div>
    <div class="top col-sm-12">
      <div class="insure-notice-box" @click="OnCommunityAddress('old')">
        <div class="insure-check"><img :src="ensure.old" /></div>
        <div class="insure-check-content">{{stateData.address1}}</div>
      </div>
    </div>

    <!-- 輸入新的戶籍地址 -->
    <div class="border-bottom-line col-sm-12"></div>
    <div class="top col-sm-12">
      <div class="insure-notice-box" @click="OnCommunityAddress('new')">
        <div class="insure-check"><img :src="ensure.new" /></div>
        <div class="insure-check-content">輸入新的寄送地址</div>
      </div>
    </div>
    <div v-show="cbNewAddr2">
      <!-- 選擇城市 -->
      <div class="border-bottom-line col-sm-12"></div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">選擇城市</label>
        <div class="col-sm-12 insure-select-align">
          <select id="" class="form-control data-input insure-select insure-input-block-edit" :disabled="!cbNewAddr2" v-model="city1">
            <option selected="selected" value="0">請選擇</option>
            <option v-for="(item, index) in GetCityData" :key="index" :value="item.City">{{item.City}}</option>
          </select>
        </div>
      </div>
      <!-- 選擇鄉鎮地區 -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">選擇鄉鎮地區</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" :disabled="!cbNewAddr2" v-model="district1">
            <option selected="selected" value="0">請選擇</option>
            <option v-for="(item, index) in GetDistrictDataCommunity" :key="index" :value="item.Zip + '-' +item.Area">{{item.Area}}</option>
          </select>
        </div>
      </div>
      <!-- 詳細地址 -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">詳細地址</label>
        <div class="col-sm-12">
          <input type="text" class="orm-control insure-input insure-input-edit" id="txtNewAddress2" placeholder="為保障您的權益，此欄位不可為空白" v-model="road1" />
        </div>
      </div>
    </div>
    <div class="border-bottom-line col-sm-12"></div>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'
import { InitColumnData } from '../../../utils/initColumnData'

export default {
  props: [
    'stateData'
  ],
  data() {
    return {
      ensure: {
        old: `../../../static/img/oval.png`,
        new: '../../../static/img/oval.png'
      },
      cbOldAddr2: true,
      cbNewAddr2: false,
      tempzip1: '',
      tempcity1: '',
      tempdistrict1: '',
      temproad2: ''
    }
  },
  created() {
    this.tempzip1 = this.stateData.zip1
    this.tempcity1 = this.stateData.city1
    this.tempdistrict1 = this.stateData.zip1 + '-' + this.stateData.district1
    this.temproad2 = this.stateData.road1
    this.FuncGetCityData()
    this.OnCommunityAddress(this.stateData.IsSaveCommu ? 'new' : 'old')
  },
  watch: {
    city1(newValue) {
      this.FuncGetDistrictData({
        cityName: newValue,
        target: 'community'
      })
    }
  },
  computed: {
    ...mapGetters([
      'GetCityData',
      'GetDistrictDataCommunity'
    ]),
    // 輸入新的戶籍地址-縣市
    city1: {
      get() {
        return this.stateData.city1 || '0'
      },
      set(value) {
        this.stateData.city1 = value
      }
    },
    // 輸入新的戶籍地址-區域
    district1: {
      get() {
        let result = InitColumnData(this.stateData.district1, '0')
        if (result === '0') return '0'
        return (`${this.stateData.zip1}-${this.stateData.district1}`) || 0
      },
      set(value) {
        // item.Zip-item.Area
        let data = value.split('-')
        this.stateData.zip1 = data[0]
        this.stateData.district1 = data[1]
      }
    },
    // 輸入新的戶籍地址-路
    road1: {
      get() {
        return this.stateData.road1
      },
      set(value) {
        this.stateData.road1 = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetCityData',
      'FuncGetDistrictData'
    ]),
    /**
     * 戶籍地址
     */
    OnCommunityAddress(target) {
      switch (target) {
        case 'old':
          $('#divOldAddress2').addClass('checked')
          $('#divNewAddress2').removeClass('checked')
          $('#txtNewAddress2').attr('disabled', true)
          $('#txtNewAddress2').val('')
          this.ensure.old = '../../../static/img/oval-ed.png'
          this.ensure.new = '../../../static/img/oval.png'
          this.cbNewAddr2 = false
          this.stateData.IsSaveCommu = false
          this.city1 = this.tempcity1
          this.district1 = this.tempdistrict1
          this.road1 = this.temproad2
          break
        case 'new':
          $('#divOldAddress2').removeClass('checked')
          $('#divNewAddress2').addClass('checked')
          $('#txtOldAddress2').attr('disabled', true)
          $('#txtNewAddress2').removeAttr('disabled')
          this.ensure.old = '../../../static/img/oval.png'
          this.ensure.new = '../../../static/img/oval-ed.png'
          this.cbNewAddr2 = true
          this.stateData.IsSaveCommu = true
          break
      }
    }
  }
}

</script>
