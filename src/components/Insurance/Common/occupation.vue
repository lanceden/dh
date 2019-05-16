<template>
  <div>
    <div class="form-group row" v-show="this.stepOne">
      <label for="" class="col-sm-12 col-form-label insure-label">職業類別</label>
      <div class="col-sm-12 insure-select-align">
        <select class="form-control data-input insure-select insure-input-block-edit" v-model="jobCode">
          <option value="0" selected="selected">請選擇</option>
          <option v-for="(item, index) in GetJobData" :key="index" :value="item.OCCUPATION_CODE">{{item.OCCUPATION_DESC}}</option>
        </select>
      </div>
    </div>
    <div class="form-group row" v-show="this.stepTwo">
      <label for="" class="col-sm-12 col-form-label insure-label">職業項目</label>
      <div class="col-sm-12 insure-select-align">
        <select class="form-control data-input insure-select insure-input-block-edit" v-model="jobSubCode" >
          <option value="0" selected="selected">請選擇</option>
          <option v-for="(item, index) in GetOccupationData" :key="index" :value="item.OCCUPATION_CODE + '-' + item.OCCUPATION_DESC">{{item.OCCUPATION_DESC}}</option>
        </select>
      </div>
    </div>
    <div class="form-group row" v-show="this.stepThree">
      <label for="" class="col-sm-12 col-form-label insure-label">工作內容</label>
      <div class="col-sm-12 insure-select-align">
        <select class="form-control data-input insure-select insure-input-block-edit" id="occupation" v-model="occupationcomputed" >
          <option value="0" selected="selected">請選擇</option>
          <option v-for="(item, index) in GetJobSubCodeData" :key="index" :value="item.OCCUPATION_CODE">{{item.OCCUPATION_DESC}}</option>
        </select>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="insure-tips-text first-blue">
        <span id="occupationselect"></span>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'
export default {
  props: [
    'stateData',
    'planCode'
  ],
  data() {
    return {
      job: 0,
      jobSubCodeText: '',
      occupation: 0,
      occupationsubcode: 0,
      stepOne: true,
      stepTwo: false,
      stepThree: false
    }
  },
  created() {
    if (!this.GetHealthIsInit) {
      this.FuncGetJob()
      this.FuncGetOccupation({
        NoClass: '00',
        PlanCode: this.planCode,
        Type: '4'
      })
    }
  },
  computed: {
    ...mapGetters([
      'GetJobData',
      'GetOccupationData',
      'GetJobSubCodeData'
    ]),
    // 職業類別
    jobCode: {
      get() {
        return this.job || 0
      },
      set(value) {
        this.FuncGetOccupation({
          NoClass: value,
          PlanCode: this.planCode,
          Type: '4'
        })
        this.job = value
        this.$store.state.JOB = value
        this.stepTwo = true
      }
    },
    // 職業項目
    jobSubCode: {
      get() {
        if (this.$store.state.JOBSUBCODE === '0' || this.$store.state.JOBSUBCODE === '') return 0
        return this.$store.state.JOBSUBCODE + '-' + this.jobSubCodeText
      },
      set(value) {
        let result = value.split('-')
        this.FuncGetOccupation({
          NoClass: this.$store.state.JOB,
          PlanCode: this.planCode,
          Type: '8',
          subCode: result[0]
        })
        this.$store.state.JOBSUBCODE = result[0]
        this.jobSubCodeText = result[1]
        this.stepThree = true
      }
    },
    // 工作內容
    occupationcomputed: {
      get() {
        return this.occupation || 0
      },
      set(value) {
        this.occupation = value
        this.$store.state.OCCUPATION = value
        $('#occupationselect').text(this.jobSubCodeText + ' ' + '【' + $('#occupation option:selected').text() + '】')
        if (value === '0') {
          this.stateData.client_occupation_class = ''
          this.stateData.client_occupation_class_code = ''
          this.stateData.client_occupation_class_code_name = ''
          this.stateData.client_occupation_level = ''
          this.stateData.client_occupation_sub_level = ''
          return
        }
        this.GetJobSubCodeData.forEach(data => {
          if (data.OCCUPATION_CODE === value) {
            this.stateData.client_occupation_class = data.OCCUPATION_CLASS
            this.stateData.client_occupation_class_code = data.OCCUPATION_CODE
            this.stateData.client_occupation_class_code_name = data.OCCUPATION_DESC
            this.stateData.client_occupation_level = this.$store.state.JOB
            this.stateData.client_occupation_sub_level = this.$store.state.JOBSUBCODE
          }
        })
      }
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
