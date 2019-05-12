<template>
  <div>
    <loading v-show="GetLoading" />
    <div>
      <div class="bg-radius">
        <div class="top">
          <div class="top-title">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="../../../../static/img/mail.png" alt=""></div>
              <div class="insure-check-title">緊急聯絡人資料</div>
            </div>
          </div>
        </div>
        <form class="form-bottom">
          <div class="form-group posr row" @click="SetAccountData()">
            <label for="" class="col-sm-12 col-form-label">使用客戶基本資料</label>
            <div class="checkbox checkbox-oneline" :class="{ checked: isSetAccountData }"></div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">聯絡人姓名</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="請填寫聯絡人姓名" v-model="EmergencyContactName">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="請填寫聯絡電話" v-model="EmergencyContactTel">
            </div>
          </div>
          <!-- 選擇城市 -->
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">選擇城市</label>
            <div class="col-sm-12 insure-select-align">
              <select class="form-control data-input insure-select insure-input-edit" v-model="EmergencyContactAddrCity">
                <option selected="selected" value="0">請選擇</option>
                <option v-for="(item, index) in GetCityData" :key="index" :value="item.City">{{item.City}}</option>
              </select>
            </div>
          </div>

          <!-- 選擇城市 -->
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">選擇鄉鎮地區</label>
            <div class="col-sm-12 insure-select-align">
              <select class="form-control data-input insure-select insure-input-edit" v-model="EmergencyContactAddrDistrict">
                <option selected="selected" value="0">請選擇</option>
                <option v-for="(item, index) in GetDistrictData" :key="index" :value="item.Area">{{item.Area}}</option>
              </select>
            </div>
          </div>
          <!-- 詳細地址 -->
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">詳細地址</label>
            <div class="col-sm-12 insure-select-align">
              <input type="text" class="form-control insure-input insure-input-edit" placeholder="為保障您的權益，此欄位不可為空白" v-model="EmergencyContactAddrStreet" />
            </div>
          </div>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="col-sm-12">
            <div class="insure-tips-text">如要保人不同意填寫受益人聯絡地址及電話，則以要保人最後所留之聯絡方式，作為日後通知依據。</div>
          </div>
        </form>
      </div>

      <div class="footer">
        <div class="footer-content">
          <nav class="navbar navbar-dark row">
            <div class="col-sm-4 footer-title footer-left" @click="GoToPrev()">回前一頁</div>
            <div class="col-sm-8 footer-title footer-right" @click="GoToNext()">確認送出</div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EntTravelGetterTypes from '../../../store/modules/EntTravel/Types/EntTravelGetterTypes.js'
import { toggleModalShow } from '../../../utils/toggleModal'

const CITYNAME = '基隆市'
export default {
  data() {
    return {
      isSetAccountData: false,
      cbOldAddr: true,
      cbNewAddr: false,
      tempZip2: '',
      tempCity2: '',
      tempDistrict2: '',
      tempRoad2: '',
      errorMsg: ''
    }
  },
  created() {
    this.FuncGetCityData()
    this.FuncGetDistrictData(CITYNAME)
    if (this.GetEntTravelPostData.EmergencyContactAddr === null) {
      this.GetEntTravelPostData.EmergencyContactAddr = {
        City: '',
        District: '',
        Street: ''
      }
    } else {
      // 暫存舊的通訊地址
      this.tempCity2 = this.GetEntTravelPostData.EmergencyContactAddr.City
      this.tempDistrict2 = this.GetEntTravelPostData.EmergencyContactAddr.District
      this.tempRoad2 = this.GetEntTravelPostData.EmergencyContactAddr.Street
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      'GetCityData',
      'GetDistrictData',
      'GetAccountData',
      EntTravelGetterTypes.GetEntTravelPostData
    ]),
    // 緊急聯絡人姓名
    EmergencyContactName: {
      get() {
        return this.GetEntTravelPostData.EmergencyContactName
      },
      set(value) {
        this.GetEntTravelPostData.EmergencyContactName = value
      }
    },
    // 緊急聯絡人電話
    EmergencyContactTel: {
      get() {
        return this.GetEntTravelPostData.EmergencyContactTel
      },
      set(value) {
        this.GetEntTravelPostData.EmergencyContactTel = value
      }
    },
    // 緊急聯絡人地址-縣市
    EmergencyContactAddrCity: {
      get() {
        return this.GetEntTravelPostData.EmergencyContactAddr.City || 0
      },
      set(value) {
        this.GetEntTravelPostData.EmergencyContactAddr.City = value
        // 重新選取縣市, 要更新區域下拉框並清空區域原先的值
        this.FuncGetDistrictData(value)
        this.GetEntTravelPostData.EmergencyContactAddr.District = 0
      }
    },
    // 緊急聯絡人地址-區域
    EmergencyContactAddrDistrict: {
      get() {
        if (this.GetEntTravelPostData.EmergencyContactAddr.District === 0) return 0
        return (`${this.GetEntTravelPostData.EmergencyContactAddr.District}`) || 0
      },
      set(value) {
        // item.Zip|item.Area
        this.GetEntTravelPostData.EmergencyContactAddr.District = value
      }
    },
    // 緊急聯絡人地址-路
    EmergencyContactAddrStreet: {
      get() {
        return this.GetEntTravelPostData.EmergencyContactAddr.Street
      },
      set(value) {
        this.GetEntTravelPostData.EmergencyContactAddr.Street = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetCityData',
      'FuncGetDistrictData'
    ]),
    GoToPrev() {
      this.$router.go(-1)
    },
    GoToNext() {
      this.errorMsg = ''
      if (this.EmergencyContactName === null) {
        this.errorMsg += '請填寫緊急聯絡人「姓名」。<br/>'
      }
      if (this.EmergencyContactTel === null || this.EmergencyContactTel === '') {
        this.errorMsg += '請填寫緊急聯絡人「電話」。<br/>'
      }
      if (this.EmergencyContactAddrCity === '0') {
        this.errorMsg += '請填寫緊急聯絡人聯絡地址「縣市」。<br/>'
      }
      if (this.EmergencyContactAddrDistrict === null) {
        this.errorMsg += '請填寫緊急聯絡人聯絡地址「縣市」。<br/>'
      }
      if (this.EmergencyContactAddrStreet === null) {
        this.errorMsg += '請填寫緊急聯絡人聯絡地址「縣市」。<br/>'
      }
      if (this.errorMsg !== '') {
        toggleModalShow(this.errorMsg)
        return
      }
      this.$router.push('/travel-8')
    },
    // 使用客戶基本資料
    SetAccountData() {
      this.isSetAccountData = !this.isSetAccountData
      if (!this.isSetAccountData) {
        this.EmergencyContactName = ''
        this.EmergencyContactTel = ''
        this.EmergencyContactAddrCity = ''
        this.EmergencyContactAddrDistrict = ''
        this.EmergencyContactAddrStreet = ''
        return
      }
      this.EmergencyContactName = this.GetAccountData.EmergencyName
      this.EmergencyContactTel = `${this.GetAccountData.EmergencyTel1Area}${this.GetAccountData.EmergencyTel1}`
      this.EmergencyContactAddrCity = this.GetAccountData.EmergencyAddress.City
      this.EmergencyContactAddrDistrict = this.GetAccountData.EmergencyAddress.District
      this.EmergencyContactAddrStreet = this.GetAccountData.EmergencyAddress.Road
    }
  }
}

</script>
