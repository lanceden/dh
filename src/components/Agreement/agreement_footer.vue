<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-12 footer-title footer-gary" @click="GoNext">我已同意並閱讀完成</div>
        <!-- <div class="col-sm-12 footer-title footer-right">我已同意並閱讀完成</div> -->
      </nav>
    </div>
  </div>
</template>
<script>
const insNameArr = [
  'upcash', 'ezcash', 'myway', 'ican', 'iwell'
]
export default {
  props: [
    'insname'
  ],
  methods: {
    /**
     * 投保資訊
     */
    GoNext() {
      let insname = this.insname
      var self = this
      insNameArr.forEach(name => {
        console.log(name)
        console.log(insname.toLowerCase().match(name))
        if (insname.toLowerCase().match(name) !== null) {
          switch (name) {
            case 'upcash':
              self.$router.push(`/upcash-insureddata`)
              break
            case 'ezcash':
              self.$router.push(`/ezcash-insureddata`)
              break
          }
        }
      })
    }
  }
}

</script>
