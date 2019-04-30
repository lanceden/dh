<template>
  <div id="app" class="container">
    <template>
      <Header></Header>
      <router-view></router-view>
      <modal></modal>
    </template>
  </div>
</template>
<script>
import Header from './components/header'
import { mapActions } from 'vuex'
export default {
  components: { Header },
  created() {
    this.SetHttp({ http: this.$http })
  },
  methods: {
    ...mapActions([
      'SetHttp'
    ])
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
