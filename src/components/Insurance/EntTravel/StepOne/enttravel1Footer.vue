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
import EntTravelFunctionTypes from '../../../../store/modules/EntTravel/Types/EntTravelFunctionTypes.js'
import { toggleModalShow } from '../../../../utils/toggleModal'
import EntTravelGetterTypes from '../../../../store/modules/EntTravel/Types/EntTravelGetterTypes.js'

export default {
  computed: {
    ...mapGetters([
      EntTravelGetterTypes.GetEntTravelPostData
    ])
  },
  methods: {
    ...mapActions([
      EntTravelFunctionTypes.FuncEntTravelIsInit,
      EntTravelFunctionTypes.FuncEntTravelInsuredData
    ]),
    GoPrev() {
      this.$router.push(`/travel-1?leave=true&token=${this.$store.state.ApiToken}`)
    },
    GotoNext() {
      // 不是企業客戶
      if(!this.$store.state.ISENTERPRISECODE) {
        toggleModalShow('您輸入的代碼驗證失敗，請洽詢您公司的負責窗口。', '貼心提醒您')
        return
      }
      // 驗證是否有選擇請確認保障對象
      if (this.GetEntTravelPostData.TargetType === undefined || this.GetEntTravelPostData.TargetType === '') {
        toggleModalShow('請確認保障對象', '貼心提醒您')
        return
      }
      if (parseInt(this.GetEntTravelPostData.PolicyData.ChildrenNo) === 0 && this.GetEntTravelPostData.TargetType !== 0) {
        toggleModalShow('請確認子女數量', '貼心提醒您')
        return
      }

      let errorIndexArr = []
      let errorAuthRep = []
      let errorMsg = ''

      this.GetEntTravelPostData.PolicyData.InsuredInfo.forEach((item, index) => {
        if (item.HasAuthRep === null || item.HasAuthRep === undefined) {
          errorIndexArr.push(index)
        } else if (item.HasAuthRep) {
          errorAuthRep.push(index)
        }
        // 子女
        if (index > 0) {
          if (item.PersonalData.Name === '') {
            errorMsg += `請填寫被保險人子女${index}姓名。<br/>`
          }
          if (item.PersonalData.ID === '') {
            errorMsg += `請填寫被保險人子女${index}身分證字號。<br/>`
          }
          if (item.PersonalData.Dob === '') {
            errorMsg += `請選擇被保險人子女${index}生日。<br/>`
          }
        }
      })
      if (errorIndexArr.length > 0) {
        toggleModalShow('請選擇監護宣告。', '貼心提醒您')
        return
      }
      if (errorAuthRep.length > 0) {
        toggleModalShow('親愛的客戶謝謝您申購旅平險，因法令規定您的申請文件需另檢附相關證明文件。很抱歉這次無法於本系統進行投保。造成您的不便我們深感抱歉，再次感謝您的惠顧。', '貼心提醒您')
        return
      }
      if (errorMsg !== '') {
        toggleModalShow(errorMsg, '貼心提醒您')
        return
      }
      // 設置旅平險已初始化
      this.FuncEntTravelIsInit(true)

      // 前往被保人填寫資料頁
      this.FuncEntTravelInsuredData({
        para: this.GetTravelPostData,
        router: this.$router
      })
    }
  }
}

</script>
