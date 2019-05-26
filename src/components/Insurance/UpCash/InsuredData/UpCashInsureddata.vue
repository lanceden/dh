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
            <div class="form-control insure-input-block">{{GetUpCashPostData.VerifyTypeList['2']}}</div>
            <div class="form-control insure-input-block">{{GetUpCashPostData.VerifyTypeList['3']}}</div>
            <div class="form-control insure-input-block">{{GetUpCashPostData.VerifyTypeList['4']}}</div>
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
            <div class="insure-input-block">{{GetUpCashPostData.city1}}{{GetUpCashPostData.district1}}{{GetUpCashPostData.road1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">第一期應繳保險費</label>
          <div class="col-sm-12">
            <div class="insure-input-block">NT$ {{GetUpCashPostData.mode_prem|decimalComma}} </div>
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
          <div class="insure-input-block">{{GetUpCashPostData.ins_type_name}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">投保始期（保單生效日）</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetUpCashPostData.po_issue_date}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">是否躉繳(一次繳清)</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetUpCashPostData.IsOneTimePayment ? '是' : '否'}}</div>
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
          <div class="insure-input-block">分期繳付每期{{GetUpCashPostData.qpoop_25_prem}}，{{qpoop_25_modx}}繳</div>
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
          <div class="insure-input-block">保險年齡：{{GetUpCashPostData.fst_anny_pay_age}}歲之保單週年日</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">年金給付方式</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetUpCashPostData.anny_frequence === '0' ? '一次給付' : '分期給付'}}</div>
        </div>
      </div>
      <div class="form-group row" v-show="GetUpCashPostData.anny_frequence > 0">
        <label for="" class="col-sm-12 col-form-label insure-label">保證期間</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetUpCashPostData.qpoop_19_year}} 年</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">保價金通知方式</label>
        <!-- 電子郵件 -->
        <div class="col-sm-12" v-show="GetUpCashPostData.value_ind === '4'">
          <div class="insure-input-block">{{GetUpCashPostData.email}}</div>
        </div>
        <!-- 寄送到客戶住所(通訊地址) -->
        <div class="col-sm-12" v-show="GetUpCashPostData.value_ind === '1'">
          <div class="insure-input-block">{{GetUpCashPostData.city1}}{{GetUpCashPostData.district1}}{{GetUpCashPostData.road1}}</div>
        </div>
        <!-- 輸入新的電子郵件 -->
        <div class="col-sm-12" v-show="GetUpCashPostData.value_ind === '3'">
          <div class="insure-input-block">{{GetUpCashPostData.email}}</div>
        </div>
        <!-- 輸入新的寄送地址 -->
        <div class="col-sm-12" v-show="GetUpCashPostData.value_ind === '2'">
          <div class="insure-input-block">寄送地址：<br>{{GetUpCashPostData.city3}}{{GetUpCashPostData.district3}}{{GetUpCashPostData.road3}}</div>
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
            <div class="insure-input-block">{{GetUpCashPostData.client_names}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生日期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetUpCashPostData.Birthday_Full}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">投保年齡</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetUpCashPostData.Age}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetUpCashPostData.client_id}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人性別</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetUpCashPostData.client_rate_sex === '1' ? '男' : '女'}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">聯絡電話</label>
          <div class="col-sm-12">
            <div class="insure-input-block">電話：{{GetUpCashPostData.phone_area}}{{GetUpCashPostData.phone_main}}{{GetUpCashPostData.phone_ext}}<br>手機：{{GetUpCashPostData.phone_mobile}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">通訊地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetUpCashPostData.city1}}{{GetUpCashPostData.district1}}{{GetUpCashPostData.road1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">戶籍地址</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetUpCashPostData.city2}}{{GetUpCashPostData.district2}}{{GetUpCashPostData.road2}}</div>
          </div>
        </div>
      </form>
    </div>
    <!-- 受益人一 -->
    <BenfOneInsuredData :stateData="GetUpCashPostData"></BenfOneInsuredData>
    <!-- 受益人二 -->
    <BenfTwoInsuredData :stateData="GetUpCashPostData"></BenfTwoInsuredData>
    <!-- 受益人三 -->
    <BenfThreeInsuredData :stateData="GetUpCashPostData"></BenfThreeInsuredData>
    <!-- 被保人投保資料告知事項 -->
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
            <div class="insure-input-block">{{GetUpCashPostData.client_occupation_class_name}} {{GetUpCashPostData.client_occupation_class_code_name}}</div>
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
    <!-- FATCA及CRS個人客戶自我聲明書 -->
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
            <div class="insure-input-block">{{GetUpCashPostData.client_names}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人身分證字號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetUpCashPostData.client_id}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">被保險人出生年月日</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetUpCashPostData.Birthday_Full}}</div>
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
            <div class="insure-input-block">{{GetUpCashPostData.CRSData.birth_national}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">出生地-城市</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetUpCashPostData.CRSData.birth_city}}</div>
          </div>
        </div>
      </form>
    </div>
    <!-- 要保人匯款帳戶 -->
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
            <div class="insure-input-block">{{GetUpCashPostData.Applicant_BankCode}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">金融機構中文名稱</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetUpCashPostData.Applicant_BranchName}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">銀行帳號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetUpCashPostData.Applicant_Account}}</div>
          </div>
        </div>
      </form>
    </div>
    <!-- 被保人其他告知事項 -->
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
            <div class="insure-input-block">{{GetUpCashPostData.insured_income}}萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">家庭收入</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetUpCashPostData.insured_fam_income}}萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">電訪時間</label>
          <div class="col-sm-12">
            <div class="insure-input-block">
              <span v-show="parseInt(GetUpCashPostData.visit_time1) === 1">早上9點~12點,</span>
              <span v-show="parseInt(GetUpCashPostData.visit_time2) === 1">下午1點～6點,</span>
              <span v-show="parseInt(GetUpCashPostData.visit_time3) === 1">晚上6點~9點</span>
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
import BenfOneInsuredData from '../../Common/benfOneInsuredData'
import BenfTwoInsuredData from '../../Common/benfTwoInsuredData'
import BenfThreeInsuredData from '../../Common/benfThreeInsuredData'
import GetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import { data } from './mockData'

export default {
  data() {
    return {
      GetUpCashPostData: []
    }
  },
  created() {
    this.GetUpCashPostData = data.Data.Result
  },
  components: {
    BenfOneInsuredData,
    BenfTwoInsuredData,
    BenfThreeInsuredData
  },
  computed: {
    ...mapGetters([
      // GetterTypes.GetUpCashPostData
    ]),
    // 首期繳費管道
    init_method: {
      get() {
        return this.getPayTypeName(this.GetUpCashPostData.init_method)
      }
    },
    // 續期收費管道
    method: {
      get() {
        return this.getPayTypeName(this.GetUpCashPostData.method)
      }
    },
    // 約定續期繳法別
    qpoop_25_modx: {
      get() {
        let modx = this.GetUpCashPostData.qpoop_25_modx
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
