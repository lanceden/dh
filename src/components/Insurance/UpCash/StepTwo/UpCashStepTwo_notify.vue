<template>
  <div>
    <loading v-show="GetLoading" />
    <StepTwoAnnuity></StepTwoAnnuity>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
            <div class="insure-check-title">保價金通知方式(請擇其一填選)</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group posr row" :class="{ 'form-group-checked': cbOldMail }" @click="OnCheck('cbOldMail')">
          <label for="" class="col-sm-12 col-form-label insure-label">電子信箱</label>
          <div class="col-sm-12">
            <div class="insure-input-block"></div>
            <div class="form-control insure-input insure-input-edit">{{email}}</div>
          </div>
          <div class="checkbox" :class="{ checked: cbOldMail }"></div>
        </div>

        <div class="form-group posr row" :class="{ 'form-group-checked': cbOldAddr }" @click="OnCheck('cbOldAddr')">
          <label for="" class="col-sm-12 col-form-label insure-label">寄送至客戶住所(通訊地址)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetUpCashPostData.InsAddress}}</div>
          </div>
          <div :class="{ checked: cbOldAddr }" class="checkbox"></div>
        </div>

        <div class="form-group posr row" :class="{ 'form-group-checked': cbNewMail }" @click="OnCheck('cbNewMail')">
          <label for="" class="col-sm-12 col-form-label insure-label">輸入新的電子信箱</label>
          <div class="col-sm-12">
            <input type="text" class="form-control insure-input-block" placeholder="請填寫" v-model="newMail" :disabled="!cbNewMail" v-show="cbNewMail">
          </div>
          <div :class="{ checked: cbNewMail }" class="checkbox"></div>
        </div>

        <div class="form-group posr row" :class="{ 'form-group-checked': cbNewAddr }" @click="OnCheck('cbNewAddr')">
          <label for="" class="col-sm-12 col-form-label insure-label">輸入新的寄送地址</label>
          <div class="col-sm-12">
            <template>
              <div v-show="cbNewAddr">
                <select class=" col-md-9 form-control data-input insure-select insure-input-edit" :disabled="!cbNewAddr" v-model="city3">
                  <option selected="selected" value="0">請選擇</option>
                  <option v-for="(item, index) in GetCityData" :key="index" :value="item.City">{{item.City}}</option>
                </select>
                <select class="form-control data-input insure-select insure-input-edit" :disabled="!cbNewAddr" v-model="district3">
                  <option selected="selected" value="0">請選擇</option>
                  <option v-for="(item, index) in GetDistrictData" :key="index" :value="item.Zip + '-' +item.Area">{{item.Area}}</option>
                </select>
                <input type="text" class="form-control insure-input-block" placeholder="為保障您的權益，此欄位不可為空白" v-model="road3" :disabled="!cbNewAddr" />
              </div>
            </template>
          </div>
          <div :class="{ checked: cbNewAddr }" class="checkbox"></div>
        </div>
      </form>
    </div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
            <div class="insure-check-title">主要給付項目</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line col-sm-12"></div>
      <div class="insure-text">
        年金
      </div>
    </div>
    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-4 footer-title footer-left" @click="GoPrev()">回前一頁</div>
          <div class="col-sm-8 footer-title footer-right" @click="GoNext()">確認送出</div>
        </nav>
      </div>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import StepTwoAnnuity from './UpCashStepTwo_annuity'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes'
import FunctionTypes from '../../../../store/modules/Upcash/Types/UpCashFunctionTypes.js'
import { valEstimateData } from '../../../../utils/validateEstimateData'
import { toggleModalShow } from '../../../../utils/toggleModal'

const CITYNAME = '基隆市'
export default {
  components: {
    StepTwoAnnuity
  },
  data() {
    return {
      cbOldMail: true,
      cbOldAddr: false,
      cbNewMail: false,
      cbNewAddr: false,
      tempMail: ''
    }
  },
  created() {
    this.cbOldMail = this.GetNotifyCheckBox[0]
    this.cbOldAddr = this.GetNotifyCheckBox[1]
    this.cbNewMail = this.GetNotifyCheckBox[2]
    this.cbNewAddr = this.GetNotifyCheckBox[3]
    this.GetUpCashPostData.value_ind = '4'
    this.tempMail = this.GetUpCashPostData.email
    this.FuncGetCityData()
    this.FuncGetDistrictData({
      cityName: CITYNAME
    })
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData,
      'GetLoading',
      'GetNotifyCheckBox',
      'GetCityData',
      'GetDistrictData'
    ]),
    // 電子郵件
    email: {
      get() {
        return this.GetUpCashPostData.email
      }
    },
    // 輸入新的電子郵件
    newMail: {
      get() {
        return this.GetUpCashPostData.road3
      },
      set(value) {
        this.GetUpCashPostData.road3 = value
      }
    },
    // 輸入新的寄送地址-縣市
    city3: {
      get() {
        return this.GetUpCashPostData.city3 || '0'
      },
      set(value) {
        this.GetUpCashPostData.city3 = value
        // 重新選取縣市, 要更新區域下拉框並清空區域原先的值
        this.FuncGetDistrictData({
          cityName: value
        })
        this.GetUpCashPostData.district3 = 0
      }
    },
    // 輸入新的寄送地址-區域
    district3: {
      get() {
        if (this.GetUpCashPostData.district3 === 0) return 0
        return (`${this.GetUpCashPostData.zip3}-${this.GetUpCashPostData.district3}`) || 0
      },
      set(value) {
        // item.Zip|item.Area
        let data = value.split('-')
        this.GetUpCashPostData.zip3 = data[0]
        this.GetUpCashPostData.district3 = data[1]
      }
    },
    // 輸入新的寄送地址-路
    road3: {
      get() {
        return this.GetUpCashPostData.road3
      },
      set(value) {
        this.GetUpCashPostData.road3 = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetCityData',
      'FuncGetDistrictData',
      FunctionTypes.FuncUpCashEstimate
    ]),
    GoPrev() {
      this.$router.push(`/upcash-2`)
    },
    GoNext() {
      // 寄送至客戶住所(通訊地址)
      if (this.$store.state.NOTIFYCHECKBOX[1]) {
        this.GetUpCashPostData.city3 = this.GetUpCashPostData.InsAddressCity || ''
        this.GetUpCashPostData.district3 = this.GetUpCashPostData.InsAddressDistrict || ''
        this.GetUpCashPostData.road3 = this.GetUpCashPostData.InsAddressRoad || ''
      }
      if (this.GetUpCashPostData.face_amt === '' || this.GetUpCashPostData.face_amt <= 0) {
        toggleModalShow('請填寫第一期保險費。')
        return
      }
      let errors = valEstimateData(this.GetUpCashPostData, this.GetNotifyCheckBox)
      if (errors !== '') {
        toggleModalShow(errors)
        return
      }
      this.FuncUpCashEstimate({ para: this.GetUpCashPostData, router: this.$router })
    },
    OnCheck(cbName) {
      switch (cbName) {
        case 'cbOldMail':
          this.cbOldMail = true
          this.cbOldAddr = false
          this.cbNewMail = false
          this.cbNewAddr = false
          this.$store.state.NOTIFYCHECKBOX = [true, false, false, false]
          this.GetUpCashPostData.value_ind = '4' // 電子郵件
          this.road3 = ''
          this.newMail = this.tempMail
          break
        case 'cbOldAddr':
          this.cbOldMail = false
          this.cbOldAddr = true
          this.cbNewMail = false
          this.cbNewAddr = false
          this.$store.state.NOTIFYCHECKBOX = [false, true, false, false]
          this.GetUpCashPostData.value_ind = '1' // 寄送到客戶住所(通訊地址)： 花蓮縣富里鄉水往上流1號
          this.road3 = ''
          break
        case 'cbNewMail':
          this.cbOldMail = false
          this.cbOldAddr = false
          this.cbNewMail = true
          this.cbNewAddr = false
          this.$store.state.NOTIFYCHECKBOX = [false, false, true, false]
          this.GetUpCashPostData.value_ind = '4' // 輸入新的電子郵件
          this.road3 = ''
          break
        case 'cbNewAddr':
          this.cbOldMail = false
          this.cbOldAddr = false
          this.cbNewMail = false
          this.cbNewAddr = true
          this.$store.state.NOTIFYCHECKBOX = [false, false, false, true]
          this.GetUpCashPostData.value_ind = '2' // 輸入新的寄送地址
          break
      }
    }
  }
}

</script>
