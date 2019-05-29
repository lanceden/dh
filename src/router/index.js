import Vue from 'vue'
import Router from 'vue-router'

import UpcashStepOne from '../components/Insurance/UpCash/StepOne/UpCashStepOne_build.vue'
import UpcashStepTwo from '../components/Insurance/UpCash/StepTwo/UpCashStepTwo_build.vue'
import UpcashStepTwoNotify from '../components/Insurance/UpCash/StepTwo/UpCashStepTwo_notify.vue'
import UpCashStepTwoResult from '../components/Insurance/UpCash/StepTwo/UpCashStepTwo_calculateresult.vue'
import UpcashStepThree from '../components/Insurance/UpCash/StepThree/UpCashStepThree_build.vue'
import UpCashStepFour from '../components/Insurance/UpCash/StepFour/UpCashStepFour_build.vue'
import UpcashInsuredData from '../components/Insurance/UpCash/InsuredData/UpCashInsureddata_build.vue'
import UpCashInsuredDetail from '../components/Insurance/UpCash/InsuredData/UpCashInsuredDetail.vue'

import EZCashStepOne from '../components/Insurance/EZCash/StepOne/EZCashStepOne_build.vue'
import EZCashStepTwo from '../components/Insurance/EZCash/StepTwo/EZCashStepTwo_build.vue'
import EZcashStepTwoNotify from '../components/Insurance/EZCash/StepTwo/EZCashStepTwo_notify.vue'
import EZCashStepTwoResult from '../components/Insurance/EZCash/StepTwo/EZCashStepTwo_calculateresult.vue'
import EZCashStepThree from '../components/Insurance/EZCash/StepThree/EZCashStepThree_build.vue'
import EZCashStepFour from '../components/Insurance/EZCash/StepFour/EZCashStepFour_build.vue'
import EZCashInsuredData from '../components/Insurance/EZCash/InsuredData/EZCashInsureddata_build.vue'
import EZCashInsuredDetail from '../components/Insurance/EZCash/InsuredData/EZCashInsuredDetail.vue'

import ICanElecForm from '../components/Insurance/ICan/StepOne/ICanStepOne_elecform.vue'
import ICanStepOne from '../components/Insurance/ICan/StepOne/ICanStepOne_build.vue'
import ICanStepTwo from '../components/Insurance/ICan/StepTwo/ICanStepTwo_build.vue'
import ICanStepTwoResult from '../components/Insurance/ICan/StepTwo/ICanStepTwo_calculateresult.vue'
import ICanStepThree from '../components/Insurance/ICan/StepThree/ICanStepThree_build.vue'
import ICanStepFour from '../components/Insurance/ICan/StepFour/ICanStepFour_build.vue'
import ICanInsuredData from '../components/Insurance/ICan/InsuredData/ICanInsureddata_build.vue'
import ICanInsuredDetail from '../components/Insurance/ICan/InsuredData/ICanInsuredDetail.vue'

import IWellElecForm from '../components/Insurance/IWell/StepOne/IWellStepOne_elecform.vue'
import IWellStepOne from '../components/Insurance/IWell/StepOne/IWellStepOne_build.vue'
import IWellStepTwo from '../components/Insurance/IWell/StepTwo/IWellStepTwo_build.vue'
import IWellStepTwoResult from '../components/Insurance/IWell/StepTwo/IWellStepTwo_calculateresult.vue'
import IWellStepThree from '../components/Insurance/IWell/StepThree/IWellStepThree_build.vue'
import IWellStepFour from '../components/Insurance/IWell/StepFour/IWellStepFour_build.vue'
import IWellInsuredData from '../components/Insurance/IWell/InsuredData/IWellInsureddata_build.vue'
import IWellInsuredDetail from '../components/Insurance/IWell/InsuredData/IWellInsuredDetail.vue'

import MyWayStepOne from '../components/Insurance/MyWay/StepOne/MyWayStepOne_build.vue'
import MyWayStepTwo from '../components/Insurance/MyWay/StepTwo/MyWayStepTwo_build.vue'
import MyWayStepTwoResult from '../components/Insurance/MyWay/StepTwo/MyWayStepTwo_calculateresult.vue'
import MyWayStepThree from '../components/Insurance/MyWay/StepThree/MyWayStepThree_build.vue'
import MyWayStepThreeAccount from '../components/Insurance/MyWay/StepThree/MyWayStepThree_account.vue'
import MyWayStepFour from '../components/Insurance/MyWay/StepFour/MyWayStepFour_build.vue'
import MyWayInsuredData from '../components/Insurance/MyWay/InsuredData/MyWayInsureddata_build.vue'
import MyWayInsuredDetail from '../components/Insurance/MyWay/InsuredData/MyWayInsuredDetail.vue'

import IGoingStepOne from '../components/Insurance/IGoing/StepOne/IGoingStepOne_build.vue'
import IGoingStepTwo from '../components/Insurance/IGoing/StepTwo/IGoingStepTwo_build.vue'
import IGoingStepTwoResult from '../components/Insurance/IGoing/StepTwo/IGoingStepTwo_calculateresult.vue'
import IGoingStepThree from '../components/Insurance/IGoing/StepThree/IGoingStepThree_build.vue'
import IGoingStepFour from '../components/Insurance/IGoing/StepFour/IGoingStepFour_build.vue'
import IGoingInsuredData from '../components/Insurance/IGoing/InsuredData/IGoingInsureddata_build.vue'
import IGoingInsuredDetail from '../components/Insurance/IGoing/InsuredData/IGoingInsuredDetail.vue'

import AccidentStepOne from '../components/Insurance/Accident/StepOne/AccidentStepOne_build.vue'
import AccidentStepTwo from '../components/Insurance/Accident/StepTwo/AccidentStepTwo_build.vue'
import AccidentTwoResult from '../components/Insurance/Accident/StepTwo/AccidentStepTwo_calculateresult.vue'
import AccidentStepThree from '../components/Insurance/Accident/StepThree/AccidentStepThree_build.vue'
import AccidentStepFour from '../components/Insurance/Accident/StepFour/AccidentStepFour_build.vue'
import AccidentInsuredData from '../components/Insurance/Accident/InsuredData/AccidentInsureddata_build.vue'
import AccidentInsuredDetail from '../components/Insurance/Accident/InsuredData/AccidentInsuredDetail.vue'

import HealthStepOne from '../components/Insurance/Health/StepOne/HealthStepOne_build.vue'
import HealthStepTwo from '../components/Insurance/Health/StepTwo/HealthStepTwo_build.vue'
import HealthStepTwoResult from '../components/Insurance/Health/StepTwo/HealthStepTwo_calculateresult.vue'
import HealthStepThree from '../components/Insurance/Health/StepThree/HealthStepThree_build.vue'
import HealthStepThreeAccount from '../components/Insurance/Health/StepThree/HealthStepThree_account.vue'
import HealthStepFour from '../components/Insurance/Health/StepFour/HealthStepFour_build.vue'
import HealthInsuredData from '../components/Insurance/Health/InsuredData/HealthInsureddata_build.vue'
import HealthInsuredDetail from '../components/Insurance/Health/InsuredData/HealthInsuredDetail.vue'

import EntTravelOne from '../components/Insurance/EntTravel//StepOne/enttravel1Build.vue'
import EntTravelTwo from '../components/Insurance/EntTravel/StepTwo/enttravel2Build.vue'
import EntTravelThree from '../components/Insurance/EntTravel/StepThree/enttravel3Build.vue'
import EntTravelFour from '../components/Insurance/EntTravel/StepFour/enttravel4.vue'
import EntTravelFive from '../components/Insurance/EntTravel/StepFive/enttravel5Build'
import EntTravelSix from '../components/Insurance/EntTravel/StepSix/enttravel6Build.vue'
import EntTravelSeven from '../components/Insurance/EntTravel/enttravel7'
import EntTravelEight from '../components/Insurance/EntTravel/enttravel8'
import EntTravelInsuredData from '../components/Insurance/EntTravel/InsuredData/enttravel10.vue'
import EntTravelInsuredDetail from '../components/Insurance/EntTravel/InsuredData/enttravelDetail.vue'

import TravelOne from '../components/Insurance/Travel/StepOne/travel1Build'
import TravelTwo from '../components/Insurance/Travel/StepTwo/travel2Build.vue'
import TravelThree from '../components/Insurance/Travel/StepThree/travel3Build.vue'
import TravelFour from '../components/Insurance/Travel/StepFour/travel4.vue'
import TravelFive from '../components/Insurance/Travel/StepFive/travel5Build'
import TravelSix from '../components/Insurance/Travel/StepSix/travel6Build.vue'
import TravelSeven from '../components/Insurance/Travel/travel7'
import TravelEight from '../components/Insurance/Travel/travel8'
import TravelInsuredData from '../components/Insurance/Travel/InsuredData/travel10.vue'
import TravelDetail from '../components/Insurance/Travel/InsuredData/travelDetail.vue'

import UpcashSimpleEstimate from '../components/SimpleEstimate/Upcash/UpcashSimpleEstimate'
import UpcashSimpleEstimateResult from '../components/SimpleEstimate/Upcash/UpcashSimpleEstimate-Result'
// import TravelSimpleEstimate from '../components/SimpleEstimate/Travel/TravelSimpleEstimate'

import Agreement from '../components/Agreement/agreement_build'
import Benfbuild from '../components/Benf/benfbuild'
import Otp from '../components/OTP/otp_build'
import OtpVerify from '../components/OTPVerify/otpverify_build'

import Payment from '../components/Payment/payment_build.vue'
import PaymentComplete from '../components/Payment/payment_complete.vue'
import Ebillform from '../components/Payment/payment_ebillform.vue'
// 語音客服
import ChatService from '../components/ChatService/chatService.vue'
import MyError from '../components/error'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: [
    {
      path: '/enttravel-1',
      component: EntTravelOne
    }, {
      path: '/enttravel-2',
      component: EntTravelTwo
    }, {
      path: '/enttravel-3',
      component: EntTravelThree
    }, {
      path: '/enttravel-4',
      component: EntTravelFour
    }, {
      path: '/enttravel-5',
      component: EntTravelFive
    }, {
      path: '/enttravel-6',
      component: EntTravelSix
    }, {
      path: '/enttravel-7',
      component: EntTravelSeven
    }, {
      path: '/enttravel-8',
      component: EntTravelEight
    }, {
      path: '/travel-1',
      component: TravelOne
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
      path: '/myway-Estimate',
      component: MyWayStepTwoResult
    },
    {
      path: '/myway-3',
      component: MyWayStepThree
    },
    {
      path: '/myway-account',
      component: MyWayStepThreeAccount
    },
    {
      path: '/myway-4',
      component: MyWayStepFour
    },
    {
      path: '/upcash-1',
      component: UpcashStepOne
    },
    {
      path: '/upcash-2',
      component: UpcashStepTwo
    },
    {
      path: '/upcash-2-1',
      component: UpcashStepTwoNotify
    },
    {
      path: '/upcash-Estimate',
      component: UpCashStepTwoResult
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
      path: '/upcash-detail',
      component: UpCashInsuredDetail
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
      path: '/igoing-Estimate',
      component: IGoingStepTwoResult
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
      path: '/health-Estimate',
      component: HealthStepTwoResult
    },
    {
      path: '/health-3',
      component: HealthStepThree
    },
    {
      path: '/health-account',
      component: HealthStepThreeAccount
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
      path: '/accident-Estimate',
      component: AccidentTwoResult
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
      path: '/ezcash-2-1',
      component: EZcashStepTwoNotify
    },
    {
      path: '/ezcash-Estimate',
      component: EZCashStepTwoResult
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
      path: '/IWell-Estimate',
      component: IWellStepTwoResult
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
      path: '/ICan-Estimate',
      component: ICanStepTwoResult
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
      path: '/ezcash-detail',
      component: EZCashInsuredDetail
    },
    {
      path: '/ican-insureddata',
      component: ICanInsuredData
    },
    {
      path: '/ican-detail',
      component: ICanInsuredDetail
    },
    {
      path: '/iwell-insureddata',
      component: IWellInsuredData
    },
    {
      path: '/iwell-detail',
      component: IWellInsuredDetail
    },
    {
      path: '/myway-insureddata',
      component: MyWayInsuredData
    },
    {
      path: '/myway-detail',
      component: MyWayInsuredDetail
    },
    {
      path: '/igoing-insureddata',
      component: IGoingInsuredData
    },
    {
      path: '/igoing-detail',
      component: IGoingInsuredDetail
    },
    {
      path: '/health-insureddata',
      component: HealthInsuredData
    },
    {
      path: '/health-detail',
      component: HealthInsuredDetail
    },
    {
      path: '/travel-insureddata',
      component: TravelInsuredData
    },
    {
      path: '/travel-detail',
      component: TravelDetail
    },
    {
      path: '/enttravel-insureddata',
      component: EntTravelInsuredData
    },
    {
      path: '/enttravel-detail',
      component: EntTravelInsuredDetail
    },
    {
      path: '/accident-insureddata',
      component: AccidentInsuredData
    },
    {
      path: '/accident-detail',
      component: AccidentInsuredDetail
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
      path: '/ebillform',
      component: Ebillform
    },
    {
      path: '/ChatService',
      component: ChatService
    },
    {
      path: '/UpcashSimpleEstimate',
      component: UpcashSimpleEstimate
    },
    {
      path: '/UpCashSimpleEstimateResult',
      component: UpcashSimpleEstimateResult
    },
    // {
    //   path: '/TravelSimpleEstimate',
    //   component: TravelSimpleEstimate
    // },
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
