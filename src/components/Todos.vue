<template>
  <div>
    <h3>todos</h3>
    <div class="todos">
      <div class="todo" v-for="todo in todos" :key="todo.index">
        <div class="title">{{todo.title}}</div>
        <span class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></span>
      </div>
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
  methods: mapActions(['getAllTodos', 'deleteTodo']),
  created () {
    this.getAllTodos()
  }
}
</script>

<style lang="stylus">
.todos
  display: flex
  flex-flow: row wrap
  justify-content: space-between
  .todo
    color: white
    flex: 1 1 25%
    margin: 10px 10px
    padding: 15px
    border-radius: 15px
    background: #41b883
    display: flex
    justify-content: space-around
    align-items: center
    .title
      flex: 1
    .fas fa-trash-alt
      flex: 1
</style>
