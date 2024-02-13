import { useSelector, useDispatch } from "react-redux";
import { createSelector } from '@reduxjs/toolkit';
import { clearCompletedTodos, setFilterAll, setFilterCompleted, setFilterActive, Todo, TodoState } from "../../redux/todoSlice";
import TodoList from "../../components/ToDoList";
import ToDoForm from "../../components/ToDoForm";

export default function ToDos() {
  const dispatch = useDispatch();

  const selectFilteredTodos = createSelector(
    (state: TodoState) => state.todos.todos,
    (state: TodoState) => state.todos.filter,
    (todos, filter) => {
      switch (filter) {
        case 'completed':
          return todos.filter((todo: Todo) => todo.completed);
        case 'active':
          return todos.filter((todo: Todo) => !todo.completed);
        default:
          return todos;
      }
    }
  );
  const filteredTodos  = useSelector(selectFilteredTodos);

  return (
    <div className="bg-gradient-to-r from-violet-800 to-pink-400 text-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-slate-800 rounded-lg p-8 shadow-lg">
        <div className="flex justify-center items-center mb-6">
          <h1 className="h-full text-2xl font-semibold">Todo List</h1>
        </div>
        {filteredTodos.map((filteredTodo: Todo) => filteredTodo.completed).length > 0 &&
          <div className="flex justify-end mb-4">
            <button
              type="submit"
              className="flex items-center w-full xs:w-1/2 justify-center xs:full font-semibold text-sm xs:text-md bg-red-500 hover:bg-red-600 text-white py-4 h-8 xs:py-0 rounded-md"
              onClick={() => {
                dispatch(clearCompletedTodos());
              }}
            >
              Delete Completed Todos
            </button>
          </div>}
        {<div className="flex flex-col xs:flex-row  xs:justify-between mb-4">
          <h1 className="h-full text-lg font-semibold">Filters :</h1>
          <div className="flex flex-col xs:flex-row gap-2">
            <button
              type="submit"
              className="flex w-1/3 xs:w-full items-center justify-center xs:justify-start font-semibold text-sm xs:text-md bg-blue-500 hover:bg-blue-600 text-white py-4 h-8 xs:px-4 xs:py-0 rounded-md"
              onClick={() => dispatch(setFilterAll())}
            >
              All
            </button>
            <button
              type="submit"
              className="flex w-1/3 xs:w-full items-center justify-center xs:justify-start font-semibold text-sm xs:text-md bg-blue-500 hover:bg-blue-600 text-white py-4 h-8 xs:px-4 xs:py-0 rounded-md"
              onClick={() => dispatch(setFilterCompleted())}
            >
              Completed
            </button>
            <button
              type="submit"
              className="flex w-1/3 xs:w-full items-center justify-center xs:justify-start font-semibold text-sm xs:text-md bg-blue-500 hover:bg-blue-600 text-white py-4 h-8 xs:px-4 xs:py-0 rounded-md"
              onClick={() => dispatch(setFilterActive())}
            >
              Active
            </button>
          </div>
        </div>

        }
        <TodoList todos={filteredTodos} />
        <div className="mt-3">
          <ToDoForm />
        </div>
        <div className="flex flex-col justify-center items-start mt-4 my-4">
          <h1 className="text-lg font-semibold">Hint :</h1>
          <p className="text-sm font-normal">For change task complition, click on the task title!!!</p>
        </div>
      </div>
    </div>
  );
}
