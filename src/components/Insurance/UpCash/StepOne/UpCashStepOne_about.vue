<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
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
        <label for="" class="col-sm-12 col-form-label insure-label">本人僅為台灣之稅務居民</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns">
            <option value="0">請選擇</option>
            <option value="true">是</option>
            <option value="false">否</option>
          </select>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="!QusAns && QusAns !== 0"></div>
        <label for="" class="col-sm-12 col-form-label insure-label text-with-select" v-show="!QusAns && QusAns !== 0">親愛的客戶謝謝您的申購保險，因相關法規
          規定您的申請文件需另檢附相關證明文件。
          很抱歉您無法於本網站進行投保動作。煩請
          另洽新光人壽服務人員詢問相關保險商品購
          買事宜，造成您的不便我們深感抱歉,再次感
          謝您的惠顧。</label>
      </div>

      <!-- 職業項目 -->
      <OccupationComponent :stateData="this.GetUpCashPostData" :planCode="planCode"></OccupationComponent>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import OccupationComponent from '../../Common/occupation'

export default {
  components: {
    OccupationComponent
  },
  data() {
    return {
      planCode: 'UCA99',
      isTaiwanDuty: 0
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashIsInit,
      GetterTypes.GetUpCashPostData
    ]),
    // 本人僅為台灣之稅務居民
    QusAns: {
      get() {
        return this.isTaiwanDuty
      },
      set(value) {
        let result = value === 'true'
        this.GetUpCashPostData.QusAns = [{ Answar: result }]
        this.GetUpCashPostData.IsTaiwanTaxDuty = result
        if (value === '0') this.isTaiwanDuty = value
        else this.isTaiwanDuty = result
      }
    }
  }
}

</script>
