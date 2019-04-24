<template>
  <div>
    <AgreementCheck></AgreementCheck>
    <AgreementContent v-for="n in 10" :key="n"></AgreementContent>
    <AgreementFooter></AgreementFooter>
  </div>
</template>

<script>
import AgreementCheck from './agreement_check'
import AgreementContent from './agreement_content'
import AgreementFooter from './agreement_footer'
export default {
  components: {
    AgreementCheck,
    AgreementContent,
    AgreementFooter
  }
}

</script>
