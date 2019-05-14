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
            <div class="form-control insure-input-block">{{mockData.VerifyTypeList['2']}}</div>
            <div class="form-control insure-input-block">{{mockData.VerifyTypeList['3']}}</div>
            <div class="form-control insure-input-block">{{mockData.VerifyTypeList['4']}}</div>
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
            <div class="insure-input-block">{{mockData.city1}}{{mockData.district1}}{{mockData.road1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">總保險費</label>
          <div class="col-sm-12">
            <div class="insure-input-block">NT$ {{mockData.mode_prem|decimalComma}} </div>
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
            <div class="insure-input-block">{{mockData.ins_type_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">保額</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.face_amt}} 萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保始期(保單生效日)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.po_issue_date_Name}} 午夜十二時起</div>
            <div class="insure-input-block">至{{mockData.matured_date_Name}} 午夜十二時止，共 365</div>
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
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身故保險金或喪葬費用保險金</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{mockData.face_amt}}萬元</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">完全失能保險金</label>
        <div class="col-sm-12">
          <div class="insure-input-block">依失能程度按契約附表比例計算，最高為</div>
          <div class="insure-input-block">{{mockData.face_amt}}萬元</div>
        </div>
      </div>
      <form class="form-bottom">
        <div class="col-sm-12">
          <div class="insure-tips-text first-blue text-red-i">
            本公司另加計按日數比例計算當期已繳付之未到期保險費，併入身故保險金或喪葬費用保險金或完全失能保險金內給付。
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
            <div class="insure-input-block">{{mockData.client_names}}(要被保人須為同一人)</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.Birthday_Full}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保年齡</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.Age}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.client_id}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">性別</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.client_rate_sex === '1' ? '男' : '女'}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{mockData.phone_area}}{{mockData.phone_main}}{{mockData.phone_ext}}</div>
            <div class="insure-input-block">手機：{{mockData.phone_mobile}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">通訊地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.address1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">戶籍地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.address2}}</div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title">身故受益人(一)資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身故受益人(一)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.benf_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="col-sm-12">
            <div class="insure-input-block">順位1，{{mockData.relation_ben_death_seq_percent}}%</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">受益人關係</label>
          <div class="col-sm-12">
            <div class="insure-input-block" v-show="parseInt(mockData.relation_ben_death) === 2">配偶</div>
            <div class="insure-input-block" v-show="parseInt(mockData.relation_ben_death) === 3">父母子女</div>
            <div class="insure-input-block" v-show="parseInt(mockData.relation_ben_death) === 6">祖孫</div>
            <div class="insure-input-block" v-show="parseInt(mockData.relation_ben_death) === 8">法定繼承人</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">國籍</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.BenfNationality}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.benf_dob}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.benf_id}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{mockData.benf_phone}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.BenfAdd_City}}{{mockData.BenfAdd_County}}{{mockData.BenfAddRemain}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">金融機構代號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.BenfBankCode1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">分行中文名稱</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.BenfBankBranchName1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">帳號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.BenfBankAccount1}}</div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius" v-show="parseInt(mockData.benf_num) > 1">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title">身故受益人(二)資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>

      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身故受益人(二)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.benf_name2}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="col-sm-12">
            <div class="insure-input-block">順位1，{{mockData.relation_ben_death_seq_percent2}}%</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">受益人關係</label>
          <div class="col-sm-12">
            <div class="insure-input-block" v-show="parseInt(mockData.relation_ben_death2) === 2">配偶</div>
            <div class="insure-input-block" v-show="parseInt(mockData.relation_ben_death2) === 3">父母子女</div>
            <div class="insure-input-block" v-show="parseInt(mockData.relation_ben_death2) === 6">祖孫</div>
            <div class="insure-input-block" v-show="parseInt(mockData.relation_ben_death2) === 8">法定繼承人</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{mockData.benf_phone2}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.BenfAdd_City2}}{{mockData.BenfAdd_County2}}{{mockData.BenfAddRemain2}}</div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius" v-show="parseInt(mockData.benf_num) > 2">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title">身故受益人(三)資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身故受益人(三)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">法定繼承人</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="col-sm-12">
            <div class="insure-input-block">順位3，100%</div>
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
            <div class="insure-input-block">{{mockData.client_occupation_class_name}} {{mockData.client_occupation_class_detail}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">您是否領有身心障礙手冊或身心障礙證明:</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">被保險人目前是否受有監護宣告？</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">最近二個月內是否曾因受傷或生病接受醫師治療、診療或用藥？</label>
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
              <li class="decimal first">酒精或藥物濫用成癮、眩暈症。</li>
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
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">過去五年內是否曾因患有下列疾病，而接受醫師治療、診療或用藥?</label>
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
            <div class="insure-input-block">{{mockData.Applicant_BankCode}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構中文名稱</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.Applicant_BranchName}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">銀行帳號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{mockData.Applicant_Account}}</div>
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
            <div class="insure-input-block" v-show="parseInt(mockData.owner_marriage) === 1">未婚</div>
            <div class="insure-input-block" v-show="parseInt(mockData.owner_marriage) === 2">已婚</div>
            <div class="insure-input-block" v-show="parseInt(mockData.owner_marriage) === 3">離婚</div>
            <div class="insure-input-block" v-show="parseInt(mockData.owner_marriage) === 4">喪偶</div>
            <div class="insure-input-block" v-show="parseInt(mockData.owner_marriage) === 5">分居</div>
            <div class="insure-input-block" v-show="parseInt(mockData.owner_marriage) === 6">其他</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">身高</label>
          <div class="col-sm-9">
            <div class="insure-input-block">{{mockData.insured_height}}</div>
          </div>
          <label for="" class="col-sm-3 col-form-label insure-label insure-label-day">公分</label>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">體重</label>
          <div class="col-sm-9">
            <div class="insure-input-block">{{mockData.insured_weight}}</div>
          </div>
          <label for="" class="col-sm-3 col-form-label insure-label insure-label-day">公斤</label>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">年收入</label>
          <div class="col-sm-9">
            <div class="insure-input-block">{{mockData.insured_income}}</div>
          </div>
          <label for="" class="col-sm-3 col-form-label insure-label insure-label-day">萬元</label>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">家庭收入</label>
          <div class="col-sm-9">
            <div class="insure-input-block">{{mockData.insured_fam_income}}</div>
          </div>
          <label for="" class="col-sm-3 col-form-label insure-label insure-label-day">萬元</label>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">電訪時間</label>
          <div class="col-sm-12">
            <div class="insure-input-block">
              <span v-show="parseInt(mockData.visit_time1) === 1">早上9點~12點,</span>
              <span v-show="parseInt(mockData.visit_time2) === 1">下午1點～6點,</span>
              <span v-show="parseInt(mockData.visit_time3) === 1">晚上6點~9點</span>
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
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
import { data } from './mockData'
export default {
  data() {
    return {
      mockData: data.Data.Result
    }
  },
  created() {
    console.log(this.mockData)
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIWellPostData
    ])
  }
}

</script>
