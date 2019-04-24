<template>
  <div class="bg-radius" v-show="benf_num > 2">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">身故受益人(三)資料</div>
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
            <select id="" class="form-control data-input insure-select insure-input-edit">
              <option selected>法定繼承人</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-edit">
              <option selected>順位3</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式之比例</label>
          <div class="col-sm-12 insure-select-align">
            <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="" value="100">
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
      </form>
    </div>

</template>

<script>
export default {
  computed: {
    benf_num: {
      get() {
        return this.$store.state.UpCash.POSTDATA.benf_num
      }
    }
  }
}
</script>
