import axios from 'axios'

const state = {
  todos: []
}
const getters = {
  getAllTodos (state) {
    return state.todos
  }
}

const mutations = {
  setTodos (state, todos) {
    state.todos = todos
  },
  post (state, todo) {
    state.todos.unshift(todo)
  },
  delete (state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id)
  }
}
const actions = {
  async getAllTodos ({ commit }) {
    const res = await axios.get('http://jsonplaceholder.typicode.com/todos')
    commit('setTodos', res.data)
  },
  async addTodo ({ commit }, todo) {
    const res = await axios.post(
      'http://jsonplaceholder.typicode.com/todos',
      todo
    )
    commit('post', res.data)
  },
  async deleteTodo ({ commit }, id) {
    await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
    commit('delete', id)
  },
  async filterTodos ({ commit }, limit) {
    const res = await axios.get(
      `http://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    )
    commit('setTodos', res.data)
  }
}

export default { state, getters, mutations, actions }
