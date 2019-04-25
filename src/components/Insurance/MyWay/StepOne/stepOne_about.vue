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
          <label class="col-sm-12 col-form-label insure-label">請問您是否領有身心障礙手冊或身心障礙證明?</label>
          <div class="col-sm-12 insure-select-align">
            <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns">
              <option value="0">請選擇</option>
              <option value="true">是</option>
              <option value="false">否</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-12 col-form-label insure-label">被保險人目前是否受有監護宣告?</label>
          <div class="col-sm-12 insure-select-align">
            <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns2">
              <option value="0">請選擇</option>
              <option value="true">是</option>
              <option value="false">否</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-12 col-form-label insure-label">最近二個月內是否曾因受傷或生病接受醫師治療、診療或用藥?</label>
          <div class="col-sm-12 insure-select-align">
            <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns3">
              <option value="0">請選擇</option>
              <option value="true">是</option>
              <option value="false">否</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-12 col-form-label insure-label">過去一年內是否曾因患有下列疾病，而接受醫師治療、診療或用藥：</label>
          <label class="col-sm-12 col-form-label insure-label">(有任一者，請選擇“是”)</label>
          <ul>
            <li>酒精或藥物濫用成癮、眩暈症。</li>
            <li>食道、胃、十二指腸潰瘍或出血、潰瘍性大腸炎、胰臟炎、膽結石。</li>
            <li>肝炎病毒帶原、肝膿瘍、黃疸。</li>
            <li>慢性支氣管炎、氣喘、肺膿瘍、肺栓塞。</li>
            <li>痛風、高血脂症。</li>
            <li>青光眼、白內障。</li>
            <li>乳腺炎、乳漏症、子宮內膜異位症、陰道異常出血（女性被保險人回答）。</li>
          </ul>
          <div class="col-sm-12 insure-select-align">
            <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns4">
              <option value="0">請選擇</option>
              <option value="true">是</option>
              <option value="false">否</option>
            </select>
          </div>
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
        </div>
        <div class="form-group row">
          <label class="col-sm-12 col-form-label insure-label">過去五年內是否曾因患有下列疾病，而接受醫師治療、診療或用藥：</label>
          <label class="col-sm-12 col-form-label insure-label">(有任一者，請選擇“是”)</label>
          <ul>
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
          <div class="col-sm-12 insure-select-align">
            <select class="form-control data-input insure-select insure-input-block-edit" v-model="QusAns6">
              <option value="0">請選擇</option>
              <option value="true">是</option>
              <option value="false">否</option>
            </select>
          </div>
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
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">職業類別</label>
          <div class="col-sm-12 insure-select-align">
            <select class="form-control data-input insure-select insure-input-block-edit" ref="jobCode" v-model="jobCode">
              <option v-for="(item, index) in GetJobData" :key="index" :value="item.OCCUPATION_CODE">{{item.OCCUPATION_DESC}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">職業名稱</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="occupation">
              <option value="0" selected="selected">請選擇</option>
              <option v-for="(item, index) in GetOccupationData" :key="index" :value="item.OCCUPATION_CODE">{{item.OCCUPATION_DESC}}</option>
            </select>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.MyWayGetIsInit,
      'GetJob',
      'GetJobData',
      'GetOccupation',
      'GetOccupationData'
    ]),
    QusAns: {
      get() {
        if (this.$store.state.MyWay.POSTDATA.QusAns === undefined ||
          this.$store.state.MyWay.POSTDATA.QusAns === null) {
          return '0'
        } else return this.$store.state.MyWay.POSTDATA.QusAns[0].Answar
      },
      set(value) {
        let result = value === 'true'
        if (value === '0') {
          result = '0'
          alert('請選擇本人是否領有身心障礙手冊或身心障礙證明')
        }
        if (result) {
          alert('親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。')
        }
        this.$store.state.MyWay.POSTDATA.QusAns = [{ Answar: result }, { Answar: this.QusAns2 }, { Answar: this.QusAns3 }, { Answar: this.QusAns4 }, { Answar: this.QusAns5 }, { Answar: this.QusAns6 }, { Answar: this.QusAns7 }, { Answar: this.QusAns8 }]
      }
    },
    QusAns2: {
      get() {
        if (this.$store.state.MyWay.POSTDATA.QusAns === undefined ||
          this.$store.state.MyWay.POSTDATA.QusAns === null) {
          return '0'
        } else return this.$store.state.MyWay.POSTDATA.QusAns[1].Answar
      },
      set(value) {
        let result = value === 'true'
        if (value === '0') {
          result = '0'
          alert('請選擇被保險人目前是否受有監護宣告')
        }
        if (result) {
          alert('親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。')
        }
        this.$store.state.MyWay.POSTDATA.QusAns = [{ Answar: this.QusAns }, { Answar: result }, { Answar: this.QusAns3 }, { Answar: this.QusAns4 }, { Answar: this.QusAns5 }, { Answar: this.QusAns6 }, { Answar: this.QusAns7 }, { Answar: this.QusAns8 }]
      }
    },
    QusAns3: {
      get() {
        if (this.$store.state.MyWay.POSTDATA.QusAns === undefined ||
          this.$store.state.MyWay.POSTDATA.QusAns === null) {
          return '0'
        } else return this.$store.state.MyWay.POSTDATA.QusAns[2].Answar
      },
      set(value) {
        let result = value === 'true'
        if (value === '0') {
          result = '0'
          alert('請選擇最近二個月內是否曾因受傷或生病接受醫師治療、診療或用藥')
        }
        if (result) {
          alert('親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。')
        }
        this.$store.state.MyWay.POSTDATA.QusAns = [{ Answar: this.QusAns }, { Answar: this.QusAns2 }, { Answar: result }, { Answar: this.QusAns4 }, { Answar: this.QusAns5 }, { Answar: this.QusAns6 }, { Answar: this.QusAns7 }, { Answar: this.QusAns8 }]
      }
    },
    QusAns4: {
      get() {
        if (this.$store.state.MyWay.POSTDATA.QusAns === undefined ||
          this.$store.state.MyWay.POSTDATA.QusAns === null) {
          return '0'
        } else return this.$store.state.MyWay.POSTDATA.QusAns[3].Answar
      },
      set(value) {
        let result = value === 'true'
        if (value === '0') {
          result = '0'
          alert('請選擇過去一年內是否曾因患有下列疾病，而接受醫師治療、診療或用藥')
        }
        if (result) {
          alert('親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。')
        }
        this.$store.state.MyWay.POSTDATA.QusAns = [{ Answar: this.QusAns }, { Answar: this.QusAns2 }, { Answar: this.QusAns3 }, { Answar: result }, { Answar: this.QusAns5 }, { Answar: this.QusAns6 }, { Answar: this.QusAns7 }, { Answar: this.QusAns8 }]
      }
    },
    QusAns5: {
      get() {
        if (this.$store.state.MyWay.POSTDATA.QusAns === undefined ||
          this.$store.state.MyWay.POSTDATA.QusAns === null) {
          return '0'
        } else return this.$store.state.MyWay.POSTDATA.QusAns[4].Answar
      },
      set(value) {
        let result = value === 'true'
        if (value === '0') {
          result = '0'
          alert('請選擇過去二年內是否曾因接受健康檢查有異常情形而被建議接受其他檢查或治療')
        }
        if (result) {
          alert('親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。')
        }
        this.$store.state.MyWay.POSTDATA.QusAns = [{ Answar: this.QusAns }, { Answar: this.QusAns2 }, { Answar: this.QusAns3 }, { Answar: this.QusAns4 }, { Answar: result }, { Answar: this.QusAns6 }, { Answar: this.QusAns7 }, { Answar: this.QusAns8 }]
      }
    },
    QusAns6: {
      get() {
        if (this.$store.state.MyWay.POSTDATA.QusAns === undefined ||
          this.$store.state.MyWay.POSTDATA.QusAns === null) {
          return '0'
        } else return this.$store.state.MyWay.POSTDATA.QusAns[5].Answar
      },
      set(value) {
        let result = value === 'true'
        if (value === '0') {
          result = '0'
          alert('請選擇過去五年內是否曾因患有下列疾病，而接受醫師治療、診療或用藥')
        }
        if (result) {
          alert('親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。')
        }
        this.$store.state.MyWay.POSTDATA.QusAns = [{ Answar: this.QusAns }, { Answar: this.QusAns2 }, { Answar: this.QusAns3 }, { Answar: this.QusAns4 }, { Answar: this.QusAns5 }, { Answar: result }, { Answar: this.QusAns7 }, { Answar: this.QusAns8 }]
      }
    },
    QusAns7: {
      get() {
        if (this.$store.state.MyWay.POSTDATA.QusAns === undefined ||
          this.$store.state.MyWay.POSTDATA.QusAns === null) {
          return '0'
        } else return this.$store.state.MyWay.POSTDATA.QusAns[6].Answar
      },
      set(value) {
        let result = value === 'true'
        if (value === '0') {
          result = '0'
          alert('請選擇過去五年內，是否曾因受傷或生病住院治療七日以上')
        }
        if (result) {
          alert('親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。')
        }
        this.$store.state.MyWay.POSTDATA.QusAns = [{ Answar: this.QusAns }, { Answar: this.QusAns2 }, { Answar: this.QusAns3 }, { Answar: this.QusAns4 }, { Answar: this.QusAns5 }, { Answar: this.QusAns6 }, { Answar: result }, { Answar: this.QusAns8 }]
      }
    },
    QusAns8: {
      get() {
        if (this.$store.state.MyWay.POSTDATA.QusAns === undefined ||
          this.$store.state.MyWay.POSTDATA.QusAns === null) {
          return '0'
        } else return this.$store.state.MyWay.POSTDATA.QusAns[7].Answar
      },
      set(value) {
        let result = value === 'true'
        if (value === '0') {
          result = '0'
          alert('請選擇目前身體機能狀況是否有失明、聾啞及言語、咀嚼、四肢機能障害、智能障礙（外表無法明顯判斷者）')
        }
        if (result) {
          alert('親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。')
        }
        this.$store.state.MyWay.POSTDATA.QusAns = [{ Answar: this.QusAns }, { Answar: this.QusAns2 }, { Answar: this.QusAns3 }, { Answar: this.QusAns4 }, { Answar: this.QusAns5 }, { Answar: this.QusAns6 }, { Answar: this.QusAns7 }, { Answar: result }]
      }
    },
    jobCode: {
      get() {
        return this.GetJob
      },
      set(value) {
        this.FuncGetOccupation(value)
        this.$store.state.MyWay.JOB = value
      }
    },
    occupation: {
      get() {
        return this.GetOccupation
      },
      set(value) {
        this.$store.state.OCCUPATION = value
        if (value === '0') {
          alert('請選擇職業名稱')
          this.$store.state.MyWay.POSTDATA.client_occupation_class = ''
          this.$store.state.MyWay.POSTDATA.client_occupation_class_code = ''
          this.$store.state.MyWay.POSTDATA.client_occupation_class_code_name = ''
          return
        }
        this.GetOccupationData.forEach(data => {
          if (data.OCCUPATION_CODE === value) {
            this.$store.state.MyWay.POSTDATA.client_occupation_class = data.OCCUPATION_CLASS
            this.$store.state.MyWay.POSTDATA.client_occupation_class_code = data.OCCUPATION_CODE
            this.$store.state.MyWay.POSTDATA.client_occupation_class_code_name = data.OCCUPATION_DESC
          }
        })
      }
    }
  },
  created() {
    if (!this.MyWayGetIsInit) {
      this.FuncGetJob()
      this.FuncGetOccupation('00')
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
