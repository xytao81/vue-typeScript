import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      {
        text: "Ant Design Title 1",
        complete: false
      },
      {
        text: "Ant Design Title 2",
        complete: false
      },
      {
        text: "Ant Design Title 3",
        complete: false
      },
      {
        text: "Ant Design Title 4",
        complete: false
      }
    ]
  },
  mutations: {
    updateTodoList(state, {index, content}) {
      state.todoList[index].text = content
    }
  },
  actions: {
  },
  modules: {
  }
})
