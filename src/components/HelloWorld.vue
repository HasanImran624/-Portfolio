<template>
  <div class="hello">
    <h1>ToDo list</h1>
    <input v-model= "newTask" placeholder="Add new Task"/>
    <button @click="addTodo">Add task</button>

    <ul>
    <li v-for="todo in todos" :key="todo.id">
    {{todo.task}}
    <button @click="deleteTodo(todo.id)">Delete task</button>
    </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      todos: [],
      newTask: ''
    }
  },
  created() {
    this.fetchTodos()
  },
  methods: {
    async fetchTodos() {
      const response = await axios.get('http://localhost:3000/api/todos')  // Updated URL
      this.todos = response.data
      console.log(response.data);
    },
    async addTodo() {
      if (!this.newTask) return
      const response = await axios.post('http://localhost:3000/api/todos', {
        task: this.newTask    //<!--we are sending payload to the backend API in payload-->
       
      })
      this.todos.push(response.data)
      this.newTask = ''
    },
    async deleteTodo(id) {
      await axios.delete(`http://localhost:3000/api/todos/${id}`)  // Updated URL
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input
{
padding: 5px 10px;
}
button
{
margin-left: 10px;
padding: 5px 10px;
cursor: pointer;
background-color: #ff6666;
}
</style>

