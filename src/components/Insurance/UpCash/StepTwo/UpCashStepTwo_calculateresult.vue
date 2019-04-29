<template>
  <div class="bg-radius" v-show="GetUpCashPostData.mode_prem > 0">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/calculator.png" alt=""></div>
            <div class="insure-check-title">試算保費結果</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="bg-money">
        <div class="col-sm-12">
          <div class="font-label">您所支付的第一期保險費為：</div>
          <div class="font-money"> NT$ {{GetUpCashPostData.mode_prem}}</div>
          <div class="money-icon"><img src="../../../../../static/img/coins.png" alt=""></div>
          </div>
        </div>
        <div class="bg-time">
          <div class="col-sm-12">
            <div class="font-label">投保始期：</div>
            <div class="font-label">{{GetUpCashPostData.po_issue_date_Name}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData
    ])
  }
}

</script>
