<template>
  <div>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped>
  .slide-enter,
  .slide-leave-to
  /* .slide-fade-leave-active for <2.1.8 */

  {
    display: none;
    opacity: .3;
  }

</style>
