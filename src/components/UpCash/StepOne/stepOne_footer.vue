<template>
  <div class="footer">
    <div class="footer-content">
      <nav class="navbar navbar-dark row">
        <div class="col-sm-12 footer-title footer-right"
        @click="GotoNext()">下一步</div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    GotoNext() {
      console.log('GotoNext')
    }
  }
}

</script>
