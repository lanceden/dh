<template>
  <div class="bg-radius">
    <div class="form-bottom">
      <div class="row col-width">
        <div class="col-sm-12">
          <button class="button-blue btn-block" @click="Estimate()">保費試算</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FunctionTypes from '../../../../store/modules/MyWay/Types/MyWayFunctionTypes.js'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      'GetNotifyCheckBox',
      GetterTypes.GetMyWayPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncMyWayEstimate
    ]),
    Estimate() {
      this.FuncMyWayEstimate({ para: this.GetMyWayPostData })
    }
  }
}

</script>
