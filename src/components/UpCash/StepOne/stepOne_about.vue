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
            <select class="form-control data-input insure-select insure-input-block-edit" v-model="job"
            @change="getOccupation(job)">
                <option v-for="item in jobData" :value="item.OCCUPATION_CODE">{{item.OCCUPATION_DESC}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">職業名稱</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="occupation" >
                <option v-for="item in occupationData" :value="item.OCCUPATION_CODE">{{item.OCCUPATION_DESC}}</option>
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
import Service from '../../../utils/service.js'
import PlanCode from '../../../utils/constPlancode.js'
export default {
  data() {
    return {
      job: '00',
      occupation: '',
      jobData: ['請選擇'],
      occupationData: ['請選擇'],
      service: new Service(this.$http)
    }
  },
  created() {
    this.getJob()
  },
  methods: {
    async getJob() {
      let data = await this.service.GetJob()
      this.jobData = data.Result
    },
    async getOccupation(occupationCode) {
      let data = await this.service.GetOccupation(PlanCode.UpCash, occupationCode)
      this.occupationData = data.Result
      this.occupation = this.occupationData[0].OCCUPATION_CODE
    }
  }
}

</script>
