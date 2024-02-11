import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { selectTodos, clearTodos } from "../../redux/todoSlice";
import TodoList from "../../components/ToDoList";
import ToDoForm from "../../components/ToDoForm";

export default function ToDos() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const doneTodos = todos.find((todo) => todo.completed === true);
  console.log("object", doneTodos);
  const [completedTodos, setCompletedTodos] = useState(doneTodos);

  useEffect(() => {

  }, );
  return (
    <div className="bg-gradient-to-r from-violet-800 to-pink-400 text-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-slate-800 rounded-lg p-8 shadow-lg">
        <div className="flex justify-center items-center mb-6">
          <h1 className="h-full text-2xl font-semibold">Todo List</h1>
        </div>
        {todos.length > 1 &&
          <div className="flex justify-end mb-4">
            <button
              type="submit"
              className="flex items-center justify-start font-semibold text-lg bg-red-500 hover:bg-red-600 text-white py-4 h-8 xs:px-4 xs:py-0 rounded-md"
              onClick={() => {
                dispatch(clearTodos());
              }}
            >
              Delete All Completed Todos
            </button>
          </div>}
        <TodoList />
        <div className="mt-3">
          <ToDoForm />
        </div>
        <div className="flex flex-col justify-center items-start mt-4 my-4">
          <h1 className="text-lg font-semibold">Hint:</h1>
          <p className="text-sm font-normal">For change task complition, click on the task title!!!</p>
        </div>
      </div>
    </div>
  );
}
