<template>
  <div id="app">
    <AddTodo/>
    <todos></todos>
  </div>
</template>

<script>
import Todos from './components/Todos'
import store from './store/index'
import AddTodo from './components/AddTodo'
export default {
  name: 'app',
  store,
  components: {
    Todos,
    AddTodo
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
