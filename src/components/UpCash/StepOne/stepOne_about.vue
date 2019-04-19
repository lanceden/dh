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
            <select class="form-control data-input insure-select insure-input-block-edit" v-model="jobCode"
            @change="OnJobChange(jobCode)">
                <option v-for="item in GetJobData" :value="item.OCCUPATION_CODE">{{item.OCCUPATION_DESC}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">職業名稱</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-block-edit" v-bind="occupation" 
            @change="OnOccupationChange()">
                <option v-for="item in GetOccupationData" :value="item.OCCUPATION_CODE">{{item.OCCUPATION_DESC}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">本人僅為台灣之稅務居民</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-block-edit">
              <option selected="">是</option>
              <option>否</option>
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
      occupation: ''
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetJob,
      GetterTypes.GetJobData,
      GetterTypes.GetOccupation,
      GetterTypes.GetOccupationData
    ])
  },
  created() {
    this.FuncGetJob()
    this.FuncGetOccupation('00')
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
      // this.$store.state.UpCash.JOB = 'Hello World'
      console.log(this.$store.state.UpCash.JOB)
    }
  }
}

</script>
