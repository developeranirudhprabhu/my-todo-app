import {ref,computed} from 'vue'
export function useTodos() {
    const newTodo = ref('')
    const todos = ref([
        { id: 1, text: 'Learn Vue.js', completed: false },
        { id: 2, text: 'Build a Todo App', completed: false },
        { id: 3, text: 'Deploy the App', completed: false },
        { id: 4, text: 'Test the App', completed: false },
        { id: 5, text: 'Refactor the Code', completed: false },
        { id: 6, text: 'Write Documentation', completed: false }
    ])
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
        todos.value.push({ id: Date.now(), text: newTodo.value, completed: false });
        newTodo.value = '';
        }
    }
    const deleteTodo = (id) => {
        todos.value = todos.value.filter(todo => todo.id !== id);
    }
    return {
        newTodo,
        todos,
        filters,
        selectedFilter,
        filteredTodos,
        addTodo,
        deleteTodo,
        showNoTasksMessage
    }
}