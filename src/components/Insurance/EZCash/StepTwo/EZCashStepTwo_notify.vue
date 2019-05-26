<template>
  <div>
    <loading v-show="GetLoading" />
    <StepTwoAnnuity></StepTwoAnnuity>
    <AnnuityNotify :stateData="GetEZCashPostData"></AnnuityNotify>
    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-4 footer-title footer-left" @click="GoPrev()">回前一頁</div>
          <div class="col-sm-8 footer-title footer-right" @click="GoNext()">確認送出</div>
        </nav>
      </div>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import StepTwoAnnuity from './EZashStepTwo_annuity'
import AnnuityNotify from '../../Common/annuityNotify.vue'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes'
import FunctionTypes from '../../../../store/modules/EZCash/Types/EZCashFunctionTypes.js'
import { valEstimateData } from '../../../../utils/validateEstimateData'
import { toggleModalShow } from '../../../../utils/toggleModal'

export default {
  components: {
    StepTwoAnnuity,
    AnnuityNotify
  },
  computed: {
    ...mapGetters([
      'GetLoading',
      'GetNotifyCheckBox',
      GetterTypes.GetEZCashPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncEZCashEstimate
    ]),
    GoPrev() {
      this.$router.push(`/EZCash-2`)
    },
    GoNext() {
      // 寄送至客戶住所(通訊地址)
      if (this.$store.state.NOTIFYCHECKBOX[1]) {
        this.GetEZCashPostData.city3 = this.GetEZCashPostData.InsAddressCity || ''
        this.GetEZCashPostData.district3 = this.GetEZCashPostData.InsAddressDistrict || ''
        this.GetEZCashPostData.road3 = this.GetEZCashPostData.InsAddressRoad || ''
      }
      if (this.GetEZCashPostData.face_amt === '' || this.GetEZCashPostData.face_amt <= 0) {
        toggleModalShow('請填寫第一期保險費。')
        return
      }
      this.GetEZCashPostData.init_method = 'B'
      let errors = valEstimateData(this.GetEZCashPostData, this.GetNotifyCheckBox)
      if (errors !== '') {
        toggleModalShow(errors)
        return
      }
      this.FuncEZCashEstimate({ para: this.GetEZCashPostData, router: this.$router })
    }
  }
}

</script>
