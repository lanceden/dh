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
import FunctionTypes from '../../../../store/modules/Accident/Types/AccidentFunctionTypes'
import GetterTypes from '../../../../store/modules/Accident/Types/AccidentGetterTypes'
export default {
  computed: {
    ...mapGetters([
      GetterTypes.GetAccidentPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncAccidentEstimate
    ]),
    Estimate() {
      console.log('client_rate_sex', this.GetAccidentPostData.client_rate_sex)
      console.log('face_amt', this.GetAccidentPostData.face_amt)
      console.log('client_occupation_class', this.GetAccidentPostData.client_occupation_class)
      console.log('po_issue_date', this.GetAccidentPostData.po_issue_date)
      this.FuncAccidentEstimate({ para: this.GetAccidentPostData })
    }
  }
}

</script>
