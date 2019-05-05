<template>
  <div class="step">
		<div class="progress-bar">
			<img src="../../static/img/progress-bar-06-1.png">
		</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'HeaderIsActive'
    ])
  }
}
</script>
