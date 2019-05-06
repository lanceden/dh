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
        <!-- 客戶住所(通訊地址) -->
        <label for="" class="col-sm-12 col-form-label insure-label">客戶住所(通訊地址)</label>
        <div class="col-sm-12">
          <input type="text" class="form-control insure-input" id="txtOldAddress1" :value="GetAccidentPostData.address1" disabled="disabled">
        <div :class="{checkbox: true, checked: true}" id="divOldAddress1" @click="OnCommunityAddr('old')"></div>
        </div>
      </div>
      <!-- 輸入新的通訊地址 -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">輸入新的通訊地址</label>
        <div class="col-sm-12">
          <template>
            <div v-show="cbNewAddr1">
              <select class="form-control data-input insure-select insure-input-edit" :disabled="!cbNewAddr1" v-model="city1">
                <option selected="selected" value="0">請選擇</option>
                <option v-for="(item, index) in GetCityData" :key="index" :value="item.City">{{item.City}}</option>
              </select>
              <select class="form-control data-input insure-select insure-input-edit" :disabled="!cbNewAddr1" v-model="district1">
                <option selected="selected" value="0">請選擇</option>
                <option v-for="(item, index) in GetDistrictData" :key="index" :value="item.Zip + '-' +item.Area">{{item.Area}}</option>
              </select>
              <input type="text" class="form-control insure-input-block" id="txtNewAddress1" placeholder="為保障您的權益，此欄位不可為空白" v-model="road1" />
            </div>
          </template>
          <div :class="{checkbox: true, checked: false}" id="divNewAddress1" @click="OnCommunityAddr('new')"></div>
        </div>
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
import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'
import GetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes.js'
import { InitColumnData } from '../../../../utils/initColumnData.js'

const CITYNAME = '基隆市'
export default {
  data() {
    return {
      cbOldAddr1: true,
      cbNewAddr1: false,
      cbOldAddr: true,
      cbNewAddr: false,
      tempZip1: '',
      tempCity1: '',
      tempDistrict1: '',
      tempRoad1: ''
    }
  },
  created() {
    this.FuncGetCityData()
    this.FuncGetDistrictData(CITYNAME)
  },
  mounted() {
    this.tempZip1 = this.GetAccidentPostData.zip1
    this.tempCity1 = this.GetAccidentPostData.city1
    this.tempDistrict1 = this.GetAccidentPostData.district1
    this.tempRoad1 = this.GetAccidentPostData.road1
  },
  computed: {
    ...mapGetters([
      'GetCityData',
      'GetDistrictData',
      GetterTypes.GetAccidentPostData
    ]),
    // 輸入新的通訊地址-縣市
    city1: {
      get() {
        return this.GetAccidentPostData.city1 || '0'
      },
      set(value) {
        this.GetAccidentPostData.city1 = value
        // 重新選取縣市, 要更新區域下拉框並清空區域原先的值
        this.FuncGetDistrictData(value)
        this.GetAccidentPostData.district1 = 0
      }
    },
    // 輸入新的通訊地址-區域
    district1: {
      get() {
        let result = InitColumnData(this.GetAccidentPostData.district1, '0')
        if (result === '0') return '0'
        return (`${this.GetAccidentPostData.zip1}-${this.GetAccidentPostData.district1}`) || 0
      },
      set(value) {
        // item.Zip|item.Area
        let data = value.split('-')
        this.GetAccidentPostData.zip1 = data[0]
        this.GetAccidentPostData.district1 = data[1]
      }
    },
    // 輸入新的通訊地址-路
    road1: {
      get() {
        return this.GetAccidentPostData.road1
      },
      set(value) {
        this.GetAccidentPostData.road1 = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetCityData',
      'FuncGetDistrictData'
    ]),
    /**
     * 通訊地址
     */
    OnCommunityAddr(target) {
      switch (target) {
        case 'old':
          $('#divOldAddress1').removeClass('checked').addClass('checked')
          $('#divNewAddress1').removeClass('checked')
          $('#txtNewAddress1').attr('disabled', true)
          $('#txtNewAddress1').val('')
          this.cbNewAddr1 = false
          this.GetAccidentPostData.zip1 = this.tempZip1
          this.GetAccidentPostData.city1 = this.tempCity1
          this.GetAccidentPostData.district1 = this.tempDistrict1
          this.GetAccidentPostData.road1 = this.tempRoad1
          break
        case 'new':
          $('#divOldAddress1').removeClass('checked')
          $('#divNewAddress1').removeClass('checked').addClass('checked')
          $('#txtOldAddress1').attr('disabled', true)
          $('#txtNewAddress1').removeAttr('disabled')
          this.cbNewAddr1 = true
          break
      }
    }
  }
}

</script>
