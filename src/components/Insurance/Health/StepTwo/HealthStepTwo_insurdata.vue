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
          <div class="insure-input-block">{{GetHealthPostData.ins_type_name}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">保險期間</label>
        <div class="col-sm-12">
          <div class="insure-input-block">投保始期自</div>
          <div class="insure-input-block">{{insStartDateROC}} 至 </div>
          <div class="insure-input-block" id="matured_date">{{insEndDateROC}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">投保額度</label>
        <div class="col-sm-12">
          <select name="face_amt" id="face_amt" class="form-control data-input insure-select insure-input-edit" v-model="face_amt">
            <option value="0" selected="selected">請選擇</option>
            <option v-for="(item, index) in this.GetPremiums" :key="index" :value="item.Value">{{item.Text}}</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for class="col-sm-12 col-form-label insure-label insure-label">注意事項</label>
        <div class="col-sm-12">
          <div class="insure-notice-text">
            變更或增加驗證方式請至：客戶服務中心>客戶資料管理>客戶驗證狀態
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes.js'
import moment from 'moment'
import { InitColumnData } from '../../../../utils/initColumnData'

const PLANCODE = `KAA01`
export default {
  data() {
    return {
      insStartDateROC: moment().format(`民國${parseInt(new Date().getFullYear()) - 1911}年MM月DD日午夜十二時`),
      insEndDateROC: moment().format(`民國${parseInt(new Date().getFullYear()) + 1 - 1911}年MM月DD日午夜十二時`)
    }
  },
  created() {
    // 取回保額下拉框
    this.FuncGetPremiums({
      IsVerified: this.GetAccountData.JoinSource !== '3',
      PlanCode: PLANCODE
    })
    this.GetHealthPostData.po_issue_date = moment().format('YYYY-MM-DD')
    this.GetHealthPostData.AuthorizedRep = false
  },
  computed: {
    ...mapGetters([
      'GetAccountData',
      'GetPremiums',
      GetterTypes.GetHealthPostData
    ]),
    /**
     * 第一期保險費
     */
    face_amt: {
      get() {
        let result = InitColumnData(this.GetHealthPostData.face_amt, 5)
        this.GetHealthPostData.face_amt = result
        return result
      },
      set(value) {
        this.GetHealthPostData.mode_prem = 0
        this.GetHealthPostData.face_amt = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetPremiums'
    ])
  }
}

</script>
