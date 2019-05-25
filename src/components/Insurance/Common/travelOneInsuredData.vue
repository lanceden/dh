<template>
  <!-- 被保險人資料 只有子女的話不顯示本人-->
  <div class="bg-radius" v-if="OnShow">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../static/img/insurance.png" alt=""></div>
          <div class="insure-check-title">被保險人資料</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line col-sm-12"></div>
    <form class="form-bottom">
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">關係</label>
        <div class="col-sm-12">
          <div class="form-control insure-input insure-input-edit">{{Relation === '本人' ? '本人' :  `子女(${index})`}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">姓名</label>
        <div class="col-sm-12">
          <div v-if="this.stateData.PolicyData.InsuredInfo[index].Relation === 1" class="form-control insure-input insure-input-edit">{{Name}}</div>
          <input type="text" class="form-control insure-input insure-input-edit" placeholder="請填寫" v-else v-model="Name">
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">出生生日</label>
        <div class="col-sm-12 insure-select-align">
          <input type="date" class="form-control insure-input insure-input-edit" v-model="DobComputed" :disabled="this.Relation === '本人'" />
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
        <div class="col-sm-12">
          <div v-if="this.stateData.PolicyData.InsuredInfo[index].Relation === 1" class="form-control insure-input insure-input-edit">{{ProposerInfoId}}</div>
          <input type="text" class="form-control insure-input insure-input-edit" maxlength="10" placeholder="請填寫" v-else v-model="ProposerInfoId">
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">監護宣告</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box" @click="OnEnsure('yes')">
            <div class="insure-check"><img id="imgHasAuthyes" :src="ensure.isHasAuthRepYes" alt=""></div>
            <div class="insure-check-content">是</div>
          </div>
        </div>
        <div class="border-bottom-line col-sm-12" v-show="this.stateData.PolicyData.InsuredInfo[index].HasAuthRep"></div>
        <label class="col-sm-12 col-form-label insure-label text-with-select" v-show="this.stateData.PolicyData.InsuredInfo[index].HasAuthRep">親愛的客戶謝謝您的申購保險，因相關法規規定您的申請文件需另檢附相關證明文件。很抱歉您無法於本網站進行投保動作。煩請另洽新光人壽服務人員詢問相關保險商品購買事宜，造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box" @click="OnEnsure('no')">
            <div class="insure-check"><img id="imgHasAuthno" :src="ensure.isHasAuthRepNo" alt=""></div>
            <div class="insure-check-content">否</div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: [
    'stateData',
    'index'
  ],
  data() {
    return {
      dbo: 0,
      ensure: {
        isHasAuthRepYes: '../../../../static/img/oval.png',
        isHasAuthRepNo: '../../../../static/img/oval.png'
      }
    }
  },
  watch: {
    HasAuthRep(newValue, oldValue) {
      if (newValue === null) {
        this.ensure.isHasAuthRepYes = '../../../../static/img/oval.png'
        this.ensure.isHasAuthRepNo = '../../../../static/img/oval.png'
      }
    }
  },
  computed: {
    OnShow() {
      // 0本人 1子女 2本人及子女
      let targetType = parseInt(this.stateData.TargetType)
      // 本人
      if (targetType === 0) {
        return true
      } else if (targetType === 1) { // 子女要判斷index不是0
        return true
      } else if (targetType === 2) {
        return true
      } else {
        return false
      }
    },
    HasAuthRep() {
      return this.stateData.PolicyData.InsuredInfo[this.index].HasAuthRep
    },
    // 關係
    Relation: {
      get() {
        if (this.stateData.PolicyData.InsuredInfo[this.index]) {
          let result = parseInt(this.stateData.PolicyData.InsuredInfo[this.index].Relation)
          switch (result) {
            case 1:
              return '本人'
            case 3:
              return '子女'
          }
        }
      }
    },
    // 姓名
    Name: {
      get() {
        return this.stateData.PolicyData.InsuredInfo[this.index].PersonalData.Name
      },
      set(value) {
        this.stateData.PolicyData.InsuredInfo[this.index].PersonalData.Name = value
      }
    },
    // 身故受益人生日
    DobComputed: {
      get() {
        let result = moment(this.stateData.PolicyData.InsuredInfo[this.index].PersonalData.Dob, 'YYYY-MM-DD').format('YYYY-MM-DD')
        this.dob = result
        return this.dob
      },
      set(value) {
        this.stateData.PolicyData.InsuredInfo[this.index].PersonalData.Dob = `${value}`
        this.dob = value
      }
    },
    ProposerInfoId: {
      get() {
        return this.stateData.PolicyData.InsuredInfo[this.index].PersonalData.ID
      },
      set(value) {
        this.stateData.PolicyData.InsuredInfo[this.index].PersonalData.ID = value
      }
    }
  },
  methods: {
    /**
     * 設置本人監護宣告
     * @param {string} target 本人:own
     */
    OnEnsure(target) {
      switch (target) {
        case 'yes':
          this.ensure.isHasAuthRepYes = '../../../../static/img/oval-ed.png'
          this.ensure.isHasAuthRepNo = '../../../../static/img/oval.png'
          this.stateData.PolicyData.InsuredInfo[this.index].HasAuthRep = target === 'yes'
          break
        case 'no':
          this.ensure.isHasAuthRepYes = '../../../../static/img/oval.png'
          this.ensure.isHasAuthRepNo = '../../../../static/img/oval-ed.png'
          this.stateData.PolicyData.InsuredInfo[this.index].HasAuthRep = target === 'yes'
          break
        default:
          this.ensure.isHasAuthRepYes = '../../../../static/img/oval.png'
          this.ensure.isHasAuthRepNo = '../../../../static/img/oval.png'
          break
      }
    }
  }
}

</script>
