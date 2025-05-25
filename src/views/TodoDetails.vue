<script setup>
import { useRoute } from 'vue-router';
import { useTodoStore } from '../store/todoStore';

const route = useRoute();
const todoStore = useTodoStore();
const todoId = route.params.id;
console.log('Todo ID:', todoId);
const todo = todoStore.getTodoById(todoId);
console.log('Todo:', todo);
</script>
<template>
  <div v-if="todo">
    <h1>Todo Details</h1>
    <h1><input v-model="todo.text" @keyup.enter="todoStore.updateTodo(todo.id,todo.text)"/></h1>
    <p>Status: {{ todo.completed ? 'Completed' : 'Pending' }}</p>
    <button @click="todoStore.toggleTodoCompletion(todoId)">
      {{ todo.completed ? 'Mark as Pending' : 'Mark as Completed' }}
    </button>
  </div>
  <div v-else>
    <p>Todo not found.</p>
  </div>
</template>
