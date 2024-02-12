"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTodos,
  toggleTodo,
  setTodos,
  deleteTodo,
} from "../redux/todoSlice";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const dispatch = useDispatch();

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  useEffect(() => {
    const data = localStorage.getItem("todos");
    const todos = data ? JSON.parse(data) : [];

    if (todos && todos.length > 0) {
      dispatch(setTodos(todos));
    }
  }, [dispatch]);

  return (
    <ul className="space-y-2">
      {todos === undefined || todos.length === 0 ? (
        <li className="text-gray-500 flex items-center">No todos yet...</li>
      ) : (
        todos.map((todo) => (
          <li key={todo.id} className="flex items-center w-full">
            <li
              className={`flex items-center justify-between pl-4 h-10 ${todo.completed ? "bg-green-600" : "bg-slate-700"} rounded-tl-md rounded-bl-md w-10/12`}
              onClick={() => handleToggleTodo(todo.id)}
            >
              <span className={`cursor-pointer ${todo.completed ? "line-through" : ""}`}>
                {todo.text}
              </span>
            </li>
            <li className="w-2/12">
              <button
                className="font-semibold rounded-tr-md rounded-br-md w-full h-10 bg-red-500 hover:bg-red-700 focus:outline-none"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                <span className="xs:hidden">X</span>
                <span className="hidden xs:flex xs:justify-center text-sm">Delete</span>

              </button>
            </li>
          </li>
        ))
      )}
    </ul>
  );
};

export default TodoList;
