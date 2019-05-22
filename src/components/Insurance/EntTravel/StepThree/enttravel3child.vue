<template>
  <div v-if="parseInt(this.GetEntTravelPostData.PolicyData.InsuredInfo[index].Relation) !== 1">
    <!-- 旅行平安保險保額 -->
    <div class="bg-radius">
      <div class="top">
        <div class="top-title">
          <div class="insure-notice-box">
            <div class="insure-check"><img src="../../../../../static/img/edit.png" alt=""></div>
            <div class="insure-check-title">子女({{index}})</div>
          </div>
        </div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label class="col-sm-12 col-form-label insure-label">旅行平安保險保額</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="PrimaryPolicyFaceAmtChild">
              <option v-for="(item, index) in this.$store.state.CHILDCOVERAGESLI" :key="index" :value="item.Value">{{item.Text}}</option>
            </select>
          </div>
          <!-- 傷害醫療 -->
          <label class="col-sm-12 col-form-label insure-label">傷害醫療</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-block-edit" v-model="SupplementPolicyFaceAmt">
              <option v-for="item in this.$store.state.CHILDSUPPLCOVERAGESLI" :key="item.Value" :value="item.Value">{{item.Text}}</option>
            </select>
          </div>
          <label class="col-sm-12 col-form-label insure-label" v-show="ShowOverSea">海外突發疾病</label>
          <div class="col-sm-12 insure-select-align" v-show="ShowOverSea">
            <select id="" class="form-control data-input insure-select insure-input-block-edit" :disabled="SupplementPolicyFaceAmtoOverSeaDisable"
            v-model="SupplementPolicyFaceAmtoOverSea">
              <option v-for="item in this.$store.state.CHILDSUPPLCOVERAGESLI" :key="item.Value" :value="item.Value">{{item.Text}}</option>
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
import EntTravelGetterTypes from '../../../../store/modules/EntTravel/Types/EntTravelGetterTypes.js'

export default {
  props: [
    'index'
  ],
  data() {
    return {
      SupplementPolicyFaceAmtoOverSeaDisable: false
    }
  },
  created() {
    // 取回保額
    this.FuncGetInsTravelChildCoverageSli()
  },
  computed: {
    ...mapGetters([
      EntTravelGetterTypes.GetEntTravelPostData
    ]),
    ShowOverSea: {
      get() {
        return parseInt(this.GetEntTravelPostData.PolicyData.TravelType) === 2
      }
    },
    // 子女(本人)：旅行平安保險
    PrimaryPolicyFaceAmtChild: {
      get() {
        if (this.GetEntTravelPostData.PolicyData.InsuredInfo[this.index].PrimaryPolicy.FaceAmt === null) {
          this.GetEntTravelPostData.PolicyData.InsuredInfo[this.index].PrimaryPolicy.FaceAmt = 200
        }
        return this.GetEntTravelPostData.PolicyData.InsuredInfo[this.index].PrimaryPolicy.FaceAmt
      },
      set(value) {
        this.GetEntTravelPostData.PolicyData.InsuredInfo[this.index].PrimaryPolicy.FaceAmt = value
        // 變更值後傷害醫療及海外突發疾病下拉框需一起改變值
        let maxIndex = value.toString().substring(0, 1)
        this.$store.state.CHILDSUPPLCOVERAGESLI = []
        for (let index = maxIndex; index >= 0; index--) {
          if (index !== 0) {
            this.$store.state.CHILDSUPPLCOVERAGESLI.push({
              Text: `${index}0萬`,
              Value: `${index}0`
            })
          } else {
            this.$store.state.CHILDSUPPLCOVERAGESLI.push({
              Text: `不投保`,
              Value: `0`
            })
          }
        }
        this.GetEntTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt = parseInt(value.toString().substring(0, 1) + '0')
        if (this.GetEntTravelPostData.PolicyData.TravelType === 2) {
          this.GetEntTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt = parseInt(value.toString().substring(0, 1) + '0')
          this.GetEntTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[1].FaceAmt = parseInt(value.toString().substring(0, 1) + '0')
        }
      }
    },
    // 被保險人(本人)：傷害醫療
    SupplementPolicyFaceAmt: {
      get() {
        if (this.GetEntTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt === null) {
          this.GetEntTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt = 20
        }
        return this.GetEntTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt
      },
      set(value) {
        this.GetEntTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[0].FaceAmt = value
        if (this.GetEntTravelPostData.PolicyData.TravelType === 1) this.SupplementPolicyFaceAmtoOverSea = value
      }
    },
    // 被保險人(本人)：海外突發疾病
    SupplementPolicyFaceAmtoOverSea: {
      get() {
        return this.GetEntTravelPostData.PolicyData.TravelType === 1 ? 0 : this.GetEntTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[1].FaceAmt || 20
      },
      set(value) {
        // 若為0要關閉
        if (value === '0') {
          this.SupplementPolicyFaceAmtoOverSeaDisable = true
        } else {
          this.SupplementPolicyFaceAmtoOverSeaDisable = false
        }
        this.GetEntTravelPostData.PolicyData.InsuredInfo[this.index].SupplementPolicy[1].FaceAmt = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetInsTravelChildCoverageSli' // 子女主約
    ])
  }
}

</script>
