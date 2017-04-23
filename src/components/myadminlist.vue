<template>
  <div class="zoomIn animated">
    <loading v-show="GetShowLoading" />
    <!-- Page content start-->
    <div class="content-wrapper" v-show="!GetShowLoading">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>後臺管理者列表</h1>
        <ol class="breadcrumb">
          <li class="active">Here</li>
        </ol>
      </section>
      <div class="myModal" v-show="isAdd">
        <div style="width:350px;height:350px;position:fixed;left:40%;z-index:777;">
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-users"></i> 所屬群組</span>
            <select class="form-control" name="selAdminGroup" id="selAdminGroup">
              <option value="1">admin</option>
              <option value="1">team1</option>
              <option value="1">team2</option>
            </select>
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-child" aria-hidden="true"></i> 登入名稱</span>
            <input type="text" class="form-control" id="name" v-model="GetAdmin.name" placeholder="請輸入登入名稱">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i> 登入帳號</span>
            <input type="text" class="form-control" v-model="GetAdmin.account" placeholder="請輸入登入帳號">
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-paw" aria-hidden="true"></i> 登入密碼</span>
            <input type="text" class="form-control" v-model="GetAdmin.password" placeholder="請輸入登入密碼">
          </div>
          <div class="btn-group" role="group">
            <button @click="" class="btn bg-orange btn-flat " type="button">確定</button>
            <button @click="isAdd = false" class="btn bg-maroon btn-flat " type="button">取消</button>
          </div>
        </div>
      </div>
      <!-- Main content start-->
      <div class="content">
        <!--table start-->
        <div class="col-xs-12">
          <div class="box box-primary box-margin-left">
            <div class="box-header">
              <h3 class="box-title"></h3>
            </div>
            <div class="box-body">
              <div id="example2_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                <div class="row">
                  <div class="col-sm-12">
                    <table id="tbMember" class="table" role="grid">
                      <thead>
                        <tr role="row">
                          <th class="sorting" tabindex="0">所屬群組</th>
                          <th class="sorting" tabindex="0">登入帳號</th>
                          <th class="sorting" tabindex="0">帳號創建時間</th>
                          <th class="sorting" tabindex="0">帳號更新時間</th>
                          <th class="sorting" tabindex="0">操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" v-for="(admin,index) in GetAdminList">
                          <td>{{admin.AccountGroupName}}</td>
                          <td>{{admin.AccountName}}</td>
                          <td>{{admin.AccountCreateDate}}</td>
                          <td>{{admin.AccountUpdateDate | isEmpty}}</td>
                          <td>
                            <div class="btn-group" role="group">
                              <button class="btn bg-maroon">刪除</button>
                              <button @click="adminEdit(admin.AccountId)" class="btn bg-navy">修改</button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--table end-->
      </div>
      <!-- Main content end-->
    </div>
    <!-- Page content end-->
  </div>
</template>
<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'
  import Noty from 'noty'
  export default {
    data() {
      return {
        isAdd: false,
        admin: {}
      }
    },
    created() {
      this.AdminList(this.$http)
    },
    computed: {
      ...mapGetters([
        'GetAdminList',
        'GetAdmin',
        'GetShowLoading'
      ])
    },
    methods: {
      ...mapActions([
        'AdminList',
        'EditAdmin'
      ]),
      adminEdit(id) {
        let self = this
        let n = new Noty({
          layout: 'topCenter',
          theme: 'metroui',
          closeWith: ['butto'],
          text: `
            <div style="width:200px;">
              <div style="margin:20px;width:200px;"><h3>是否確定要修改?</h3></div>
            </div>
          `,
          buttons: [
            Noty.button('YES', 'btn btn-success', function () {
              self.EditAdmin({
                id: id,
                http: self.$http
              })
              self.isAdd = true
              n.close()
            }),
            Noty.button('NO', 'btn btn-danger', function () {
              n.close()
            })
          ]
        }).show()
      }
    }
  }

</script>
<style scoped>
  .margincenter {
    width: 350px;
    text-align: left;
    margin: 0px auto;
    font-size: 16px;
  }

  .myModal {
    position: fixed;
    /* Stay in place */
    z-index: 778;
    /* Sit on top */
    padding-top: 100px;
    /* Location of the box */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
  }

  .box-margin-left {
    margin-left: 10px;
  }

  .even {
    --background-color: #95da8b;
  }

  .box-body {
    --overflow: auto;
  }

</style>
