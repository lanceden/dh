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
import FunctionTypes from '../../../../store/modules/Health/Types/HealthFunctionTypes.js'
import GetterTypes from '../../../../store/modules/Health/Types/HealthGetterTypes.js'
export default {
  computed: {
    ...mapGetters([
      'GetNotifyCheckBox',
      GetterTypes.GetHealthPostData
    ])
  },
  methods: {
    ...mapActions([
      FunctionTypes.FuncHealthEstimate
    ]),
    Estimate() {
      console.log('client_rate_sex', this.GetHealthPostData.client_rate_sex)
      console.log('face_amt', this.GetHealthPostData.face_amt)
      console.log('client_occupation_class', this.GetHealthPostData.client_occupation_class)
      console.log('client_occupation_class_code', this.GetHealthPostData.client_occupation_class_code)
      console.log('client_occupation_class_code_name', this.GetHealthPostData.client_occupation_class_code_name)
      console.log('client_occupation_level', this.GetHealthPostData.client_occupation_level)
      console.log('client_occupation_sub_level', this.GetHealthPostData.client_occupation_sub_level)
      console.log('po_issue_date', this.GetHealthPostData.po_issue_date)
      this.FuncHealthEstimate({ para: this.GetHealthPostData })
    }
  }
}

</script>
