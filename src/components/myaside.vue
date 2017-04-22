<template>
  <div class="divaside">
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <!--<div class="user-panel">
          <div class="pull-left ">
          </div>
          <div class="pull-left info">
          </div>
        </div>-->
        <!-- Sidebar Menu -->
        <ul class="sidebar-menu">
          <li class="treeview" v-for='item in GetMetuItem'>
            <router-link :to="item.baseUrl">
              <i :class="item.itemClass"></i>
              <span>{{item.name}}</span>
              <template v-if="item.showItemClass">
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </template>
            </router-link>
            <ul class="treeview-menu" v-for="child in item.childItem">
              <li>
                <router-link :to='child.childUrl'>{{child.childName}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
        <!-- /.sidebar-menu -->
      </section>
      <!-- /.sidebar -->
      <img src="http://localhost:8080/static/img/icon.ico" class="imgset" alt="User Image">
    </aside>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'GetMetuItem'
      ])
    },
    methods: {
      ...mapActions([
        'MetuItem'
      ])
    }
  }

</script>

<style scoped>
  html .skin-red .sidebar-menu>li.header {
    color: black;
    background: #d73925;
  }

  html .skin-red .sidebar-menu>li:hover>a,
  .skin-red .sidebar-menu>li.active>a {
    color: black;
    background: #dd4b39;
    border-left-color: #dd4b39;
  }

  html .main-sidebar,
  .left-side {
    width: 260px;
  }

  .imgset {
    position: fixed;
    bottom: 30px;
    left: 0;
  }

</style>
