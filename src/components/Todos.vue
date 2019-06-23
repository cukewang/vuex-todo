<template>
  <div>
    <h3>todos</h3>
    <div class="todos">
      <div class="todo" v-for="todo in todos" :key="todo.index">{{todo.title}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Todos',
  computed: mapGetters({
    todos: 'getAllTodos'
  }),
  methods: mapActions(['getAllTodos']),
  created () {
    this.getAllTodos()
  }
}
</script>

<style lang="stylus">
.todos
  display: flex
  flex-flow: row wrap
  justify-content: space-around
  .todo
    flex: 1 1 25%
    margin: 20px 20px
    padding: 5px
    border-radius: 15px
    background: #41b883
</style>
