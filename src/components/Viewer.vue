<template>
  <div id="viewer">
    <div v-html="compiled"></div>
  </div>
</template>

<script>
export default {
  name: 'Viewer',
  computed: {
    compiled() {
      return this.$store.state.compiled;
    }
  }
}
</script>
