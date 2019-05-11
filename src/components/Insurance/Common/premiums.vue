<template>
  <div class="form-group row">
    <label for class="col-sm-12 col-form-label insure-label insure-label">投保額度</label>
    <div class="col-sm-12">
      <select id="face_amt" name="face_amt" class="form-control data-input insure-select insure-input-block-edit" v-model="face_amt">
        <option value="0" selected="selected">請選擇</option>
        <option v-for="(item, index) in GetPremiumsProp" :key="index" :value="item">{{item}} 萬</option>
      </select>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      premiums: 0
    }
  },
  props: [
    'stateData'
  ],
  created() {
    // 取回保額下拉框
    this.FuncGetPremiums({
      Verified: this.GetAccountData.JoinSource !== '3' ? 'Y' : 'N',
      PLAN_Code_1: this.stateData.plan_code
    })
  },
  computed: {
    ...mapGetters([
      'GetPremiums',
      'GetAccountData'
    ]),
    // 保額下拉框
    GetPremiumsProp: {
      get() {
        if (this.GetPremiums.length === 0) return []
        return this.GetPremiums[0].Prem_List.split(',')
      }
    },
    // 此次投保額度選取值
    face_amt: {
      get() {
        return this.premiums
      },
      set(value) {
        this.premiums = value
        this.stateData.face_amt = value
        this.stateData.mode_prem = 0

        if (this.$store.state.PLANNAME.toLowerCase() === 'ican') {
          $('#CalcAmtDesc2').text($('#face_amt option:selected').text() + '元')
          $('#CalcAmtDesc3').text($('#face_amt option:selected').text() + '元')
          let prem = parseInt(value)
          let maxPerc = 1.75
          let minPerc = 0.1 / 4
          let maxAmt = prem * maxPerc / 100
          let minAmt = prem * minPerc / 100
          $('#broken-bones-acc-amt').text(minAmt + '萬元' + ' ~ ' + maxAmt + '萬元')
        }

        if (this.$store.state.PLANNAME.toLowerCase() === 'iwell') {
          let prem = parseInt(value)
          let maxPerc = 100 * 0.5
          let minPerc = 5 * 0.5
          let maxAmt = prem * maxPerc / 100
          let minAmt = prem * minPerc / 100
          $('#CalcAmtDesc2').text(maxAmt + '萬元')
          $('#CalcAmtDesc3').text(maxAmt + '萬元')
          $('#blind-acc-amt').text(minAmt + '萬元' + ' ~ ' + maxAmt + '萬元')
          $('#specific-blind-acc-amt').text(minAmt + '萬元' + ' ~ ' + maxAmt + '萬元')
        }

        if (this.$store.state.PLANNAME.toLowerCase() === 'igoing') {
          $('#CalcAmtDesc1').html(value)
          $('#CalcAmtDesc2').html(value)
        }

        if (this.$store.state.PLANNAME.toLowerCase() === 'accident') {
          $('#CalcAmtDesc1').html(value)
          $('#CalcAmtDesc2').html(value)
        }
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
