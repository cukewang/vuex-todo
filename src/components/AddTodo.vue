<template>
  <div>
    <h3>Add Todo</h3>
    <form @submit="submit">
      <input type="text" v-model="title" placeholder="Add todo">
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddTodo',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    submit (e) {
      e.preventDefault()
      const todo = {
        title: this.title,
        completed: false
      }
      this.addTodo(todo)
    }
  }
}
</script>
<style lang="stylus">
form
  display: flex
  height: 50px
  input[type='text']
    margin-left: 30px
    flex: 10
    border: 1px solid #41b883
    padding: 10px
  input[type='submit']
    background: #41b883
    color: white
    border: 1px solid #41b883
    flex: 2
    cursor: pointer
    margin-right: 30px
</style>
