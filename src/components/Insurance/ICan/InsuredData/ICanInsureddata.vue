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
            <div class="form-control insure-input-block">{{GetICanPostData.VerifyTypeList['2']}}</div>
            <div class="form-control insure-input-block">{{GetICanPostData.VerifyTypeList['3']}}</div>
            <div class="form-control insure-input-block">{{GetICanPostData.VerifyTypeList['4']}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">保單形式</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">電子保單</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">要保人電子郵件</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">{{GetICanPostData.email}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">要保人手機號碼</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">{{GetICanPostData.phone_mobile}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">總保險費</label>
          <div class="col-sm-12">
            <div class="insure-input-block">NT$ {{GetICanPostData.mode_prem|decimalComma}} 元</div>
          </div>
        </div>
      </form>
    </div>

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
          <label for="" class="col-sm-12 col-form-label insure-label">險種名稱-主約</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetICanPostData.ins_type_name}}</div>
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
            <div class="insure-input-block">{{GetICanPostData.po_issue_date_Name}}午夜十二時起</div>
            <div class="insure-input-block">至{{GetICanPostData.matured_date_Name}}午夜十二時止，共 {{GetICanPostData.TrvDays}} 天</div>
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
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">意外身故保險金或喪葬費用保險金</label>
          <div class="col-sm-12">
            <div class="insure-input-block"><span id="CalcAmtDesc2"></span> </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">意外失能保險金</label>
          <div class="col-sm-12">
            <div class="insure-input-block">依失能程度按契約附表比例計算，最高為<span id="CalcAmtDesc3"></span> </div>
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label insure-label">意外骨折保險金</label>
          <div class="col-sm-12">
            <div class="insure-input-block"><span id="broken-bones-acc-amt"></span> </div>
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
            <div class="insure-input-block">{{GetICanPostData.client_names}} (要被保人須為同一人)</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetICanPostData.Birthday_Full}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保年齡</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetICanPostData.Age}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetICanPostData.client_id}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">性別</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetICanPostData.client_rate_sex === '1' ? '男' : '女'}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{GetICanPostData.phone_area}}{{GetICanPostData.phone_main}}{{GetICanPostData.phone_ext}}<br>手機：{{GetICanPostData.phone_mobile}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">通訊地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetICanPostData.address1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">戶籍地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetICanPostData.address2}}</div>
          </div>
        </div>
      </form>
    </div>

    <!-- 受益人一 -->
    <BenfOneInsuredData :stateData="GetICanPostData"></BenfOneInsuredData>
    <!-- 受益人二 -->
    <BenfTwoInsuredData :stateData="GetICanPostData"></BenfTwoInsuredData>
    <!-- 受益人三 -->
    <BenfThreeInsuredData :stateData="GetICanPostData"></BenfThreeInsuredData>

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
      <div class="insure-text">
        依主管機關規定，要保人及被保人資料需為同一人。
      </div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">您的職業類別</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetICanPostData.client_occupation_class_detail}}</div>
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
            <div class="insure-input-block">否</div>
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
            <div class="insure-input-block" v-show="parseInt(GetICanPostData.owner_marriage) === 1">未婚</div>
            <div class="insure-input-block" v-show="parseInt(GetICanPostData.owner_marriage) === 2">已婚</div>
            <div class="insure-input-block" v-show="parseInt(GetICanPostData.owner_marriage) === 3">離婚</div>
            <div class="insure-input-block" v-show="parseInt(GetICanPostData.owner_marriage) === 4">喪偶</div>
            <div class="insure-input-block" v-show="parseInt(GetICanPostData.owner_marriage) === 5">分居</div>
            <div class="insure-input-block" v-show="parseInt(GetICanPostData.owner_marriage) === 6">其他</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">年收入</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetICanPostData.insured_income}}萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">家庭收入</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetICanPostData.insured_fam_income}}萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">電訪時間</label>
          <div class="col-sm-12">
            <div class="insure-input-block">
              <span v-show="parseInt(GetICanPostData.visit_time1) === 1">早上9點~12點</span>
              <span v-show="parseInt(GetICanPostData.visit_time1) === 1 && parseInt(GetICanPostData.visit_time2) === 1">,</span>
              <span v-show="parseInt(GetICanPostData.visit_time2) === 1">下午1點～6點</span>
              <span v-show="parseInt(GetICanPostData.visit_time2) === 1 && parseInt(GetICanPostData.visit_time3) === 1">,</span>
              <span v-show="parseInt(GetICanPostData.visit_time3) === 1">晚上6點~9點</span>
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-notice-text">
            依主管機關「保險業辦理電子商務應注意事項」本公司將抽樣電訪確認投保。
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'
import ICanGetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
import BenfOneInsuredData from '../../Common/benfOneInsuredData'
import BenfTwoInsuredData from '../../Common/benfTwoInsuredData'
import BenfThreeInsuredData from '../../Common/benfThreeInsuredData'

export default {
  mounted() {
    this.test(this.GetICanPostData.face_amt)
  },
  components: {
    BenfOneInsuredData,
    BenfTwoInsuredData,
    BenfThreeInsuredData
  },
  computed: {
    ...mapGetters([
      ICanGetterTypes.GetICanPostData
    ])
  },
  methods: {
    test(faceamt) {
      let prem = parseInt(this.GetICanPostData.face_amt)
      console.log(prem)
      $('#CalcAmtDesc2').text(prem + '萬元')
      $('#CalcAmtDesc3').text(prem + '萬元')
      let maxPerc = 1.75
      let minPerc = 0.1 / 4
      let maxAmt = prem * maxPerc / 100
      let minAmt = prem * minPerc / 100
      $('#broken-bones-acc-amt').text(minAmt + '萬元' + ' ~ ' + maxAmt + '萬元')
    }
  }
}

</script>
