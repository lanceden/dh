<template>
  <div v-if="parseInt(stateData.PolicyData.InsuredInfo[index].Relation) !== 1">
    <div class="">
      <div class="bg-radius">
        <div class="top">
          <div class="top-title">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="../../../../../static/img/human-outline-with-heart.png" alt=""></div>
              <div class="insure-check-title">子女身故受益人資料</div>
            </div>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <div class="insure-text">
          依「保險業辦理電子商務應注意事項」第七點所規範，身故受益人以直系血親、配偶或法定繼承人為限。
        </div>
        <!-- ({{stateData.PolicyData.InsuredInfo[index].PersonalData.Name}}) -->
        <form class="form-bottom">
          <div class="form-group posr row" @click="OnProposerInfo()">
            <label for="" class="col-sm-12 col-form-label">同要保人資料</label>
            <div class="checkbox checkbox-oneline" :class="{ checked: isProposerInfo }"></div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">被保人姓名(子女{{index + 1}})</label>
            <div class="col-sm-12">
              <div class="form-control insure-input-block">{{stateData.PolicyData.InsuredInfo[index].PersonalData.Name}}</div>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">受益人關係</label>
            <div class="col-sm-12 insure-select-align">
              <select class="form-control data-input insure-select insure-input-edit" v-model="BeneficiaryDataRelationship">
                <option selected="selected" value="0">請選擇</option>
                <option value="3">父母</option>
                <option value="8">法定繼承人</option>
              </select>
            </div>
          </div>
          <!-- 受益人國籍 -->
          <div class="form-group row" v-show="BeneficiaryDataRelationship !== '8'">
            <label for="" class="col-sm-12 col-form-label insure-label">受益人國籍</label>
            <div class="col-sm-12 insure-select-align">
              <select class="form-control data-input insure-select insure-input-edit" v-model="BeneficiaryDataNationality">
                <option selected="selected" value="0">請選擇</option>
                <option v-for="(item, index) in GetNationData" :key="index" :value="item.Name">{{item.Name}}</option>
              </select>
            </div>
          </div>
          <div class="form-group row" v-show="BeneficiaryDataRelationship !== '8'">
            <label for="" class="col-sm-12 col-form-label insure-label">身故受益人姓名</label>
            <div class="col-sm-12 insure-select-align">
              <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="請填寫受益人姓名" v-model="BeneficiaryDataName">
            </div>
          </div>
          <div class="form-group row" v-show="BeneficiaryDataRelationship !== '8'">
            <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
            <div class="col-sm-12 insure-select-align">
              <input type="date" class="form-control insure-input insure-input-edit" v-model="DobComputed" :disabled="Relation === '本人'" />
            </div>
          </div>
          <div class="form-group row" v-show="BeneficiaryDataRelationship !== '8'">
            <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
            <div class="col-sm-12 insure-select-align">
              <input type="text" maxlength="10" class="form-control insure-input insure-input-edit" placeholder="請填寫身分證字號" v-model="IdNo">
            </div>
          </div>
          <div class="form-group row" v-show="BeneficiaryDataRelationship !== '8'">
            <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
            <div class="col-sm-12 insure-select-align">
              <input type="text" class="form-control insure-input insure-input-edit" placeholder="請填寫" v-model="ContactNumber">
            </div>
          </div>
          <div class="form-group row" v-show="BeneficiaryDataRelationship !== '8'">
            <label for="" class="col-sm-12 col-form-label insure-label">選擇城市</label>
            <div class="col-sm-12 insure-select-align">
              <select class="form-control data-input insure-select insure-input-edit" v-model="city3">
                <option selected="selected" value="0">請選擇</option>
                <option v-for="(item, index) in cityArr[index]" :key="index" :value="item.City">{{item.City}}</option>
              </select>
            </div>
          </div>
          <div class="form-group row" v-show="BeneficiaryDataRelationship !== '8'">
            <label for="" class="col-sm-12 col-form-label insure-label">選擇鄉鎮地區</label>
            <div class="col-sm-12 insure-select-align">
              <select class="form-control data-input insure-select insure-input-edit" v-model="district3">
                <option selected="selected" value="0">請選擇</option>
                <option v-for="(item, index) in districtArr[index]" :key="index" :value="item.Area">{{item.Area}}</option>
              </select>
            </div>
          </div>
          <div class="form-group row" v-show="BeneficiaryDataRelationship !== '8'">
            <label for="" class="col-sm-12 col-form-label insure-label">詳細地址</label>
            <div class="col-sm-12 insure-select-align">
              <input type="text" class="form-control data-input insure-input-edit" placeholder="請填寫" v-model="road3" />
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
import moment from 'moment'

export default {
  props: [
    'index',
    'stateData'
  ],
  data() {
    return {
      dbo: 0,
      isProposerInfo: false,
      isSetAccountData: false,
      cbOldAddr: true,
      cbNewAddr: false,
      cityArr: [],
      districtArr: []
    }
  },
  created() {
    this.FuncGetNationality('')
    this.$store.dispatch('FuncGetCityDataPromise').then(res => {
      for (let i = 0; i <= this.index; i++) {
        this.cityArr.push(res.data.Data.Result)
      }
    })
  },
  watch: {
    city3(newValue) {
      // 重新選取縣市, 要更新區域下拉框並清空區域原先的值
      this.$store.dispatch('FuncGetDistrictDataPromise', newValue).then(res => {
        for (let i = 0; i <= this.index; i++) {
          this.districtArr.push(res.data.Data.Result)
        }
      })
    }
  },
  computed: {
    ...mapGetters([
      'GetCityData',
      'GetDistrictData',
      'GetAccountData',
      'GetNationData'
    ]),
    // 關係
    Relation: {
      get() {
        switch (this.stateData.PolicyData.InsuredInfo[this.index].Relation) {
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
        return this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].Relationship || 0
      },
      set(value) {
        this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].Relationship = value
      }
    },
    // 身故受益人國籍
    BeneficiaryDataNationality: {
      get() {
        return this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].Nationality || 0
      },
      set(value) {
        this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].Nationality = value
      }
    },
    // 身故受益人姓名
    BeneficiaryDataName: {
      get() {
        return this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].Name
      },
      set(value) {
        this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].Name = value
      }
    },
    // 身故受益人身分證字號
    IdNo: {
      get() {
        return this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].IdNo
      },
      set(value) {
        this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].IdNo = value
      }
    },
    // 聯絡電話
    ContactNumber: {
      get() {
        return this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].ContactNumber
      },
      set(value) {
        this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].ContactNumber = value
      }
    },
    // 身故受益人生日
    DobComputed: {
      get() {
        if (this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].Dob === '') {
          return
        }
        let result = moment(this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].Dob, 'YYYY-MM-DD').format('YYYY-MM-DD')
        this.dob = result
        return this.dob
      },
      set(value) {
        this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].Dob = value
        this.dob = value
      }
    },
    // 身故受益人地址-縣市
    city3: {
      get() {
        return this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].Address.City || 0
      },
      set(value) {
        this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].Address.City = value
        this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].Address.District = 0
      }
    },
    // 身故受益人地址-區域
    district3: {
      get() {
        if (this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].Address.District === 0) return 0
        return (`${this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].Address.District}`) || 0
      },
      set(value) {
        // item.Zip|item.Area
        this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].Address.District = value
      }
    },
    // 身故受益人地址-路
    road3: {
      get() {
        return this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].Address.Street
      },
      set(value) {
        this.stateData.PolicyData.InsuredInfo[this.index].BeneficiaryData[0].Address.Street = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetNationality',
      'FuncGetCityDataPromise',
      'FuncGetDistrictDataPromise',
      'FuncGetBeneficiary'
    ]),
    // 同要保人資料
    OnProposerInfo() {
      this.isProposerInfo = !this.isProposerInfo
      if (this.isProposerInfo) {
        this.BeneficiaryDataRelationship = '3'
        this.BeneficiaryDataName = this.stateData.PolicyData.ProposerInfo[0].Name
        this.IdNo = this.stateData.PolicyData.ProposerInfo[0].ID
        this.ContactNumber = this.stateData.PolicyData.ProposerInfo[0].Phone
        this.DobComputed = moment(this.stateData.PolicyData.ProposerInfo[0].Dob, 'YYYY-MM-DD').format('YYYY-MM-DD')
        this.city3 = this.stateData.PolicyData.ProposerInfo[0].PermAddr.City
        setTimeout(() => {
          this.district3 = this.stateData.PolicyData.ProposerInfo[0].PermAddr.District
          this.road3 = this.stateData.PolicyData.ProposerInfo[0].PermAddr.Street
        }, 200)
        this.GetNationData.forEach(item => {
          if (item.Code === this.stateData.PolicyData.ProposerInfo[0].Nationality) {
            this.BeneficiaryDataNationality = item.Name
          }
        })
      }
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
