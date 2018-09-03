<template>
  <div id="editor">
    <p>{{mdtext}}</p>
    <textarea :value="mdtext" @input="update"></textarea>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  computed: {
    mdtext() {
      return this.$store.state.md;
    }
  },
  methods: {
    update(e) {
      this.$store.dispatch('edit', e.target.value)
    }
  }
}
</script>
