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
            <div class="form-control insure-input-block">{{GetEZCashPostData.VerifyTypeList['2']}}</div>
            <div class="form-control insure-input-block">{{GetEZCashPostData.VerifyTypeList['3']}}</div>
            <div class="form-control insure-input-block">{{GetEZCashPostData.VerifyTypeList['4']}}</div>
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
            <div class="insure-input-block">{{GetEZCashPostData.city1}}{{GetEZCashPostData.district1}}{{GetEZCashPostData.road1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">第一期應繳保險費</label>
          <div class="col-sm-12">
            <div class="insure-input-block">NT$ {{GetEZCashPostData.mode_prem|decimalComma}} </div>
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
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">險種名稱</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetEZCashPostData.ins_type_name}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">投保始期（保單生效日）</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetEZCashPostData.po_issue_date}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">是否躉繳(一次繳清)</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetEZCashPostData.IsOneTimePayment ? '是' : '否'}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">首期繳費管道</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{init_method}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">約定續期繳法別</label>
        <div class="col-sm-12">
          <div class="insure-input-block">分期繳付每期{{GetEZCashPostData.qpoop_25_prem}}，{{qpoop_25_modx}}繳</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">續期收費管道</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{method}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">年金給付開始日</label>
        <div class="col-sm-12">
          <div class="insure-input-block">保險年齡：{{GetEZCashPostData.fst_anny_pay_age}}歲之保單週年日</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">年金給付方式</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetEZCashPostData.anny_frequence === '0' ? '一次給付' : '分期給付'}}</div>
        </div>
      </div>
      <div class="form-group row" v-show="GetEZCashPostData.anny_frequence > 0">
        <label for="" class="col-sm-12 col-form-label insure-label">保證期間</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetEZCashPostData.qpoop_19_year}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">保價金通知方式</label>
        <!-- 電子郵件 -->
        <div class="col-sm-12" v-show="GetEZCashPostData.value_ind === '4'">
          <div class="insure-input-block">{{GetEZCashPostData.email}}</div>
        </div>
        <!-- 寄送到客戶住所(通訊地址) -->
        <div class="col-sm-12" v-show="GetEZCashPostData.value_ind === '1'">
          <div class="insure-input-block">{{GetEZCashPostData.city1}}{{GetEZCashPostData.district1}}{{GetEZCashPostData.road1}}</div>
        </div>
        <!-- 輸入新的電子郵件 -->
        <div class="col-sm-12" v-show="GetEZCashPostData.value_ind === '3'">
          <div class="insure-input-block">{{GetEZCashPostData.email}}</div>
        </div>
        <!-- 輸入新的寄送地址 -->
        <div class="col-sm-12" v-show="GetEZCashPostData.value_ind === '2'">
          <div class="insure-input-block">寄送地址：<br>{{GetEZCashPostData.city3}}{{GetEZCashPostData.district3}}{{GetEZCashPostData.road3}}</div>
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
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人(要被保人須為同一人)</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.client_names}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.Birthday_Full}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保年齡</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.Age}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.client_id}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人性別</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.client_rate_sex === '1' ? '男' : '女'}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{GetEZCashPostData.phone_area}}{{GetEZCashPostData.phone_main}}{{GetEZCashPostData.phone_ext}}<br>手機：{{GetEZCashPostData.phone_mobile}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">通訊地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.city1}}{{GetEZCashPostData.district1}}{{GetEZCashPostData.road1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">戶籍地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.city2}}{{GetEZCashPostData.district2}}{{GetEZCashPostData.road2}}</div>
          </div>
        </div>
      </form>
    </div>
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
            <div class="insure-input-block">{{GetEZCashPostData.benf_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="col-sm-12">
            <div class="insure-input-block">順位{{GetEZCashPostData.relation_ben_death_seq}}，{{GetEZCashPostData.relation_ben_death_seq_percent}}%</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">受益人關係</label>
          <div class="col-sm-12">
            <div class="insure-input-block" v-show="parseInt(GetEZCashPostData.relation_ben_death) === 2">配偶</div>
            <div class="insure-input-block" v-show="parseInt(GetEZCashPostData.relation_ben_death) === 3">父母子女</div>
            <div class="insure-input-block" v-show="parseInt(GetEZCashPostData.relation_ben_death) === 6">祖孫</div>
            <div class="insure-input-block" v-show="parseInt(GetEZCashPostData.relation_ben_death) === 8">法定繼承人</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{GetEZCashPostData.benf_phone}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.BenfAdd_City}}{{GetEZCashPostData.BenfAdd_County}}{{GetEZCashPostData.BenfAddRemain}}</div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius" v-show="parseInt(GetEZCashPostData.benf_num) > 1">
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
            <div class="insure-input-block">{{GetEZCashPostData.benf_name2}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="col-sm-12">
            <div class="insure-input-block">順位{{GetEZCashPostData.relation_ben_death_seq2}}，{{GetEZCashPostData.relation_ben_death_seq_percent2}}%</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">受益人關係</label>
          <div class="col-sm-12">
            <div class="insure-input-block" v-show="parseInt(GetEZCashPostData.relation_ben_death2) === 2">配偶</div>
            <div class="insure-input-block" v-show="parseInt(GetEZCashPostData.relation_ben_death2) === 3">父母子女</div>
            <div class="insure-input-block" v-show="parseInt(GetEZCashPostData.relation_ben_death2) === 6">祖孫</div>
            <div class="insure-input-block" v-show="parseInt(GetEZCashPostData.relation_ben_death2) === 8">法定繼承人</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{GetEZCashPostData.benf_phone2}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.BenfAdd_City2}}{{GetEZCashPostData.BenfAdd_County2}}{{GetEZCashPostData.BenfAddRemain2}}</div>
          </div>
        </div>
      </form>
    </div>

    <div class="bg-radius" v-show="parseInt(GetEZCashPostData.benf_num) > 2">
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
            <div class="insure-input-block">{{GetEZCashPostData.benf_name3}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
          <div class="col-sm-12">
            <div class="insure-input-block">順位{{GetEZCashPostData.relation_ben_death_seq3}}，{{GetEZCashPostData.relation_ben_death_seq_percent3}}%</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">受益人關係</label>
          <div class="col-sm-12">
            <div class="insure-input-block" v-show="parseInt(GetEZCashPostData.relation_ben_death3) === 2">配偶</div>
            <div class="insure-input-block" v-show="parseInt(GetEZCashPostData.relation_ben_death3) === 3">父母子女</div>
            <div class="insure-input-block" v-show="parseInt(GetEZCashPostData.relation_ben_death3) === 6">祖孫</div>
            <div class="insure-input-block" v-show="parseInt(GetEZCashPostData.relation_ben_death3) === 8">法定繼承人</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">國籍</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.BenfNationality3}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.benf_dob3}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.benf_id3}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{GetEZCashPostData.benf_phone3}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.BenfAddress3}}</div>
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
        <div class="insure-text">
          依主管機關規定，要保人及被保人資料需為同一人。
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">您的職業類別</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.client_occupation_class_name}} {{GetEZCashPostData.client_occupation_class_code_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">本人僅為台灣之稅務居民</label>
          <div class="col-sm-12">
            <div class="insure-input-block">是</div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title" style="text-align:left;">FATCA及CRS個人客戶自我聲明書 - 基本資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.client_names}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.client_id}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人出生年月日</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.Birthday_Full}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">戶籍地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">同本次申請文件之地址</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生地-國家</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.CRSData.birth_national}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生地-城市</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.CRSData.birth_city}}</div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/checkmark.png" alt=""></div>
            <div class="insure-check-title">要保人匯款帳戶</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構代碼</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.Applicant_BankCode}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構中文名稱</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.Applicant_BranchName}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">銀行帳號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.Applicant_Account}}</div>
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
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">年收入</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.insured_income}}萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">家庭收入</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.insured_fam_income}}萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">電訪時間</label>
          <div class="col-sm-12">
            <div class="insure-input-block">
              <span v-show="parseInt(GetEZCashPostData.visit_time1) === 1">早上9點~12點,</span>
              <span v-show="parseInt(GetEZCashPostData.visit_time2) === 1">下午1點～6點,</span>
              <span v-show="parseInt(GetEZCashPostData.visit_time3) === 1">晚上6點~9點</span>
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
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'
export default {
  data() {
    return {
      modxChinese: ''
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetEZCashPostData
    ]),
    // 首期繳費管道
    init_method: {
      get() {
        return this.getPayTypeName(this.GetEZCashPostData.init_method)
      }
    },
    // 續期收費管道
    method: {
      get() {
        return this.getPayTypeName(this.GetEZCashPostData.method)
      }
    },
    // 約定續期繳法別
    qpoop_25_modx: {
      get() {
        let modx = this.GetEZCashPostData.qpoop_25_modx
        switch (modx) {
          case '12':
            return '年'
          case '6':
            return '半年'
          case '3':
            return '季'
          case '1':
            return '月'
        }
      }
    }
  },
  methods: {
    getPayTypeName(method) {
      let type = method.toUpperCase()
      switch (type) {
        case 'P':
          return '全國新光人壽行政中心繳費'
        case 'C':
          return '信用卡'
        case 'B':
          return '銀行或郵局帳戶轉帳'
      }
    }
  }
}

</script>
