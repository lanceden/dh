<template>
  <div>
    <div class="container">
      <div class="product-name">企業客戶專區</div>
      <div class="progress-bar">
        <img src="../../../../static/img/progress-bar-06-3.png">
      </div>
      <div class="bg-radius">
        <div class="top">

          <div class="top-title">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="../../../../static/img/mail.png" alt=""></div>
              <div class="insure-check-title">緊急聯絡人資料</div>
            </div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="insure-text">
          依「保險業辦理電子商務應注意事項」第七點所規範，身故受益人以直系血親、配偶或法定繼承人為限。
        </div>

        <form class="form-bottom">
          <div class="form-group posr row">
            <label for="" class="col-sm-12 col-form-label">使用客戶基本資料</label>
            <div class="checkbox-oneline"></div>
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

          <div class="form-group row">
            <template>
              <div>
                <label for="" class="col-sm-12 col-form-label insure-label">聯絡地址</label>
                <select class="form-control data-input insure-select insure-input-edit" v-model="EmergencyContactAddrCity">
                  <option selected="selected" value="0">請選擇</option>
                  <option v-for="(item, index) in GetCityData" :key="index" :value="item.City">{{item.City}}</option>
                </select>
                <select class="form-control data-input insure-select insure-input-edit" v-model="EmergencyContactAddrDistrict">
                  <option selected="selected" value="0">請選擇</option>
                  <option v-for="(item, index) in GetDistrictData" :key="index" :value="item.Area">{{item.Area}}</option>
                </select>
                <input type="text" class="form-control insure-input-block" placeholder="為保障您的權益，此欄位不可為空白" v-model="EmergencyContactAddrStreet" />
              </div>
            </template>
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
import TravelGetterTypes from '../../../store/modules/Travel/Types/TravelGetterTypes.js'

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
    if (this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EmergencyContactAddr === null) {
      this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EmergencyContactAddr = {
        City: '',
        District: '',
        Street: ''
      }
    } else {
      // 暫存舊的通訊地址
      this.tempCity2 = this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EmergencyContactAddr.City
      this.tempDistrict2 = this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EmergencyContactAddr.District
      this.tempRoad2 = this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EmergencyContactAddr.Street
    }
  },
  computed: {
    ...mapGetters([
      'GetCityData',
      'GetDistrictData',
      TravelGetterTypes.GetTravelPostData
    ]),
    // 緊急聯絡人姓名
    EmergencyContactName: {
      get() {
        return this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EmergencyContactName
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EmergencyContactName = value
      }
    },
    // 緊急聯絡人電話
    EmergencyContactTel: {
      get() {
        return this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EmergencyContactTel
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EmergencyContactTel = value
      }
    },
    // 緊急聯絡人地址-縣市
    EmergencyContactAddrCity: {
      get() {
        return this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EmergencyContactAddr.City || 0
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EmergencyContactAddr.City = value
        // 重新選取縣市, 要更新區域下拉框並清空區域原先的值
        this.FuncGetDistrictData(value)
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EmergencyContactAddr.District = 0
      }
    },
    // 緊急聯絡人地址-區域
    EmergencyContactAddrDistrict: {
      get() {
        if (this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EmergencyContactAddr.District === 0) return 0
        return (`${this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EmergencyContactAddr.District}`) || 0
      },
      set(value) {
        // item.Zip|item.Area
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EmergencyContactAddr.District = value
      }
    },
    // 緊急聯絡人地址-路
    EmergencyContactAddrStreet: {
      get() {
        return this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EmergencyContactAddr.Street
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.EmergencyContactAddr.Street = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetCityData',
      'FuncGetDistrictData'
    ]),
    GoToPrev() {
      if (this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.leght > 0) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.forEach(item => {
          if (parseInt(item.Relation) !== 1) {
            this.$router.push('/travel-6')
            return
          }
        })
      } else {
        this.$router.push('/travel-5')
      }
    },
    GoToNext() {
      this.$router.push('/travel-8')
    }
  }
}

</script>
