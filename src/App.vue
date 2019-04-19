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
  mapActions
} from 'vuex'
export default {
  components: { Header },
  created() {
    this.SetHttp({ http: this.$http })
    this.SetApiToken({ token: 'HelloWorld' })
  },
  methods: {
    ...mapActions(['SetHttp', 'SetApiToken'])
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
