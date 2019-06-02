<template>
  <div>
    <InsuredDataInsuredInfo :stateData="GetIWellPostData"></InsuredDataInsuredInfo>
    <!-- 投保內容 -->
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/notepad.png" alt=""></div>
            <div class="insure-check-title">投保內容</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">險種名稱-主約</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetIWellPostData.ins_type_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">險種名稱-附約</label>
          <div class="col-sm-12">
            <div class="insure-input-block">新光人壽網路投保傷害醫療保險附加條款保額2 萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保始期(保單生效日)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetIWellPostData.po_issue_date_Name}}午夜十二時起</div>
            <div class="insure-input-block">至{{GetIWellPostData.matured_date_Name}}午夜十二時止，共 {{GetIWellPostData.TrvDays}}天</div>
          </div>
        </div>
      </form>
    </div>
    <!-- 保障內容 -->
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/notepad.png" alt=""></div>
            <div class="insure-check-title">保障內容</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">意外身故保險金或喪葬費用保險金</label>
          <div class="col-sm-12">
            <div class="insure-input-block"><span id="CalcAmtDesc2"></span> </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">特定意外身故保險金或喪葬費用保險金(額外給付)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">依失能程度按契約附表比例計算，最高為<span id="CalcAmtDesc3"></span> </div>
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label insure-label">意外失能保險金</label>
          <div class="col-sm-12">
            <div class="insure-input-block"><span id="blind-acc-amt"></span> </div>
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label insure-label">特定意外失能保險金(額外給付)</label>
          <div class="col-sm-12">
            <div class="insure-input-block"><span id="specific-blind-acc-amt"></span> </div>
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label insure-label">傷害醫療保險金</label>
          <div class="col-sm-12">
            <div class="insure-input-block">2 萬元</div>
          </div>
        </div>
      </form>
    </div>
    <!-- 保單資訊 -->
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
            <div class="insure-check-title">保單資訊</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <InsuredDataInfo :stateData="GetIWellPostData"></InsuredDataInfo>
        <!-- 受益人一 -->
        <BenfOneInsuredData :stateData="GetIWellPostData"></BenfOneInsuredData>
        <!-- 受益人二 -->
        <BenfTwoInsuredData :stateData="GetIWellPostData"></BenfTwoInsuredData>
        <!-- 受益人三 -->
        <BenfThreeInsuredData :stateData="GetIWellPostData"></BenfThreeInsuredData>
      </form>
    </div>

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
        依主管機關規定，要保人及被保人資料需為同一人。
      </div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">您的職業類別</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetIWellPostData.client_occupation_class_name}} {{GetIWellPostData.client_occupation_class_detail}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">請問您是否領有身心障礙手冊或身心障礙證明:</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">請問您是否已投保其他商業實支實付型傷害醫療保險?</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetIWellPostData.QusAns[0].Answar ? '是' : '否'}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">被保險人目前是否受有監護宣告?</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">請問您過去二年內是否曾因患有下列疾病而接受醫師治療、診療或用藥? (有任一者，請選擇”是”)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="insure-text insure-text-explan">
            <ul class="insure-text-explancontent">
              <li class="decimal first">(高血壓症(指收縮壓140mmHg或舒張壓90mmHg以上)、狹心症、心肌梗塞、先天性心臟病、主動脈血管瘤。
              </li>
              <li class="decimal">腦中風(腦中風、腦梗塞)、腦瘤、癲癇、智能障礙(外表無法明顯判斷者)、精神病、巴金森氏症。</li>
              <li class="decimal">癌症(惡性腫瘤)、肝硬化、尿毒、血友病。</li>
              <li class="decimal">糖尿病。</li>
              <li class="decimal">酒精或藥物濫用成癮、眩暈症。</li>
              <li class="decimal">視網膜出血或剝離、視神經病變。</li>
            </ul>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">請問您目前身體機能是否有下列障害：(有任一者，請選擇”是”)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="insure-text insure-text-explan">
            <ul class="insure-text-explancontent">
              <li class="decimal first">失明。
              </li>
              <li class="decimal">是否曾因眼科疾病或傷害接受眼科專科醫師治療、診療或用藥，且一目視力經矯正後，最佳矯正視力在萬國視力表0.3以下。</li>
              <li class="decimal">聾。</li>
              <li class="decimal">是否曾因耳部疾病或傷害接受耳鼻喉科專科醫師治療、診療或用藥，且單耳聽力喪失程度在五十分貝(dB)以上。</li>
              <li class="decimal">啞。</li>
              <li class="decimal">咀嚼、吞嚥或言語機能障害。</li>
              <li class="decimal">四肢(含手指、足趾)缺損或畸形。</li>

            </ul>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/notepad.png" alt=""></div>
            <div class="insure-check-title">被保人其他告知事項</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="insure-text">
        依主管機關規定，要保人及被保人資料需為同一人。
      </div>
      <form class="form-bottom">
        <InsuredDataOtherNotify :stateData="GetIWellPostData"></InsuredDataOtherNotify>
        <InsuredDataPhone :stateData="GetIWellPostData"></InsuredDataPhone>
      </form>
    </div>
  </div>
</template>


<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'
import IWellGetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
import BenfOneInsuredData from '../../Common/benfOneInsuredData'
import BenfTwoInsuredData from '../../Common/benfTwoInsuredData'
import BenfThreeInsuredData from '../../Common/benfThreeInsuredData'
import InsuredDataOtherNotify from '../../Common/insuredData/insuredDataOtherNotify.vue'
import InsuredDataPhone from '../../Common/insuredData/insuredDataPhone.vue'
import InsuredDataInsuredInfo from '../../Common/insuredData/insuredDataInsuredInfo.vue'
import InsuredDataInfo from '../../Common/insuredData/insuredDataInfo'

export default {
  mounted() {
    this.test(this.GetIWellPostData.face_amt)
  },
  components: {
    BenfOneInsuredData,
    BenfTwoInsuredData,
    BenfThreeInsuredData,
    InsuredDataInsuredInfo,
    InsuredDataInfo,
    InsuredDataOtherNotify,
    InsuredDataPhone
  },
  computed: {
    ...mapGetters([
      IWellGetterTypes.GetIWellPostData
    ])
  },
  methods: {
    test(faceamt) {
      let prem = parseInt(this.GetIWellPostData.face_amt)
      console.log(prem)
      let maxPerc = 100 * 0.5
      let minPerc = 5 * 0.5
      let maxAmt = prem * maxPerc / 100
      let minAmt = prem * minPerc / 100
      $('#CalcAmtDesc2').text(maxAmt + '萬元')
      $('#CalcAmtDesc3').text(maxAmt + '萬元')
      $('#blind-acc-amt').text(minAmt + '萬元' + ' ~ ' + maxAmt + '萬元')
      $('#specific-blind-acc-amt').text(minAmt + '萬元' + ' ~ ' + maxAmt + '萬元')
    }
  }
}

</script>
