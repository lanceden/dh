export default {
  /**
   * 是否登入
   */
  auth: false,
  /**
   * 功能列表
   */
  MenuItemList: [
    {
      name: '首頁',
      baseUrl: '/index',
      itemClass: 'fa fa-home',
      showItemClass: false
    }, {
      name: '訂單管理',
      baseUrl: '/order',
      itemClass: 'fa fa-info-circle',
      showItemClass: false
    }, {
      name: '報表系統',
      baseUrl: '/report',
      itemClass: 'fa fa-pie-chart',
      showItemClass: false
    }, {
      name: '電子報管理',
      baseUrl: '/edm',
      itemClass: 'fa fa-table',
      showItemClass: false
    }, {
      name: '會員系統',
      baseUrl: '#',
      childItem: [
        {
          childName: '會員列表',
          childUrl: '/Member'
        }, {
          childName: '會員等級設定',
          childUrl: '/MemberLevel'
        }
      ],
      itemClass: 'fa fa-user',
      showItemClass: true
    }, {
      name: '後臺權限管理',
      baseUrl: '#',
      childItem: [
        {
          childName: '管理者列表',
          childUrl: '/adminlist'

        }, {
          childName: '管理者群組',
          childUrl: '/admingroup'
        }
      ],
      itemClass: 'fa fa-lock',
      showItemClass: true
    }, {
      name: '文章管理',
      baseUrl: '#',
      childItem: [
        {
          childName: '文章列表',
          childUrl: '/adminlist'
        }, {
          childName: '文章上架',
          childUrl: '/adminedit'
        }
      ],
      itemClass: 'fa fa-newspaper-o',
      showItemClass: true
    }
  ],
  /**
   * 會員列表
   */
  MemberList: [
    {
      id: 'X111111111',
      name: 'SKL1',
      age: 18,
      email: '123@123.com',
      address: '臺北市松山區松山路1號',
      phone: '02-22322232',
      mobile: '0912345678',
      joinTime: '2017/03/25 13:22:55',
      updateUser: 'admin',
      updateTime: '2017/03/28 14:22:26',
      receiveInfo: [
        {
          name: 'SKL1',
          phone: '0912345678',
          receiveAddress: '臺北市松山區松山路1號',
          email: '123@123.com',
          remark: '請於早上送達'
        },
        {
          name: 'SKL2',
          phone: '0998765432',
          receiveAddress: '臺北市松山區松山路1號',
          email: 'we@we.com',
          remark: '請於中午送達'
        },
        {
          name: 'SKL3',
          phone: '0987654321',
          receiveAddress: '臺北市松山區松山路1號',
          email: 'gh@gh.com',
          remark: '請於晚上送達'
        }
      ]
    },
    {
      id: 'S2222666666',
      name: 'LKK',
      age: 35,
      email: 'fd@fd.com',
      address: '臺北市松山區松山路1號',
      phone: '02-22322232',
      mobile: '0987654321',
      joinTime: '2017/03/25 13:22:55',
      updateUser: 'admin',
      updateTime: '2017/03/28 14:22:26',
      receiveInfo: [
        {
          name: 'LKK1',
          phone: '0912345678',
          receiveAddress: '臺北市松山區松山路1號',
          email: '123@123.com',
          remark: '請於早上送達'
        }
      ]
    }
  ],
  /**
   * 會員列表暫存
   */
  MemberListTemp: [],
  /**
   * VIP群組列表
   */
  VipList: [
    {
      vlevel: 1,
      totalamount: 12000,
      discounted: 8
    },
    {
      vlevel: 5,
      totalamount: 53500,
      discounted: 8
    },
    {
      vlevel: 6,
      totalamount: 66500,
      discounted: 8
    }
  ],
  /**
   * 後臺管理員帳號列表
   */
  AdminList: [
    {
      id: 1,
      name: '系統管理員',
      group: 'admin',
      account: 'administrator',
      password: '1234',
      createDate: new Date(Date.now),
      updateDate: ''
    },
    {
      id: 2,
      name: '系統維護人員',
      group: 'User',
      account: 'user1',
      password: 'user1',
      createDate: new Date(Date.now),
      updateDate: ''
    }
  ]
}
