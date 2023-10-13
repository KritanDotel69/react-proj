import { createSlice } from "@reduxjs/toolkit";
import { getTodos, setTodos } from "./local"

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    todos: []
  },
  reducers:
  {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
      setTodos(state.todos);
    }
  }
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;