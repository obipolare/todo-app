import React from "react";
import { useForm } from "../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {
  const [values, handleInputChange, reset] = useForm({
    description: "",
  });

  const { description } = values;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length < 2) return;
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };
    handleAddTodo(newTodo);
    reset();
  };
  return (
    <>
      <h1 className="text-xl border-b border-white p-2">Add Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-gray-700 rounded mt-2 px-2 py-2 w-full"
          placeholder="Write a Task here...!"
          name="description"
          value={description}
          onChange={handleInputChange}
        ></input>
        <button className="text-base md:text-xl mt-2 bg-white transition duration-200 hover:bg-blue-600 border border-blue-600 text-blue-600 hover:text-white py-2 px-4 w-full ">
          Add
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
