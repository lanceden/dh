<template>
  <ElecFormComponent :stateData="GetIWellPostData"></ElecFormComponent>
</template>


<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/IWell/Types/IWellGetterTypes.js'
import ElecFormComponent from '../../Common/elecform'

export default {
  components: {
    ElecFormComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetIWellPostData
    ])
  }
}

</script>
