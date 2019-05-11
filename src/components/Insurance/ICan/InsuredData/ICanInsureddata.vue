<template>
  <div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/notepad.png" alt=""></div>
            <div class="insure-check-title">投保資訊</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">驗證身份方式</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">{{this.GetICanPostData.VerifyTypeList['3']}}</div>
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
            <div class="form-control insure-input-block">{{this.GetICanPostData.email}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">要保人手機號碼</label>
          <div class="col-sm-12">
            <div class="form-control insure-input-block">{{this.GetICanPostData.phone_mobile}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">總保費</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.mode_prem}} 元</div>
          </div>
        </div>
      </form>
    </div>

    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/notepad.png" alt=""></div>
            <div class="insure-check-title">投保資訊</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">險種名稱-主約</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.ins_type_name}}</div>
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
            <div class="insure-input-block">{{this.GetICanPostData.po_issue_date_Name}}午夜十二時起</div>
            <div class="insure-input-block">至{{this.GetICanPostData.matured_date_Name}}午夜十二時止，共 {{this.GetICanPostData.TrvDays}} 天</div>
          </div>
        </div>
      </form>
    </div>

    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
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
            <div class="insure-input-block"><span id="CalcAmtDesc3"></span> </div>
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
            <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
            <div class="insure-check-title">保單資訊</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.client_names}} (要被保人須為同一人)</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.Birthday_Full}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保年齡</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.Age}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.client_id}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">性別</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.client_rate_sex === '1' ? '男' : '女'}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{this.GetICanPostData.phone_area}}{{this.GetICanPostData.phone_main}}{{this.GetICanPostData.phone_ext}}<br>手機：{{this.GetICanPostData.phone_mobile}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">通訊地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.address1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">戶籍地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.address2}}</div>
          </div>
        </div>
      </form>
    </div>
    <template>
      <div v-for="(n, index) in this.GetICanPostData.benf_num" :key="index">
        
      </div>
    </template>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">身故受益人(一)資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身故受益人(一)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.benf_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="col-sm-12">
            <div class="insure-input-block">順位1，{{this.GetICanPostData.relation_ben_death_seq_percent}}%</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">受益人關係</label>
          <div class="col-sm-12">
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.relation_ben_death) === 2">配偶</div>
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.relation_ben_death) === 3">父母子女</div>
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.relation_ben_death) === 6">祖孫</div>
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.relation_ben_death) === 8">法定繼承人</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">國籍</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.BenfNationality}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.benf_dob}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.benf_id}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{this.GetICanPostData.benf_phone}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.BenfAdd_City}}{{this.GetICanPostData.BenfAdd_County}}{{this.GetICanPostData.BenfAddRemain}}</div>
          </div>
        </div>
      </form>
    </div>

    <div class="bg-radius" v-show="parseInt(this.GetICanPostData.benf_num) > 1">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">身故受益人(二)資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身故受益人(二)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.benf_name2}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="col-sm-12">
            <div class="insure-input-block">順位1，{{this.GetICanPostData.relation_ben_death_seq_percent2}}%</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">受益人關係</label>
          <div class="col-sm-12">
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.relation_ben_death2) === 2">配偶</div>
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.relation_ben_death2) === 3">父母子女</div>
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.relation_ben_death2) === 6">祖孫</div>
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.relation_ben_death2) === 8">法定繼承人</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">國籍</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.BenfNationality2}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.benf_dob2}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.benf_id2}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{this.GetICanPostData.benf_phone2}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.BenfAddress2}}</div>
          </div>
        </div>
      </form>
    </div>

    <div class="bg-radius" v-show="parseInt(this.GetICanPostData.benf_num) > 2">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
            <div class="insure-check-title">身故受益人(三)資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身故受益人(三)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.benf_name3}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="col-sm-12">
            <div class="insure-input-block">順位1，{{this.GetICanPostData.relation_ben_death_seq_percent3}}%</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">受益人關係</label>
          <div class="col-sm-12">
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.relation_ben_death3) === 2">配偶</div>
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.relation_ben_death3) === 3">父母子女</div>
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.relation_ben_death3) === 6">祖孫</div>
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.relation_ben_death3) === 8">法定繼承人</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">國籍</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.BenfNationality3}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.benf_dob3}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.benf_id3}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{this.GetICanPostData.benf_phone3}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.BenfAddress3}}</div>
          </div>
        </div>
      </form>
    </div>

    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/briefcase.png" alt=""></div>
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
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">您的職業類別</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.client_occupation_class_detail}}</div>
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
            <div class="insure-input-block">{{this.GetICanPostData.QusAns[0].Answar ? '是' : '否'}}</div>
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
          <div class="insure-notice-text">
            <ul class="insure-notice-text-ol">
              <li>高血壓症(指收縮壓140mmHg或舒張壓90mmHg以上)、狹心症、心肌梗塞、先天性心臟病、主動脈血管瘤。</li>
              <li>腦中風(腦中風、腦梗塞)、腦瘤、癲癇、智能障礙(外表無法明顯判斷者)、精神病、巴金森氏症。</li>
              <li>癌症(惡性腫瘤)、肝硬化、尿毒、血友病。</li>
              <li>糖尿病。</li>
              <li>酒精或藥物濫用成癮、眩暈症。</li>
              <li>視網膜出血或剝離、視神經病變。</li>
            </ul>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">請問您目前身體機能是否有下列障害：(有任一者，請選擇”是”)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">否</div>
          </div>
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
        </div>
      </form>
    </div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
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
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.owner_marriage) === 1">未婚</div>
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.owner_marriage) === 2">已婚</div>
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.owner_marriage) === 3">離婚</div>
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.owner_marriage) === 4">喪偶</div>
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.owner_marriage) === 5">分居</div>
            <div class="insure-input-block" v-show="parseInt(this.GetICanPostData.owner_marriage) === 6">其他</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">年收入</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.insured_income}}萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">家庭收入</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{this.GetICanPostData.insured_fam_income}}萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">電訪時間</label>
          <div class="col-sm-12">
            <div class="insure-input-block" >
              <span v-show="parseInt(this.GetICanPostData.visit_time1) === 1">早上9點~12點</span>
              <span v-show="parseInt(this.GetICanPostData.visit_time2) === 1">,下午1點～6點</span>
              <span v-show="parseInt(this.GetICanPostData.visit_time3) === 1">,晚上6點~9點</span>
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
export default {
  mounted() {
    this.test(this.GetICanPostData.face_amt)
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
