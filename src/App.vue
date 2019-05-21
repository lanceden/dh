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
import { getQueryStringParameterByKey } from '../src/utils/getQueryStringParameterByKey.js'

export default {
  components: { Header },
  created() {
    // 判斷當前url中是否有token
    let result = getQueryStringParameterByKey('token')
    if (result !== null) {
      const tokenArr = result.split(' ')
      let token = ''
      tokenArr.forEach(item => {
        token += `+${item}`
      })
      this.SetApiToken({ token: token.replace('+', '') })
    }
    this.SetHttp({ http: this.$http })
    this.FuncGetAccountData()
  },
  methods: {
    ...mapActions([
      'SetHttp',
      'SetApiToken',
      'FuncGetAccountData'
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
