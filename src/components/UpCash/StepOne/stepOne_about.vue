<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">被保人投保資料告知事項</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="insure-text">
        主管機關規定，要保人及被保人資料需為同一人，如需修改個人資料，請洽本公司客戶服務中心。
      </div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">職業類別</label>
          <div class="col-sm-12 insure-select-align">
            <select class="form-control data-input insure-select insure-input-block-edit" v-model="jobCode" @change="OnJobChange(jobCode)">
              <option v-for="item in GetJobData" :value="item.OCCUPATION_CODE">{{item.OCCUPATION_DESC}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">職業名稱</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="occupation" @change="OnOccupationChange()">
              <option value="0" selected="selected">請選擇</option>
              <option v-for="item in GetOccupationData" :value="item.OCCUPATION_CODE">{{item.OCCUPATION_DESC}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">本人僅為台灣之稅務居民</label>
          <div class="col-sm-12 insure-select-align">
            <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns" @change="OnTaxChange()">
              <option value="0">請選擇</option>
              <option value="true">是</option>
              <option value="false">否</option>
            </select>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import FunctionTypes from '../../../store/modules/Upcash/Types/UpCashFunctionTypes'
import GetterTypes from '../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  data() {
    return {
      jobCode: '00',
      occupation: '0',
      QusAns: '0'
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIsInit,
      GetterTypes.GetJob,
      GetterTypes.GetJobData,
      GetterTypes.GetOccupation,
      GetterTypes.GetOccupationData
    ])
  },
  created() {
    if (!this.GetIsInit) {
      this.FuncGetJob()
      this.FuncGetOccupation('00')
    }
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncGetJob,
      FunctionTypes.FuncGetNationality,
      FunctionTypes.FuncGetOccupation
    ]),
    OnJobChange(jobCode) {
      this.FuncGetOccupation(jobCode)
    },
    OnOccupationChange() {
      if (this.occupation === '0') {
        alert('請選擇職業名稱')
        this.$store.state.UpCash.POSTDATA.client_occupation_class = ''
        this.$store.state.UpCash.POSTDATA.client_occupation_class_code = ''
        this.$store.state.UpCash.POSTDATA.client_occupation_class_code_name = ''
        return
      }
      this.GetOccupationData.forEach(data => {
        if (data.OCCUPATION_CODE === this.occupation) {
          this.$store.state.UpCash.POSTDATA.client_occupation_class = data.OCCUPATION_CLASS
          this.$store.state.UpCash.POSTDATA.client_occupation_class_code = data.OCCUPATION_CODE
          this.$store.state.UpCash.POSTDATA.client_occupation_class_code_name = data.OCCUPATION_DESC
        }
      })
    },
    OnTaxChange() {
      if (this.QusAns === '0') {
        alert('請選擇本人僅為台灣之稅務居民')
        return
      }
      let result = this.QusAns === 'true'
      if (!result) {
        alert('親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。')
      }
      this.$store.state.UpCash.POSTDATA.QusAns = [{ Answar: result }]
    }
  }
}

</script>
