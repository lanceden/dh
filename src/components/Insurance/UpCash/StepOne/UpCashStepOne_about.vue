<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
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
        <label for="" class="col-sm-12 col-form-label insure-label">您的職業類別</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" ref="jobCode" v-model="jobCode">
            <option value="0" selected="selected">請選擇</option>
            <option v-for="(item, index) in GetJobData" :key="index" :value="item.OCCUPATION_CODE">{{item.OCCUPATION_DESC}}</option>
          </select>
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="jobSubCode">
            <option value="0" selected="selected">請選擇</option>
            <option v-for="(item, index) in GetOccupationData" :key="index" :value="item.OCCUPATION_CODE">{{item.OCCUPATION_DESC}}</option>
          </select>
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="occupation">
            <option value="0" selected="selected">請選擇</option>
            <option v-for="(item, index) in GetJobSubCodeData" :key="index" :value="item.OCCUPATION_CODE">{{item.OCCUPATION_DESC}}</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">本人僅為台灣之稅務居民</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns">
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
import { mapActions, mapGetters } from 'vuex'
import { toggleModalShow } from '../../../../utils/toggleModal'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashIsInit,
      GetterTypes.GetUpCashPostData,
      'GetJob',
      'GetJobData',
      'GetJobSubCodeData',
      'GetOccupation',
      'GetOccupationData'
    ]),
    QusAns: {
      get() {
        if (this.GetUpCashPostData.QusAns === undefined ||
          this.GetUpCashPostData.QusAns === null) {
          return '0'
        } else return this.GetUpCashPostData.QusAns[0].Answar
      },
      set(value) {
        if (value === '0') {
          toggleModalShow('請選擇本人僅為台灣之稅務居民。')
          return
        }
        let result = value === 'true'
        if (!result) {
          toggleModalShow('親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。')
        }
        this.GetUpCashPostData.QusAns = [{ Answar: result }]
        this.GetUpCashPostData.IsTaiwanTaxDuty = result
      }
    },
    // 您的職業類別
    jobCode: {
      get() {
        return this.GetJob || 0
      },
      set(value) {
        this.FuncGetOccupation({
          NoClass: value,
          PlanCode: 'UCA99',
          Type: '4'
        })
        this.$store.state.JOB = value
      }
    },
    // 職業中類
    jobSubCode: {
      get() {
        return this.$store.state.JOBSUBCODE || 0
      },
      set(value) {
        this.FuncGetOccupation({
          NoClass: this.$store.state.JOB,
          PlanCode: 'UCA99',
          Type: '8',
          subCode: value
        })
        this.$store.state.JOBSUBCODE = value
      }
    },
    occupation: {
      get() {
        return this.GetOccupation || 0
      },
      set(value) {
        this.$store.state.OCCUPATION = value
        if (value === '0') {
          alert('請選擇職業名稱')
          this.GetUpCashPostData.client_occupation_class = ''
          this.GetUpCashPostData.client_occupation_class_code = ''
          this.GetUpCashPostData.client_occupation_class_code_name = ''
          this.GetUpCashPostData.client_occupation_level = ''
          this.GetUpCashPostData.client_occupation_sub_level = ''
          return
        }
        this.GetJobSubCodeData.forEach(data => {
          if (data.OCCUPATION_CODE === value) {
            this.GetUpCashPostData.client_occupation_class = data.OCCUPATION_CLASS
            this.GetUpCashPostData.client_occupation_class_code = data.OCCUPATION_CODE
            this.GetUpCashPostData.client_occupation_class_code_name = data.OCCUPATION_DESC
            this.GetUpCashPostData.client_occupation_level = this.$store.state.JOB
            this.GetUpCashPostData.client_occupation_sub_level = this.$store.state.JOBSUBCODE
          }
        })
      }
    }
  },
  created() {
    if (!this.GetUpCashIsInit) {
      this.FuncGetJob()
      this.FuncGetOccupation({
        NoClass: '00',
        PlanCode: 'UCA99',
        Type: '4'
      })
    }
  },
  methods: {
    ...mapActions([
      'FuncGetJob',
      'FuncGetOccupation'
    ])
  }
}

</script>
