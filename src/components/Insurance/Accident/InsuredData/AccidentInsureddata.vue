<template>
  <div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title">投保資訊</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">驗證身份方式</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">{{GetAccidentPostData.VerifyTypeList['2']}}</div>
            <div class="form-control insure-input-block">{{GetAccidentPostData.VerifyTypeList['3']}}</div>
            <div class="form-control insure-input-block">{{GetAccidentPostData.VerifyTypeList['4']}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">保險單形式</label>
          <div class="col-sm-12">
            <div class="insure-input-block">紙本保單</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">保險單寄送地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetAccidentPostData.city1}}{{GetAccidentPostData.district1}}{{GetAccidentPostData.road1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">總保險費</label>
          <div class="col-sm-12">
            <div class="insure-input-block">NT$ {{GetAccidentPostData.mode_prem|decimalComma}} </div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title">投保內容</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">險種名稱-主約</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetAccidentPostData.ins_type_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">主約保額</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetAccidentPostData.face_amt}} 萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保始期(保單生效日)</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">{{GetAccidentPostData.po_issue_date_Name}} 午夜十二時起</div>
            <div class="form-control insure-input-block">{{GetAccidentPostData.matured_date_Name}} 午夜十二時止，共 365</div>
            <div class="form-control insure-input-block">天</div>
          </div>
        </div>
      </form>
    </div>

    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title">保障內容</div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身故或喪葬費用保險金</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetAccidentPostData.face_amt}}萬元</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">意外失能保險金</label>
        <div class="col-sm-12">
          <div class="insure-input-block">依失能程度按契約附表比例計算，最高為{{GetAccidentPostData.face_amt}}萬元</div>
        </div>
      </div>
    </div>

    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title">保單資訊</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetAccidentPostData.client_names}}(要被保人須為同一人)</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetAccidentPostData.Birthday_Full}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保年齡</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetAccidentPostData.Age}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetAccidentPostData.client_id}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">性別</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetAccidentPostData.client_rate_sex === '1' ? '男' : '女'}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{GetAccidentPostData.phone_area}}{{GetAccidentPostData.phone_main}}{{GetAccidentPostData.phone_ext}}</div>
            <div class="insure-input-block">手機：{{GetAccidentPostData.phone_mobile}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">通訊地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetAccidentPostData.address1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">戶籍地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetAccidentPostData.address2}}</div>
          </div>
        </div>
      </form>
    </div>

    <!-- 受益人一 -->
    <BenfOneInsuredData :stateData="GetAccidentPostData"></BenfOneInsuredData>
    <!-- 受益人二 -->
    <BenfTwoInsuredData :stateData="GetAccidentPostData"></BenfTwoInsuredData>
    <!-- 受益人三 -->
    <BenfThreeInsuredData :stateData="GetAccidentPostData"></BenfThreeInsuredData>

    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title">被保人投保資料告知事項</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">您的職業類別</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetAccidentPostData.client_occupation_class_name}} {{GetAccidentPostData.client_occupation_class_detail}}</div>
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

    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title">被保人其他告知事項</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <div class="insure-text">
        依主管機關規定，要保人及被保人資料需為同一人。
      </div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">婚姻狀況</label>
          <div class="col-sm-12">
            <div class="insure-input-block" v-show="parseInt(GetAccidentPostData.owner_marriage) === 1">未婚</div>
            <div class="insure-input-block" v-show="parseInt(GetAccidentPostData.owner_marriage) === 2">已婚</div>
            <div class="insure-input-block" v-show="parseInt(GetAccidentPostData.owner_marriage) === 3">離婚</div>
            <div class="insure-input-block" v-show="parseInt(GetAccidentPostData.owner_marriage) === 4">喪偶</div>
            <div class="insure-input-block" v-show="parseInt(GetAccidentPostData.owner_marriage) === 5">分居</div>
            <div class="insure-input-block" v-show="parseInt(GetAccidentPostData.owner_marriage) === 6">其他</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">年收入</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetAccidentPostData.insured_income}}萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">家庭收入</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetAccidentPostData.insured_fam_income}}萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">電訪時間</label>
          <div class="col-sm-12">
            <div class="insure-input-block">
              <span v-show="parseInt(GetAccidentPostData.visit_time1) === 1">早上9點~12點</span>
              <span v-show="parseInt(GetAccidentPostData.visit_time1) === 1 && parseInt(GetAccidentPostData.visit_time2) === 1">,</span>
              <span v-show="parseInt(GetAccidentPostData.visit_time2) === 1">下午1點～6點</span>
              <span v-show="parseInt(GetAccidentPostData.visit_time2) === 1 && parseInt(GetAccidentPostData.visit_time3) === 1">,</span>
              <span v-show="parseInt(GetAccidentPostData.visit_time3) === 1">晚上6點~9點</span>
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-tips-text first-blue">
            依主管機關「保險業辦理電子商務應注意事項」本公司將抽樣電訪確認投保。
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes.js'
import BenfOneInsuredData from '../../Common/benfOneInsuredData.vue'
import BenfTwoInsuredData from '../../Common/benfTwoInsuredData'
import BenfThreeInsuredData from '../../Common/benfThreeInsuredData'

export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetAccidentPostData
    ])
  },
  components: {
    BenfOneInsuredData,
    BenfTwoInsuredData,
    BenfThreeInsuredData
  }
}

</script>
