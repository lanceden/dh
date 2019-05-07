<template>
  <div>
    <div class="container">
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
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">被保險人</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input-block" v-model="$store.state.Travel.TRAVELPOSTDATA.PolicyData.ProposerInfo[0].Name">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">被保險人身分證字號</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input-block" id="" v-model="$store.state.Travel.TRAVELPOSTDATA.PolicyData.ProposerInfo[0].ID">
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-sm-12 col-form-label insure-label">被保險人性別</label>
            <div class="col-sm-12">
              <input type="text" class="form-control insure-input-block" v-model="$store.state.Travel.TRAVELPOSTDATA.PolicyData.ProposerInfo[0].Gender === '1' ? '男' : '女'">
            </div>
          </div>
        </form>
      </div>
      <!-- 被保險人資料 -->
      <div class="bg-radius">
        <div class="top">
          <div class="top-title">
            <div class="insure-notice-box">
              <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
              <div class="insure-check-title">被保險人資料</div>
            </div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12"></div>
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
                <select class="form-control data-input insure-select insure-input-block-edit TravelCount notRequired" v-model="childrenNo" v-show="ensure.target === 'child'">
                  <option value="0" selected="selected" >請選擇</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div class="border-bottom-line col-sm-12"></div>
            <div class="top col-sm-12">
              <div class="insure-notice-box" @click="OnEnsure('both')">
                <div class="insure-check"><img :src="ensure.both" alt=""></div>
                <div class="insure-check-content">本人與七歲以下子女</div>
                <select class="form-control data-input insure-select insure-input-block-edit TravelCount notRequired" v-model="childrenNo" v-show="ensure.target === 'both'">
                  <option value="0" selected="selected" >請選擇</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TravelGetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes.js'

export default {
  data() {
    return {
      ensure: {
        own: '../../../../../static/img/oval.png',
        child: '../../../../../static/img/oval.png',
        both: '../../../../../static/img/oval.png',
        target: '0'
      }
    }
  },
  mounted() {
    // 初始化旅平險資料
    let target = parseInt(this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TargetType)
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
      TravelGetterTypes.GetTravelIsInit,
      TravelGetterTypes.GetTravelPostData
    ]),
    // 子女數量
    childrenNo: {
      get() {
        return this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.ChildrenNo
      },
      set(value) {
        let result = parseInt(value)
        if(result === 0) return
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.ChildrenNo = result
        // 子女
        if (this.ensure.target === 'child') {
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo = []

          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.push({
            Index: 0,
            Relation: 1,
            PersonalData: {
              ID: this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.ProposerInfo[0].ID,
              Name: this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.ProposerInfo[0].Name,
              Dob: this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.ProposerInfo[0].Dob
            },
            HasAuthRep: false,
            show: false
          })
          for (let i = 1; i <= result; i++) {
            this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.push({
              Index: i,
              Relation: 3,
              PersonalData: {
                ID: '',
                Name: '',
                Dob: ''
              },
              show: true
            })
          }
        }
        // 本人與子女
        if (this.ensure.target === 'both') {
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo = []
          // 先將本人資料帶入
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.push({
            Index: 0,
            Relation: 1,
            PersonalData: {
              ID: this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.ProposerInfo[0].ID,
              Name: this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.ProposerInfo[0].Name,
              Dob: this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.ProposerInfo[0].Dob
            },
            show: true
          })
          // 在帶入子女資料
          for (let i = 1; i <= result; i++) {
            this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.push({
              Index: i,
              Relation: 3,
              PersonalData: {
                ID: '',
                Name: '',
                Dob: ''
              },
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
      switch (target) {
        case 'own': // 1本人
          this.ensure.own = '../../../../../static/img/oval-ed.png'
          this.ensure.child = '../../../../../static/img/oval.png'
          this.ensure.both = '../../../../../static/img/oval.png'
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TargetType = 0
          this.$store.state.Travel.TRAVELPOSTDATA.TargetType = 0

          this.ensure.target = target
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo = []
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo.push({
            Index: 0,
            Relation: 1,
            PersonalData: {
              ID: this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.ProposerInfo[0].ID,
              Name: this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.ProposerInfo[0].Name,
              Dob: this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.ProposerInfo[0].Dob
            },
            HasAuthRep: false,
            show: true
          })
          break
        case 'child': // 3 子女
          this.ensure.own = '../../../../../static/img/oval.png'
          this.ensure.child = '../../../../../static/img/oval-ed.png'
          this.ensure.both = '../../../../../static/img/oval.png'
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TargetType = 1
          this.$store.state.Travel.TRAVELPOSTDATA.TargetType = 1
          this.ensure.target = target
          break
        case 'both': // 本與人與子 array數量要依選擇數量定 2
          this.ensure.own = '../../../../../static/img/oval.png'
          this.ensure.child = '../../../../../static/img/oval.png'
          this.ensure.both = '../../../../../static/img/oval-ed.png'
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TargetType = 2
          this.$store.state.Travel.TRAVELPOSTDATA.TargetType = 2
          this.ensure.target = target
          break
      }
    }
  }
}

</script>
