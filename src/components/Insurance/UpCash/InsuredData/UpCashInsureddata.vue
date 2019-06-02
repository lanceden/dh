<template>
  <div>
    <InsuredDataInsuredInfo :stateData="GetUpCashPostData"></InsuredDataInsuredInfo>
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
          <div class="insure-input-block">{{GetUpCashPostData.ins_type_name}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">投保始期（保單生效日）</label>
        <div class="col-sm-12">
          <div class="insure-input-block text-red-i"><span class="text-red-i">{{GetUpCashPostData.po_issue_date_Name}}</span></div>
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
      <div class="form-group row" v-show="GetUpCashPostData.modx_99_ind === 'N'">
        <label for="" class="col-sm-12 col-form-label insure-label">約定續期繳法別</label>
        <div class="col-sm-12">
          <div class="insure-input-block">分期繳付每期 {{GetUpCashPostData.qpoop_25_prem}} 元，{{qpoop_25_modx}}繳</div>
        </div>
      </div>
      <div class="form-group row" v-show="GetUpCashPostData.modx_99_ind === 'N'">
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
          <div class="insure-input-block" v-show="GetUpCashPostData.anny_frequence > 0">保證期間: {{GetUpCashPostData.qpoop_19_year}} 年</div>
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
            <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
            <div class="insure-check-title">保單資訊</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <InsuredDataInfo :stateData="GetUpCashPostData"></InsuredDataInfo>
        <!-- 受益人一 -->
        <BenfOneInsuredData :stateData="GetUpCashPostData"></BenfOneInsuredData>
        <!-- 受益人二 -->
        <BenfTwoInsuredData :stateData="GetUpCashPostData"></BenfTwoInsuredData>
        <!-- 受益人三 -->
        <BenfThreeInsuredData :stateData="GetUpCashPostData"></BenfThreeInsuredData>
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
    <InsuredDataFatca :stateData="GetUpCashPostData"></InsuredDataFatca>
    <!-- 要保人匯款帳戶 -->
    <InsuredDataMoneyTransfer :stateData="GetUpCashPostData"></InsuredDataMoneyTransfer>
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
        <InsuredDataOtherNotify :stateData="GetUpCashPostData"></InsuredDataOtherNotify>
        <InsuredDataPhone :stateData="GetUpCashPostData"></InsuredDataPhone>
      </form>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import UpCashGetterTypes from '../../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import BenfOneInsuredData from '../../Common/insuredData/benfOneInsuredData.vue'
import BenfTwoInsuredData from '../../Common/insuredData/benfTwoInsuredData.vue'
import BenfThreeInsuredData from '../../Common/insuredData/benfThreeInsuredData.vue'
import InsuredDataInsuredInfo from '../../Common/insuredData/insuredDataInsuredInfo.vue'
import InsuredDataOtherNotify from '../../Common/insuredData/insuredDataOtherNotify.vue'
import InsuredDataPhone from '../../Common/insuredData/insuredDataPhone.vue'
import InsuredDataMoneyTransfer from '../../Common/insuredData/insuredDataMoneyTransfer'
import InsuredDataInfo from '../../Common/insuredData/insuredDataInfo'
import InsuredDataFatca from '../../Common/insuredData/insuredDataFatca'

export default {
  components: {
    BenfOneInsuredData,
    BenfTwoInsuredData,
    BenfThreeInsuredData,
    InsuredDataInsuredInfo,
    InsuredDataInfo,
    InsuredDataOtherNotify,
    InsuredDataPhone,
    InsuredDataMoneyTransfer,
    InsuredDataFatca
  },
  computed: {
    ...mapGetters([
      UpCashGetterTypes.GetUpCashPostData
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
        console.log(modx)
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
