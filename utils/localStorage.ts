import { Todo } from "../redux/todoSlice";

export const saveTodosToLocalStorage = (todos: Todo[]) => {
  try {
    const serializedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", serializedTodos);
  } catch (error) {
    console.error("Error saving todos to localStorage:", error);
  }
};
