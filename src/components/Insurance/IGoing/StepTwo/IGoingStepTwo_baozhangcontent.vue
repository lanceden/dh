<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">保障內容</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="form-bottom">
        <div class="row col-width">
          <div class="col-sm-12">
            <div class="insure-notice-text">
              <ul class="insure-notice-text-ul">
                <li>意外身故保險金或喪葬費用保險金 > 200萬元</li>
                <li>意外失能保險金 > 依失能程度按契約附表比例計算，最高為200萬元</li>
                <li>意外骨折保險金 > 0.05萬 ~ 3.5萬元</li>
                <li>傷害醫療保險金 > 2 萬元</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FunctionTypes from '../../../../store/modules/IGoing/Types/IGoingFunctionTypes.js'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
import { valEstimateData, setDataOnEstimateStep } from '../../../../utils/validateEstimateData'
export default {
  computed: {
    ...mapGetters([
      'GetNotifyCheckBox',
      GetterTypes.GetIGoingPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncIGoingEstimate
    ]),
    Estimate() {
      // 寄送至客戶住所(通訊地址)
      if (this.$store.state.NOTIFYCHECKBOX[1]) {
        this.GetIGoingPostData.city3 = this.GetIGoingPostData.InsAddressCity || ''
        this.GetIGoingPostData.district3 = this.GetIGoingPostData.InsAddressDistrict || ''
        this.GetIGoingPostData.road3 = this.GetIGoingPostData.InsAddressRoad || ''
      }
      // 輸入新的電子信箱
      if (this.$store.state.NOTIFYCHECKBOX[2]) {

      }
      // 輸入新的寄送地址
      if (this.$store.state.NOTIFYCHECKBOX[3]) {}
      if (this.GetIGoingPostData.face_amt === '' || this.GetIGoingPostData.face_amt <= 0) {
        alert('請填寫第一期保險費。')
        return
      }
      console.log(valEstimateData(this.GetIGoingPostData, this.GetNotifyCheckBox))
      setDataOnEstimateStep(this.GetIGoingPostData)
      this.FuncIGoingEstimate({ para: this.GetIGoingPostData })
    }
  }
}

</script>
