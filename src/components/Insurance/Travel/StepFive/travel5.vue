<template>
  <div v-if="parseInt(this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[this.index].Relation) === 1">
    <div class="container">
      <div class="bg-radius">
        <div class="top">
          <div class="top-title">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="../../../../../static/img/mail.png" alt=""></div>
              <div class="insure-check-title">身故受益人資料</div>
            </div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="insure-text">
          依「保險業辦理電子商務應注意事項」第七點所規範，身故受益人以直系血親、配偶或法定繼承人為限。
        </div>

        <form class="form-bottom">
          <div class="form-group posr row">
            <label for="" class="col-sm-12 col-form-label">點此匯入最近一張保單的受益人</label>
            <div class="checkbox checked checkbox-oneline"></div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">受益人關係</label>
            <div class="col-sm-12 insure-select-align">
              <select class="form-control insure-input-block" v-model="BeneficiaryDataRelationship">
                <option selected="selected" value="0">請選擇</option>
                <option value="2">配偶</option>
                <option value="3">父母子女</option>
                <option value="6">祖孫</option>
                <option value="8">法定繼承人</option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">身故受益人姓名</label>
            <div class="col-sm-12 insure-select-align">
              <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="請填寫受益人姓名" v-model="BeneficiaryDataName" :disabled="parseInt(BeneficiaryDataRelationship) === 8">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
            <div class="col-sm-4 insure-select-align">
              <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="DobYear" :disabled="parseInt(BeneficiaryDataRelationship) === 8">
                <option v-if="Relation === '本人'" :value="DobYear">{{DobYear}}</option>
                <option v-else v-for="n in 100" :key="n" :value="new Date().getFullYear() + 1 - n">{{new Date().getFullYear() + 1 - n}}</option>
              </select>年
            </div>
            <div class="col-sm-4 insure-select-align">
              <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="DobMonth" :disabled="parseInt(BeneficiaryDataRelationship) === 8">
                <option v-if="Relation === '本人'" :value="DobMonth">{{DobMonth}}</option>
                <option v-else v-for="n in 12" :key="n" :value="n">{{n}}</option>
              </select>月
            </div>
            <div class="col-sm-4 insure-select-align">
              <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="DobDay" :disabled="parseInt(BeneficiaryDataRelationship) === 8">
                <option v-if="Relation === '本人'" :value="DobDay">{{DobDay}}</option>
                <option v-else v-for="n in 31" :key="n" :value="n">{{n}}</option>
              </select>日
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
            <div class="col-sm-12 insure-select-align">
              <input type="text" maxlength="10" class="form-control insure-input insure-input-edit" :disabled="parseInt(BeneficiaryDataRelationship) === 8" placeholder="請填寫身分證字號" v-model="IdNo">
            </div>
          </div>
          <div class="form-group posr row" @click="SetAccountData()">
            <div class="checkbox checkbox-oneline" :class="{ checked: isSetAccountData }"></div>
            <label for="" class="col-sm-10 col-form-label insure-label">同客戶手機號碼:{{this.GetAccountData.CustMobile}}</label>
            <label for="" class="col-sm-10 col-form-label">同客戶住所地址:{{this.GetAccountData.CommunicationAddress.City}}{{this.GetAccountData.CommunicationAddress.District}}{{this.GetAccountData.CommunicationAddress.Road}}</label>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
            <div class="col-sm-12 insure-select-align">
              <input type="text" class="form-control insure-input insure-input-edit" :disabled="parseInt(BeneficiaryDataRelationship) === 8" placeholder="請填寫聯絡電話" v-model="ContactNumber">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">選擇城市</label>
            <div class="col-sm-12 insure-select-align">
              <select class="form-control data-input insure-select insure-input-edit" v-model="city3" :disabled="parseInt(BeneficiaryDataRelationship) === 8">
                <option selected="selected" value="0">請選擇</option>
                <option v-for="(item, index) in GetCityData" :key="index" :value="item.City">{{item.City}}</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">選擇鄉鎮地區</label>
            <div class="col-sm-12 insure-select-align">
              <select class="form-control data-input insure-select insure-input-edit" v-model="district3" :disabled="parseInt(BeneficiaryDataRelationship) === 8">
                <option selected="selected" value="0">請選擇</option>
                <option v-for="(item, index) in GetDistrictData" :key="index" :value="item.Area" :disabled="parseInt(BeneficiaryDataRelationship) === 8">{{item.Area}}</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">詳細地址</label>
            <div class="col-sm-12 insure-select-align">
              <input type="text" class="form-control insure-input-block" placeholder="為保障您的權益，此欄位不可為空白" v-model="road3" />
            </div>
          </div>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="col-sm-12">
            <div class="insure-tips-text">如要保人不同意填寫受益人聯絡地址及電話，則以要保人最後所留之聯絡方式，作為日後通知依據。</div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TravelGetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes.js'
import moment from 'moment'

const CITYNAME = '基隆市'
export default {
  props: [
    'index'
  ],
  data() {
    return {
      isOnBenf: false,
      isSetAccountData: false,
      cbOldAddr: true,
      cbNewAddr: false,
      tempZip2: '',
      tempCity2: '',
      tempDistrict2: '',
      tempRoad2: ''
    }
  },
  created() {
    // this.FuncGetCityData()
    // this.FuncGetDistrictData(CITYNAME)
  },
  mounted() {
    // 暫存舊的通訊地址
    this.tempCity2 = this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Address.City
    this.tempDistrict2 = this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Address.District
    this.tempRoad2 = this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Address.Street
  },
  computed: {
    ...mapGetters([
      'GetCityData',
      'GetDistrictData',
      'GetAccountData',
      TravelGetterTypes.GetTravelPostData
    ]),
    // 關係
    Relation: {
      get() {
        switch (this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[this.index].Relation) {
          case 1:
            return '本人'
          case 3:
            return '子女'
        }
      }
    },
    // 身故受益人關係
    BeneficiaryDataRelationship: {
      get() {
        return this.GetTravelPostData.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Relationship || 0
      },
      set(value) {
        this.GetTravelPostData.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Relationship = value
      }
    },
    // 身故受益人姓名
    BeneficiaryDataName: {
      get() {
        return this.GetTravelPostData.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Name
      },
      set(value) {
        this.GetTravelPostData.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Name = value
      }
    },
    // 身故受益人身分證字號
    IdNo: {
      get() {
        return this.GetTravelPostData.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].IdNo
      },
      set(value) {
        this.GetTravelPostData.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].IdNo = value
      }
    },
    // 聯絡電話
    ContactNumber: {
      get() {
        return this.GetTravelPostData.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].ContactNumber
      },
      set(value) {
        this.GetTravelPostData.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].ContactNumber = value
      }
    },
    // 身故受益人生日-年
    DobYear: {
      get() {
        if (this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Dob === '') {
          return 2019
        }
        let result = moment(this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Dob, 'YYYY-MM-DD').format('YYYY-MM-DD').split('-')[0]
        return parseInt(result)
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Dob = `${value}-${this.DobMonth}-${this.DobDay}`
      }
    },
    // 身故受益人生日-月
    DobMonth: {
      get() {
        if (this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Dob === '') {
          return 1
        }
        let result = moment(this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Dob, 'YYYY-MM-DD').format('YYYY-MM-DD').split('-')[1]
        return parseInt(result)
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Dob = `${this.DobYear}-${value}-${this.DobDay}`
      }
    },
    // 身故受益人生日-日
    DobDay: {
      get() {
        if (this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Dob === '') {
          return 1
        }
        let result = moment(this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Dob, 'YYYY-MM-DD').format('YYYY-MM-DD').split('-')[2]
        return parseInt(result)
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Dob = `${this.DobYear}-${this.DobMonth}-${value}`
      }
    },
    // 身故受益人地址-縣市
    city3: {
      get() {
        return this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Address.City || 0
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Address.City = value
        // 重新選取縣市, 要更新區域下拉框並清空區域原先的值
        this.FuncGetDistrictData(value)
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Address.District = 0
      }
    },
    // 身故受益人地址-區域
    district3: {
      get() {
        if (this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Address.District === 0) return 0
        return (`${this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Address.District}`) || 0
      },
      set(value) {
        // item.Zip|item.Area
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Address.District = value
      }
    },
    // 身故受益人地址-路
    road3: {
      get() {
        return this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Address.Street
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[0].BeneficiaryData[this.index].Address.Street = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetCityData',
      'FuncGetDistrictData',
      'FuncGetAccountData',
      'FuncGetBeneficiary'
    ]),
    // 取回上一張保單受益人
    OnBenf() {
      this.isOnBenf = !this.isOnBenf
      if (this.isOnBenf) this.FuncGetBeneficiary()
    },
    // 同客戶資料
    SetAccountData() {
      this.isSetAccountData = !this.isSetAccountData
      if (!this.isSetAccountData) {
        this.ContactNumber = ''
        this.city3 = ''
        this.district3 = ''
        this.road3 = ''
        return
      }
      this.ContactNumber = this.GetAccountData.CustMobile
      this.city3 = this.GetAccountData.CommunicationAddress.City
      this.district3 = this.GetAccountData.CommunicationAddress.District
      this.road3 = this.GetAccountData.CommunicationAddress.Road
    }
  }
}

</script>
