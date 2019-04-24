<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../static/img/chat.png" alt=""></div>
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
import FunctionTypes from '../../../store/modules/Upcash/Types/UpCashFunctionTypes.js'
import GetterTypes from '../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import { valEstimateData, setDataOnEstimateStep } from '../../../utils/validateEstimateData'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncEstimate
    ]),
    Estimate() {
      // 寄送至客戶住所(通訊地址)
      if (this.$store.state.NOTIFYCHECKBOX[1]) {
        this.GetPostData.city3 = this.GetPostData.InsAddressCity || ''
        this.GetPostData.district3 = this.GetPostData.InsAddressDistrict || ''
        this.GetPostData.road3 = this.GetPostData.InsAddressRoad || ''
      }
      // 輸入新的電子信箱
      if (this.$store.state.NOTIFYCHECKBOX[2]) {

      }
      // 輸入新的寄送地址
      if (this.$store.state.NOTIFYCHECKBOX[3]) {
      }
      if (this.GetPostData.face_amt === '' || this.GetPostData.face_amt <= 0) {
        alert('請填寫第一期保險費。')
        return
      }
      console.log(valEstimateData(this.GetPostData))
      setDataOnEstimateStep(this.GetPostData)
      this.FuncEstimate({ para: this.GetPostData })
    }
  }
}

</script>
