<template>
  <li>
    <input type="checkbox" :checked="todo.completed" @change="$emit('complete',todo.id)"/>
    <router-link :to="`/todo/${todo.id}`"><span :class="{ completed: todo.completed }">{{ todo.text }}</span></router-link>
    <button @click="$emit('remove', todo.id)">Remove</button>
  </li>
</template>
<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style scoped>
.completed {
  text-decoration: line-through;
  color: gray;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;
}
label {
  flex: 1;
  display: flex;
  gap: 10px;
  align-items: center;
}
button {
  background: none;
  border: none;
  cursor: pointer;
  color: red;
  font-size: 16px;
}

</style>

