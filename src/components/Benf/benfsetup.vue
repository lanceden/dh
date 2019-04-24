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
import GetterTypes from '../../store/modules/Upcash/Types/UpCashGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData
    ]),
    benf_num: {
      get() {
        return this.GetUpCashPostData.benf_num
      },
      set(value) {
        this.GetUpCashPostData.benf_num = value
      }
    }
  }
}

</script>
