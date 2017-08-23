import Vue from 'vue'
import Router from 'vue-router'
import MyContent from '../components/mycontent.vue'
import Member from '../components/mymember.vue'
import MyError from '../components/error.vue'
import Login from '../components/mylogin.vue'
import MemberLevel from '../components/myemberlevel.vue'
import AdminList from '../components/myadminlist.vue'
import AdminGroup from '../components/myadmingroup.vue'
import Order from '../components/myorder.vue'
import Product from '../components/myproduct.vue'
import ImageUpload from '../components/extension/ImageUpload.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/index',
      component: MyContent,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      component: Login
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Member',
      component: Member,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Order',
      component: Order,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Product',
      component: Product,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/MemberLevel',
      component: MemberLevel,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/AdminList',
      component: AdminList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admingroup',
      component: AdminGroup,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      component: MyError,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/ImageUpload',
      component: ImageUpload,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if ((!window.Lockr.get('auth') || window.Lockr.get('auth') === undefined) || from.fullPath !== '/') {
      alert('請先登入')
      next({
        path: '/Login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
