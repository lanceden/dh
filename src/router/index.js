import Vue from 'vue'
import Router from 'vue-router'
import UpcashStepOne from '../components/Insurance/UpCash/StepOne/UpCashStepOne_build.vue'
import UpcashStepTwo from '../components/Insurance/UpCash/StepTwo/UpCashStepTwo_build.vue'
import UpcashStepThree from '../components/Insurance/UpCash/StepThree/UpCashStepThree_build.vue'
import UpCashStepFour from '../components/Insurance/UpCash/StepFour/UpCashStepFour_build.vue'
import UpcashInsuredData from '../components/Insurance/UpCash/InsuredData/UpCashInsureddata_build.vue'

import EZCashStepOne from '../components/Insurance/EZCash/StepOne/EZCashStepOne_build.vue'
import EZCashStepTwo from '../components/Insurance/EZCash/StepTwo/EZCashStepTwo_build.vue'
import EZCashStepThree from '../components/Insurance/EZCash/StepThree/EZCashStepThree_build.vue'
import EZCashStepFour from '../components/Insurance/EZCash/StepFour/EZCashStepFour_build.vue'
import EZCashInsuredData from '../components/Insurance/EZCash/InsuredData/EZCashInsureddata_build.vue'

import ICanElecForm from '../components/Insurance/ICan/StepOne/ICanStepOne_elecform.vue'
import ICanStepOne from '../components/Insurance/ICan/StepOne/ICanStepOne_build.vue'
import ICanStepTwo from '../components/Insurance/ICan/StepTwo/ICanStepTwo_build.vue'
import ICanStepThree from '../components/Insurance/ICan/StepThree/ICanStepThree_build.vue'
import ICanStepFour from '../components/Insurance/ICan/StepFour/ICanStepFour_build.vue'
import ICanInsuredData from '../components/Insurance/ICan/InsuredData/ICanInsureddata_build.vue'

import IWellElecForm from '../components/Insurance/IWell/StepOne/IWellStepOne_elecform.vue'
import IWellStepOne from '../components/Insurance/IWell/StepOne/IWellStepOne_build.vue'
import IWellStepTwo from '../components/Insurance/IWell/StepTwo/IWellStepTwo_build.vue'
import IWellStepThree from '../components/Insurance/IWell/StepThree/IWellStepThree_build.vue'
import IWellStepFour from '../components/Insurance/IWell/StepFour/IWellStepFour_build.vue'
import IWellInsuredData from '../components/Insurance/IWell/InsuredData/IWellInsureddata_build.vue'

import MyWayStepOne from '../components/Insurance/MyWay/StepOne/MyWayStepOne_build.vue'
import MyWayStepTwo from '../components/Insurance/MyWay/StepTwo/MyWayStepTwo_build.vue'
import MyWayStepThree from '../components/Insurance/MyWay/StepThree/MyWayStepThree_build.vue'
import MyWayStepFour from '../components/Insurance/MyWay/StepFour/MyWayStepFour_build.vue'
import MyWayInsuredData from '../components/Insurance/MyWay/InsuredData/MyWayInsureddata_build.vue'

import IGoingStepOne from '../components/Insurance/IGoing/StepOne/IGoingStepOne_build.vue'
import IGoingStepTwo from '../components/Insurance/IGoing/StepTwo/IGoingStepTwo_build.vue'
import IGoingStepThree from '../components/Insurance/IGoing/StepThree/IGoingStepThree_build.vue'
import IGoingStepFour from '../components/Insurance/IGoing/StepFour/IGoingStepFour_build.vue'
import IGoingInsuredData from '../components/Insurance/IGoing/InsuredData/IGoingInsureddata.vue'

import Agreement from '../components/Agreement/agreement_build'
import Benfbuild from '../components/Benf/benfbuild'
import Otp from '../components/OTP/otp_build'
import OtpVerify from '../components/OTPVerify/otpverify_build'
import Payment from '../components/Payment/payment_build.vue'
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
    path: '/myway-2',
    component: MyWayStepTwo
  },
  {
    path: '/myway-3',
    component: MyWayStepThree
  },
  {
    path: '/myway-4',
    component: MyWayStepFour
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
    path: '/igoing-1',
    component: IGoingStepOne,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/igoing-2',
    component: IGoingStepTwo
  },
  {
    path: '/igoing-3',
    component: IGoingStepThree
  },
  {
    path: '/igoing-4',
    component: IGoingStepFour
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
    path: '/iwellelecform',
    component: IWellElecForm
  },
  {
    path: '/IWell-1',
    component: IWellStepOne,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/IWell-2',
    component: IWellStepTwo
  },
  {
    path: '/IWell-3',
    component: IWellStepThree
  },
  {
    path: '/IWell-4',
    component: IWellStepFour
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
    path: '/iwell-insureddata',
    component: IWellInsuredData
  },
  {
    path: '/myway-insureddata',
    component: MyWayInsuredData
  },
  {
    path: '/igoing-insureddata',
    component: IGoingInsuredData
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
