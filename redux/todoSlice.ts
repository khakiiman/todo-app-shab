import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { saveTodosToLocalStorage } from "../utils/localStorage";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
export interface TodoState {
  todos: Todo[];
  filter: 'all' | 'completed' | 'active';
}

const initialState: TodoState = {
  todos: [],
  filter: 'all',
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
      saveTodosToLocalStorage(state.todos);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodosToLocalStorage(state.todos);
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveTodosToLocalStorage(state.todos);
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    clearCompletedTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
      saveTodosToLocalStorage(state.todos);
    },
    setFilterAll: (state) => {
      state.filter = 'all';
    },
    setFilterCompleted: (state) => {
      state.filter = 'completed';
    },
    setFilterActive: (state) => {
      state.filter = 'active';
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setTodos, clearCompletedTodos, setFilterAll, setFilterCompleted, setFilterActive, } = todosSlice.actions;
export default todosSlice.reducer;

export const selectTodos = (state: RootState) => state.todos.todos;
