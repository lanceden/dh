<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../static/img/chat.png" alt=""></div>
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
              <option v-for="item in GetNationData" :value="item.Code">{{item.Name}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">姓名</label>
          <div class="col-sm-12 insure-select-align">
            <input type="text" class="form-control insure-input insure-input-edit" v-model="benf_name" v-bind:disabled="BenfinheritOneDisable">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="col-sm-12 insure-select-align">
            <select class="form-control data-input insure-select insure-input-edit" v-model="relation_ben_death_seq">
              <option selected="selected">請選擇</option>
              <option value="1" v-show="parseInt(GetUpCashPostData.benf_num) === 1">順位1</option>
              <option value="2" v-show="parseInt(GetUpCashPostData.benf_num) >= 2">順位2</option>
              <option value="3" v-show="parseInt(GetUpCashPostData.benf_num) > 2">順位3</option>
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
            <input type="date" class="form-control insure-input insure-input-edit" v-bind:disabled="BenfinheritOneDisable" v-model="benf_dob" />
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
          <div class="col-sm-12 insure-select-align">
            <input type="text" class="form-control insure-input insure-input-edit" v-bind:disabled="BenfinheritOneDisable" v-model="benf_id" />
          </div>
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
              <option selected="selected" :value="0">請選擇</option>
              <option v-for="item in GetCityData" :value="item.City">{{item.City}}</option>
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
              <option v-for="item in GetDistrictData" :value="item.Zip + item.Area">{{item.Area}}</option>
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
import GetterTypes from '../../store/modules/Upcash/Types/UpCashGetterTypes.js'
export default {
  created() {
    this.FuncGetCityData()
  },
  methods: {
    ...mapActions([
      'FuncGetCityData',
      'FuncGetDistrictData',
      'SetBenfinheritOneDisable'
    ])
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData,
      'GetNationData',
      'GetCityData',
      'GetDistrictData',
      'BenfinheritOneDisable'
    ]),
    /**
     * 受益人生日
     */
    benf_dob: {
      get() {
        return this.GetUpCashPostData.benf_dob
      },
      set(value) {
        this.GetUpCashPostData.benf_dob = value
      }
    },
    /**
     * 受益人電話
     */
    benf_phone: {
      get() {
        return this.GetUpCashPostData.benf_phone
      },
      set(value) {
        this.GetUpCashPostData.benf_phone = value
      }
    },
    /**
     * 受益人身份證
     */
    benf_id: {
      get() {
        return this.GetUpCashPostData.benf_id
      },
      set(value) {
        this.GetUpCashPostData.benf_id = value
      }
    },
    /**
     * 受益人姓名
     */
    benf_name: {
      get() {
        return this.GetUpCashPostData.Name
      },
      set(value) {
        this.GetUpCashPostData.benf_name = value
      }
    },
    /**
     * 給付方式
     */
    relation_ben_death_seq: {
      get() {
        return this.GetUpCashPostData.relation_ben_death_seq
      },
      set(value) {
        this.GetUpCashPostData.relation_ben_death_seq = value
      }
    },
    /**
     * 受益人關係
     */
    relation_ben_death: {
      get() {
        if (this.GetUpCashPostData.relation_ben_death === undefined || this.GetUpCashPostData.relation_ben_death === null) {
          return '0'
        }
        return this.GetUpCashPostData.relation_ben_death
      },
      set(value) {
        this.SetBenfinheritOneDisable(value === '8')
        this.GetUpCashPostData.relation_ben_death = value
      }
    },
    /**
     * 給付方式之比例
     */
    relation_ben_death_seq_percent: {
      get() {
        return this.GetUpCashPostData.relation_ben_death_seq_percent
      },
      set(value) {
        this.GetUpCashPostData.relation_ben_death_seq_percent = value
      }
    },
    /**
     * 受益人國籍
     */
    BenfNationality: {
      get() {
        return (this.GetUpCashPostData.BenfNationality === undefined || this.GetUpCashPostData.BenfNationality === null) ? 0 : this.GetUpCashPostData.BenfNationality
      },
      set(value) {
        this.GetUpCashPostData.BenfNationality = value
      }
    },
    /**
     * 受益人城市
     */
    BenfAdd_City: {
      get() {
        return (this.GetUpCashPostData.BenfAdd_City === undefined ||
          this.GetUpCashPostData.BenfAdd_City === null) ? 0 : this.GetUpCashPostData.BenfAdd_City
      },
      set(value) {
        this.FuncGetDistrictData(value)
        this.GetUpCashPostData.BenfAdd_City = value
      }
    },
    /**
     * 選擇鄉鎮地區
     */
    BenfAdd_County: {
      get() {
        return (this.GetUpCashPostData.BenfAdd_County === undefined ||
          this.GetUpCashPostData.BenfAdd_County === null) ? 0 : this.GetUpCashPostData.BenfAdd_County
      },
      set(value) {
        this.GetUpCashPostData.BenfAddZip = value.substring(0, 3)
        this.GetUpCashPostData.BenfAdd_County = value.substring(3)
      }
    },
    /**
     * 詳細地址
     */
    BenfAddRemain: {
      get() {
        return this.GetUpCashPostData.BenfAddRemain
      },
      set(value) {
        this.GetUpCashPostData.BenfAddRemain = value
      }
    }
  }
}

</script>
