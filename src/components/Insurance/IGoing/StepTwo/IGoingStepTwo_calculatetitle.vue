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
import FunctionTypes from '../../../../store/modules/IGoing/Types/IGoingFunctionTypes'
import GetterTypes from '../../../../store/modules/IGoing/Types/IGoingGetterTypes'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetIGoingPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncIGoingEstimate
    ]),
    Estimate() {
      this.FuncIGoingEstimate({ para: this.GetIGoingPostData })
    }
  }
}

</script>
