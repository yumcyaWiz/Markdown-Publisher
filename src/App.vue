<template>
  <div id="app">
    <Editor />
    <Viewer />
  </div>
</template>

<script>
import Editor from './components/Editor.vue'
import Viewer from './components/Viewer.vue'
import 'highlightjs/styles/hybrid.css'

export default {
  name: 'app',
  components: {
    Editor,
    Viewer
  }
}
</script>
