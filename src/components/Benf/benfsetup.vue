<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <img src="../../../static/img/chat.png" alt="">
        請填寫身故受益人資料
      </div>
    </div>
    <div class="border-bottom-line"></div>
    <form class="form-bottom">
      <div class="form-group posr row" @click="OnBenf()">
        <label for="" class="col-sm-12 col-form-label">點此匯入最近一張保單的受益人</label>
        <div class="checkbox checkbox-oneline" :class="{ checked: isOnBenf }"></div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-12 col-form-label insure-label">身故受益人個數</label>
        <div class="col-sm-12 insure-select-align">
          <select class="form-control data-input insure-select insure-input-edit" v-model="benf_num">
            <option selected="selected" value="1">一位</option>
            <option value="2">二位</option>
            <option value="3">三位</option>
          </select>
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
        if (this.stateData.benf_num === '' || this.stateData.benf_num === undefined || this.stateData.benf_num === null) {
          this.stateData.benf_num = 1
        }
        return this.stateData.benf_num
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
