<template>
  <div id="app">
    <TreeItem></TreeItem>
  </div>
</template>

<script>

import TreeItem from './components/TreeItem.vue'

export default {
  name: 'App',
  components: {
    TreeItem
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
