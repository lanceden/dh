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
import {
  mapState
} from 'vuex'
export default {
  components: {
    Header
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
