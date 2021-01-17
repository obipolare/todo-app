import React from "react";
import ListTodoItem from "./ListTodoItem";

const ListTodo = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul>
      {todos.map((todo, i) => {
        return (
          <ListTodoItem
            i={i}
            todo={todo}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
    </ul>
  );
};

export default ListTodo;
