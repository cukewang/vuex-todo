<template>
  <div>
    <h3>Filter todo</h3>
    <select v-model="limit" @change="filterTodos(limit)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// 如果不用mapActions的话，应该用this.$store.dispatch("filterToods",limt),在methods里定义一个filterTodos(limit)方法，里面放方才的dispatch就行了。
export default {
  name: 'FilterTodo',
  data () {
    return {
      limit: 200
    }
  },
  methods: mapActions(['filterTodos'])
}
</script>

<style lang="stylus">
select
  padding: 10px
  border: 1px solid #41b883
  height: 50px
  margin-left: 30px
</style>
