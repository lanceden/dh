<template>
  <!-- 基本資料 -->
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
          <div class="insure-check-title">基本資料</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <div class="insure-text">
      主管機關規定，要保人及被保人資料需為同一人，如需修改個人資料，請洽本公司客戶服務中心。
    </div>
    <form class="form-bottom">
      <!-- 要保險人 -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">要保險人</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{this.GetEntTravelPostData.length === 0 ? '' : this.GetEntTravelPostData.PolicyData.ProposerInfo[0].Name}}</div>
        </div>
      </div>
      <!-- 要保險人身分證字號 -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">要保險人身分證字號</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{this.GetEntTravelPostData.length === 0 ? '' : this.GetEntTravelPostData.PolicyData.ProposerInfo[0].ID}}</div>
        </div>
      </div>
      <!-- 要保險人性別 -->
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">要保險人性別</label>
        <div class="col-sm-12">
          <div class="form-control insure-input-block">{{this.GetEntTravelPostData.length === 0 ? '' : this.GetEntTravelPostData.PolicyData.ProposerInfo[0].Gender === '1' ? '男' : '女'}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">企業客戶專區代碼</label>
        <div class="col-sm-12">
          <input type="text" class="form-control insure-input insure-input-edit" placeholder="請填寫" v-model="entCodeComputed">
        </div>
      </div>
      <div class="col-sm-12">
        <div class="insure-tips-text first-blue">
          若忘記代碼，請洽詢您公司的負責窗口。
        </div>
      </div>
    </form>
    <!-- 請確認保障對象 -->
    <form class="form-bottom">
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">請確認保障對象</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box" @click="OnEnsure('own')">
            <div class="insure-check"><img :src="ensure.own" alt=""></div>
            <div class="insure-check-content">本人</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box" @click="OnEnsure('child')">
            <div class="insure-check"><img :src="ensure.child" alt=""></div>
            <div class="insure-check-content">七歲以下子女</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="ensure.target === 'child'"></div>
        <div class="col-sm-12 insure-select-align brown-select-withradio">
          <select class="form-control data-input insure-select insure-select-withradio" v-model="childrenNo" v-show="ensure.target === 'child'">
            <option value="1" selected="selected">1位子女</option>
            <option value="2">2位子女</option>
            <option value="3">3位子女</option>
            <option value="4">4位子女</option>
            <option value="5">5位子女</option>
          </select>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box" @click="OnEnsure('both')">
            <div class="insure-check"><img :src="ensure.both" alt=""></div>
            <div class="insure-check-content">本人與七歲以下子女</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="ensure.target === 'both'"></div>
        <div class="col-sm-12 insure-select-align brown-select-withradio">
          <select class="form-control data-input insure-select insure-select-withradio" v-model="childrenNo" v-show="ensure.target === 'both'">
            <option value="1" selected="selected">1位子女</option>
            <option value="2">2位子女</option>
            <option value="3">3位子女</option>
            <option value="4">4位子女</option>
            <option value="5">5位子女</option>
          </select>
        </div>
      </div>
    </form>
  </div>
  <!-- 基本資料 End -->
</template>

<script>
import { mapGetters } from 'vuex'
import EntTravelGetterTypes from '../../../../store/modules/EntTravel/Types/EntTravelGetterTypes.js'

export default {
  data() {
    return {
      ensure: {
        own: `../../../../../static/img/oval.png`,
        child: '../../../../../static/img/oval.png',
        both: '../../../../../static/img/oval.png',
        target: '0'
      },
      entCode: ''
    }
  },
  mounted() {
    // 初始化旅平險資料
    if (this.GetEntTravelPostData.length === 0) return
    let target = parseInt(this.GetEntTravelPostData.TargetType)
    switch (target) {
      case 0:
        this.OnEnsure('own')
        break
      case 1:
        this.OnEnsure('child')
        break
      case 2:
        this.OnEnsure('both')
        break
    }
  },
  computed: {
    ...mapGetters([
      EntTravelGetterTypes.GetEntTravelIsInit,
      EntTravelGetterTypes.GetEntTravelPostData
    ]),
    entCodeComputed: {
      get() {
        return this.entCode
      },
      set(value) {
        this.entCode = value
      }
    },
    // 子女數量
    childrenNo: {
      get() {
        if (this.GetEntTravelPostData.length === 0) return 0
        return this.GetEntTravelPostData.PolicyData.ChildrenNo
      },
      set(value) {
        let result = parseInt(value)
        this.GetEntTravelPostData.PolicyData.ChildrenNo = result
        // 子女
        if (this.ensure.target === 'child') {
          this.GetEntTravelPostData.PolicyData.InsuredInfo = []

          this.GetEntTravelPostData.PolicyData.InsuredInfo.push({
            Index: 0,
            Relation: 1,
            PersonalData: {
              ID: this.GetEntTravelPostData.PolicyData.ProposerInfo[0].ID,
              Name: this.GetEntTravelPostData.PolicyData.ProposerInfo[0].Name,
              Dob: this.GetEntTravelPostData.PolicyData.ProposerInfo[0].Dob
            },
            HasAuthRep: false,
            show: false
          })
          for (let i = 1; i <= result; i++) {
            this.GetEntTravelPostData.PolicyData.InsuredInfo.push({
              Index: i,
              Relation: 3,
              PersonalData: {
                ID: '',
                Name: '',
                Dob: ''
              },
              HasAuthRep: null,
              show: true
            })
          }
        }
        // 本人與子女
        if (this.ensure.target === 'both') {
          this.GetEntTravelPostData.PolicyData.InsuredInfo = []
          // 先將本人資料帶入
          this.GetEntTravelPostData.PolicyData.InsuredInfo.push({
            Index: 0,
            Relation: 1,
            PersonalData: {
              ID: this.GetEntTravelPostData.PolicyData.ProposerInfo[0].ID,
              Name: this.GetEntTravelPostData.PolicyData.ProposerInfo[0].Name,
              Dob: this.GetEntTravelPostData.PolicyData.ProposerInfo[0].Dob
            },
            HasAuthRep: null,
            show: true
          })
          // 在帶入子女資料
          for (let i = 1; i <= result; i++) {
            this.GetEntTravelPostData.PolicyData.InsuredInfo.push({
              Index: i,
              Relation: 3,
              PersonalData: {
                ID: '',
                Name: '',
                Dob: ''
              },
              HasAuthRep: null,
              show: true
            })
          }
        }
      }
    }
  },
  methods: {
    /**
     * 設置請確認保障對象
     * @param {string} target 本人:own 子女:child 本人與子女:both
     */
    OnEnsure(target) {
      this.ensure.target = target
      if (this.childrenNo === 0 || target !== 'own') {
        this.childrenNo = 1
      }
      switch (target) {
        case 'own': // 1本人
          this.ensure.own = '../../../../../static/img/oval-ed.png'
          this.ensure.child = '../../../../../static/img/oval.png'
          this.ensure.both = '../../../../../static/img/oval.png'
          this.GetEntTravelPostData.TargetType = 0
          this.childrenNo = 0
          this.GetEntTravelPostData.PolicyData.InsuredInfo = []
          this.GetEntTravelPostData.PolicyData.InsuredInfo.push({
            Index: 0,
            Relation: 1,
            PersonalData: {
              ID: this.GetEntTravelPostData.PolicyData.ProposerInfo[0].ID,
              Name: this.GetEntTravelPostData.PolicyData.ProposerInfo[0].Name,
              Dob: this.GetEntTravelPostData.PolicyData.ProposerInfo[0].Dob
            },
            HasAuthRep: null,
            show: true
          })
          break
        case 'child': // 3 子女
          this.ensure.own = '../../../../../static/img/oval.png'
          this.ensure.child = '../../../../../static/img/oval-ed.png'
          this.ensure.both = '../../../../../static/img/oval.png'
          this.GetEntTravelPostData.TargetType = 1
          break
        case 'both': // 本與人與子 array數量要依選擇數量定 2
          this.ensure.own = '../../../../../static/img/oval.png'
          this.ensure.child = '../../../../../static/img/oval.png'
          this.ensure.both = '../../../../../static/img/oval-ed.png'
          this.GetEntTravelPostData.TargetType = 2
          break
      }
    }
  }
}

</script>
