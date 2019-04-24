import Vue from 'vue'
import Router from 'vue-router'
import UpcashStepOne from '../components/Insurance/UpCash/StepOne/stepOne_build'
import UpcashStepTwo from '../components/Insurance/UpCash/StepTwo/stepTwo_build'
import UpcashStepThree from '../components/Insurance/UpCash/StepThree/stepThree_build'
import UpCashStepFour from '../components/Insurance/UpCash/StepFour/stepFour_build'
import Agreement from '../components/Agreement/agreement_build'
import Benfbuild from '../components/Benf/benfbuild'
import InsuredData from '../components/InsuredData/insureddata_build'
import Otp from '../components/OTP/otp_build'
import OtpVerify from '../components/OTPVerify/otpverify_build'
import Payment from '../components/Payment/payment_build.vue'
import MyWayStepOne from '../components/Insurance/MyWay/StepOne/stepOne_build'
import MyError from '../components/error'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: [{
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
    path: '/upcash-4',
    component: UpCashStepFour
  },
  {
    path: '/benf',
    component: Benfbuild
  },
  {
    path: '/agreement',
    component: Agreement
  },
  {
    path: '/insuredData',
    component: InsuredData
  },
  {
    path: '/otp',
    component: Otp
  },
  {
    path: '/otpVerify',
    component: OtpVerify
  },
  {
    path: '/payment',
    component: Payment
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
