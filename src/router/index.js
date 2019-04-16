import Vue from 'vue'
import Router from 'vue-router'
import UpcashStepOne from '../components/UpCash/StepOne/stepOne_build.vue'
import MyError from '../components/error.vue'
import Login from '../components/form/orderForm.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/upcash',
      component: UpcashStepOne,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '*',
      component: MyError,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    next()
  //   if (!window.Lockr.get('auth') && from.fullPath !== '/') {
  //     alert('請先登入')
  //     next({
  //       path: '/Login'
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next()
  } else {
    next()
  }
})

export default router
