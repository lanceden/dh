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
import { mapActions, mapGetters } from 'vuex'
import FunctionTypes from '../../../../store/modules/ICan/Types/ICanFunctionTypes'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetICanPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncICanEstimate
    ]),
    Estimate() {
      this.FuncICanEstimate({ para: this.GetICanPostData })
    }
  }
}

</script>
