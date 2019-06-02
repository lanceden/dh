<template>
  <div>
    <InsuredDataInsuredInfo :stateData="GetIGoingPostData"></InsuredDataInsuredInfo>
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
            <div class="insure-input-block">{{GetIGoingPostData.ins_type_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">主約保額</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetIGoingPostData.face_amt}} 萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保始期(保單生效日)</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">{{GetIGoingPostData.po_issue_date_Name}}午夜十二時起</div>
            <div class="form-control insure-input-block">{{GetIGoingPostData.matured_date_Name}}午夜十二時止，共365天</div>
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
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">交通意外身故保險金或喪葬費用保險金</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetIGoingPostData.face_amt}}萬元</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">交通意外失能保險金</label>
        <div class="col-sm-12">
          <div class="insure-input-block">依失能程度按契約附表比例計算，最高為{{GetIGoingPostData.face_amt}}萬元</div>
        </div>
      </div>
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
        <InsuredDataInfo :stateData="GetIGoingPostData"></InsuredDataInfo>
        <!-- 受益人一 -->
        <BenfOneInsuredData :stateData="GetIGoingPostData"></BenfOneInsuredData>
        <!-- 受益人二 -->
        <BenfTwoInsuredData :stateData="GetIGoingPostData"></BenfTwoInsuredData>
        <!-- 受益人三 -->
        <BenfThreeInsuredData :stateData="GetIGoingPostData"></BenfThreeInsuredData>
      </form>
    </div>
    <!-- 被保人投保資料告知事項 -->
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
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">您的職業類別</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetIGoingPostData.client_occupation_class_name}} {{GetIGoingPostData.client_occupation_class_detail}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">您是否領有身心障礙手冊或身心障礙證明</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">被保險人目前是否受有監護宣告</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">您過去二年內是否曾因患有下列疾病而接受醫師治療、診療或用藥?(有任一者，請選擇“是”)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="insure-text insure-text-explan">
            <ul class="insure-text-explancontent">
              <li class="decimal first">(高血壓症(指收縮壓140mmHg或舒張壓90mmHg以上)、狹心症、心肌梗塞、先天性心臟病、主動脈血管瘤。
              <li class="decimal">腦中風(腦中風、腦梗塞)、腦瘤、癲癇、智能障礙(外表無法明顯判斷者)、精神病、巴金森氏症。</li>
              <li class="decimal">癌症(惡性腫瘤)、肝硬化、尿毒、血友病。</li>
              <li class="decimal">糖尿病。</li>
              <li class="decimal">酒精或藥物濫用成癮、眩暈症。</li>
              <li class="decimal">視網膜出血或剝離、視神經病變。</li>
            </ul>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">您目前身體機能是否有下列障害：(有任一者，請選擇“是”)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="insure-text insure-text-explan">
            <ul class="insure-text-explancontent">
              <li class="decimal first">失明。
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
    <!-- 被保人其他告知事項 -->
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
        <InsuredDataOtherNotify :stateData="GetIGoingPostData"></InsuredDataOtherNotify>
        <InsuredDataPhone :stateData="GetIGoingPostData"></InsuredDataPhone>
      </form>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import IGoingGetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes.js'
import BenfOneInsuredData from '../../Common/insuredData/benfOneInsuredData'
import BenfTwoInsuredData from '../../Common/insuredData/benfTwoInsuredData'
import BenfThreeInsuredData from '../../Common/insuredData/benfThreeInsuredData'
import InsuredDataOtherNotify from '../../Common/insuredData/insuredDataOtherNotify.vue'
import InsuredDataPhone from '../../Common/insuredData/insuredDataPhone.vue'
import InsuredDataInsuredInfo from '../../Common/insuredData/insuredDataInsuredInfo.vue'
import InsuredDataInfo from '../../Common/insuredData/insuredDataInfo'

export default {
  computed: {
    ...mapGetters([
      IGoingGetterTypes.GetIGoingPostData
    ])
  },
  components: {
    BenfOneInsuredData,
    BenfTwoInsuredData,
    BenfThreeInsuredData,
    InsuredDataInsuredInfo,
    InsuredDataInfo,
    InsuredDataOtherNotify,
    InsuredDataPhone
  }
}

</script>
