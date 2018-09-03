<template>
  <div id="editor">
    <textarea :value="mdtext"></textarea>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  data: {
    mdtext: ''
  }
}
</script>
