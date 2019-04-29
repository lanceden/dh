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
import FunctionTypes from '../../../../store/modules/IWell/Types/IWellFunctionTypes'
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetIWellPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncIWellEstimate
    ]),
    Estimate() {
      this.FuncIWellEstimate({ para: this.GetIWellPostData })
    }
  }
}

</script>
