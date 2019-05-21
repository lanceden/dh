<template>
  <div>
    <ContactComponent :stateData="GetMyWayPostData"></ContactComponent>
    <div class="footer">
      <div class="footer-content">
        <nav class="navbar navbar-dark row">
          <div class="col-sm-4 footer-title footer-left" @click="GoPrev()">回前一頁</div>
          <div class="col-sm-8 footer-title footer-right" @click="GoNext()">確認送出</div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GetterTypes from '../../../../store/modules/MyWay/Types/MyWayGetterTypes'
import ContactComponent from '../../Common/contact'

export default {
  components: {
    ContactComponent
  },
  computed: {
    ...mapGetters([
      GetterTypes.GetMyWayPostData
    ])
  },
  methods: {
    GoPrev() {
      this.$router.push(`/MyWay-Estimate`)
    },
    GoNext() {
      this.$router.push('/MyWay-account')
    }
  }
}

</script>
