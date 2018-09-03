<template>
  <div id="app">
    <Editor />
    <Viewer />
  </div>
</template>

<script>
import Editor from './components/Editor.vue'
import Viewer from './components/Viewer.vue'

export default {
  name: 'app',
  components: {
    Editor,
    Viewer
  }
}
</script>
