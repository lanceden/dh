<template>
  <div>
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
</template>

<script>
import { mapGetters } from 'vuex'
import TravelGetterTypes from '../../../store/modules/Travel/Types/TravelGetterTypes.js'
export default {
  props: [
    'stateData'
  ],
  data() {
    return {
      ensure: {
        own: `../../../../../static/img/oval.png`,
        child: '../../../../../static/img/oval.png',
        both: '../../../../../static/img/oval.png',
        target: '0'
      }
    }
  },
  mounted() {
    // 初始化旅平險資料
    if (this.stateData.length === 0) return
    let target = parseInt(this.stateData.TargetType)
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
      TravelGetterTypes.GetTravelIsInit
    ]),
    // 子女數量
    childrenNo: {
      get() {
        if (this.stateData.length === 0) return 0
        return this.stateData.PolicyData.ChildrenNo
      },
      set(value) {
        let result = parseInt(value)
        this.stateData.PolicyData.ChildrenNo = result
        // 如果已經進入下一步, 回來時要判斷是否有改變保障對象, 要重新發送請求到APi
        if (this.GetTravelIsInit) {
          this.GetTravelIsInit = false
        }
        // 子女
        if (this.ensure.target === 'child') {
          // 沒有設定過資料
          if (!this.stateData.PolicyData.InsuredInfo) {
            this.stateData.PolicyData.InsuredInfo = []
            for (let i = 1; i <= result; i++) {
              this.stateData.PolicyData.InsuredInfo.push({
                Index: i,
                Relation: 3,
                PersonalData: {
                  ID: '',
                  Name: '',
                  Dob: ''
                },
                HasAuthRep: null
              })
            }
          } else { // 有設定過資料
            this.stateData.PolicyData.InsuredInfo.forEach(item => {
              // 子女不會有本人資料, 刪除
              if (parseInt(item.Relation) === 1) {
                this.stateData.PolicyData.InsuredInfo = []
              }
            })
            // 新增一個子女
            if (result === this.stateData.PolicyData.InsuredInfo.length) {
              this.stateData.PolicyData.InsuredInfo.push({
                Index: 1,
                Relation: 3,
                PersonalData: {
                  ID: '',
                  Name: '',
                  Dob: ''
                },
                HasAuthRep: null
              })
            } else if (result > this.stateData.PolicyData.InsuredInfo.length) { // 新選的數量大於舊的,要append到陣列
              for (let i = this.stateData.PolicyData.InsuredInfo.length + 1; i <= result; i++) {
                this.stateData.PolicyData.InsuredInfo.push({
                  Index: i,
                  Relation: 3,
                  PersonalData: {
                    ID: '',
                    Name: '',
                    Dob: ''
                  },
                  HasAuthRep: null
                })
              }
            } else { // result < oldCount
              // 要刪除幾個
              let oldCount = this.stateData.PolicyData.InsuredInfo.length
              for (let index = (oldCount - result); index > 0; index--) {
                delete this.stateData.PolicyData.InsuredInfo.splice(index, 1)
              }
            }
          }
        }
        // 本人與子女
        if (this.ensure.target === 'both') {
          // 暫存現在的資料
          let tempData = this.stateData.PolicyData.InsuredInfo
          // 沒有設定過資料
          this.stateData.PolicyData.InsuredInfo = []
          // 先將本人資料帶入
          this.stateData.PolicyData.InsuredInfo.splice(0, 0, {
            Index: 0,
            Relation: 1,
            PersonalData: {
              ID: this.stateData.PolicyData.ProposerInfo[0].ID,
              Name: this.stateData.PolicyData.ProposerInfo[0].Name,
              Dob: this.stateData.PolicyData.ProposerInfo[0].Dob
            },
            HasAuthRep: null
          })
          for (let i = 1; i <= result; i++) {
            console.log(i)
            this.stateData.PolicyData.InsuredInfo.splice(i, 0, {
              Index: i,
              Relation: 3,
              PersonalData: {
                ID: tempData === null ? '' : tempData[i] === undefined ? '' : tempData[i].PersonalData.ID,
                Name: tempData === null ? '' : tempData[i] === undefined ? '' : tempData[i].PersonalData.Name,
                Dob: tempData === null ? '' : tempData[i] === undefined ? '' : tempData[i].PersonalData.Dob
              },
              HasAuthRep: null
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
      // 如果已經進入下一步, 回來時要判斷是否有改變保障對象, 要重新發送請求到APi
      if (this.GetTravelIsInit) {
        this.GetTravelIsInit = false
      }
      switch (target) {
        case 'own': // 1本人
          this.ensure.own = '../../../../../static/img/oval-ed.png'
          this.ensure.child = '../../../../../static/img/oval.png'
          this.ensure.both = '../../../../../static/img/oval.png'
          this.stateData.TargetType = 0
          this.childrenNo = 0
          this.stateData.PolicyData.InsuredInfo = [{
            Index: 0,
            Relation: 1,
            PersonalData: {
              ID: this.stateData.PolicyData.ProposerInfo[0].ID,
              Name: this.stateData.PolicyData.ProposerInfo[0].Name,
              Dob: this.stateData.PolicyData.ProposerInfo[0].Dob
            },
            HasAuthRep: null
          }]
          break
        case 'child': // 3 子女
          this.ensure.own = '../../../../../static/img/oval.png'
          this.ensure.child = '../../../../../static/img/oval-ed.png'
          this.ensure.both = '../../../../../static/img/oval.png'
          this.stateData.TargetType = 1
          break
        case 'both': // 本與人與子 array數量要依選擇數量定 2
          this.ensure.own = '../../../../../static/img/oval.png'
          this.ensure.child = '../../../../../static/img/oval.png'
          this.ensure.both = '../../../../../static/img/oval-ed.png'
          this.stateData.TargetType = 2
          break
      }
    }
  }
}

</script>
