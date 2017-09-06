<template>
  <div id="app">
    <template v-if="auth">
      <MyHeader></MyHeader>
      <div id="divContent">
        <MyAside></MyAside>
        <router-view></router-view>
      </div>
      <MyFooter></MyFooter>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>
<script>
import MyHeader from './components/myheader'
import MyFooter from './components/myfooter'
import MyAside from './components/myaside'
import {
  mapState
} from 'vuex'
export default {
  components: {
    MyHeader,
    MyFooter,
    MyAside
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
  font-family: '微軟正黑體', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#divContent {
  position: relative;
}

#divContent>.main-sidebar {
  color: #ffffff;
}

.content-wrapper, .right-side, .main-footer{
  margin-left: 150px;
}
</style>
