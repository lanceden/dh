<template>
  <div class="form-group row">
    <label for class="col-sm-12 col-form-label insure-label insure-label">投保額度</label>
    <div class="col-sm-12">
      <select id="face_amt" name="face_amt" class="form-control data-input insure-select insure-input-block-edit" v-model="face_amt">
        <option value="0" selected="selected">請選擇</option>
        <option v-for="(item, index) in GetPremiums.Prem_List.split(',')" :key="index" :value="item">{{item}} 萬</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: [
    'plancode'
  ],
  created() {
    // 取回保額下拉框
    this.FuncGetPremiums({
      Verified: this.GetAccountData.JoinSource !== '3' ? 'Y' : 'N',
      PLAN_Code_1: this.plancode
    })
  },
  computed: {
    ...mapGetters([
      'GetPremiums',
      'GetAccountData'
    ])
  },
  methods: {
    ...mapActions([
      'FuncGetPremiums'
    ])
  }
}

</script>
