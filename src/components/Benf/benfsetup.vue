<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <div class="insure-notice-box">
          <div class="insure-check"><img src="../../../static/img/human-outline-with-heart.png" alt=""></div>
          <div class="insure-check-title">請選擇受益人個數</div>
        </div>
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <form class="form-bottom">
      <div class="form-group posr row form-group-checked" @click="OnBenf()">
        <label for="" class="col-sm-12 col-form-label">同最近一張保單的受益人資料</label>
        <div class="checkbox checkbox-oneline" :class="{ checked: isOnBenf }"></div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身故受益人個數</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-edit" v-model="benf_num">
            <option selected="selected" value="1">1個</option>
            <option value="2">2個</option>
            <option value="3">3個</option>
          </select>
        </div>
      </div>
    </form>
    <div class="border-bottom-line"></div>
    <form class="form-bottom">
      <div class="col-sm-12">
        <div class="insure-tips-text">
          請確認最後一張保單受益人人數
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      isOnBenf: false
    }
  },
  props: [
    'stateData'
  ],
  computed: {
    benf_num: {
      get() {
        return this.stateData.benf_num || '1'
      },
      set(value) {
        this.stateData.benf_num = value
      }
    }
  },
  methods: {
    ...mapActions([
      'FuncGetBeneficiary'
    ]),
    // 取回上一張保單受益人
    OnBenf() {
      this.isOnBenf = !this.isOnBenf
      if (this.isOnBenf) {
        this.FuncGetBeneficiary({
          planCode: this.stateData.plan_code,
          stateData: this.stateData
        })
      }
    }
  }
}

</script>
