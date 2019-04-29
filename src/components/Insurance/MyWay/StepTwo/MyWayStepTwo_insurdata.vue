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
            <div class="insure-input-block">{{GetMyWayPostData.ins_type_name}}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label insure-label">保險期間</label>
          <div class="col-sm-12">
            <div class="insure-input-block">投保始期自</div>
            <div class="insure-input-block">{{insStartDateROC}} 至 </div>
            <div class="insure-input-block">{{insStartDateROC}}止</div>
          </div>
        </div>
        <div class="form-group row">
          <label for class="col-sm-12 col-form-label insure-label insure-label">投保額度</label>
          <div class="col-sm-12">
            <select name="face_amt" id="face_amt" class="form-control data-input insure-select insure-input-edit" v-model="face_amt">
              <option value="220" selected="selected">220萬</option>
              <option value="210">210萬</option>
              <option value="200">200萬</option>
              <option value="190">190萬</option>
              <option value="180">180萬</option>
              <option value="170">170萬</option>
              <option value="160">160萬</option>
              <option value="150">150萬</option>
              <option value="140">140萬</option>
              <option value="130">130萬</option>
              <option value="120">120萬</option>
              <option value="110">110萬</option>
              <option value="100">100萬</option>
              <option value="90">90萬</option>
              <option value="80">80萬</option>
              <option value="70">70萬</option>
              <option value="60">60萬</option>
              <option value="50">50萬</option>
              <option value="40">40萬</option>
              <option value="30">30萬</option>
              <option value="20">20萬</option>
            </select>
          </div>
          <div class="col-sm-12">
            <div class="insure-notice-text">
              <ul class="insure-notice-text-ul">
                <li>身故保險金或喪葬費用保險金註為 200萬元</li>
                <li>完全失能保險金註為 200萬元</li>
                <li>註：本公司另加計按日數比例計算當期已繳付之未到期保險費，併入身故保險金或喪葬費用保險金或完全失能保險金內給付。</li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
import moment from 'moment'
export default {
  data() {
    return {
      insStartDateROC: moment().add(`${1}`, 'days').format(`民國${parseInt(new Date().getFullYear()) - 1911}年MM月DD日午夜十二時`),
      insEndDateROC: moment().add(`${1}`, 'days').format(`民國${parseInt(new Date().getFullYear()) + 1 - 1911}年MM月DD日午夜十二時`)
    }
  },
  created() {},
  computed: {
    ...mapGetters([
      GetterTypes.GetMyWayPostData
    ]),
    /**
     * 第一期保險費
     */
    face_amt: {
      get() {
        this.GetMyWayPostData.face_amt = 220
        return this.GetMyWayPostData.face_amt
      },
      set(value) {
        this.GetMyWayPostData.mode_prem = 0
        this.GetMyWayPostData.face_amt = value
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
        let result = this.GetMyWayPostData.modx_99_ind || 0
        if (result !== 0) this.OnUntimed(result)
        return result
      },
      set(value) {
        // 分期繳付:N 不定期繳:Y
        this.OnUntimed(value)
        this.GetMyWayPostData.mode_prem = 0
        this.GetMyWayPostData.modx_99_ind = parseInt(value) === 1 ? 'Y' : 'N'
      }
    },
    // 分期保費每期 請輸入續期保險費。
    qpoop_25_prem: {
      get() {
        let result = this.GetMyWayPostData.qpoop_25_prem
        return result === 0 ? '' : result
      },
      set(value) {
        this.GetMyWayPostData.mode_prem = 0
        this.GetMyWayPostData.qpoop_25_prem = value
      }
    },
    // 繳別 請選擇約定續期繳法-分期繳付之續期保費-繳別。
    qpoop_25_modx: {
      get() {
        let result = this.GetMyWayPostData.qpoop_25_modx
        return result === '' ? '0' : result
      },
      set(value) {
        this.GetMyWayPostData.mode_prem = 0
        this.GetMyWayPostData.qpoop_25_modx = value
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
