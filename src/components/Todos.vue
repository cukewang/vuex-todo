<template>
  <div>
    <h3>todos</h3>
    <div class="todos">
      <div class="todo" v-for="todo in todos" :key="todo.index">{{todo.title}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Todos',
  computed: mapGetters({
    todos: 'getAllTodos'
  }),
  created () {
    this.$store.dispatch('getAllTodos')
  }
}
</script>

<style>
</style>
