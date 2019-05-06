<template>
  <div id="app" class="container">
    <template>
      <Header></Header>
      <keep-alive>
        <!-- 所有路徑匹配到的視圖組件都會被緩存！ -->
        <router-view></router-view>
      </keep-alive>
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
