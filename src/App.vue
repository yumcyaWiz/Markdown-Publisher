<template>
  <div id="app">
    <Editor />
    <Viewer class="markdown-body" />
  </div>
</template>

<script>
import Editor from './components/Editor.vue'
import Viewer from './components/Viewer.vue'
import 'highlightjs/styles/vs.css'
import 'github-markdown-css/github-markdown.css'

export default {
  name: 'app',
  components: {
    Editor,
    Viewer
  }
}
</script>

<style>
html, body, #app {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  display: flex;
}

textarea, #editor, #viewer {
  width: 100%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
}
#viewer {
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}
</style>
