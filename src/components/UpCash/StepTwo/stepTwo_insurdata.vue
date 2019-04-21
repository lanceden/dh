<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check">
            <img src="../../../../static/img/chat.png" alt>
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
            <div class="insure-input-block">{{GetPostData.ins_type_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label insure-label">投保始期</label>
          <div class="col-sm-12">
            <div class="insure-input-block">{{GetPostData.po_issue_date}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label insure-label">是否躉繳(一次繳清)</label>
          <div class="col-sm-12 insure-select-align">
            <select id class="form-control data-input insure-select insure-input-edit" v-model="modx_99_ind">
              <option selected="selected" value="Y">是</option>
              <option value="N">否</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label">首期繳費管道</label>
          <div class="col-sm-12">
            <select id class="form-control data-input" v-model="init_method">
              <option selected="selected" value="0">未選擇</option>
              <option value="B">活期性帳戶(電子化授權/全國繳費網)</option>
              <option value="C">信用卡</option>
            </select>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="insure-tips-text">
            <img src="../../../../static/img/insure-link.png" alt>刷卡攻略
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
          <div class="form-group row" v-show="isOneTimePayment">
            <label for class="col-sm-12 col-form-label insure-label insure-label">約定續期繳法別</label>
            <div class="col-sm-12 insure-select-align">
              <select id class="form-control data-input insure-select insure-input-edit" v-model="untimed" @change="OnUntimed()">
                <option value="0" selected="selected">不定期繳</option>
                <option value="1">分期繳付</option>
              </select>
            </div>
          </div>

          <!--Start 不定期繳-全國新光人壽行政中心繳費 -->
          <div class="form-group row" v-show="isOneTimePayment">
            <label for class="col-sm-12 col-form-label insure-label">續期繳費管道</label>
            <div class="col-sm-12">
              <select id class="form-control data-input">
                <option v-for="(item, index) in payType" :value="index">{{item}}</option>
              </select>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="insure-tips-text" data-toggle="modal" data-target="#service-center">
                  <img src="../../../../static/img/insure-link.png">
              查詢各服務中心資訊
            </div>
                </div>
                <div class="col-sm-3 insure-col">
                  <div class="insure-tips-text">
                    <img src="../../../../static/img/insure-link.png">
              繳費金額
            </div>
                  </div>
                  <div class="col-sm-3 insure-col">
                    <div class="insure-tips-text">
                      <img src="../../../../static/img/insure-link.png">繳費方式
            </div>
                    </div>
                  </div>
                </div>
                <!-- End 不定期繳-全國新光人壽行政中心繳費-->

                <!--Start 分期繳付 -->
                <div class="form-group row" v-show="isShowUntimed">
                  <label for class="col-sm-12 col-form-label insure-label insure-label">續期保費每期</label>
                  <div class="col-sm-12">
                    <input type="text" class="form-control insure-input insure-input-edit" id placeholder value="3000元">
                  </div>
                </div>
                <div class="form-group row" v-show="isShowUntimed">
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
import GetterTypes from '../../../store/modules/Upcash/Types/UpCashGetterTypes.js'
export default {
  data() {
    return {
      untimed: '0',
      qpoop_25_modx: 0,
      isOneTimePayment: true,
      isShowUntimed: false,
      payType: [
        '活期性帳戶(電子化授權/全國繳費網)',
        '信用卡',
        '銀行或郵局轉帳'
      ]
    }
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetPostData
    ]),
    init_method: {
      get() {
        if (this.$store.state.UpCash.POSTDATA.init_method === undefined ||
          this.$store.state.UpCash.POSTDATA.init_method === null) {
          return 0
        }
        return this.$store.state.UpCash.POSTDATA.init_method
      },
      set(value) {
        this.$store.state.UpCash.POSTDATA.init_method = value
      }
    },
    modx_99_ind: {
      get() {
        if (this.$store.state.UpCash.POSTDATA.modx_99_ind === undefined ||
          this.$store.state.UpCash.POSTDATA.modx_99_ind === null) {
          return 'N'
        }
        return this.$store.state.UpCash.POSTDATA.modx_99_ind
      },
      set(value) {
        if (value === 'Y') {
          this.isOneTimePayment = false
        } else this.isOneTimePayment = true
        this.$store.state.UpCash.POSTDATA.modx_99_ind = value
      }
    },
    face_amt: {
      get() {
        this.$store.state.UpCash.POSTDATA.face_amt = 66666
        return this.$store.state.UpCash.POSTDATA.face_amt
      },
      set(value) {
        if (value === '') {
          alert('請填寫第一期保險費')
          return
        }
        if (value <= 0) return ''
        this.$store.state.UpCash.POSTDATA.face_amt = value
      }
    }
  },
  methods: {
    OnUntimed() {
      if (this.untimed === '0') {
        this.payType = ['活期性帳戶(電子化授權/全國繳費網)']
      }
      this.isShowUntimed = this.untimed === '1'
    }
  }
}

</script>
