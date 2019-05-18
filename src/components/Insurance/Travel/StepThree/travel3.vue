<template>
  <div v-if="parseInt(this.GetTravelPostData.PolicyData.InsuredInfo[index].Relation) === 1">
    <!-- 旅行平安保險保額 -->
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
            <div class="insure-check-title">本人</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row" v-show="parseInt(this.GetTravelPostData.PolicyData.InsuredInfo[index].Relation) === 1">
          <!-- Enjoy Life旅行平安保險保額 -->

          <label class="col-sm-12 col-form-label insure-label">Enjoy Life旅行平安保險保額</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="PrimaryPolicyFaceAmtOne">
              <option v-for="(item, index) in GetPremiumsProp" :key="index" :value="item">{{item}} 萬</option>
            </select>
          </div>
          <!-- 傷害醫療 -->
          <label class="col-sm-12 col-form-label insure-label">傷害醫療</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="SupplementPolicyFaceAmt">
              <option v-for="item in silData" :key="item.Value" :value="item.Value">{{item.Text}}</option>
            </select>
          </div>
          <!-- 海外突發疾病 -->
          <label v-show="ShowOverSea" class="col-sm-12 col-form-label insure-label">海外突發疾病</label>
          <div class="col-sm-12 insure-select-align" v-show="ShowOverSea">
            <select class="form-control data-input insure-select insure-input-block-edit" :disabled="SupplementPolicyFaceAmtoOverSeaDisable" v-model="SupplementPolicyFaceAmtoOverSea">
              <option v-for="item in silData" :key="item.Value" :value="item.Value">{{item.Text}}</option>
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
import TravelGetterTypes from '../../../../store/modules/Travel/Types/TravelGetterTypes'
import { data } from './mockBaoerData'
import { silData } from './mockSupplCoverageSli'

export default {
  props: [
    'index'
  ],
  data() {
    return {
      SupplementPolicyFaceAmtoOverSeaDisable: false,
      baoer: [],
      silData: []
    }
  },
  created() {
    // 取回保額
    console.log(this.index)
    this.baoer = data.Data.Result
    this.silData = silData.Data.Result
  },
  mounted() {
    this.FuncGetPremiums({
      Verified: this.GetAccountData.JoinSource !== '3' ? 'Y' : 'N',
      PLAN_Code_1: this.GetTravelPostData.InsurancePlanCode
    })
  },
  computed: {
    ...mapGetters([
      'GetPremiums',
      'GetAccountData',
      TravelGetterTypes.GetTravelPostData
    ]),
    ShowOverSea: {
      get() {
        return parseInt(this.GetEntTravelPostData.PolicyData.TravelType) === 2
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
        if (this.GetTravelPostData.PolicyData.InsuredInfo[this.index].PrimaryPolicy.FaceAmt === null) {
          this.GetTravelPostData.PolicyData.InsuredInfo[this.index].PrimaryPolicy.FaceAmt = 800
        }
        return this.GetTravelPostData.PolicyData.InsuredInfo[this.index].PrimaryPolicy.FaceAmt
      },
      set(value) {
        this.GetTravelPostData.PolicyData.InsuredInfo[this.index].PrimaryPolicy.FaceAmt = value
        // 變更值後傷害醫療及海外突發疾病下拉框需一起改變值
        let maxIndex = value.toString().substring(0, 1)
        this.silData = []
        for (let index = maxIndex; index >= 0; index--) {
          if (index !== 0) {
            this.silData.push({
              Text: `${index}0萬`,
              Value: `${index}0`
            })
          } else {
            this.silData.push({
              Text: `不投保`,
              Value: `0`
            })
          }
        }
        this.GetTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[this.index].FaceAmt = parseInt(value.toString().substring(0, 1) + '0')
        if (this.ShowOverSea) {
          this.GetTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt = parseInt(value.toString().substring(0, 1) + '0')
          this.GetTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[1].FaceAmt = parseInt(value.toString().substring(0, 1) + '0')
        }
      }
    },
    // 被保險人(本人)：傷害醫療
    SupplementPolicyFaceAmt: {
      get() {
        if (this.GetTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt === null) {
          this.GetTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt = 80
        }
        return this.GetTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt
      },
      set(value) {
        this.GetTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt = value
        this.SupplementPolicyFaceAmtoOverSea = value
      }
    },
    // 被保險人(本人)：海外突發疾病
    SupplementPolicyFaceAmtoOverSea: {
      get() {
        return this.GetTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[1].FaceAmt || 80
      },
      set(value) {
        // 若為0要關閉
        if (value === '0') {
          this.SupplementPolicyFaceAmtoOverSeaDisable = true
        } else {
          this.SupplementPolicyFaceAmtoOverSeaDisable = false
        }
        this.GetTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[1].FaceAmt = value
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
