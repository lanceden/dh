<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/notepad.png" alt=""></div>
          <div class="insure-check-title">保障內容</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line col-sm-12"></div>
    <div class="form-group row">
      <label for="" class="col-sm-12 col-form-label insure-label">住院醫療費用保險金</label>
      <div class="col-sm-12">
        <div class="form-control insure-input-block">同一次住院期間，憑收據正本於<span id="CalcAmtDesc1"></span>萬元內實支實付。</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetHealthPostData
    ])
  }
}

</script>
