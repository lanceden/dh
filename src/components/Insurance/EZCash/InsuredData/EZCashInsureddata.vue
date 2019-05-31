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
            <div class="form-control insure-input-block" v-show="GetEZCashPostData.VerifyTypeList['1']">使用「富邦證券」金融憑證驗證</div>
            <div class="form-control insure-input-block" v-show="GetEZCashPostData.VerifyTypeList['2']">簡訊OTP動態密碼驗證</div>
            <div class="form-control insure-input-block" v-show="GetEZCashPostData.VerifyTypeList['3']">{{GetEZCashPostData.VerifyTypeList['3']}}</div>
            <div class="form-control insure-input-block" v-show="GetEZCashPostData.VerifyTypeList['4']">簡訊OTP動態密碼驗證</div>
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
            <div class="insure-check"><img src="../../../../../static/img/notepad.png" alt=""></div>
            <div class="insure-check-title">投保內容</div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">主險種名稱</label>
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
        <label for="" class="col-sm-12 col-form-label insure-label">第一期保險費</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetEZCashPostData.mode_prem|decimalComma}} 元</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">約定續期繳法別</label>
        <div class="col-sm-12">
          <!-- 不定期 -->
          <div class="insure-input-block" v-show="GetEZCashPostData.modx_99_ind === 'Y'">
            不定期繳
          </div>
          <div class="insure-input-block" v-show="GetEZCashPostData.modx_99_ind === 'N'">
            分期繳付每期， {{GetEZCashPostData.qpoop_25_prem|decimalComma}} 元， {{qpoop_25_modx}}繳
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">續期繳費管道</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{method}}</div>
        </div>
      </div>
      <div v-show="GetEZCashPostData.modx_99_ind === 'N'">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">續期轉帳帳號-金融中文名稱</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.AccountData[0].bank_name_1}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">續期轉帳帳號</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.AccountData[0].account}}</div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">主要給付項目</label>
        <div class="col-sm-12">
          <div class="insure-input-block">年金</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">年金給付開始日</label>
        <div class="col-sm-12">
          <div class="insure-input-block">保險年齡：{{GetEZCashPostData.fst_anny_pay_age}}歲之保單週年日</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">給付方式</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetEZCashPostData.anny_frequence === '0' ? '一次給付' : '分期給付'}}</div>
          <div class="insure-input-block" v-show="GetEZCashPostData.anny_frequence > 0">保證期間: {{GetEZCashPostData.qpoop_19_year}} 年</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">保價金通知方式</label>
        <!-- 電子郵件 -->
        <div class="col-sm-12" v-show="GetEZCashPostData.value_ind === '4'">
          <div class="insure-input-block">電子郵件：</div>
          <div class="insure-input-block">{{GetEZCashPostData.email}}</div>
        </div>
        <!-- 寄送到客戶住所(通訊地址) -->
        <div class="col-sm-12" v-show="GetEZCashPostData.value_ind === '1'">
          <div class="insure-input-block">寄送到客戶住所(通訊地址)：</div>
          <div class="insure-input-block">{{GetEZCashPostData.city1}}{{GetEZCashPostData.district1}}{{GetEZCashPostData.road1}}</div>
        </div>
        <!-- 輸入新的寄送地址 -->
        <div class="col-sm-12" v-show="GetEZCashPostData.value_ind === '2'">
          <div class="insure-input-block">新的寄送地址：</div>
          <div class="insure-input-block">{{GetEZCashPostData.city3}}{{GetEZCashPostData.district3}}{{GetEZCashPostData.road3}}</div>
        </div>
      </div>
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
        <!-- 受益人一 -->
        <BenfOneInsuredData :stateData="GetEZCashPostData"></BenfOneInsuredData>
      </form>
    </div>

    <!-- 受益人二 -->
    <BenfTwoInsuredData :stateData="GetEZCashPostData"></BenfTwoInsuredData>
    <!-- 受益人三 -->
    <BenfThreeInsuredData :stateData="GetEZCashPostData"></BenfThreeInsuredData>

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
            <div class="insure-check"><img src="../../../../../static/img/chat.png" alt=""></div>
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
            <div class="insure-check"><img src="../../../../../static/img/bank.png" alt=""></div>
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
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">年收入</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.insured_income}}萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">家庭年收入</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.insured_fam_income}}萬元</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label insure-label">電訪時間</label>
          <div class="col-sm-12">
            <div class="insure-input-block">
              <span v-show="parseInt(GetEZCashPostData.visit_time1) === 1">早上9點~12點</span>
              <span v-show="parseInt(GetEZCashPostData.visit_time1) === 1 && parseInt(GetEZCashPostData.visit_time2) === 1">,</span>
              <span v-show="parseInt(GetEZCashPostData.visit_time2) === 1">下午1點～6點</span>
              <span v-show="parseInt(GetEZCashPostData.visit_time2) === 1 && parseInt(GetEZCashPostData.visit_time3) === 1">,</span>
              <span v-show="parseInt(GetEZCashPostData.visit_time3) === 1">晚上6點~9點</span>
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
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'
import BenfOneInsuredData from '../../Common/benfOneInsuredData.vue'
import BenfTwoInsuredData from '../../Common/benfTwoInsuredData.vue'
import BenfThreeInsuredData from '../../Common/benfThreeInsuredData.vue'

export default {
  data() {
    return {
      modxChinese: ''
    }
  },
  components: {
    BenfOneInsuredData,
    BenfTwoInsuredData,
    BenfThreeInsuredData
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
        case 'B':
          return '銀行或郵局帳戶轉帳'
      }
    }
  }
}

</script>
