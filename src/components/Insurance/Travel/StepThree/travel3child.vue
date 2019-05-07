<template>
  <div v-if="parseInt(this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[index].Relation) !== 1">
    <!-- 旅行平安保險保額 -->
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
            <div class="insure-check-title">旅行平安保險保額</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">子女({{index}})</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="PrimaryPolicyFaceAmtChild">
              <option selected="selected" :value="200">200萬</option>
              <option :value="100">100萬</option>
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
      <!-- 傷害醫療 -->
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
            <div class="insure-check-title">傷害醫療</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">子女({{index}})</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="SupplementPolicyFaceAmt">
              <option v-for="item in silDataChild" :key="item.Value" :value="item.Value">{{item.Text}}</option>
            </select>
          </div>
        </div>
      </form>
      <!-- 海外突發疾病 -->
      <template>
        <div v-show="this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelType === 2 && this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelCountry === '7'">
          <div class="top">
            <div class="top-title">
              <div class="insure-notice-box">
                <div class="insure-check"><img src="../../../../../static/img/insurance.png" alt=""></div>
                <div class="insure-check-title">海外突發疾病</div>
              </div>
            </div>
          </div>
          <div class="border-bottom-line"></div>
          <form class="form-bottom">
            <div class="form-group row" v-show="parseInt(this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[index].Relation) === 1">
              <label for="" class="col-sm-12 col-form-label insure-label">子女({{index}})</label>
              <div class="col-sm-12 insure-select-align">
                <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="SupplementPolicyFaceAmtoOverSea">
                  <option v-for="item in silDataChild" :key="item.Value" :value="item.Value">{{item.Text}}</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { data } from './mockBaoerData'
import { silData } from './mockSupplCoverageSli'
export default {
  props: [
    'index'
  ],
  data() {
    return {
      baoer: [],
      silData: [],
      silDataChild: [{
        Text: '20萬',
        Value: 20
      },
      {
        Text: '10萬',
        Value: 10
      }]
    }
  },
  created() {
    // 取回保額
    console.log(this.index)
    this.baoer = data.Data.Result
    this.silData = silData.Data.Result
  },
  computed: {
    // 子女(本人)：旅行平安保險
    PrimaryPolicyFaceAmtChild: {
      get() {
        if (this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[this.index].PrimaryPolicy.FaceAmt === null) {
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[this.index].PrimaryPolicy.FaceAmt = 200
        }
        return this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[this.index].PrimaryPolicy.FaceAmt
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[this.index].PrimaryPolicy.FaceAmt = value
        // 變更值後傷害醫療及海外突發疾病下拉框需一起改變值
        let maxIndex = value.toString().substring(0, 1)
        this.silDataChild = []
        for (let index = maxIndex; index >= 0; index--) {
          if (index !== 0) {
            this.silDataChild.push({
              Text: `${index}0萬`,
              Value: `${index}0`
            })
          } else {
            this.silDataChild.push({
              Text: `不投保`,
              Value: `0`
            })
          }
        }
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt = parseInt(value.toString().substring(0, 1) + '0')
        if (this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelType === 2 && this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelCountry === '7') {
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt = parseInt(value.toString().substring(0, 1) + '0')
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[this.index].SupplementPolicy[1].FaceAmt = parseInt(value.toString().substring(0, 1) + '0')
        }
      }
    },
    // 被保險人(本人)：傷害醫療
    SupplementPolicyFaceAmt: {
      get() {
        if (this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt === null) {
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt = 20
        }
        return this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt
      },
      set(value) {
        this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt = value
      }
    },
    // 被保險人(本人)：海外突發疾病
    SupplementPolicyFaceAmtoOverSea: {
      get() {
        return this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[this.index].SupplementPolicy[1].FaceAmt || 20
      },
      set(value) {
        if (this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelType === 2 && this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.TravelCountry === '7') {
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[this.index].SupplementPolicy[1].FaceAmt = value
        } else {
          this.$store.state.Travel.TRAVELPOSTDATA.PolicyData.InsuredInfo[this.index].SupplementPolicy[1].FaceAmt = 0
        }
      }
    }
  }
}

</script>
