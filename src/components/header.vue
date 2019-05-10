<template>
  <div>
    <div class="product-name">{{instypename}}</div>
    <div class="progress-bar">
      <img :src="this.$store.state.PROGRESSBAR">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      instypename: ''
    }
  },
  created() {
    this.instypename = this.$store.state.PLANNAME.toLowerCase()
    switch (this.instypename) {
      case 'upcash':
        this.instypename = 'Up Cash年金保險'
        break
      case 'ezcash':
        this.instypename = 'Ez Cash年金保險'
        break
      case 'ican':
        this.instypename = 'i-can傷害保險'
        break
      case 'iwell':
        this.instypename = 'i-well傷害保險'
        break
      case 'myway':
        this.instypename = ''
        break
      case 'igoing':
        this.instypename = 'i-going意外傷害保險'
        break
      case 'accident':
        this.instypename = 'i平安傷害險'
        break
      case 'health':
        this.instypename = ''
        break
      case 'travel':
        this.instypename = 'Enjoy Life旅行平安保險'
        break
      case 'enttravel':
        this.instypename = '企業客戶專區'
        break
    }
  }
}
</script>
