<template>
  <!-- 投保對象為本人或本人與子女才顯示 -->
  <div v-if="parseInt(stateData.TargetType) === 0 || parseInt(stateData.TargetType) === 2">
    <!-- 旅行平安保險保額 -->
    <div class="bg-radius" v-show="parseInt(stateData.PolicyData.InsuredInfo[index].Relation) === 1">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/edit.png" alt=""></div>
            <div class="insure-check-title">本人</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <!-- Enjoy Life旅行平安保險保額 -->
          <label class="col-sm-12 col-form-label insure-label">Enjoy Life旅行平安保險保額</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="PrimaryPolicyFaceAmtOne">
              <option v-for="(item, index) in GetPremiumsProp" :key="index" :value="item">{{item}} 萬</option>
            </select>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <!-- 傷害醫療 -->
        <div class="form-group row">
          <label class="col-sm-12 col-form-label insure-label">傷害醫療</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="SupplementPolicyFaceAmt">
              <option v-for="item in $store.state.TRAVELSUPPL" :key="item.Value" :value="item.Value">{{item.Text}}</option>
            </select>
          </div>
        </div>
        <div class="border-bottom-line"></div>
        <!-- 海外突發疾病 -->
        <div class="form-group row">
          <label v-show="ShowOverSea" class="col-sm-12 col-form-label insure-label">海外突發疾病</label>
          <div class="col-sm-12 insure-select-align" v-show="ShowOverSea">
            <select class="form-control data-input insure-select insure-input-block-edit" :disabled="SupplementPolicyFaceAmtoOverSeaDisable" v-model="SupplementPolicyFaceAmtoOverSea">
              <option v-for="item in $store.state.TRAVELSUPPL" :key="item.Value" :value="item.Value">{{item.Text}}</option>
            </select>
          </div>
        </div>
        <div class="col-sm-12">
          <ul class="insure-tips-text">
            <li class="decimal">投保保額最高 800 萬，累積同業 800 萬</li>
            <li class="decimal">子女投保保額最高 200 萬，累積同業 200 萬</li>
            <li class="decimal">旅遊地點為歐洲申根地區者，附加傷害醫療保險及海外突發疾病健康保險保額上限為主契約保險金額20%，但最高以150萬為限。</li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: [
    'index',
    'stateData'
  ],
  data() {
    return {
      SupplementPolicyFaceAmtoOverSeaDisable: false
    }
  },
  mounted() {
    this.FuncGetPremiums({
      Verified: this.GetAccountData.JoinSource !== '3' ? 'Y' : 'N',
      PLAN_Code_1: this.stateData.InsurancePlanCode
    })
    this.FuncGetInsTravelSupplCoverageSli({
      IsVerified: this.stateData.PolicyData.ProposerInfo[0].IsVerified,
      PlanCode: this.stateData.InsurancePlanCode,
      Schengen: this.stateData.PolicyData.TravelType === '2' && this.stateData.PolicyData.TravelCountry === '7'
    })
  },
  computed: {
    ...mapGetters([
      'GetPremiums',
      'GetAccountData'
    ]),
    ShowOverSea: {
      get() {
        return parseInt(this.stateData.PolicyData.TravelType) === 2
      }
    },
    // 保額下拉框
    GetPremiumsProp: {
      get() {
        if (this.GetPremiums.length === 0) return []
        return this.GetPremiums[0].Prem_List.split(',')
      }
    },
    // 被保險人(本人)：旅行平安保險
    PrimaryPolicyFaceAmtOne: {
      get() {
        if (!this.stateData.PolicyData.InsuredInfo[this.index].PrimaryPolicy) {
          return 100
        }
        if (this.stateData.PolicyData.InsuredInfo[this.index].PrimaryPolicy.FaceAmt === null) {
          this.stateData.PolicyData.InsuredInfo[this.index].PrimaryPolicy.FaceAmt = 800
        }
        return this.stateData.PolicyData.InsuredInfo[this.index].PrimaryPolicy.FaceAmt
      },
      set(value) {
        this.stateData.PolicyData.InsuredInfo[this.index].PrimaryPolicy.FaceAmt = value
        // 變更值後傷害醫療及海外突發疾病下拉框需一起改變值
        let maxIndex = value.toString().substring(0, 1)
        this.$store.state.TRAVELSUPPL = []
        for (let index = maxIndex; index >= 0; index--) {
          if (index !== 0) {
            this.$store.state.TRAVELSUPPL.push({
              Text: `${index}0萬`,
              Value: `${index}0`
            })
          } else {
            this.$store.state.TRAVELSUPPL.push({
              Text: `不投保`,
              Value: `0`
            })
          }
        }
        this.stateData.PolicyData.InsuredInfo[this.index].SupplementPolicy[this.index].FaceAmt = parseInt(value.toString().substring(0, 1) + '0')
        if (this.ShowOverSea) {
          this.stateData.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt = parseInt(value.toString().substring(0, 1) + '0')
          this.stateData.PolicyData.InsuredInfo[this.index].SupplementPolicy[1].FaceAmt = parseInt(value.toString().substring(0, 1) + '0')
        }
      }
    },
    // 被保險人(本人)：傷害醫療
    SupplementPolicyFaceAmt: {
      get() {
        if (!this.stateData.PolicyData.InsuredInfo[this.index].PrimaryPolicy) {
          return 0
        }
        if (this.stateData.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt === null) {
          this.stateData.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt = 80
        }
        return this.stateData.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt
      },
      set(value) {
        this.stateData.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt = value
        // 國外旅遊才有海外突發疾病
        if (parseInt(this.stateData.PolicyData.TravelType) === 2) {
          this.SupplementPolicyFaceAmtoOverSea = value
        }
      }
    },
    // 被保險人(本人)：海外突發疾病
    SupplementPolicyFaceAmtoOverSea: {
      get() {
        if (!this.stateData.PolicyData.InsuredInfo[this.index].PrimaryPolicy) {
          return 0
        }
        // TravelType 1:國內 2:國外
        return parseInt(this.stateData.PolicyData.TravelType) === 1 ? 0 : this.stateData.PolicyData.InsuredInfo[this.index].SupplementPolicy[1].FaceAmt || 80
      },
      set(value) {
        // 若為0要關閉
        let result = parseInt(value)
        if (result === 0) {
          this.SupplementPolicyFaceAmtoOverSeaDisable = true
        } else {
          this.SupplementPolicyFaceAmtoOverSeaDisable = false
        }
        this.stateData.PolicyData.InsuredInfo[this.index].SupplementPolicy[1].FaceAmt = result
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetPremiums', // 本人主約
      'FuncGetInsTravelSupplCoverageSli' // 本人附約
    ])
  }
}

</script>
