<template>
  <div id="app" class="container">
    <template>
      <Header></Header>
      <router-view></router-view>
    </template>
  </div>
</template>
<script>
import Header from './components/header'
import Plancode from './utils/constPlancode'
import Url from './utils/constUrl'
import {
  mapState
} from 'vuex'
export default {
  components: {
    Header
  },
  created() {
    console.log('App.vue_Plancode.UpCash:', Plancode.UpCash)
    console.log('App.vue_Url:', Url.UpCashEstimate)
  },
  methods: {
    test() {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState({
      auth: state => state.login.auth
    })
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
