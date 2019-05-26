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
            <div class="form-control insure-input-block">{{GetHealthPostData.VerifyTypeList['2']}}</div>
            <div class="form-control insure-input-block">{{GetHealthPostData.VerifyTypeList['3']}}</div>
            <div class="form-control insure-input-block">{{GetHealthPostData.VerifyTypeList['4']}}</div>
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
            <div class="insure-input-block">{{GetHealthPostData.city1}}{{GetHealthPostData.district1}}{{GetHealthPostData.road1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">總保險費</label>
          <div class="col-sm-12">
            <div class="insure-input-block">NT$ {{GetHealthPostData.mode_prem|decimalComma}} </div>
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
          <label for="" class="col-sm-12 col-form-label insure-label">險種名稱</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetHealthPostData.ins_type_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">保額</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetHealthPostData.face_amt}} 萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保始期(保單生效日)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetHealthPostData.po_issue_date_Name}} 午夜十二時起</div>
            <div class="insure-input-block">至{{GetHealthPostData.matured_date_Name}} 午夜十二時止，共 365</div>
            <div class="insure-input-block">天</div>
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
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">住院醫療費用保險金</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">同一次住院期間，憑收據正本於{{GetHealthPostData.face_amt}}萬元內實</div>
          <div class="form-control insure-input-block second">支實付。</div>
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
            <div class="insure-input-block">{{GetHealthPostData.client_names}}(要被保人須為同一人)</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetHealthPostData.Birthday_Full}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保年齡</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetHealthPostData.Age}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetHealthPostData.client_id}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">性別</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetHealthPostData.client_rate_sex === '1' ? '男' : '女'}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{GetHealthPostData.phone_area}}{{GetHealthPostData.phone_main}}{{GetHealthPostData.phone_ext}}</div>
            <div class="insure-input-block">手機：{{GetHealthPostData.phone_mobile}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">通訊地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetHealthPostData.address1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">戶籍地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetHealthPostData.address2}}</div>
          </div>
        </div>
      </form>
    </div>
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
            <div class="insure-input-block">{{GetHealthPostData.client_occupation_class_name}} {{GetHealthPostData.client_occupation_class_detail}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">您是否領有身心障礙手冊或身心障礙證明</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">請問您是否已投保其他商業實支實付型醫療保險？</label>
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
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">最近二個月內是否曾因受傷或生病接受醫師治療、診療或用藥</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">過去一年內是否曾因患有下列疾病，而接受 醫師治療、診療或用藥？(有任一者，請選擇 “是”)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="insure-text insure-text-explan">
            <ul class="insure-text-explancontent">
              <li class="decimal first">酒精或藥物濫用成癮、眩暈症。
              </li>
              <li class="decimal">食道、胃、十二指腸潰瘍或出血、潰瘍性大腸炎、胰臟炎、膽結石。</li>
              <li class="decimal">肝炎病毒帶原、肝膿瘍、黃疸。</li>
              <li class="decimal">慢性支氣管炎、氣喘、肺膿瘍、肺栓塞。</li>
              <li class="decimal">痛風、高血脂症。</li>
              <li class="decimal">青光眼、白內障。</li>
              <li class="decimal">乳腺炎、乳漏症、子宮內膜異位症、陰道異常出血（女性被保險人回答）。</li>
            </ul>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">過去二年內是否曾因接受健康檢查有異常情形而被建議接受其他檢查或治療?</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">過去五年內是否曾因患有下列疾病，而接受 醫師治療、診療或用藥？(有任一者，請選擇 “是”)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="insure-text insure-text-explan">
            <ul class="insure-text-explancontent">
              <li class="decimal first">高血壓症（指收縮壓140mmHg或舒張壓90mmHg以上）（如 有請於「詳細填告欄」填明實際之血壓）、狹心症、心肌梗塞、 心肌肥厚、心內膜炎、風濕性心臟病、先天性心臟病、主動脈血 管瘤、心律不整（指竇性心跳過速、心房撲動、心房纖維性顫動 、期外收縮、陣發性心跳過速、心室纖維性顫動、心臟傳導阻斷 ）。
              </li>
              <li class="decimal">腦中風（腦出血、腦梗塞、腦栓塞）、腦瘤、腦動脈血管瘤、腦 動脈硬化症、癲癇、肌肉萎縮症、重症肌無力、巴金森氏症、精 神病。</li>
              <li class="decimal">肺氣腫、支氣管擴張症、塵肺症、肺結核。</li>
              <li class="decimal">肝炎、肝內結石、肝硬化、肝功能異常（GOT、GPT值檢測值 有異常情形者）。</li>
              <li class="decimal">腎臟炎、腎病症候群、腎機能不全、尿毒、腎囊胞。</li>
              <li class="decimal">視網膜出血或剝離、視神經病變。</li>
              <li class="decimal">癌症（惡性腫瘤）。</li>
              <li class="decimal">血友病、白血病、貧血（再生不良性貧血、地中海型貧血）、紫 斑症。</li>
              <li class="decimal">糖尿病、類風濕性關節炎、肢端肥大症、腦下垂體機能亢進或低 下、甲狀腺或副甲狀腺功能亢進或低下。</li>
              <li class="decimal">紅斑性狼瘡、膠原症。</li>
              <li class="decimal">愛滋病或愛滋病帶原。</li>

            </ul>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">過去五年內，是否曾因受傷或生病住院治療七日以上？</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">目前身體機能狀況是否有失明、聾啞及言語、咀嚼、四肢機能障害、智能障礙（外表無法明顯判斷者）？</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
        </div>


        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">投保健康險者請繼續填寫本項</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
          <div class="border-bottom-line col-sm-12"></div>
          <div class="insure-text insure-text-explan">
            <ul class="insure-text-explancontent">
              <li class="decimal first">現在是否仍患有下列疾病？精神官能症、何杰金氏症、膽管炎、膽囊炎、梅毒、腦性麻痺、腦膿瘍、化膿性骨髓炎、併發有嘔吐現象的持續性頭痛、內耳炎、鼻竇炎、乳突炎、坐骨神經痛、椎間板脫出、腎結石、輸尿管結石、膀胱結石、腦膜炎、腦炎、水腦症。
              </li>
              <li class="decimal">是否曾金屬中毒、化學中毒或施行剖腹生產？</li>
            </ul>
          </div>
        </div>
      </form>
    </div>

    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
            <div class="insure-check-title">要保人匯款帳戶</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構代碼</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetHealthPostData.Applicant_BankCode}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構中文名稱</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetHealthPostData.Applicant_BranchName}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">銀行帳號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetHealthPostData.Applicant_Account}}</div>
          </div>
        </div>
      </form>
    </div>

    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
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
            <div class="insure-input-block" v-show="parseInt(GetHealthPostData.owner_marriage) === 1">未婚</div>
            <div class="insure-input-block" v-show="parseInt(GetHealthPostData.owner_marriage) === 2">已婚</div>
            <div class="insure-input-block" v-show="parseInt(GetHealthPostData.owner_marriage) === 3">離婚</div>
            <div class="insure-input-block" v-show="parseInt(GetHealthPostData.owner_marriage) === 4">喪偶</div>
            <div class="insure-input-block" v-show="parseInt(GetHealthPostData.owner_marriage) === 5">分居</div>
            <div class="insure-input-block" v-show="parseInt(GetHealthPostData.owner_marriage) === 6">其他</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">身高</label>
          <div class="col-sm-9">
            <div class="insure-input-block">{{GetHealthPostData.insured_height}}</div>
          </div>
          <label for="" class="col-sm-3 col-form-label insure-label insure-label-day">公分</label>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">體重</label>
          <div class="col-sm-9">
            <div class="insure-input-block">{{GetHealthPostData.insured_weight}}</div>
          </div>
          <label for="" class="col-sm-3 col-form-label insure-label insure-label-day">公斤</label>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">年收入</label>
          <div class="col-sm-9">
            <div class="insure-input-block">{{GetHealthPostData.insured_income}}</div>
          </div>
          <label for="" class="col-sm-3 col-form-label insure-label insure-label-day">萬元</label>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">家庭收入</label>
          <div class="col-sm-9">
            <div class="insure-input-block">{{GetHealthPostData.insured_fam_income}}</div>
          </div>
          <label for="" class="col-sm-3 col-form-label insure-label insure-label-day">萬元</label>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">電訪時間</label>
          <div class="col-sm-12">
            <div class="insure-input-block">
              <span v-show="parseInt(GetHealthPostData.visit_time1) === 1">早上9點~12點,</span>
              <span v-show="parseInt(GetHealthPostData.visit_time2) === 1">下午1點～6點,</span>
              <span v-show="parseInt(GetHealthPostData.visit_time3) === 1">晚上6點~9點</span>
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
import HealthGetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes.js'

export default {
  computed: {
    ...mapGetters([
      HealthGetterTypes.GetHealthPostData
    ])
  }
}

</script>
