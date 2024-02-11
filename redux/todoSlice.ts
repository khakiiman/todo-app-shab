import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { saveTodosToLocalStorage } from "../utils/localStorage";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
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
    clearTodos: (state) => {
      state.todos = [];
      localStorage.removeItem("todos");
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setTodos, clearTodos } = todosSlice.actions;
export default todosSlice.reducer;

export const selectTodos = (state: RootState) => state.todos.todos;
