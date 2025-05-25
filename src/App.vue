<script setup>
// import {ref,computed} from 'vue'
// import { useTodos } from './composables/useTodos';
// import TodoItem from './components/TodoItem.vue'
// const { newTodo, filters, selectedFilter, filteredTodos, addTodo, deleteTodo,showNoTasksMessage } = useTodos();
// export default {
//   name: 'My Todo App',
//   components: {
//     TodoItem:  defineAsyncComponent(() => import('./components/TodoItem.vue'))
//   },
//   data(){
//   return {
//     todos: [
//       { id: 1, text: 'Learn Vue.js',completed: true },
//       { id: 2, text: 'Build a Todo App', completed: true },
//       { id: 3, text: 'Deploy the App', completed: false },
//       { id: 4, text: 'Test the App', completed: false },
//       { id: 5, text: 'Refactor the Code', completed: false },
//       { id: 6, text: 'Write Documentation', completed: false }
//     ],
//     newTodo: '',
//     filters:[
//       { text: 'All', value: 'all' },
//       { text: 'Active', value: 'active' },
//       { text: 'Completed', value: 'completed' }
//     ],
//     selectedFilter: 'all'
//   };
// },
// computed: {
//   filteredTodos() {
//     if (this.selectedFilter === 'active') {
//       return this.todos.filter(todo => !todo.completed);
//     } else if (this.selectedFilter === 'completed') {
//       return this.todos.filter(todo => todo.completed);
//     }
//     return this.todos;
//   },
// },
// methods: {
//   addTodo() {
//     if (this.newTodo.trim()) {
//       this.todos.push({ id: Date.now(), text: this.newTodo });
//       this.newTodo = '';
//     }
//   },
// },
// };
// const newTodo = ref('')
// const todos = ref([
//   { id: 1, text: 'Learn Vue.js', completed: true },
//   { id: 2, text: 'Build a Todo App', completed: true },
//   { id: 3, text: 'Deploy the App', completed: false },
//   { id: 4, text: 'Test the App', completed: false },
//   { id: 5, text: 'Refactor the Code', completed: false },
//   { id: 6, text: 'Write Documentation', completed: false }
// ])
// const filters = ref([
//   { text: 'All', value: 'all' },
//   { text: 'Active', value: 'active' },
//   { text: 'Completed', value: 'completed' }
// ])
// const selectedFilter = ref('all')
// const filteredTodos = computed(() => {
//   if (selectedFilter.value === 'active') {
//     return todos.value.filter(todo => !todo.completed);
//   } else if (selectedFilter.value === 'completed') {
//     return todos.value.filter(todo => todo.completed);
//   }
//   return todos.value;
// })
// const addTodo = () => {
//   if (newTodo.value.trim()) {
//     todos.value.push({ id: Date.now(), text: newTodo.value, completed: false });
//     newTodo.value = '';
//   }
// }
</script>

<template>
  <!-- <h1>My Todo Application</h1> -->
  <navbar>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/todo">Todo</router-link> 
  </navbar>
  <br />
  <router-view />
  <br />
  <hr />
  <!-- <input v-model="newTodo" placeholder="Add a new todo" @keyup.enter="addTodo"/>
  <select v-model="selectedFilter">
    <option v-for="filter in filters" :key="filter.value" :value="filter.value">
      {{ filter.text }}
    </option>
  </select>
  <p v-if="showNoTasksMessage">No tasks available</p>
  <ul v-else>
    <TodoItem
      v-for="todo in filteredTodos"
      :key="todo.id"
      :todo="todo"
      @remove="deleteTodo"
    />
  </ul> -->
</template>

<style scoped>
</style>
