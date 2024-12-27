import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const Todo = ({ todo_name }) => {
  return (
    <div className="todo">
      <div className="todo-container">
        <input type="checkbox" />
        <h3>{todo_name}</h3>
        <RiDeleteBinLine size={22} />
      </div>
    </div>
  );
};

export default Todo;
