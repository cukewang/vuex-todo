<template>
  <div id="app">
    <todos></todos>
  </div>
</template>

<script>
import Todos from './components/Todos'
import store from './store/index'
export default {
  name: 'app',
  store,
  components: {
    Todos
  }
}
</script>

<style lang="stylus">
body
  background-color: #cccccc
#app
  width: 1100px
  margin: 60px auto
</style>
