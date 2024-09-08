import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "Todo",
    initialState: {
        todos: [],   
        completedTodos: [], 
    },
    reducers: {
        addTodo: (state, action) => {
            const date = new Date();
            const timestamp = date.toLocaleString();
            const input = action.payload;
            const todo = {
                id: Date.now(),
                date: timestamp,
                title: input.title,
                description: input.description,
                checked: false,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter((e) => e.id !== id);
            state.completedTodos = state.completedTodos.filter((e) => e.id !== id);
        },
        ischecked: (state, action) => {
            const id = action.payload;
            const todo = state.todos.find((e) => e.id === id) || state.completedTodos.find((e) => e.id === id);
            
            if (todo) {
                todo.checked = !todo.checked;
        
                if (todo.checked) {
                    // Move to completed todos
                    state.completedTodos.push(todo);
                    state.todos = state.todos.filter((e) => e.id !== id);
                } else {
                    // Move back to pending todos
                    state.todos.push(todo);
                    state.completedTodos = state.completedTodos.filter((e) => e.id !== id);
                }
            }
        },        
        updateTodo: (state, action) => {
            const { id, title, description } = action.payload;
            const todo = state.todos.find((e) => e.id === id);
            if (todo) {
                todo.title = title;
                todo.description = description;
            }
            const completedTodo = state.completedTodos.find((e) => e.id === id);
            if (completedTodo) {
                completedTodo.title = title;
                completedTodo.description = description;
            }
        },
    },
});

export const { addTodo, removeTodo, updateTodo, ischecked } = userSlice.actions;
export default userSlice.reducer;

