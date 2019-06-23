<template>
  <div>
    <h3>Add Todo</h3>
    <form>
      <input type="text" placeholder="Add todo">
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {}
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
    flex: 2
    cursor: pointer
    margin-right: 30px
</style>
