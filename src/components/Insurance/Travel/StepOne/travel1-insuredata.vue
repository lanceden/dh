<template>
  <!-- 被保險人資料 只有子女的話不顯示本人-->
  <div class="bg-radius" v-if="this.GetTravelPostData.PolicyData.InsuredInfo[index].show">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
          <div class="insure-check-title">被保險人資料</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line col-sm-12"></div>
    <form class="form-bottom">
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">關係</label>
        <div class="col-sm-12">
          <input type="text" class="form-control insure-input insure-input-edit" disabled="disabled" :value="Relation === '本人' ? '本人' :  `子女(${index})`">
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">姓名</label>
        <div class="col-sm-12">
          <input type="text" class="form-control insure-input insure-input-edit" id="" placeholder="請填寫姓名" v-model="Name">
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">出生生日</label>
        <div class="col-sm-4 insure-select-align">
          <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="DobYear">
            <option v-show="Relation !== '本人'" value="0">請選擇</option>
            <option v-if="Relation === '本人'" :value="DobYear">{{DobYear}}</option>
            <option v-else v-for="n in 100" :key="n" :value="new Date().getFullYear() + 1 - n">{{new Date().getFullYear() + 1 - n}}</option>
          </select>年
        </div>
        <div class="col-sm-4 insure-select-align">
          <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="DobMonth">
            <option v-show="Relation !== '本人'" value="0">請選擇</option>
            <option v-if="Relation === '本人'" :value="DobMonth">{{DobMonth}}</option>
            <option v-else v-for="n in 12" :key="n" :value="n">{{n}}</option>
          </select>月
        </div>
        <div class="col-sm-4 insure-select-align">
          <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="DobDay">
            <option v-show="Relation !== '本人'" value="0">請選擇</option>
            <option v-if="Relation === '本人'" :value="DobDay">{{DobDay}}</option>
            <option v-else v-for="n in 31" :key="n" :value="n">{{n}}</option>
          </select>日
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身分證字號</label>
        <div class="col-sm-12">
          <input type="text" maxlength="10" class="form-control insure-input insure-input-edit" id="" placeholder="請輸入身份證" v-model="ProposerInfoId">
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">監護宣告</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box" @click="OnEnsure('yes')">
            <div class="insure-check"><img :src="ensure.isHasAuthRepYes" alt=""></div>
            <div class="insure-check-content">是</div>
          </div>
        </div>
        <label v-show="this.GetTravelPostData.PolicyData.InsuredInfo[index].HasAuthRep" class="col-sm-12 col-form-label insure-label">親愛的客戶謝謝您申購旅平險，因法令規定您的申請文件需另檢附相關證明文件。很抱歉這次無法於本系統進行投保。造成您的不便我們深感抱歉，再次感謝您的惠顧。</label>
        <div class="border-bottom-line col-sm-12"></div>
        <div class="top col-sm-12">
          <div class="insure-notice-box" @click="OnEnsure('no')">
            <div class="insure-check"><img :src="ensure.isHasAuthRepNo" alt=""></div>
            <div class="insure-check-content">否</div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TravelGetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes.js'
import moment from 'moment'

export default {
  props: [
    'index'
  ],
  created() {
    if (this.GetTravelPostData.PolicyData.TravelCountry !== null) {
      this.OnEnsure(this.GetTravelPostData.PolicyData.InsuredInfo[this.index].HasAuthRep === true ? 'yes' : 'no')
    }
  },
  data() {
    return {
      year: 0,
      month: 0,
      day: 0,
      ensure: {
        isHasAuthRepYes: '../../../../static/img/oval.png',
        isHasAuthRepNo: '../../../../static/img/oval.png'
      }
    }
  },
  computed: {
    ...mapGetters([
      TravelGetterTypes.GetTravelPostData
    ]),
    // 關係
    Relation: {
      get() {
        switch (this.GetTravelPostData.PolicyData.InsuredInfo[this.index].Relation) {
          case 1:
            return '本人'
          case 3:
            this.GetTravelPostData.PolicyData.InsuredInfo[this.index].Index = this.index
            return '子女'
        }
      }
    },
    // 姓名
    Name: {
      get() {
        return this.GetTravelPostData.PolicyData.InsuredInfo[this.index].PersonalData.Name
      },
      set(value) {
        this.GetTravelPostData.PolicyData.InsuredInfo[this.index].PersonalData.Name = value
      }
    },
    DobYear: {
      get() {
        if(this.Relation === '本人') {
          let result = moment(this.GetTravelPostData.PolicyData.InsuredInfo[this.index].PersonalData.Dob, 'YYYY/MM/DD').format('YYYY')
          this.year = result
        }
        return this.year
      },
      set(value) {
        let result = parseInt(value)
        if (result !== 0) {
          this.GetTravelPostData.PolicyData.InsuredInfo[this.index].PersonalData.Dob = `${value}/${this.DobMonth}/${this.DobDay}`
        }
        this.year = result
      }
    },
    DobMonth: {
      get() {
        if(this.Relation === '本人') {
          let result = moment(this.GetTravelPostData.PolicyData.InsuredInfo[this.index].PersonalData.Dob, 'YYYY/MM/DD').format('YYYY/MM')
          this.month = result.split('/')[1]
        }
        return this.month
      },
      set(value) {
        let result = parseInt(value)
        if (result !== 0) {
          this.GetTravelPostData.PolicyData.InsuredInfo[this.index].PersonalData.Dob = `${this.DobYear}/${value}/${this.DobDay}`
        }
        this.month = result
      }
    },
    DobDay: {
      get() {
        if(this.Relation === '本人') {
          let result = moment(this.GetTravelPostData.PolicyData.InsuredInfo[this.index].PersonalData.Dob, 'YYYY/MM/DD').format('YYYY/MM/DD')
          this.day = result.split('/')[2]
        }
        return this.day
      },
      set(value) {
        let result = parseInt(value)
        if (result !== 0) {
          this.GetTravelPostData.PolicyData.InsuredInfo[this.index].PersonalData.Dob = `${this.DobYear}/${this.DobMonth}/${value}`
        }
        this.day = result
      }
    },
    ProposerInfoId: {
      get() {
        return this.GetTravelPostData.PolicyData.InsuredInfo[this.index].PersonalData.ID
      },
      set(value) {
        this.GetTravelPostData.PolicyData.InsuredInfo[this.index].PersonalData.ID = value
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
          break
        case 'no':
          this.ensure.isHasAuthRepYes = '../../../../static/img/oval.png'
          this.ensure.isHasAuthRepNo = '../../../../static/img/oval-ed.png'
          break
      }
      this.GetTravelPostData.PolicyData.InsuredInfo[this.index].HasAuthRep = target === 'yes'
      console.log(this.GetTravelPostData.PolicyData.InsuredInfo[this.index].HasAuthRep)
    }
  }
}

</script>
