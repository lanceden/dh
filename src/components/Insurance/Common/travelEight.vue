<template>
  <div>
    <loading v-show="GetLoading" />
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../static/img/list.png" alt=""></div>
            <div class="insure-check-title">保單寄送方式</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="top col-sm-12">
        <div class="insure-notice-box" @click="OnEnsure('elec')">
          <div class="insure-check"><img :src="ensure.elec"></div>
          <div class="insure-check-content">電子保單</div>
        </div>
      </div>
      <div class="border-bottom-line col-sm-12"></div>
      <div class="top col-sm-12">
        <div class="insure-notice-box" @click="OnEnsure('paper')">
          <div class="insure-check"><img :src="ensure.paper"></div>
          <div class="insure-check-content">紙本保單</div>
        </div>
      </div>
    </div>

    <!-- 客戶住所(通訊地址) -->
    <div class="bg-radius" v-show="parseInt(stateData.PolicyData.MailType) === 1">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../static/img/email.png"></div>
            <div class="insure-check-title">保單寄送資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="top col-sm-12">
        <div class="insure-notice-box" @click="OnCommunityAddr('old')">
          <div class="insure-check"><img :src="ensure.paperOld"></div>
          <div class="insure-check-content">{{stateData.PolicyData.ProposerInfo[0].MailingAddr.Address}}</div>
        </div>
      </div>
      <div class="border-bottom-line col-sm-12"></div>
      <div class="top col-sm-12">
        <div class="insure-notice-box" @click="OnCommunityAddr('new')">
          <div class="insure-check"><img :src="ensure.paperNew"></div>
          <div class="insure-check-content">輸入新的寄送地址</div>
        </div>
      </div>
      <div class="border-bottom-line col-sm-12"></div>
      <!-- 輸入新的通訊地址 -->
      <form class="form-bottom" v-show="cbNewAddr1">
        <!-- 輸入新的通訊地址 -->
        <div>
          <!-- 選擇城市 -->
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">選擇城市</label>
            <div class="col-sm-12 insure-select-align">
              <select class="form-control data-input insure-select insure-input-block-edit" v-model="MailingAddrCity">
                <option selected="selected" value="0">請選擇</option>
                <option v-for="(item, index) in cityData" :key="index" :value="item.City">{{item.City}}</option>
              </select>
            </div>
          </div>
          <!-- 選擇鄉鎮地區 -->
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">選擇鄉鎮地區</label>
            <div class="col-sm-12 insure-select-align">
              <select class="form-control data-input insure-select insure-input-block-edit" v-model="MailingAddrDistrict">
                <option selected="selected" value="0">請選擇</option>
                <option v-for="(item, index) in districtData" :key="index" :value="item.Zip + '-' +item.Area">{{item.Area}}</option>
              </select>
            </div>
          </div>
          <!-- 詳細地址 -->
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">詳細地址</label>
            <div class="col-sm-12 insure-select-align">
              <input type="text" class="form-control insure-input insure-input-edit" id="txtNewAddress1" placeholder="請填寫" v-model="MailingAddrStreet" />
            </div>
          </div>
        </div>
      </form>
    </div>

    <!-- 保單寄送資料 -->
    <div class="bg-radius" v-show="parseInt(this.stateData.PolicyData.MailType) === 2">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../static/img/email.png" alt=""></div>
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
            <div class="form-control insure-input-block">{{this.stateData.PolicyData.ProposerInfo[0].Email}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">要保人手機
          </label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">{{this.stateData.PolicyData.ProposerInfo[0].Phone}}</div>
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
</template>

<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'

export default {
  props: [
    'stateData'
  ],
  data() {
    return {
      cityData: [],
      districtData: [],
      cbNewAddr1: false,
      ensure: {
        elec: '../../../../../static/img/oval.png',
        paper: '../../../../../static/img/oval.png',
        paperOld: '../../../../../static/img/oval-ed.png',
        paperNew: '../../../../../static/img/oval.png'
      },
      isPaper: false
    }
  },
  created() {
    // 取回縣市
    this.$store.dispatch('FuncGetCityDataPromise').then(res => {
      this.cityData = res.data.Data.Result
    })
    let result = this.stateData.PolicyData.MailType
    // 第一次進來無資料所以不執行
    if (result !== null) {
      this.OnEnsure(result === '2' ? 'elec' : 'paper')
    } else {
      this.OnEnsure('elec')
    }
    if (this.stateData.PolicyData.MailingAddr === null) {
      this.stateData.PolicyData.MailingAddr = {
        City: '',
        District: '',
        Street: ''
      }
    }
  },
  watch: {
    MailingAddrCity(newValue) {
      // 重新選取縣市, 要更新區域下拉框並清空區域原先的值
      this.$store.dispatch('FuncGetDistrictDataPromise', newValue).then(res => {
        this.districtData = res.data.Data.Result
        this.MailingAddrDistrict = '0'
      })
    }
  },
  computed: {
    ...mapGetters([
      'GetLoading'
    ]),
    // 紙本保單-輸入新的客戶住所(通訊地址)-縣市
    MailingAddrCity: {
      get() {
        if (this.stateData.PolicyData.MailingAddr === null || this.stateData.PolicyData.MailingAddr === '') {
          return '0'
        }
        return this.stateData.PolicyData.MailingAddr.City || 0
      },
      set(value) {
        this.stateData.PolicyData.MailingAddr.City = value
      }
    },
    // 紙本保單-輸入新的客戶住所(通訊地址)-區域
    MailingAddrDistrict: {
      get() {
        if (this.stateData.PolicyData.MailingAddr === null || this.stateData.PolicyData.MailingAddr === '') {
          return '0'
        }
        return this.stateData.PolicyData.MailingAddr.District || '0'
      },
      set(value) {
        this.stateData.PolicyData.MailingAddr.District = value
      }
    },
    // 紙本保單-輸入新的客戶住所(通訊地址)-路
    MailingAddrStreet: {
      get() {
        if (this.stateData.PolicyData.MailingAddr === null || this.stateData.PolicyData.MailingAddr === '') {
          return ''
        }
        return this.stateData.PolicyData.MailingAddr.Street || ''
      },
      set(value) {
        this.stateData.PolicyData.MailingAddr.Street = value
      }
    }
  },
  methods: {
    /**
     * 設置請確認保障對象
     * @param {string} target 本人:own 子女:child 本人與子女:both
     */
    OnEnsure(target) {
      switch (target) {
        case 'elec': // 電子保單:2
          this.ensure.elec = '../../../../../static/img/oval-ed.png'
          this.ensure.paper = '../../../../../static/img/oval.png'
          this.stateData.PolicyData.MailType = '2'
          this.isPaper = false
          break
        case 'paper': // 紙本保單:1
          this.ensure.elec = '../../../../../static/img/oval.png'
          this.ensure.paper = '../../../../../static/img/oval-ed.png'
          this.stateData.PolicyData.MailType = '1'
          this.isPaper = true
          this.OnCommunityAddr('old')
          break
      }
    },
    /**
     * 通訊地址
     */
    OnCommunityAddr(target) {
      switch (target) {
        case 'old':
          $('#txtNewAddress1').attr('disabled', true)
          $('#txtNewAddress1').val('')
          this.cbNewAddr1 = false
          this.ensure.paperOld = './../../../../static/img/oval-ed.png'
          this.ensure.paperNew = './../../../../static/img/oval.png'
          this.stateData.PolicyData.MailType = '1'
          this.stateData.PolicyData.MailingType = '0'
          this.stateData.PolicyData.MailingAddr = {
            City: this.stateData.PolicyData.ProposerInfo[0].MailingAddr.Zip,
            District: this.stateData.PolicyData.ProposerInfo[0].MailingAddr.District,
            Street: this.stateData.PolicyData.ProposerInfo[0].MailingAddr.Street
          }
          break
        case 'new':
          $('#txtOldAddress1').attr('disabled', true)
          $('#txtNewAddress1').removeAttr('disabled')
          this.cbNewAddr1 = true
          this.ensure.paperOld = './../../../../static/img/oval.png'
          this.ensure.paperNew = './../../../../static/img/oval-ed.png'
          this.stateData.PolicyData.MailType = '1'
          this.stateData.PolicyData.MailingType = '1'
          this.stateData.PolicyData.MailingAddr = {
            City: '',
            District: '',
            Street: ''
          }
          break
      }
    },
    GoToPrev() {
      let planName = this.$store.state.PLANNAME.toLowerCase()
      this.$router.push(`/${planName}-7`)
    },
    GoToNext() {
      let planName = this.$store.state.PLANNAME.toLowerCase()
      this.$router.push(`/agreement?instypename=${planName}`)
    }
  }
}

</script>
