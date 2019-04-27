<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check">
            <img src="../../../../../static/img/chat.png" alt>
          </div>
            <div class="insure-check-title">請填寫投保資料</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label insure-label">主險種名稱</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.ins_type_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label insure-label">投保始期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetEZCashPostData.po_issue_date_Name}}</div>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-tips-text">
            <img src="../../../../../static/img/insure-link.png" alt>刷卡攻略
        </div>
          </div>
          <div class="form-group row">
            <label for class="col-sm-12 col-form-label insure-label insure-label">第一期保險費</label>
            <div class="col-sm-12">
              <input type="number" class="form-control insure-input insure-input-edit" ref="face_amt" v-model="face_amt" placeholder="請輸入" />
            </div>
          </div>
          <div class="col-sm-12">
            <div class="insure-tips">限輸入10,000~750,000元</div>
            <div class="insure-tips-text">備註：單筆保費限75萬，單一公司累積限750萬。</div>
          </div>
          <!-- v-show: 非躉繳才顯示續期繳法別 -->
          <div class="form-group row" v-show="!GetEZCashPostData.IsOneTimePayment">
            <label for class="col-sm-12 col-form-label insure-label insure-label">約定續期繳法別</label>
            <div class="col-sm-12 insure-select-align">
              <select id class="form-control data-input insure-select insure-input-edit" v-model="modx_99_ind">
                <option value="0" selected="selected">請選擇</option>
                <option value="1">不定期繳</option>
                <option value="2">分期繳付之續期保險費</option>
              </select>
            </div>
          </div>

          <!--Start 分期繳付之續期保險費 -->
          <div class="form-group row">
            <label for class="col-sm-12 col-form-label insure-label">續期繳費管道</label>
            <div class="col-sm-12">
              <select id class="form-control data-input" v-model="payType">
                <option value="1">全國新光人壽行政中心繳費</option>
                <option value="2">銀行或郵局帳戶轉帳</option>
              </select>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="insure-tips-text" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target="#service-center">
                  <img src="../../../../../static/img/insure-link.png">
              查詢各服務中心資訊
            </div>
                </div>
                <div class="col-sm-3 insure-col">
                  <div class="insure-tips-text">
                    <img src="../../../../../static/img/insure-link.png">
              繳費金額
            </div>
                  </div>
                  <div class="col-sm-3 insure-col">
                    <div class="insure-tips-text">
                      <img src="../../../../../static/img/insure-link.png">繳費方式
            </div>
                    </div>
                  </div>
                </div>
                <!-- End 不定期繳-全國新光人壽行政中心繳費-->

                <!--Start 分期繳付 -->
                <div class="form-group row" v-show="(GetEZCashPostData.modx_99_ind === 'N')">
                  <label for class="col-sm-12 col-form-label insure-label insure-label">分期保費每期</label>
                  <div class="col-sm-12">
                    <input type="text" class="form-control insure-input insure-input-edit" v-model="qpoop_25_prem">
                  </div>
                </div>
                <div class="form-group row" v-show="(GetEZCashPostData.modx_99_ind === 'N')">
                  <label for class="col-sm-12 col-form-label insure-label insure-label">繳別</label>
                  <div class="col-sm-12 insure-select-align">
                    <select id class="form-control data-input insure-select insure-input-edit" v-model="qpoop_25_modx">
                      <option selected="selected" value="0">未選擇</option>
                      <option value="12">年</option>
                      <option value="6">半年</option>
                      <option value="3">季</option>
                      <option value="1">月</option>
                    </select>
                  </div>
                </div>
                <!-- End 分期繳付-->
                <div class="col-sm-12">
                  <div class="insure-tips">續期繳費管道同時約定為信用卡，會同首期信用卡卡號做繳費。</div>
                </div>
      </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/EZCash/Types/EZCashGetterTypes.js'
export default {
  created() {
    this.GetEZCashPostData.init_method = 'B'
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetEZCashPostData
    ]),
    /**
     * 第一期保險費
     */
    face_amt: {
      get() {
        this.GetEZCashPostData.face_amt = 66666
        return this.GetEZCashPostData.face_amt
      },
      set(value) {
        if (value === '' || value <= 0) {
          alert('請填寫第一期保險費。')
          return
        }
        this.GetEZCashPostData.mode_prem = 0
        this.GetEZCashPostData.face_amt = value
      }
    },
    // 續期繳費管道
    payType: {
      get() {
        return
      },
      set(value) {

      }
    },
    // 約定續期繳法別
    modx_99_ind: {
      get() {
        let result = this.GetEZCashPostData.modx_99_ind || 0
        if (result !== 0) this.OnUntimed(result)
        return result
      },
      set(value) {
        // 分期繳付:N 不定期繳:Y
        this.OnUntimed(value)
        this.GetEZCashPostData.mode_prem = 0
        this.GetEZCashPostData.modx_99_ind = parseInt(value) === 1 ? 'Y' : 'N'
      }
    },
    // 分期保費每期 請輸入續期保險費。
    qpoop_25_prem: {
      get() {
        let result = this.GetEZCashPostData.qpoop_25_prem
        return result === 0 ? '' : result
      },
      set(value) {
        this.GetEZCashPostData.mode_prem = 0
        this.GetEZCashPostData.qpoop_25_prem = value
      }
    },
    // 繳別 請選擇約定續期繳法-分期繳付之續期保費-繳別。
    qpoop_25_modx: {
      get() {
        let result = this.GetEZCashPostData.qpoop_25_modx
        return result === '' ? '0' : result
      },
      set(value) {
        this.GetEZCashPostData.mode_prem = 0
        this.GetEZCashPostData.qpoop_25_modx = value
      }
    }
  },
  methods: {
    OnUntimed(value) {
      // 不定期繳:Y 只有全國新光人壽行政中心繳費 分期繳付:N 銀行或郵局帳戶轉帳
      this.payType = value === 'Y' ? ['活期性帳戶(電子化授權/全國繳費網)'] : ['信用卡', '銀行或郵局轉帳']
    }
  }
}

</script>
