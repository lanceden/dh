<template>
  <div>
    <StepFourBenSetup></StepFourBenSetup>
    <StepFourBenfOne></StepFourBenfOne>
    <StepFourBenfOneAccount></StepFourBenfOneAccount>
    <StepFourBenfTwo></StepFourBenfTwo>
    <StepFourBenfTwoAccount></StepFourBenfTwoAccount>
    <StepFourBenfThree></StepFourBenfThree>
    <StepFourBenfThreeAccount></StepFourBenfThreeAccount>
  </div>
</template>

<script>
import StepFourBenSetup from './stepFour_benfsetup'
import StepFourBenfOne from './stepFour_benfone'
import StepFourBenfOneAccount from './stepFour_benfoneAccount'
import StepFourBenfTwo from './stepFour_benftwo'
import StepFourBenfTwoAccount from './stepFour_benftwoAccount'
import StepFourBenfThree from './stepFour_benfthree'
import StepFourBenfThreeAccount from './stepFour_benfthreeAccount'
export default {
  components: {
    StepFourBenSetup,
    StepFourBenfOne,
    StepFourBenfOneAccount,
    StepFourBenfTwo,
    StepFourBenfTwoAccount,
    StepFourBenfThree,
    StepFourBenfThreeAccount
  }
}

</script>
