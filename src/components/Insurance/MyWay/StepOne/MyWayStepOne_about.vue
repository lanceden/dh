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
          <select class="form-control data-input insure-select insure-input-block-edit" ref="jobCode" v-model="jobCode">
            <option value="0" selected="selected">請選擇</option>
            <option v-for="(item, index) in GetJobData" :key="index" :value="item.OCCUPATION_CODE">{{item.OCCUPATION_DESC}}</option>
          </select>
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="jobSubCode">
            <option value="0" selected="selected">請選擇</option>
            <option v-for="(item, index) in GetOccupationData" :key="index" :value="item.OCCUPATION_CODE">{{item.OCCUPATION_DESC}}</option>
          </select>
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="occupation">
            <option value="0" selected="selected">請選擇</option>
            <option v-for="(item, index) in GetJobSubCodeData" :key="index" :value="item.OCCUPATION_CODE">{{item.OCCUPATION_DESC}}</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">請問您是否領有身心障礙手冊或身心障礙證明？</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns1">
            <option value="0">請選擇</option>
            <option value="true">是</option>
            <option value="false">否</option>
          </select>
        </div>
        <label class="col-sm-12 col-form-label insure-label" v-show="isShowAns1Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">被保險人目前是否受有監護宣告？</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns2">
            <option value="0">請選擇</option>
            <option value="true">是</option>
            <option value="false">否</option>
          </select>
        </div>
        <label class="col-sm-12 col-form-label insure-label" v-show="isShowAns2Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">最近二個月內是否曾因受傷或生病接受醫師治療、診療或用藥？</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns3">
            <option value="0">請選擇</option>
            <option value="true">是</option>
            <option value="false">否</option>
          </select>
          <label class="col-sm-12 col-form-label insure-label" v-show="isShowAns3Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">過去一年內是否曾因患有下列疾病，而接受醫師治療、診療或用藥：</label>
        <label class="col-sm-12 col-form-label insure-label">(有任一者，請選擇“是”)</label>
        <div class="col-sm-12 insure-select-align">
          <div class="insure-notice-text">
            <ul class="insure-notice-text-ul">
              <li>酒精或藥物濫用成癮、眩暈症。</li>
              <li>食道、胃、十二指腸潰瘍或出血、潰瘍性大腸炎、胰臟炎、膽結石。</li>
              <li>肝炎病毒帶原、肝膿瘍、黃疸。</li>
              <li>慢性支氣管炎、氣喘、肺膿瘍、肺栓塞。</li>
              <li>痛風、高血脂症。</li>
              <li>青光眼、白內障。</li>
              <li>乳腺炎、乳漏症、子宮內膜異位症、陰道異常出血（女性被保險人回答）。</li>
            </ul>
          </div>
        </div>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns4">
            <option value="0">請選擇</option>
            <option value="true">是</option>
            <option value="false">否</option>
          </select>
        </div>
        <label class="col-sm-12 col-form-label insure-label" v-show="isShowAns4Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">過去二年內是否曾因接受健康檢查有異常情形而被建議接受其他檢查或治療?</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns5">
            <option value="0">請選擇</option>
            <option value="true">是</option>
            <option value="false">否</option>
          </select>
        </div>
        <label class="col-sm-12 col-form-label insure-label" v-show="isShowAns5Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">過去五年內是否曾因患有下列疾病，而接受醫師治療、診療或用藥：</label>
        <label class="col-sm-12 col-form-label insure-label">(有任一者，請選擇“是”)</label>
        <div class="insure-notice-text">
          <ul class="insure-notice-text-ul">
            <li>高血壓症（指收縮壓140mmHg或舒張壓90mmHg以上）（如 有請於「詳細填告欄」填明實際之血壓）、狹心症、心肌梗塞、 心肌肥厚、心內膜炎、風濕性心臟病、先天性心臟病、主動脈血 管瘤、心律不整（指竇性心跳過速、心房撲動、心房纖維性顫動 、期外收縮、陣發性心跳過速、心室纖維性顫動、心臟傳導阻斷 ）。</li>
            <li>腦中風（腦出血、腦梗塞、腦栓塞）、腦瘤、腦動脈血管瘤、腦 動脈硬化症、癲癇、肌肉萎縮症、重症肌無力、巴金森氏症、精 神病。</li>
            <li>肺氣腫、支氣管擴張症、塵肺症、肺結核。</li>
            <li>肝炎、肝內結石、肝硬化、肝功能異常（GOT、GPT值檢測值 有異常情形者）。</li>
            <li>腎臟炎、腎病症候群、腎機能不全、尿毒、腎囊胞。</li>
            <li>視網膜出血或剝離、視神經病變。</li>
            <li>癌症（惡性腫瘤）。</li>
            <li>血友病、白血病、貧血（再生不良性貧血、地中海型貧血）、紫 斑症。</li>
            <li>糖尿病、類風濕性關節炎、肢端肥大症、腦下垂體機能亢進或低 下、甲狀腺或副甲狀腺功能亢進或低下。</li>
            <li>紅斑性狼瘡、膠原症。</li>
            <li>愛滋病或愛滋病帶原。</li>
          </ul>
        </div>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns6">
            <option value="0">請選擇</option>
            <option value="true">是</option>
            <option value="false">否</option>
          </select>
        </div>
        <label class="col-sm-12 col-form-label insure-label" v-show="isShowAns6Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">過去五年內，是否曾因受傷或生病住院治療七日以上?</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns7">
            <option value="0">請選擇</option>
            <option value="true">是</option>
            <option value="false">否</option>
          </select>
        </div>
        <label class="col-sm-12 col-form-label insure-label" v-show="isShowAns7Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>
      <div class="form-group row">
        <label class="col-sm-12 col-form-label insure-label">目前身體機能狀況是否有失明、聾啞及言語、咀嚼、四肢機能障害、智能障礙（外表無法明顯判斷者）?</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns8">
            <option value="0">請選擇</option>
            <option value="true">是</option>
            <option value="false">否</option>
          </select>
        </div>
        <label class="col-sm-12 col-form-label insure-label" v-show="isShowAns8Error === true">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
      </div>
    </form>
  </div>
</template>

<script>
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      isShowAns1Error: '0',
      isShowAns2Error: '0',
      isShowAns3Error: '0',
      isShowAns4Error: '0',
      isShowAns5Error: '0',
      isShowAns6Error: '0',
      isShowAns7Error: '0',
      isShowAns8Error: '0'
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetMyWayIsInit,
      GetterTypes.GetMyWayPostData,
      'GetJob',
      'GetJobData',
      'GetOccupation',
      'GetOccupationData',
      'GetJobSubCodeData'
    ]),
    // 請問您是否領有身心障礙手冊或身心障礙證明?
    QusAns1: {
      get() {
        return this.isShowAns1Error
      },
      set(value) {
        this.isShowAns1Error = value === 'true'
        this.GetMyWayPostData.QusAns[0].Answar = (value === 'true')
      }
    },
    QusAns2: {
      get() {
        return this.isShowAns2Error
      },
      set(value) {
        this.isShowAns2Error = value === 'true'
        this.GetMyWayPostData.QusAns[1].Answar = (value === 'true')
      }
    },
    QusAns3: {
      get() {
        return this.isShowAns3Error
      },
      set(value) {
        this.isShowAns3Error = value === 'true'
        this.GetMyWayPostData.QusAns[2].Answar = (value === 'true')
      }
    },
    QusAns4: {
      get() {
        return this.isShowAns4Error
      },
      set(value) {
        this.isShowAns4Error = value === 'true'
        this.GetMyWayPostData.QusAns[3].Answar = (value === 'true')
      }
    },
    QusAns5: {
      get() {
        return this.isShowAns5Error
      },
      set(value) {
        this.isShowAns5Error = value === 'true'
        this.GetMyWayPostData.QusAns[4].Answar = (value === 'true')
      }
    },
    QusAns6: {
      get() {
        return this.isShowAns6Error
      },
      set(value) {
        this.isShowAns6Error = value === 'true'
        this.GetMyWayPostData.QusAns[5].Answar = (value === 'true')
      }
    },
    QusAns7: {
      get() {
        return this.isShowAns7Error
      },
      set(value) {
        this.isShowAns7Error = value === 'true'
        this.GetMyWayPostData.QusAns[6].Answar = (value === 'true')
      }
    },
    QusAns8: {
      get() {
        return this.isShowAns8Error
      },
      set(value) {
        this.isShowAns8Error = value === 'true'
        this.GetMyWayPostData.QusAns[7].Answar = (value === 'true')
      }
    },
    // 您的職業類別
    jobCode: {
      get() {
        return this.GetJob || 0
      },
      set(value) {
        this.FuncGetOccupation({
          NoClass: value,
          PlanCode: 'LAA01',
          Type: '4'
        })
        this.$store.state.JOB = value
      }
    },
    // 職業中類
    jobSubCode: {
      get() {
        return this.$store.state.JOBSUBCODE || 0
      },
      set(value) {
        this.FuncGetOccupation({
          NoClass: this.$store.state.JOB,
          PlanCode: 'LAA01',
          Type: '8',
          subCode: value
        })
        this.$store.state.JOBSUBCODE = value
      }
    },
    occupation: {
      get() {
        return this.GetOccupation || 0
      },
      set(value) {
        this.$store.state.OCCUPATION = value
        if (value === '0') {
          alert('請選擇職業名稱')
          this.GetMyWayPostData.client_occupation_class = ''
          this.GetMyWayPostData.client_occupation_class_code = ''
          this.GetMyWayPostData.client_occupation_class_code_name = ''
          this.GetMyWayPostData.client_occupation_level = ''
          this.GetMyWayPostData.client_occupation_sub_level = ''
          return
        }
        this.GetJobSubCodeData.forEach(data => {
          if (data.OCCUPATION_CODE === value) {
            this.GetMyWayPostData.client_occupation_class = data.OCCUPATION_CLASS
            this.GetMyWayPostData.client_occupation_class_code = data.OCCUPATION_CODE
            this.GetMyWayPostData.client_occupation_class_code_name = data.OCCUPATION_DESC
            this.GetMyWayPostData.client_occupation_level = this.$store.state.JOB
            this.GetMyWayPostData.client_occupation_sub_level = this.$store.state.JOBSUBCODE
          }
        })
      }
    }
  },
  created() {
    if (!this.GetMyWayIsInit) {
      this.GetMyWayPostData.QusAns = [{ Answar: '0' }, { Answar: '0' }, { Answar: '0' },
        { Answar: '0' }, { Answar: '0' }, { Answar: '0' },
        { Answar: '0' }, { Answar: false }, { Answar: false }
      ]
      this.FuncGetJob()
      this.FuncGetOccupation({
        NoClass: '00',
        PlanCode: 'LAA01',
        Type: '4'
      })
    }
  },
  methods: {
    ...mapActions([
      'FuncGetJob',
      'FuncGetOccupation'
    ])
  }
}

</script>
