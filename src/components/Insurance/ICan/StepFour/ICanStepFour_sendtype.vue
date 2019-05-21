<template>
  <ElecFormComponent :stateData="GetICanPostData"></ElecFormComponent>
</template>


<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/ICan/Types/ICanGetterTypes.js'
import ElecFormComponent from '../../Common/elecform'

export default {
  components: {
    ElecFormComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetICanPostData
    ])
  }
}

</script>
