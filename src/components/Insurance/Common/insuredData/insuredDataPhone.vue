<template>
  <div>
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label insure-label">電訪時間</label>
      <div class="col-sm-12">
        <div class="insure-input-block">
          <span v-show="visitTime1">早上9點~12點</span>
          <span v-show="visitTime1 && visitTime2">,</span>
          <span v-show="visitTime2">下午1點～6點</span>
          <span v-show="visitTime2 && visitTime3">,</span>
          <span v-show="visitTime3">晚上6點~9點</span>
        </div>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="insure-tips-text first-blue">
        依主管機關「保險業辦理電子商務應注意事項」本公司將抽樣電訪確認投保。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'stateData'
  ],
  computed: {
    visitTime1() {
      return parseInt(this.stateData.visit_time1) === 1
    },
    visitTime2() {
      return parseInt(this.stateData.visit_time2) === 1
    },
    visitTime3() {
      return parseInt(this.stateData.visit_time3) === 1
    }
  }
}
</script>
