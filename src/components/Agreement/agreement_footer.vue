<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-12 footer-title footer-gary" @click="GoNext">我已同意並閱讀完成</div>
        <!-- <div class="col-sm-12 footer-title footer-right">我已同意並閱讀完成</div> -->
      </nav>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import FunctionTypes from '../../store/modules/Upcash/Types/UpCashFunctionTypes.js'
import GetterTypes from '../../store/modules/Upcash/Types/UpCashGetterTypes.js'
import { ToNext } from '../../utils/goNext.js'
export default {
  props: [
    'insname'
  ],
  computed: {
    ...mapGetters([
      GetterTypes.GetUpCashPostData
    ])
  },
  created() {
    this.FuncUpCashSubmitQuote({
      para: this.GetUpCashPostData,
      router: this.$router
    })
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncUpCashSubmitQuote
    ]),
    /**
     * 投保資訊
     */
    GoNext() {
      ToNext(this.$router, this.insname)
    }
  }
}

</script>
