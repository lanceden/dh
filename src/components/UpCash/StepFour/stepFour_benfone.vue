<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../static/img/chat.png" alt=""></div>
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
            <select id="" class="form-control data-input insure-select insure-input-edit" v-model="relation_ben_death">
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
            <select id="" class="form-control data-input insure-select insure-input-edit" v-model="BenfNationality" v-bind:disabled="BenfinheritDisable">
              <option selected="selected" value="0">請選擇</option>
              <option v-for="item in GetNationData" :value="item.Code">{{item.Name}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">姓名</label>
          <div class="col-sm-12 insure-select-align">
            <input type="text" class="form-control insure-input insure-input-edit" v-model="benf_name" v-bind:disabled="BenfinheritDisable">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="col-sm-12 insure-select-align">
            <input type="text" class="form-control insure-input insure-input-edit" value="順位1" v-if="parseInt(benf_num) === 1" v-bind:disabled="BenfinheritDisable" />
            <select v-if="parseInt(benf_num) >= 2" class="form-control data-input insure-select insure-input-edit">
              <option selected="selected">請選擇</option>
              <option value="1" v-show="parseInt(benf_num) >= 2">順位1</option>
              <option value="2" v-show="parseInt(benf_num) >= 2">順位2</option>
              <option value="3" v-show="parseInt(benf_num) > 2">順位3</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式之比例</label>
          <div class="col-sm-12 insure-select-align">
            <input type="text" class="form-control insure-input insure-input-edit" v-model="relation_ben_death_seq_percent">
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
            <input type="text" class="form-control insure-input insure-input-edit" v-bind:disabled="BenfinheritDisable">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
          <div class="col-sm-12 insure-select-align">
            <input type="text" class="form-control insure-input insure-input-edit" v-bind:disabled="BenfinheritDisable">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12 insure-select-align">
            <input type="text" class="form-control insure-input insure-input-edit" v-bind:disabled="BenfinheritDisable">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">選擇城市</label>
          <div class="col-sm-12 insure-select-align">
            <select class="form-control data-input insure-select insure-input-edit" v-if="BenfinheritDisable">
            </select>
            <select v-else class="form-control data-input insure-select insure-input-edit" 
            v-model="BenfAdd_City"
            v-bind:disabled="BenfinheritDisable">
              <option selected="selected">請選擇</option>
              <option v-for="item in GetCityData" :value="item.City">{{item.City}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">選擇鄉鎮地區</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-edit" v-if="BenfinheritDisable">
            </select>
            <select class="form-control data-input insure-select insure-input-edit" v-else v-bind:disabled="BenfinheritDisable">
              <option selected="selected">請選擇</option>
              <option v-for="item in GetDistrictData" :value="item.Zip">{{item.Area}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">詳細地址</label>
          <div class="col-sm-12 insure-select-align">
            <input type="text" class="form-control data-input insure-input-edit" v-bind:disabled="BenfinheritDisable">
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
import GetterTypes from '../../../store/modules/Upcash/Types/UpCashGetterTypes'
import FunctionTypes from '../../../store/modules/Upcash/Types/UpCashFunctionTypes'
export default {
  created() {
    this.FuncGetCityData()
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncGetCityData,
      FunctionTypes.FuncGetDistrictData,
      'SetBenfinheritDisable'
    ])
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetBeneficiary,
      GetterTypes.GetNationData,
      GetterTypes.GetCityData,
      GetterTypes.GetDistrictData,
      'BenfinheritDisable'
    ]),
    benf_name: {
      get() {
        return this.GetBeneficiary[0].Name
      },
      set(value) {
        this.$store.state.UpCash.POSTDATA.benf_name = value
      }
    },
    benf_num: {
      get() {
        return this.$store.state.UpCash.POSTDATA.benf_num
      },
      set(value) {
        this.$store.state.UpCash.POSTDATA.benf_num = value
      }
    },
    relation_ben_death: {
      get() {
        return this.$store.state.UpCash.POSTDATA.relation_ben_death
      },
      set(value) {
        this.SetBenfinheritDisable(value === '8')
        this.$store.state.UpCash.POSTDATA.relation_ben_death = value
      }
    },
    relation_ben_death_seq_percent: {
      get() {
        return this.$store.state.UpCash.POSTDATA.relation_ben_death_seq_percent
      },
      set(value) {
        this.$store.state.UpCash.POSTDATA.relation_ben_death_seq_percent = value
      }
    },
    BenfNationality: {
      get() {
        return '0'
      },
      set(value) {
        this.$store.state.UpCash.POSTDATA.BenfNationality = value
      }
    },
    BenfAdd_City: {
      get() {
        if(this.$store.state.UpCash.POSTDATA.BenfAdd_City === undefined ||
        this.$store.state.UpCash.POSTDATA.BenfAdd_City === null) {
          return '0'
        }
        return this.$store.state.UpCash.POSTDATA.BenfAdd_City
      },
      set(value) {
        this.FuncGetDistrictData(value)
        this.$store.state.UpCash.POSTDATA.BenfAdd_City = value
      }
    }
  }
}

</script>
