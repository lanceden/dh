<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-12 footer-title footer-right" @click="GotoNext()">下一步</div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
import FunctionTypes from '../../../../store/modules/ICan/Types/ICanFunctionTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetICanPostData,
      'HeaderIsActive'
    ])
  },
  methods: {
    ...mapActions([
      'SetHeaderIsActive',
      FunctionTypes.FuncICanIsInit
    ]),
    GotoNext() {
      let result = this.ValidateData()
      if (!result) return
      this.SetHeaderIsActive(true)
      this.FuncICanIsInit(true)
      this.$router.push('/ICan-2')
    },
    ValidateData() {
      console.log('this.GetICanPostData.QusAns', this.GetICanPostData.QusAns)
      if (parseInt(this.GetICanPostData.client_occupation_class) === 0) {
        alert('請選擇職業類別')
        return
      }
      if(this.GetICanPostData.QusAns[0].Answar || this.GetICanPostData.QusAns[2].Answar || this.GetICanPostData.QusAns[3].Answar || this.GetICanPostData.QusAns[4].Answar) {
        alert('親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉,再次感謝您的惠顧。')
        return
      }
      this.GetICanPostData.insure_peer_plan_1 = this.GetICanPostData.QusAns[1].Answar ? 'Y' : 'N'
      return true
    }
  }
}

</script>
