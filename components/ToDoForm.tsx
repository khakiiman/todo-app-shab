import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, Todo } from "../redux/todoSlice";

export default function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (todoText.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: todoText,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setTodoText("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 xs:gap-0 xs:flex-row mb-4">
      <input
        title="todoText"
        type="text"
        value={todoText}
        onChange={handleInputChange}
        className="xs:w-8/12 flex-1 py-2 px-4 bg-slate-800 border border-white rounded-tl-md rounded-bl-md xs:mr-2"
      />
      <button
        type="submit"
        className="xs:w-4/12 font-semibold text-lg bg-green-600 hover:bg-green-700 text-white py-2 xs:px-4 xs:py-0 rounded-r-md w-full"
      >
        Add Todo
      </button>
    </form>
  );
}
