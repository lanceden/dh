<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../static/img/human-outline-with-heart.png" alt=""></div>
          <div class="insure-check-title">身故受益人(二)資料</div>
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
          <select class="form-control data-input insure-select insure-input-edit" v-model="relation_ben_death2">
            <option selected="selected" value="0">請選擇</option>
            <option value="2">配偶</option>
            <option value="3">父母子女</option>
            <option value="6">祖孫</option>
            <option value="8">法定繼承人</option>
          </select>
        </div>
      </div>
      <div class="form-group row" v-show="relation_ben_death2 !== '8'">
        <label for="" class="col-sm-12 col-form-label insure-label">受益人國籍</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-edit" v-model="BenfNationality2">
            <option selected="selected" value="0">請選擇</option>
            <option v-for="(item, index) in GetNationData" :key="index" :value="item.Name">{{item.Name}}</option>
          </select>
        </div>
      </div>
      <div class="form-group row" v-show="relation_ben_death2 !== '8'">
        <label for="" class="col-sm-12 col-form-label insure-label">姓名</label>
        <div class="col-sm-12 insure-select-align">
          <input type="text" class="form-control insure-input insure-input-edit" placeholder="請填寫" v-model="benf_name2" />
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block" v-model="relation_ben_death_seq2">
            <option selected="selected" value="0">請選擇</option>
            <option value="1">順位1</option>
            <option value="2" v-show="parseInt(stateData.benf_num) > 1">順位2</option>
            <option value="3" v-show="parseInt(stateData.benf_num) > 2">順位3</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">給付方式之比例</label>
        <div class="col-sm-12 insure-select-align">
          <input type="number" class="form-control insure-input-block" v-model="relation_ben_death_seq_percent2">
        </div>
      </div>
      <div class="form-group row" v-show="relation_ben_death2 !== '8'">
        <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
        <div class="col-sm-12 insure-select-align">
          <input type="date" class="form-control insure-input insure-input-edit" v-model="benf_dob2" />
        </div>
      </div>
      <div class="form-group row" v-show="relation_ben_death2 !== '8'">
        <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
        <div class="col-sm-12">
          <input type="text" maxlength="10" class="form-control insure-input insure-input-edit" placeholder="請填寫" v-model="benf_id2" />
        </div>
      </div>
      <div class="form-group posr row form-group-checked" @click="SetAccountData()" v-show="relation_ben_death2 !== '8'">
        <label for="" class="col-sm-10 col-form-label insure-label">同客戶手機號碼：{{this.GetAccountData.CustMobile}}<br>同客戶住所地址：{{this.GetAccountData.CommunicationAddress.City}}{{this.GetAccountData.CommunicationAddress.District}}{{this.GetAccountData.CommunicationAddress.Road}}</label>
        <div class="checkbox" :class="{ checked: isSetAccountData }"></div>
      </div>
      <div class="form-group row" v-show="relation_ben_death2 !== '8'">
        <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
        <div class="col-sm-12 insure-select-align">
          <input type="text" class="form-control insure-input insure-input-edit" v-model="benf_phone2" />
        </div>
      </div>
      <div class="form-group row" v-show="relation_ben_death2 !== '8'">
        <label for="" class="col-sm-12 col-form-label insure-label">選擇城市</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-edit" v-model="BenfAdd_City2">
            <option selected="selected" value="0">請選擇</option>
            <option v-for="(item, index) in benfTwoCityData" :key="index" :value="item.City">{{item.City}}</option>
          </select>
        </div>
      </div>
      <div class="form-group row" v-show="relation_ben_death2 !== '8'">
        <label for="" class="col-sm-12 col-form-label insure-label">選擇鄉鎮地區</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-edit" v-model="BenfAdd_County2">
            <option selected="selected" value="0">請選擇</option>
            <option v-for="(item, index) in benfTwoDistrictData" :key="index" :value="item.Zip + '-' + item.Area">{{item.Area}}</option>
          </select>
        </div>
      </div>
      <div class="form-group row" v-show="relation_ben_death2 !== '8'">
        <label for="" class="col-sm-12 col-form-label insure-label">詳細地址</label>
        <div class="col-sm-12 insure-select-align">
          <input type="text" class="form-control data-input insure-input-edit" v-model="BenfAddRemain2" />
        </div>
      </div>
    </form>
    <div class="border-bottom-line col-sm-12"></div>
    <form class="form-bottom">
      <div class="col-sm-12">
        <div class="insure-tips-text">
          如要保人不同意填寫受益人聯絡地址及電話，則以要保人最後所留之聯絡方式，作為日後通知依據。
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: [
    'stateData',
    'index'
  ],
  data() {
    return {
      benfTwoCityData: [],
      benfTwoDistrictData: [],
      isSetAccountData: false
    }
  },
  created() {
    this.$store.dispatch('FuncGetCityDataPromise').then(res => {
      this.benfTwoCityData = res.data.Data.Result
    })
  },
  watch: {
    BenfAdd_City2(newValue) {
      // 重新選取縣市, 要更新區域下拉框並清空區域原先的值
      this.$store.dispatch('FuncGetDistrictDataPromise', newValue).then(res => {
        this.benfTwoDistrictData = res.data.Data.Result
      })
    }
  },
  methods: {
    ...mapActions([
      'FuncGetCityData',
      'FuncGetDistrictData'
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
      this.benf_phone2 = this.GetAccountData.CustMobile
      this.BenfAdd_City2 = this.GetAccountData.CommunicationAddress.City
      this.BenfAdd_County2 = this.GetAccountData.CommunicationAddress.Zip + '-' + this.GetAccountData.CommunicationAddress.District
      this.BenfAddRemain2 = this.GetAccountData.CommunicationAddress.Road
    }
  },
  computed: {
    ...mapGetters([
      'GetNationData',
      'GetCityData',
      'GetDistrictData',
      'GetAccountData'
    ]),
    /**
     * 受益人生日
     */
    benf_dob2: {
      get() {
        return this.stateData.benf_dob2
      },
      set(value) {
        this.stateData.benf_dob2 = value
      }
    },
    /**
     * 受益人電話
     */
    benf_phone2: {
      get() {
        return this.stateData.benf_phone2
      },
      set(value) {
        this.stateData.benf_phone2 = value
      }
    },
    /**
     * 受益人身份證
     */
    benf_id2: {
      get() {
        return this.stateData.benf_id2
      },
      set(value) {
        this.stateData.benf_id2 = value
      }
    },
    /**
     * 受益人姓名
     */
    benf_name2: {
      get() {
        return this.stateData.benf_name2
      },
      set(value) {
        this.stateData.benf_name2 = value
      }
    },
    /**
     * 給付方式
     */
    relation_ben_death_seq2: {
      get() {
        return this.stateData.relation_ben_death_seq2 || 0
      },
      set(value) {
        this.stateData.relation_ben_death_seq2 = value
      }
    },
    /**
     * 受益人關係
     */
    relation_ben_death2: {
      get() {
        return this.stateData.relation_ben_death2 || 0
      },
      set(value) {
        if (value === '8') {
          this.stateData.benf_name2 = '法定繼承人'
          if (parseInt(this.stateData.benf_num) === 1) {
            this.stateData.relation_ben_death_seq2 = 1
            this.stateData.relation_ben_death_seq_percent2 = '100'
          }
        }
        this.stateData.relation_ben_death2 = value
      }
    },
    /**
     * 給付方式之比例
     */
    relation_ben_death_seq_percent2: {
      get() {
        return this.stateData.relation_ben_death_seq_percent2
      },
      set(value) {
        this.stateData.relation_ben_death_seq_percent2 = value
      }
    },
    /**
     * 受益人國籍
     */
    BenfNationality2: {
      get() {
        return (this.stateData.BenfNationality2 === undefined || this.stateData.BenfNationality2 === null) ? 0 : this.stateData.BenfNationality2
      },
      set(value) {
        this.stateData.BenfNationality2 = value
        this.GetNationData.forEach(item => {
          if(item.Name === value) {
            this.stateData.BenfNationalityCode2 = item.Code
          }
        })
      }
    },
    /**
     * 受益人城市
     */
    BenfAdd_City2: {
      get() {
        return this.stateData.BenfAdd_City2 || 0
      },
      set(value) {
        this.FuncGetDistrictData({
          cityName: value
        })
        this.stateData.BenfAdd_City2 = value
      }
    },
    /**
     * 選擇鄉鎮地區
     */
    BenfAdd_County2: {
      get() {
        return (this.stateData.BenfAdd_County2 === undefined ||
          this.stateData.BenfAdd_County2 === null || this.stateData.BenfAdd_County2 === '') ? 0 : this.stateData.BenfAddZip2 + '-' + this.stateData.BenfAdd_County2
      },
      set(value) {
        // item.Zip-item.Area
        let data = value.split('-')
        this.stateData.BenfAddZip2 = data[0]
        this.stateData.BenfAdd_County2 = data[1]
      }
    },
    /**
     * 詳細地址
     */
    BenfAddRemain2: {
      get() {
        return this.stateData.BenfAddRemain2
      },
      set(value) {
        this.stateData.BenfAddRemain2 = value
      }
    },
    BenfAddress: {
      get() {
        return this.stateData.BenfAddress2
      },
      set() {
        this.stateData.BenfAddress2 = `${this.BenfAdd_County2.split('-')[0]}${this.BenfAdd_County2.split('-')[1]}${this.BenfAddRemain2}`
      }
    }
  }
}

</script>
