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
  setTodos (state, res) {
    state.todos = res
  }
}
const actions = {
  async getAllTodos ({ commit }) {
    const res = await axios.get('http://jsonplaceholder.typicode.com/todos')
    commit('setTodos', res.data)
  }
}

export default { state, getters, mutations, actions }
