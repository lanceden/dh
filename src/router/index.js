import Vue from 'vue'
import Router from 'vue-router'
import UpcashStepOne from '../components/Insurance/UpCash/StepOne/stepOne_build'
import UpcashStepTwo from '../components/Insurance/UpCash/StepTwo/stepTwo_build'
import UpcashStepThree from '../components/Insurance/UpCash/StepThree/stepThree_build'
import UpCashStepFour from '../components/Insurance/UpCash/StepFour/stepFour_build'
import UpcashInsuredData from '../components/Insurance/UpCash/InsuredData/insureddata_build'

import EZCashStepOne from '../components/Insurance/EZCash/StepOne/stepOne_build'
import EZCashStepTwo from '../components/Insurance/EZCash/StepTwo/stepTwo_build'
import EZCashStepThree from '../components/Insurance/EZCash/StepThree/stepThree_build'
import EZCashStepFour from '../components/Insurance/EZCash/StepFour/stepFour_build'
import EZCashInsuredData from '../components/Insurance/EZCash/InsuredData/insureddata_build'

import ICanElecForm from '../components/Insurance/ICan/StepOne/stepOne_elecform'
import ICanStepOne from '../components/Insurance/ICan/StepOne/stepOne_build'
import ICanStepTwo from '../components/Insurance/ICan/StepTwo/stepTwo_build'
import ICanStepThree from '../components/Insurance/ICan/StepThree/stepThree_build'
import ICanStepFour from '../components/Insurance/ICan/StepFour/stepFour_build'
import ICanInsuredData from '../components/Insurance/ICan/InsuredData/insureddata_build'

import Agreement from '../components/Agreement/agreement_build'
import Benfbuild from '../components/Benf/benfbuild'
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
    path: '/ezcash-1',
    component: EZCashStepOne,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/ezcash-2',
    component: EZCashStepTwo
  },
  {
    path: '/ezcash-3',
    component: EZCashStepThree
  },
  {
    path: '/ezcash-4',
    component: EZCashStepFour
  },
  {
    path: '/icanelecform',
    component: ICanElecForm
  },
  {
    path: '/ICan-1',
    component: ICanStepOne,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/ICan-2',
    component: ICanStepTwo
  },
  {
    path: '/ICan-3',
    component: ICanStepThree
  },
  {
    path: '/ICan-4',
    component: ICanStepFour
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
    path: '/upcash-insureddata',
    component: UpcashInsuredData
  },
  {
    path: '/ezcash-insureddata',
    component: EZCashInsuredData
  },
  {
    path: '/ican-insureddata',
    component: ICanInsuredData
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
