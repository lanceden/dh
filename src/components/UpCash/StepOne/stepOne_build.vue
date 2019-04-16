<template>
  <div>
    <StepOneCustomer></StepOneCustomer>
    <StepOneAbout></StepOneAbout>
    <StepOneFatca></StepOneFatca>
    <StepOneFooter></StepOneFooter>
  </div>
</template>

<script>
import StepOneCustomer from './stepOne_customer'
import StepOneAbout from './stepOne_about'
import StepOneFatca from './stepOne_fatca'
import StepOneFooter from './stepOne_footer'
export default {
  components: {
    StepOneCustomer,
    StepOneAbout,
    StepOneFatca,
    StepOneFooter
  }
}

</script>
