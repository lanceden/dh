<template>
  <div>
    <InsuredDataInsuredInfo :stateData="GetEZCashPostData"></InsuredDataInsuredInfo>
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
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">險種名稱</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetEZCashPostData.ins_type_name}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">投保始期（保單生效日）</label>
        <div class="col-sm-12">
          <div class="insure-input-block">{{GetEZCashPostData.po_issue_date_Name}}</div>
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
        <InsuredDataInfo :stateData="GetEZCashPostData"></InsuredDataInfo>
        <!-- 受益人一 -->
        <BenfOneInsuredData :stateData="GetEZCashPostData"></BenfOneInsuredData>
        <!-- 受益人二 -->
        <BenfTwoInsuredData :stateData="GetEZCashPostData"></BenfTwoInsuredData>
        <!-- 受益人三 -->
        <BenfThreeInsuredData :stateData="GetEZCashPostData"></BenfThreeInsuredData>
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
    <!-- FATCA及CRS個人客戶自我聲明書 -->
    <InsuredDataFatca :stateData="GetEZCashPostData"></InsuredDataFatca>
    <!-- 要保人匯款帳戶 -->
    <InsuredDataMoneyTransfer :stateData="GetEZCashPostData"></InsuredDataMoneyTransfer>
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
        <InsuredDataOtherNotify :stateData="GetEZCashPostData"></InsuredDataOtherNotify>
        <InsuredDataPhone :stateData="GetEZCashPostData"></InsuredDataPhone>
      </form>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import EZCashGetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'
import BenfOneInsuredData from '../../Common/insuredData/benfOneInsuredData.vue'
import BenfTwoInsuredData from '../../Common/insuredData/benfTwoInsuredData.vue'
import BenfThreeInsuredData from '../../Common/insuredData/benfThreeInsuredData.vue'
import InsuredDataOtherNotify from '../../Common/insuredData/insuredDataOtherNotify.vue'
import InsuredDataPhone from '../../Common/insuredData/insuredDataPhone.vue'
import InsuredDataMoneyTransfer from '../../Common/insuredData/insuredDataMoneyTransfer'
import InsuredDataInsuredInfo from '../../Common/insuredData/insuredDataInsuredInfo.vue'
import InsuredDataInfo from '../../Common/insuredData/insuredDataInfo'

export default {
  data() {
    return {
      modxChinese: ''
    }
  },
  components: {
    BenfOneInsuredData,
    BenfTwoInsuredData,
    BenfThreeInsuredData,
    InsuredDataInsuredInfo,
    InsuredDataInfo,
    InsuredDataOtherNotify,
    InsuredDataPhone,
    InsuredDataMoneyTransfer
  },
  computed: {
    ...mapGetters([
      EZCashGetterTypes.GetEZCashPostData
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
