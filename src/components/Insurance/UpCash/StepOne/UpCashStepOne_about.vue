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
      </div>
      
      <!-- 職業項目 -->
      <OccupationComponent :stateData="this.GetUpCashPostData" :planCode="planCode"></OccupationComponent>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { toggleModalShow } from '../../../../utils/toggleModal'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import OccupationComponent from '../../Common/occupation'

export default {
  components: {
    OccupationComponent
  },
  data() {
    return {
      planCode: 'UCA99'
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashIsInit,
      GetterTypes.GetUpCashPostData
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
    }
  }
}

</script>
