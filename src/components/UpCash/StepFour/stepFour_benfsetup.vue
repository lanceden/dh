<template>
  <div class="bg-radius">
    <div class="top">
      <div class="top-title">
        <img src="images/chat.png" alt="">
		    		請填寫身故受益人資料
		    	</div>
      </div>
      <div class="border-bottom-line"></div>
      <form class="form-bottom">
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label">同最近一張保單的受益人資料</label>
          <div class="checkbox checked"></div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-12 col-form-label insure-label">身故受益人個數</label>
          <div class="col-sm-12 insure-select-align">
            <select id="" class="form-control data-input insure-select insure-input-edit" v-model="benf_num">
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
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'GetBeneficiary'
    ]),
    benf_num: {
      get() {
        let oriCount = this.GetBeneficiary.length
        if (oriCount === 0) return '1'
        this.$store.state.UpCash.POSTDATA.benf_num = oriCount
        return oriCount
      },
      set(value) {
        this.$store.state.UpCash.POSTDATA.benf_num = value
      }
    }
  }
}

</script>
