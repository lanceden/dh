<template>
  <div>
    <loading v-show="GetLoading" />
    <StepTwoAnnuity></StepTwoAnnuity>
    <AnnuityNotify :stateData="GetUpCashPostData"></AnnuityNotify>
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
import StepTwoAnnuity from './UpCashStepTwo_annuity'
import AnnuityNotify from '../../Common/annuityNotify.vue'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes'
import FunctionTypes from '../../../../store/modules/Upcash/Types/UpCashFunctionTypes.js'
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
      GetterTypes.GetUpCashPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncUpCashEstimate
    ]),
    GoPrev() {
      this.$router.push(`/upcash-2`)
    },
    GoNext() {
      // 寄送至客戶住所(通訊地址)
      if (this.$store.state.NOTIFYCHECKBOX[1]) {
        this.GetUpCashPostData.city3 = this.GetUpCashPostData.InsAddressCity || ''
        this.GetUpCashPostData.district3 = this.GetUpCashPostData.InsAddressDistrict || ''
        this.GetUpCashPostData.road3 = this.GetUpCashPostData.InsAddressRoad || ''
      }
      if (this.GetUpCashPostData.face_amt === '' || this.GetUpCashPostData.face_amt <= 0) {
        toggleModalShow('請填寫第一期保險費。')
        return
      }
      let errors = valEstimateData(this.GetUpCashPostData, this.GetNotifyCheckBox)
      if (errors !== '') {
        toggleModalShow(errors)
        return
      }
      this.FuncUpCashEstimate({ para: this.GetUpCashPostData, router: this.$router })
    }
  }
}

</script>
