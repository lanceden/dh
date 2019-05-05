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
              <div class="insure-check"><img src="../../../../static/img/insurance.png" alt=""></div>
              <div class="insure-check-title">表單寄送方式</div>
            </div>
          </div>
        </div>

        <div class="border-bottom-line"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box" @click="OnEnsure('elec')">
            <div class="insure-check"><img src="../../../../static/img/oval-ed.png" alt=""></div>
            <div class="insure-check-content">電子保單</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box" @click="OnEnsure('paper')">
            <div class="insure-check"><img src="../../../../static/img/oval.png" alt=""></div>
            <div class="insure-check-content">紙本保單</div>
          </div>
        </div>
        <form class="form-bottom" v-show="isPaper">
          <div class="form-group row">
            <!-- 客戶住所(通訊地址) -->
            <label for="" class="col-sm-12 col-form-label insure-label">客戶住所(通訊地址)</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input" id="txtOldAddress1" :value="GetTravelPostData.PolicyData.ProposerInfo[0].Address" disabled="disabled">
            </div>
            <div :class="{checkbox: true, checked: true}" id="divOldAddress1" @click="OnCommunityAddr('old')"></div>
          </div>
          <!-- 輸入新的通訊地址 -->
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">輸入新的通訊地址</label>
            <div class="col-sm-12">
              <template>
                <div v-show="cbNewAddr1">
                  <select class="form-control data-input insure-select insure-input-edit" v-model="MailingAddrCity">
                    <option selected="selected" value="0">請選擇</option>
                    <option v-for="(item, index) in GetCityData" :key="index" :value="item.City">{{item.City}}</option>
                  </select>
                  <select class="form-control data-input insure-select insure-input-edit" v-model="MailingAddrDistrict">
                    <option selected="selected" value="0">請選擇</option>
                    <option v-for="(item, index) in GetDistrictData" :key="index" :value="item.Zip + '-' +item.Area">{{item.Area}}</option>
                  </select>
                  <input type="text" class="form-control insure-input-block" id="txtNewAddress1" placeholder="為保障您的權益，此欄位不可為空白" v-model="MailingAddrStreet" />
                </div>
              </template>
            </div>
            <div :class="{checkbox: true, checked: false}" id="divNewAddress1" @click="OnCommunityAddr('new')"></div>
          </div>
        </form>
      </div>
      <div class="bg-radius">
        <div class="top">
          <div class="top-title">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="../../../../static/img/insurance.png" alt=""></div>
              <div class="insure-check-title">保單寄送資料</div>
            </div>
          </div>
        </div>

        <div class="border-bottom-line"></div>

        <form class="form-bottom">
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">要保人電子郵件
            </label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input-block" id="" placeholder="" value="richard@winwinmedia.com.tw">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">要保人手機
            </label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input-block" id="" placeholder="" value="0920277248">
            </div>
          </div>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="col-sm-12">
            <ul class="insure-tips-text">
              <li class="decimal">變更資料請至：客戶服務中心>客戶資料管理>客戶驗證狀態。</li>
              <li class="decimal">電子保單投保成功後，將以電子郵件及簡訊方式通知下載。保戶可至本公司會員專區或是網路投保網頁的「客戶服務中心」中 的「保單管理」進行下載。</li>

            </ul>
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
import $ from 'jquery'
import { mapGetters } from 'vuex'
import TravelGetterTypes from '../../../store/modules/Travel/Types/TravelGetterTypes.js'

const CITYNAME = '基隆市'
export default {
  data() {
    return {
      ensure: {
        elec: '../../../../../static/img/oval.png',
        paper: '../../../../../static/img/oval.png',
        tempZip1: '',
        tempCity1: '',
        tempDistrict1: '',
        tempRoad1: ''
      },
      isPaper: false
    }
  },
  computed: {
    ...mapGetters([
      TravelGetterTypes.GetTravelPostData
    ]),
    // 紙本保單-輸入新的客戶住所(通訊地址)-縣市
    MailingAddrCity: {
      get() {
        return this.GetTravelPostData.PolicyData.MailingAddr.City
      },
      set(value) {
        this.GetTravelPostData.PolicyData.MailingAddr.City = value
      }
    },
    // 紙本保單-輸入新的客戶住所(通訊地址)-區域
    MailingAddrDistrict: {
      get() {
        return this.GetTravelPostData.PolicyData.MailingAddr.District
      },
      set(value) {
        this.GetTravelPostData.PolicyData.MailingAddr.District = value
      }
    },
    // 紙本保單-輸入新的客戶住所(通訊地址)-路
    MailingAddrStreet: {
      get() {
        return this.GetTravelPostData.PolicyData.MailingAddr.Street
      },
      set(value) {
        this.GetTravelPostData.PolicyData.MailingAddr.Street = value
      }
    }
  },
  mounted() {
    this.tempZip1 = this.GetTravelPostData.zip1
    this.tempCity1 = this.GetTravelPostData.city1
    this.tempDistrict1 = this.GetTravelPostData.district1
    this.tempRoad1 = this.GetTravelPostData.road1
  },
  methods: {
    /**
     * 設置請確認保障對象
     * @param {string} target 本人:own 子女:child 本人與子女:both
     */
    OnEnsure(target) {
      switch (target) {
        case 'elec': // 電子保單:2
          this.ensure.own = '../../../../../static/img/oval-ed.png'
          this.ensure.child = '../../../../../static/img/oval.png'
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.MailType = '2'
          this.isPaper = false
          break
        case 'paper': // 紙本保單:1
          this.ensure.own = '../../../../../static/img/oval.png'
          this.ensure.child = '../../../../../static/img/oval-ed.png'
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.MailType = '1'
          this.isPaper = true
          break
      }
    },
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
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.MailType = '1'
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.MailingType = '0'
          break
        case 'new':
          $('#divOldAddress1').removeClass('checked')
          $('#divNewAddress1').removeClass('checked').addClass('checked')
          $('#txtOldAddress1').attr('disabled', true)
          $('#txtNewAddress1').removeAttr('disabled')
          this.cbNewAddr1 = true
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.MailType = '1'
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.MailingType = '1'
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.MailingAddr = {
            City: '',
            District: '',
            Street: ''
          }
          break
      }
    },
    GoToPrev() {
      this.$router.push('/travel-7')
    },
    GoToNext() {
      this.$router.push('/travel-9')
    }
  }
}

</script>
