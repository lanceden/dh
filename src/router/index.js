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
import IGoingInsuredData from '../components/Insurance/IGoing/InsuredData/IGoingInsureddata_build.vue'

import AccidentStepOne from '../components/Insurance/Accident/StepOne/AccidentStepOne_build.vue'
import AccidentStepTwo from '../components/Insurance/Accident/StepTwo/AccidentStepTwo_build.vue'
import AccidentStepThree from '../components/Insurance/Accident/StepThree/AccidentStepThree_build.vue'
import AccidentStepFour from '../components/Insurance/Accident/StepFour/AccidentStepFour_build.vue'
import AccidentInsuredData from '../components/Insurance/Accident/InsuredData/AccidentInsureddata_build.vue'

import HealthStepOne from '../components/Insurance/Health/StepOne/HealthStepOne_build.vue'
import HealthStepTwo from '../components/Insurance/Health/StepTwo/HealthStepTwo_build.vue'
import HealthStepThree from '../components/Insurance/Health/StepThree/HealthStepThree_build.vue'
import HealthStepFour from '../components/Insurance/Health/StepFour/HealthStepFour_build.vue'
import HealthInsuredData from '../components/Insurance/Health/InsuredData/HealthInsureddata_build.vue'

import EntTravelOne from '../components/Insurance/EntTravel/travel1.vue'

import TravelOne from '../components/Insurance/Travel/StepOne1/travel1Build'
import TravelOneInsureData from '../components/Insurance/Travel/StepOne2/travel1-insuredataBuild.vue'
import TravelTwo from '../components/Insurance/Travel/StepTwo/travel2Build.vue'
import TravelThree from '../components/Insurance/Travel/StepThree/travel3Build.vue'
import TravelFour from '../components/Insurance/Travel/StepFour/travel4.vue'
import TravelFive from '../components/Insurance/Travel/StepFive/travel5Build'
import TravelSix from '../components/Insurance/Travel/StepSix/travel6Build.vue'
import TravelSeven from '../components/Insurance/Travel/travel7'
import TravelEight from '../components/Insurance/Travel/travel8'
import TravelInsuredData from '../components/Insurance/Travel/InsuredData/travel10.vue'

import UpcashSimpleEstimate from '../components/SimpleEstimate/Upcash/UpcashSimpleEstimate'
import UpcashSimpleEstimateResult from '../components/SimpleEstimate/Upcash/UpcashSimpleEstimate-Result'
import TravelSimpleEstimate from '../components/SimpleEstimate/Travel/TravelSimpleEstimate'

import Agreement from '../components/Agreement/agreement_build'
import Benfbuild from '../components/Benf/benfbuild'
import Otp from '../components/OTP/otp_build'
import OtpVerify from '../components/OTPVerify/otpverify_build'

import Payment from '../components/Payment/payment_build.vue'
import PaymentComplete from '../components/Payment/payment_complete.vue'

import MyError from '../components/error'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: [{
    path: '/enttravel-1',
    component: EntTravelOne
  }, {
    path: '/travel-1',
    component: TravelOne
  }, {
    path: '/travel-1-1',
    component: TravelOneInsureData
  }, {
    path: '/travel-2',
    component: TravelTwo
  }, {
    path: '/travel-3',
    component: TravelThree
  }, {
    path: '/travel-4',
    component: TravelFour
  }, {
    path: '/travel-5',
    component: TravelFive
  }, {
    path: '/travel-6',
    component: TravelSix
  }, {
    path: '/travel-7',
    component: TravelSeven
  }, {
    path: '/travel-8',
    component: TravelEight
  }, {
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
    path: '/health-1',
    component: HealthStepOne,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/health-2',
    component: HealthStepTwo
  },
  {
    path: '/health-3',
    component: HealthStepThree
  },
  {
    path: '/health-4',
    component: HealthStepFour
  },
  {
    path: '/accident-1',
    component: AccidentStepOne,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/accident-2',
    component: AccidentStepTwo
  },
  {
    path: '/accident-3',
    component: AccidentStepThree
  },
  {
    path: '/accident-4',
    component: AccidentStepFour
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
    path: '/health-insureddata',
    component: HealthInsuredData
  },
  {
    path: '/travel-insureddata',
    component: TravelInsuredData
  },
  {
    path: '/accident-insureddata',
    component: AccidentInsuredData
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
    path: '/paymentcomplete',
    component: PaymentComplete
  },
  {
    path: '/UpcashSimpleEstimate',
    component: UpcashSimpleEstimate
  },
  {
    path: '/UpCashSimpleEstimateResult',
    component: UpcashSimpleEstimateResult
  },
  {
    path: '/TravelSimpleEstimate',
    component: TravelSimpleEstimate
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
