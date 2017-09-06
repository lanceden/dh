<template>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar" v-show="!ShowLoading">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar" style="height: auto;">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left ">
        </div>
        <div class="pull-left info">
        </div>
      </div>
      <!-- Sidebar Menu -->
      <template v-for="(n,i) in GetMenuItem.length">
        <ul class="sidebar-menu">
          <li class="treeview" v-for='item in GetMenuItem[i]'>
            <template v-if="item.MenuTopLevel == 0">
              <router-link :to="item.MenuBaseUrl">
                <i :class="item.MenuItemClass"></i>
                <span>{{item.MenuName}}</span>
                <template v-if="item.MenuShowItemClass">
                  <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </template>
              </router-link>
              <ul class="treeview-menu">
                <template v-for="(n,i) in GetMenuItem.length">
                  <template v-for='childItem in GetMenuItem[i]' v-if="childItem.MenuTopLevel == item.MenuId">
                    <li>
                      <router-link :to='childItem.MenuBaseUrl'> <i class="fa fa-circle-o text-aqua"></i> {{childItem.MenuName}}
                      </router-link>
                    </li>
                  </template>
                </template>
              </ul>
            </template>
          </li>
        </ul>
      </template>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
    <img src="http://localhost:8080/static/img/icon.ico" class="imgset" alt="User Image">
  </aside>
</template>
<script>
import {
  mapGetters,
  mapState,
  mapActions
} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'GetMenuItem'
    ]),
    ...mapState([
      'ShowLoading'
    ])
  },
  created() {
    this.MenuItem({
      http: this.$http
    })
  },
  methods: {
    ...mapActions([
      'MenuItem'
    ])
  }
}

</script>
<style scoped>
html .skin-yellow .sidebar-menu>li.header {
  color: black;
  background: #d73925;
}

html .skin-yellow .sidebar-menu>li:hover>a,
.skin-yellow .sidebar-menu>li.active>a {
  color: black;
  background: #dd4b39;
  border-left-color: #dd4b39;
}

html .main-sidebar,
.left-side {
  max-width: 150px;
}

.imgset {
  position: fixed;
  bottom: 30px;
  left: 0;
  width: 150px;
  height: 150px;
}

</style>
