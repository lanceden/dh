<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/briefcase.png" alt=""></div>
          <div class="insure-check-title">被保人投保資料告知事項</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <div class="insure-text">
      主管機關規定，要保人及被保人資料需為同一人。
    </div>
    <form class="form-bottom">
      <!-- 請問您是否領有身心障礙手冊或身心障礙證明 -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">請問您是否領有身心障礙手冊或身心障礙證明?</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns1', true)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns1Yes === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns1Yes">
                </div>
              </template>
            </div>
            <div class="insure-check-content">是</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns1', false)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns1No === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns1No">
                </div>
              </template>
            </div>
            <div class="insure-check-content">否</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="isShowAns1Error === true"></div>
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns1Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>

      <!-- 被保險人目前是否受有監護宣告? -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">被保險人目前是否受有監護宣告?</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns2', true)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns2Yes === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns2Yes">
                </div>
              </template>
            </div>
            <div class="insure-check-content">是</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns2', false)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns2No === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns2No">
                </div>
              </template>
            </div>
            <div class="insure-check-content">否</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="isShowAns2Error === true"></div>
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns2Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>

      <!-- 請問您過去二年內是否曾因患有下列疾病而接受醫師治療、診療或用藥? -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">請問您過去二年內是否曾因患有下列疾病而接受醫師治療、診療或用藥?</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="col-sm-12 insure-select-align">
          <div class="insure-notice-text">
            <ul class="insure-notice-text-ol">
              <li>​高血壓症(指收縮壓140mmHg或舒張壓90mmHg以上)、狹心症、心肌梗塞、先天性心臟病、主動脈血管瘤。</li>
              <li>腦中風(腦中風、腦梗塞)、腦瘤、癲癇、智能障礙(外表無法明顯判斷者)、精神病、巴金森氏症。
                癌症(惡性腫瘤)、肝硬化、尿毒、血友病。</li>
              <li>糖尿病。</li>
              <li>酒精或藥物濫用成癮、眩暈症。</li>
              <li>視網膜出血或剝離、視神經病變。</li>
            </ul>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns3', true)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns3Yes === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns3Yes">
                </div>
              </template>
            </div>
            <div class="insure-check-content">是</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns3', false)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns3No === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns3No">
                </div>
              </template>
            </div>
            <div class="insure-check-content">否</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="col-sm-12">
          <div class="insure-tips-text withradio text-red-i">
            提醒: 有以上任一者，請選擇“是”
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="isShowAns3Error === true"></div>
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns3Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>

      <!-- 請問您目前身體機能是否有下列障害：(有任一者，請選擇”是”) -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">請問您目前身體機能是否有下列障害：(有任一者，請選擇”是”)</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="insure-notice-text">
          <ul class="insure-notice-text-ol">
            <li>失明。</li>
            <li>是否曾因眼科疾病或傷害接受眼科專科醫師治療、診療或用藥，且一目視力經矯正後，最佳矯正視力在萬國視力表0.3以下。</li>
            <li>聾。</li>
            <li>是否曾因耳部疾病或傷害接受耳鼻喉科專科醫師治療、診療或用藥，且單耳聽力喪失程度在五十分貝(dB)以上。</li>
            <li>啞。</li>
            <li>咀嚼、吞嚥或言語機能障害。</li>
            <li>四肢(含手指、足趾)缺損或畸形。</li>
          </ul>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns4', true)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns4Yes === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns4Yes">
                </div>
              </template>
            </div>
            <div class="insure-check-content">是</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12" @click="OnEnsure('QusAns4', false)">
          <div class="insure-notice-box">
            <div class="insure-check">
              <template>
                <div v-if="enuresArr.QusAns4No === ''">
                  <img src="../../../../../static/img/oval.png">
                </div>
                <div v-else>
                  <img :src="enuresArr.QusAns4No">
                </div>
              </template>
            </div>
            <div class="insure-check-content">否</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="col-sm-12">
          <div class="insure-tips-text withradio text-red-i">
            提醒: 有以上任一者，請選擇“是”
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="isShowAns4Error === true"></div>
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="isShowAns4Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>
    </form>

    <!-- 職業類別 -->
    <OccupationClass :stateData="GetIGoingPostData"></OccupationClass>
  </div>
</template>

<script>
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
import { mapGetters } from 'vuex'
import OccupationClass from '../../Common/occupationClass'

export default {
  created() {
    // 不為空則為未完成保單進入, 需帶入預設值
    if (this.$store.state.UNFINISHID !== null) {
      setTimeout(() => {
        this.GetIGoingPostData.QusAns.forEach((qus, index) => {
          this.OnEnsure(`QusAns${index + 1}`, qus.Answar)
        })
      }, 5000)
    } else {
      if (this.GetIGoingPostData.QusAns !== null && this.GetIGoingPostData.client_occupation_class !== undefined) {
        this.isShowAns1Error = this.GetIGoingPostData.QusAns[0].Answar
        this.isShowAns2Error = this.GetIGoingPostData.QusAns[1].Answar
        this.isShowAns3Error = this.GetIGoingPostData.QusAns[2].Answar
        this.isShowAns3Error = this.GetIGoingPostData.QusAns[3].Answar
      }
    }
  },
  components: {
    OccupationClass
  },
  data() {
    return {
      isShowAns1Error: '0',
      isShowAns2Error: '0',
      isShowAns3Error: '0',
      isShowAns4Error: '0',
      enuresArr: {
        QusAns1Yes: '',
        QusAns1No: '',
        QusAns2Yes: '',
        QusAns2No: '',
        QusAns3Yes: '',
        QusAns3No: '',
        QusAns4Yes: '',
        QusAns4No: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIGoingPostData
    ])
  },
  methods: {
    OnEnsure(target, value) {
      switch (target) {
        case 'QusAns1':
          if (value) {
            this.enuresArr.QusAns1Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns1No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns1Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns1No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns1Error = value
          this.GetIGoingPostData.QusAns[0].Answar = value
          break
          // 被保險人目前是否受有監護宣告
        case 'QusAns2':
          if (value) {
            this.enuresArr.QusAns2Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns2No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns2Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns2No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns2Error = value
          this.GetIGoingPostData.QusAns[1].Answar = value
          this.GetIGoingPostData.AuthorizedRep = value
          break
        case 'QusAns3':
          if (value) {
            this.enuresArr.QusAns3Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns3No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns3Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns3No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns3Error = value
          this.GetIGoingPostData.QusAns[2].Answar = value
          break
        case 'QusAns4':
          if (value) {
            this.enuresArr.QusAns4Yes = '../../../../../static/img/oval-ed.png'
            this.enuresArr.QusAns4No = '../../../../../static/img/oval.png'
          } else {
            this.enuresArr.QusAns4Yes = '../../../../../static/img/oval.png'
            this.enuresArr.QusAns4No = '../../../../../static/img/oval-ed.png'
          }
          this.isShowAns4Error = value
          this.GetIGoingPostData.QusAns[3].Answar = value
          break
      }
    }
  }
}

</script>
