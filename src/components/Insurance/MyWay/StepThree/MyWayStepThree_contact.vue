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
          <input type="text" class="form-control insure-input" v-model="phone_mobile">
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

      <!-- 戶籍地址 -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">戶籍地址</label>
        <div class="col-sm-12">
          <input type="text" class="form-control insure-input" id="txtOldAddress2" :value="GetMyWayPostData.address2" disabled="disabled">
        <div :class="{checkbox: true, checked: true}" id="divOldAddress2" @click="OnRegisterAddr('old')"></div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">輸入新的戶籍地址</label>
        <div class="col-sm-12">
          <template>
            <div v-show="cbNewAddr2">
              <select class="form-control data-input insure-select insure-input-edit" :disabled="!cbNewAddr2" v-model="city2">
                <option selected="selected" value="0">請選擇</option>
                <option v-for="(item, index) in GetCityData" :key="index" :value="item.City">{{item.City}}</option>
              </select>
              <select class="form-control data-input insure-select insure-input-edit" :disabled="!cbNewAddr2" v-model="district2">
                <option selected="selected" value="0">請選擇</option>
                <option v-for="(item, index) in GetDistrictData" :key="index" :value="item.Zip + '-' +item.Area">{{item.Area}}</option>
              </select>
              <input type="text" class="form-control insure-input-block" id="txtNewAddress2" placeholder="為保障您的權益，此欄位不可為空白" v-model="road2" />
            </div>
          </template>
        <div :class="{checkbox: true, checked: false}" id="divNewAddress2" @click="OnRegisterAddr('new')"></div>
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
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
import { InitColumnData } from '../../../../utils/initColumnData.js'

const CITYNAME = '基隆市'
export default {
  data() {
    return {
      cbNewAddr2: false,
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
    this.tempZip2 = this.GetMyWayPostData.zip2
    this.tempCity2 = this.GetMyWayPostData.city2
    this.tempDistrict2 = this.GetMyWayPostData.district2
    this.tempRoad2 = this.GetMyWayPostData.road2
  },
  computed: {
    ...mapGetters([
      'GetCityData',
      'GetDistrictData',
      GetterTypes.GetMyWayPostData
    ]),
    // 手機
    phone_mobile: {
      get() {
        return this.GetMyWayPostData.phone_mobile || ''
      },
      set(value) {
        this.this.GetMyWayPostData.phone_mobile = value
      }
    },
    // 電話區碼
    phone_area: {
      get() {
        return this.GetMyWayPostData.phone_area || ''
      },
      set(value) {
        this.GetMyWayPostData.phone_area = value
      }
    },
    // 電話
    phone_main: {
      get() {
        return this.GetMyWayPostData.phone_main || ''
      },
      set(value) {
        this.GetMyWayPostData.phone_main = value
      }
    },
    // 輸入新的戶籍地址-縣市
    city2: {
      get() {
        return this.GetMyWayPostData.city2 || '0'
      },
      set(value) {
        this.GetMyWayPostData.city2 = value
        // 重新選取縣市, 要更新區域下拉框並清空區域原先的值
        this.FuncGetDistrictData(value)
        this.GetMyWayPostData.district2 = 0
      }
    },
    // 輸入新的戶籍地址-區域
    district2: {
      get() {
        let result = InitColumnData(this.GetMyWayPostData.district2, '0')
        if (result === '0') return '0'
        return (`${this.GetMyWayPostData.zip2}-${this.GetMyWayPostData.district2}`) || 0
      },
      set(value) {
        // item.Zip|item.Area
        let data = value.split('-')
        this.GetMyWayPostData.zip2 = data[0]
        this.GetMyWayPostData.district2 = data[1]
      }
    },
    // 輸入新的戶籍地址-路
    road2: {
      get() {
        return this.GetMyWayPostData.road2
      },
      set(value) {
        this.GetMyWayPostData.road2 = value
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
    OnRegisterAddr(target) {
      switch (target) {
        case 'old':
          $('#divOldAddress2').removeClass('checked').addClass('checked')
          $('#divNewAddress2').removeClass('checked')
          $('#txtNewAddress2').attr('disabled', true)
          $('#txtNewAddress2').val('')
          this.cbNewAddr2 = false
          this.GetMyWayPostData.zip2 = this.tempZip2
          this.GetMyWayPostData.city2 = this.tempCity2
          this.GetMyWayPostData.district2 = this.tempDistrict2
          this.GetMyWayPostData.road2 = this.tempRoad2
          break
        case 'new':
          $('#divOldAddress2').removeClass('checked')
          $('#divNewAddress2').removeClass('checked').addClass('checked')
          $('#txtOldAddress2').attr('disabled', true)
          $('#txtNewAddress2').removeAttr('disabled')
          this.cbNewAddr2 = true
          break
      }
    }
  }
}

</script>
