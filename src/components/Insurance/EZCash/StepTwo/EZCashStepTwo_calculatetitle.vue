<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">主要給付項目：年金</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="form-bottom">
        <div class="row col-width">
          <div class="col-sm-12">
            <button class="button-blue btn-block" @click="Estimate()">保費試算</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FunctionTypes from '../../../../store/modules/EZCash/Types/EZCashFunctionTypes.js'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'
import { valEstimateData, setDataOnEstimateStep } from '../../../../utils/validateEstimateData'
import { toggleModalShow } from '../../../../utils/toggleModal'
export default {
  computed: {
    ...mapGetters([
      'GetNotifyCheckBox',
      GetterTypes.GetEZCashPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncEZCashEstimate
    ]),
    Estimate() {
      setDataOnEstimateStep(this.GetEZCashPostData)
      // 寄送至客戶住所(通訊地址)
      if (this.$store.state.NOTIFYCHECKBOX[1]) {
        this.GetEZCashPostData.city3 = this.GetEZCashPostData.InsAddressCity || ''
        this.GetEZCashPostData.district3 = this.GetEZCashPostData.InsAddressDistrict || ''
        this.GetEZCashPostData.road3 = this.GetEZCashPostData.InsAddressRoad || ''
      }
      // 輸入新的電子信箱
      if (this.$store.state.NOTIFYCHECKBOX[2]) {

      }
      // 輸入新的寄送地址
      if (this.$store.state.NOTIFYCHECKBOX[3]) {}
      if (this.GetEZCashPostData.face_amt === '' || this.GetEZCashPostData.face_amt <= 0) {
        toggleModalShow('請填寫第一期保險費。')
        return
      }
      let errors = valEstimateData(this.GetEZCashPostData, this.GetNotifyCheckBox)
      if(errors !== '') {
        toggleModalShow(errors)
      }
      this.FuncEZCashEstimate({ para: this.GetEZCashPostData })
    }
  }
}

</script>
