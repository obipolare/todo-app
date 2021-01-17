import React from "react";

const ListTodoItem = ({
  handleDelete,
  handleToggle,
  todo: { done, id, description },
  i,
}) => {
  return (
    <li
      className="flex items-center justify-between mb-2 flex-col md:flex-row  border-b border-white p-4"
      key={id}
    >
      <p
        className={`${
          done && "line-through"
        } text-lg capitalize cursor-pointer md:text-2xl text-center md:text-left`}
        onClick={() => handleToggle(id)}
      >
        {i + 1}.{description}
      </p>
      <button
        className="bg-green-600 px-2 py-1 text-white text-xl transtion duration-200 hover:bg-green-800 w-9/12 md:w-auto md:flex-grow-0 ml-1 md:ml-6 flex-shrink-0"
        onClick={() => handleDelete(id)}
      >
        Erase Task
      </button>
    </li>
  );
};

export default ListTodoItem;
