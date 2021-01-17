import React, { useEffect, useReducer } from "react";
import ListTodo from "./ListTodo";
import TodoAdd from "./TodoAdd";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todo")) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  const handleDelete = (todoId) => {
    dispatch({
      type: "delete",
      payload: todoId,
    });
  };

  const handleToggle = (Id) => {
    dispatch({
      type: "toggle",
      payload: Id,
    });
  };

  return (
    <main className="p-2">
      <h1 className="text-5xl border-b border-white p-2 mb-4 font-semibold inline-block">
        Todo App
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-12 ">
        <div className="row-start-2 md:row-start-auto col-span-full md:col-span-7 border border-gray-300 p-2">
          <ListTodo
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="row-start-1  md:row-start-auto col-span-full md:col-span-5 border border-gray-30 p-2">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </section>
    </main>
  );
};

export default TodoApp;
