<template>
    <h1>My Todo Application</h1>
    <input v-model="todoStore.newTodo" placeholder="Add a new todo" @keyup.enter="addTodo"/>
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
      @complete="toggleTodoCompletion"
    />
  </ul>
</template>
<script setup>
// import { useTodos } from '../composables/useTodos';
import { useTodoStore } from '../store/todoStore';
import TodoItem from '../components/TodoItem.vue'
const { filters, selectedFilter, filteredTodos, addTodo, deleteTodo,showNoTasksMessage,toggleTodoCompletion } = useTodoStore();
const todoStore = useTodoStore();
</script>