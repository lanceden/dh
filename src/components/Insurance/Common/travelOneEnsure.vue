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
    // 子女數量
    childrenNo: {
      get() {
        if (this.stateData.length === 0) return 0
        return this.stateData.PolicyData.ChildrenNo
      },
      set(value) {
        let result = parseInt(value)
        this.stateData.PolicyData.ChildrenNo = result
        // 子女
        if (this.ensure.target === 'child') {
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
        }
        // 本人與子女
        if (this.ensure.target === 'both') {
          this.stateData.PolicyData.InsuredInfo = []
          // 先將本人資料帶入
          this.stateData.PolicyData.InsuredInfo.push({
            Index: 0,
            Relation: 1,
            PersonalData: {
              ID: this.stateData.PolicyData.ProposerInfo[0].ID,
              Name: this.stateData.PolicyData.ProposerInfo[0].Name,
              Dob: this.stateData.PolicyData.ProposerInfo[0].Dob
            },
            HasAuthRep: null
          })
          // 在帶入子女資料
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
