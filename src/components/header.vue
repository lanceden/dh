<template>
  <div v-show="showHeader">
    <div class="product-name">{{name}}</div>
    <div class="progress-bar">
      <img :src="this.$store.state.PROGRESSBAR">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      showHeader: true
    }
  },
  created() {
    this.name = this.$router.history.current.path.split('/')[1].split('-')[0].toLowerCase()
    console.log(this.name)
    switch (this.name) {
      case 'upcash':
        this.name = 'Up Cash年金保險'
        break
      case 'ezcash':
        this.name = 'Ez Cash年金保險'
        break
      case 'ican':
      case 'icanelecform':
        this.name = 'i-can傷害保險'
        break
      case 'iwell':
      case 'iwellelecform':
        this.name = 'i-well傷害保險'
        break
      case 'myway':
        this.name = 'My Way定期壽險'
        break
      case 'igoing':
        this.name = 'i-going意外傷害保險'
        break
      case 'accident':
        this.name = 'i平安傷害保險'
        break
      case 'health':
        this.name = 'New Health健康保險'
        break
      case 'travel':
        this.name = 'Enjoy Life旅行平安保險'
        break
      case 'enttravel':
        this.name = '企業客戶專區'
        break
      case 'promotion':
      case 'detail':
      case 'list':
        this.showHeader = false
        break
    }
  }
}

</script>
