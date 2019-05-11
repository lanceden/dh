<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../static/img/human-outline-with-heart2.png" alt=""></div>
          <div class="insure-check-title">身故受益人(一)資料</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <div class="insure-text">
      依「保險業辦理電子商務應注意事項」第七點所規範，要、被保險人以同一人為限，年滿二十歲，身故受益人以直系血親、配偶或法定繼承人為限。
    </div>
    <form class="form-bottom">
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">受益人關係</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-edit" v-model="relation_ben_death">
            <option selected="selected" value="0">請選擇</option>
            <option value="2">配偶</option>
            <option value="3">父母子女</option>
            <option value="6">祖孫</option>
            <option value="8">法定繼承人</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">受益人國籍</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-edit" v-model="BenfNationality" v-bind:disabled="BenfinheritOneDisable">
            <option selected="selected" value="0">請選擇</option>
            <option v-for="(item, index) in GetNationData" :key="index" :value="item.Name">{{item.Name}}</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">姓名</label>
        <div class="col-sm-12 insure-select-align">
          <input type="text" class="form-control insure-input insure-input-edit" placeholder="請填寫" v-model="benf_name" v-bind:disabled="BenfinheritOneDisable">
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-edit" v-model="relation_ben_death_seq" v-bind:disabled="BenfinheritOneDisable">
            <option selected="selected" value="0">請選擇</option>
            <option value="1" v-show="parseInt(stateData.benf_num) === 1">順位1</option>
            <option value="2" v-show="parseInt(stateData.benf_num) >= 2">順位2</option>
            <option value="3" v-show="parseInt(stateData.benf_num) > 2">順位3</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">給付方式之比例</label>
        <div class="col-sm-12 insure-select-align">
          <input type="number" class="form-control insure-input insure-input-edit" v-model="relation_ben_death_seq_percent" v-bind:disabled="BenfinheritOneDisable">
        </div>
      </div>
      <div class="col-sm-12">
        <div class="insure-notice-text">
          <div class="insure-notice-text">身故受益人可選擇以下給付比例％方式</div>
          <ul class="insure-notice-text-ol">
            <li>​選擇不同順位給付比例％，皆為100％。</li>
            <li>選擇相同順位給付比例％，加總為100％。</li>
          </ul>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
        <div class="col-sm-12 insure-select-align">
          <input type="date" class="form-control insure-input insure-input-edit" v-bind:disabled="BenfinheritOneDisable" v-model="benf_dob" />
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
        <div class="col-sm-12 insure-select-align">
          <input type="text" maxlength="10" class="form-control insure-input insure-input-edit" v-bind:disabled="BenfinheritOneDisable" v-model="benf_id" />
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
          <input type="text" class="form-control insure-input insure-input-edit" v-model="benf_phone" v-bind:disabled="BenfinheritOneDisable" />
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">選擇城市</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-edit" v-if="BenfinheritOneDisable">
          </select>
          <select v-else class="form-control data-input insure-select insure-input-edit" v-model="BenfAdd_City" v-bind:disabled="BenfinheritOneDisable">
            <option selected="selected" value="0">請選擇</option>
            <option v-for="(item, index) in GetCityData" :key="index" :value="item.City">{{item.City}}</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">選擇鄉鎮地區</label>
        <div class="col-sm-12 insure-select-align">
          <select id="" class="form-control data-input insure-select insure-input-edit" v-if="BenfinheritOneDisable">
          </select>
          <select class="form-control data-input insure-select insure-input-edit" v-else v-model="BenfAdd_County" v-bind:disabled="BenfinheritOneDisable">
            <option selected="selected" value="0">請選擇</option>
            <option v-for="(item, index) in GetDistrictData" :key="index" :value="item.Zip + item.Area">{{item.Area}}</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">詳細地址</label>
        <div class="col-sm-12 insure-select-align">
          <input type="text" class="form-control data-input insure-input-edit" v-bind:disabled="BenfinheritOneDisable" v-model="BenfAddRemain" />
        </div>
      </div>
      <div class="col-sm-12">
        <div class="insure-notice-text">
          如要保人不同意填寫受益人聯絡地址及電話，則以要保人最後所留之聯絡方式，作為日後通知依據。
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const CITYNAME = '基隆市'
export default {
  props: [
    'stateData'
  ],
  data() {
    return {
      isSetAccountData: false
    }
  },
  created() {
    this.FuncGetCityData()
    this.FuncGetDistrictData(CITYNAME)
  },
  methods: {
    ...mapActions([
      'FuncGetCityData',
      'FuncGetDistrictData',
      'SetBenfinheritOneDisable'
    ]),
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
      this.benf_phone = this.GetAccountData.CustMobile
      this.BenfAdd_City = this.GetAccountData.CommunicationAddress.City
      this.BenfAdd_County = this.GetAccountData.CommunicationAddress.District
      this.BenfAddRemain = this.GetAccountData.CommunicationAddress.Road
    }
  },
  computed: {
    ...mapGetters([
      'GetNationData',
      'GetCityData',
      'GetDistrictData',
      'GetAccountData',
      'BenfinheritOneDisable'
    ]),
    /**
     * 受益人生日
     */
    benf_dob: {
      get() {
        return this.stateData.benf_dob
      },
      set(value) {
        this.stateData.benf_dob = value
      }
    },
    /**
     * 受益人電話
     */
    benf_phone: {
      get() {
        return this.stateData.benf_phone
      },
      set(value) {
        this.stateData.benf_phone = value
      }
    },
    /**
     * 受益人身份證
     */
    benf_id: {
      get() {
        return this.stateData.benf_id
      },
      set(value) {
        this.stateData.benf_id = value
      }
    },
    /**
     * 受益人姓名
     */
    benf_name: {
      get() {
        return this.stateData.benf_name
      },
      set(value) {
        this.stateData.benf_name = value
      }
    },
    /**
     * 給付方式
     */
    relation_ben_death_seq: {
      get() {
        return this.stateData.relation_ben_death_seq || 0
      },
      set(value) {
        this.stateData.relation_ben_death_seq = value
      }
    },
    /**
     * 受益人關係
     */
    relation_ben_death: {
      get() {
        if (this.stateData.relation_ben_death === undefined || this.stateData.relation_ben_death === null || this.stateData.relation_ben_death === '') {
          return 0
        }
        return this.stateData.relation_ben_death
      },
      set(value) {
        if (value === '8') {
          this.SetBenfinheritOneDisable(true)
          this.stateData.benf_name = '法定繼承人'
          if (parseInt(this.stateData.benf_num) === 1) {
            this.stateData.relation_ben_death_seq = 1
            this.stateData.relation_ben_death_seq_percent = '100'
          }
        } else {
          this.SetBenfinheritOneDisable(false)
        }
        this.stateData.relation_ben_death = value
      }
    },
    /**
     * 給付方式之比例
     */
    relation_ben_death_seq_percent: {
      get() {
        return this.stateData.relation_ben_death_seq_percent
      },
      set(value) {
        this.stateData.relation_ben_death_seq_percent = value
      }
    },
    /**
     * 受益人國籍
     */
    BenfNationality: {
      get() {
        return (this.stateData.BenfNationality === undefined || this.stateData.BenfNationality === null) ? 0 : this.stateData.BenfNationality
      },
      set(value) {
        this.stateData.BenfNationality = value
      }
    },
    /**
     * 受益人城市
     */
    BenfAdd_City: {
      get() {
        return this.stateData.BenfAdd_City || 0
      },
      set(value) {
        this.FuncGetDistrictData(value)
        this.stateData.BenfAdd_City = value
      }
    },
    /**
     * 選擇鄉鎮地區
     */
    BenfAdd_County: {
      get() {
        return (this.stateData.BenfAdd_County === undefined ||
          this.stateData.BenfAdd_County === null || this.stateData.BenfAdd_County === '') ? 0 : this.stateData.BenfAdd_County
      },
      set(value) {
        this.stateData.BenfAddZip = value.substring(0, 3)
        this.stateData.BenfAdd_County = value
      }
    },
    /**
     * 詳細地址
     */
    BenfAddRemain: {
      get() {
        return this.stateData.BenfAddRemain
      },
      set(value) {
        this.stateData.BenfAddRemain = value
      }
    }
  }
}

</script>
