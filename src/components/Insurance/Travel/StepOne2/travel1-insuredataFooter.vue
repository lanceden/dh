<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-4 footer-title footer-left" @click="GoPrev()">回前一頁</div>
        <div class="col-sm-8 footer-title footer-right" @click="GotoNext()">確認送出</div>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import TravelGetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes.js'
import TravelFunctionTypes from '../../../../store/modules/Travel/Types/TravelFunctionTypes.js'
import { toggleModalShow } from '../../../../utils/toggleModal'

export default {
  computed: {
    ...mapGetters([
      TravelGetterTypes.GetTravelPostData
    ])
  },
  methods: {
    ...mapActions([
      TravelFunctionTypes.FuncTravelInsuredData
    ]),
    GoPrev() {
      this.$router.push(`/travel-1?token=${this.$store.state.ApiToken}`)
    },
    GotoNext() {
      let errorIndexArr = []
      let errorAuthRep = []
      let errorMsg = ''
      this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.forEach((item, index) => {
        if (item.HasAuthRep === null || item.HasAuthRep === undefined) {
          errorIndexArr.push(index)
        } else if(item.HasAuthRep) {
          errorAuthRep.push(index)
        }
        // 子女
        if(index > 0) {
          if(item.PersonalData.Name === '') {
            errorMsg += `請填寫被保險人子女${index}姓名。<br/>`
          }
          if(item.PersonalData.ID === '') {
            errorMsg += `請填寫被保險人子女${index}身分證字號。<br/>`
          }
          if(item.PersonalData.Dob === '') {
            errorMsg += `請選擇被保險人子女${index}生日。<br/>`
          }
        }
      })
      if (errorIndexArr.length > 0) {
        toggleModalShow('請選擇監護宣告。')
        return
      }
      if (errorAuthRep.length > 0) {
        toggleModalShow('親愛的客戶謝謝您申購旅平險，因法令規定您的申請文件需另檢附相關證明文件。很抱歉這次無法於本系統進行投保。造成您的不便我們深感抱歉，再次感謝您的惠顧。')
        return
      }
      if(errorMsg !== '') {
        toggleModalShow(errorMsg)
        return
      }
      // 前往被保人填寫資料頁
      this.$router.push('/travel-2')
    }
  }
}

</script>
