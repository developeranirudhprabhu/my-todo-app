import { defineStore } from "pinia";
import {ref,computed} from 'vue'
export const useTodoStore = defineStore('todos',() => {
    const newTodo = ref('')
    const todoStorage = localStorage.getItem('todos');
    // Initialize todos from localStorage or with default values
    // const todos = ref([
    //     { id: "1", text: 'Learn Vue.js', completed: false },
    //     { id: "2", text: 'Build a Todo App', completed: false },
    //     { id: "3", text: 'Deploy the App', completed: false },
    //     { id: "4", text: 'Test the App', completed: false },
    //     { id: "5", text: 'Refactor the Code', completed: false },
    //     { id: "6", text: 'Write Documentation', completed: false }
    // ])
    const todos = ref(todoStorage ? JSON.parse(todoStorage) : []);
    const filters = ref([
        { text: 'All', value: 'all' },
        { text: 'Active', value: 'active' },
        { text: 'Completed', value: 'completed' }
    ])
    const selectedFilter = ref('all')
    const filteredTodos = computed(() => {
        if (selectedFilter.value === 'active') {
        return todos.value.filter(todo => !todo.completed);
        } else if (selectedFilter.value === 'completed') {
        return todos.value.filter(todo => todo.completed);
        }
        return todos.value;
    })
    const showNoTasksMessage = computed(() => {
        return filteredTodos.value.length === 0 && selectedFilter.value !== 'all';
    })
    const addTodo = () => {
        if (newTodo.value.trim()) {
        todos.value.push({ id: Date.now().toString(), text: newTodo.value, completed: false });
        console.log('Todo list:', todos.value);
        // Clear the input field after adding the todo
        newTodo.value = '';
        localStorage.setItem('todos', JSON.stringify(todos.value));
        }
    }
    const deleteTodo = (id) => {
        todos.value = todos.value.filter(todo => todo.id !== id);
        localStorage.setItem('todos', JSON.stringify(todos.value));
    }
    const getTodoById = (id) => {
        return todos.value.find(todo => todo.id === id);
    }
    const toggleTodoCompletion = (id) => {
        const todo = todos.value.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
        localStorage.setItem('todos', JSON.stringify(todos.value));
    }
    const updateTodo = (id, updatedText) => {
        const todo = todos.value.find(todo => todo.id === id);
        if (todo) {
            todo.text = updatedText;
            localStorage.setItem('todos', JSON.stringify(todos.value));
        }
    }
    return {
        newTodo,
        todos,
        filters,
        selectedFilter,
        filteredTodos,
        addTodo,
        deleteTodo,
        showNoTasksMessage,
        getTodoById,
        toggleTodoCompletion,
        updateTodo
    }
})