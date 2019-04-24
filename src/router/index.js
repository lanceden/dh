import Vue from 'vue'
import Router from 'vue-router'
import UpcashStepOne from '../components/UpCash/StepOne/stepOne_build'
import UpcashStepTwo from '../components/UpCash/StepTwo/stepTwo_build'
import UpcashStepThree from '../components/UpCash/StepThree/stepThree_build'
import Benfbuild from '../components/Benf/benfbuild'
import MyWayStepOne from '../components/MyWay/StepOne/stepOne_build'
import MyError from '../components/error.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: [
    {
      path: '/myway-1',
      component: MyWayStepOne,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/upcash-1',
      component: UpcashStepOne,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/upcash-2',
      component: UpcashStepTwo
    },
    {
      path: '/upcash-3',
      component: UpcashStepThree
    },
    {
      path: '/benf',
      component: Benfbuild
    },
    {
      path: '*',
      component: MyError,
      meta: {
        requiresAuth: true
      }
    }]
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
