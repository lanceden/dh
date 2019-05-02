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
import { toggleModalShow } from '../../../../utils/toggleModal'
import { InitColumnData } from '../../../../utils/initColumnData'
import GetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes.js'
import FunctionTypes from '../../../../store/modules/Accident/Types/AccidentFunctionTypes.js'

const NEXTURL = '/Accident-2'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetAccidentPostData,
      'HeaderIsActive'
    ])
  },
  methods: {
    ...mapActions([
      'SetHeaderIsActive',
      FunctionTypes.FuncAccidentIsInit
    ]),
    GotoNext() {
      let result = this.ValidateData()
      if (!result) return
      this.SetHeaderIsActive(true)
      this.FuncAccidentIsInit(true)
      this.$router.push(NEXTURL)
    },
    ValidateData() {
      let occuClass = InitColumnData(this.GetAccidentPostData.client_occupation_class, 0)
      if (parseInt(occuClass) === 0) {
        toggleModalShow('請選擇職業類別。')
        return false
      }
      if(this.GetAccidentPostData.QusAns[0].Answar || this.GetAccidentPostData.QusAns[1].Answar || this.GetAccidentPostData.QusAns[2].Answar || this.GetAccidentPostData.QusAns[3].Answar) {
        toggleModalShow('親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉,再次感謝您的惠顧。')
        return false
      }
      return true
    }
  }
}

</script>
