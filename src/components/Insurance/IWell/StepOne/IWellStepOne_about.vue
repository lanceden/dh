<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
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
        <label for="" class="col-sm-12 col-form-label insure-label">您的職業類別</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" id="client_occupation_class" v-model="client_occupation_class_computed" name="client_occupation_class">
            <option value="0">請選擇</option>
            <option selected="selected" value="1">第一類 內勤行政文書相關</option>
            <option value="2">第二類 外勤業務相關</option>
            <option value="3">第三類 養殖、石化及放牧相關</option>
            <option value="4">第四類 司機、採石及水電修理相關</option>
          </select>
        </div>
      </div>
      <!-- 請問您是否領有身心障礙手冊或身心障礙證明 -->
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">請問您是否領有身心障礙手冊或身心障礙證明</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns1">
            <option value="0">請選擇</option>
            <option value="true">是</option>
            <option value="false">否</option>
          </select>
        </div>
        <label class="col-sm-12 col-form-label insure-label" v-show="isShowAns1Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>
      <!-- 請問您是否已投保其他商業實支實付型傷害醫療保險 -->
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">請問您是否已投保其他商業實支實付型傷害醫療保險</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns2">
            <option value="0">請選擇</option>
            <option value="true">是</option>
            <option value="false">否</option>
          </select>
        </div>
      </div>

      <!-- 被保險人目前是否受有監護宣告? -->
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">被保險人目前是否受有監護宣告?</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns3">
            <option value="0">請選擇</option>
            <option value="true">是</option>
            <option value="false">否</option>
          </select>
        </div>
        <label class="col-sm-12 col-form-label insure-label" v-show="isShowAns3Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>

      <!-- 請問您過去二年內是否曾因患有下列疾病而接受醫師治療、診療或用藥? (有任一者，請選擇”是”) -->
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">請問您過去二年內是否曾因患有下列疾病而接受醫師治療、診療或用藥? (有任一者，請選擇”是”)</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns4">
            <option value="0">請選擇</option>
            <option value="true">是</option>
            <option value="false">否</option>
          </select>
          <div class="insure-notice-text">
            <ul class="insure-notice-text-ul">
              <li>​高血壓症(指收縮壓140mmHg或舒張壓90mmHg以上)、狹心症、心肌梗塞、先天性心臟病、主動脈血管瘤。</li>
              <li>腦中風(腦中風、腦梗塞)、腦瘤、癲癇、智能障礙(外表無法明顯判斷者)、精神病、巴金森氏症。
                癌症(惡性腫瘤)、肝硬化、尿毒、血友病。</li>
              <li>糖尿病。</li>
              <li>酒精或藥物濫用成癮、眩暈症。</li>
              <li>視網膜出血或剝離、視神經病變。</li>
            </ul>
          </div>
        </div>
        <label class="col-sm-12 col-form-label insure-label" v-show="isShowAns4Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>

      <!-- 請問您目前身體機能是否有下列障害：(有任一者，請選擇”是”) -->
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">請問您目前身體機能是否有下列障害：(有任一者，請選擇”是”)</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns5">
            <option value="0">請選擇</option>
            <option value="true">是</option>
            <option value="false">否</option>
          </select>
          <div class="insure-notice-text">
            <ul class="insure-notice-text-ul">
              <li>失明。</li>
              <li>是否曾因眼科疾病或傷害接受眼科專科醫師治療、診療或用藥，且一目視力經矯正後，最佳矯正視力在萬國視力表0.3以下。</li>
              <li>聾。</li>
              <li>是否曾因耳部疾病或傷害接受耳鼻喉科專科醫師治療、診療或用藥，且單耳聽力喪失程度在五十分貝(dB)以上。</li>
              <li>啞。</li>
              <li>咀嚼、吞嚥或言語機能障害。</li>
              <li>四肢(含手指、足趾)缺損或畸形。</li>
            </ul>
          </div>
        </div>
        <label class="col-sm-12 col-form-label insure-label" v-show="isShowAns5Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>
    </form>
  </div>
</template>

<script>
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
import { InitColumnData } from '../../../../utils/initColumnData'
import { mapGetters } from 'vuex'
export default {
  created() {},
  data() {
    return {
      client_occupation_class: '0',
      isShowAns1Error: '0',
      isShowAns2Error: '0',
      isShowAns3Error: '0',
      isShowAns4Error: '0',
      isShowAns5Error: '0'
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIWellPostData
    ]),
    // 職業類別
    client_occupation_class_computed: {
      get() {
        return InitColumnData(this.GetIWellPostData.client_occupation_class, 0)
      },
      set(value) {
        this.client_occupation_class = value
        this.GetIWellPostData.client_occupation_class = value
      }
    },
    // 請問您是否領有身心障礙手冊或身心障礙證明
    QusAns1: {
      get() {
        return this.isShowAns1Error
      },
      set(value) {
        this.isShowAns1Error = value === 'true'
        this.GetIWellPostData.QusAns[0].Answar = (value === 'true')
      }
    },
    // 請問您是否已投保其他商業實支實付型傷害醫療保險
    QusAns2: {
      get() {
        return this.isShowAns2Error
      },
      set(value) {
        this.isShowAns2Error = value === 'true'
        this.GetIWellPostData.QusAns[1].Answar = (value === 'true')
      }
    },
    // 被保險人目前是否受有監護宣告
    QusAns3: {
      get() {
        return this.isShowAns3Error
      },
      set(value) {
        this.isShowAns3Error = value === 'true'
        this.GetIWellPostData.QusAns[2].Answar = (value === 'true')
        this.GetIWellPostData.AuthorizedRep = (value === 'true')
      }
    },
    // 請問您過去二年內是否曾因患有下列疾病而接受醫師治療、診療或用藥? (有任一者，請選擇是)
    QusAns4: {
      get() {
        return this.isShowAns4Error
      },
      set(value) {
        this.isShowAns4Error = value === 'true'
        this.GetIWellPostData.QusAns[3].Answar = (value === 'true')
      }
    },
    // 請問您目前身體機能是否有下列障害：(有任一者，請選擇”是”)
    QusAns5: {
      get() {
        return this.isShowAns5Error
      },
      set(value) {
        this.isShowAns5Error = value === 'true'
        this.GetIWellPostData.QusAns[4].Answar = (value === 'true')
      }
    }
  }
}

</script>
