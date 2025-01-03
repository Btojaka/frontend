import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { update_completed } from "../api/endpoints";

const Todo = ({ id, todo_name, completed, deleteTodo }) => {
  const [isChecked, setIsChecked] = useState(completed);
  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleCompleted = () => {
    update_completed(id, !isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <div className="todo">
      <div className="todo-container">
        <input checked={isChecked} onChange={handleCompleted} type="checkbox" />
        <h3 className={isChecked ? "checked" : ""}>{todo_name}</h3>
        <RiDeleteBinLine onClick={handleDelete} size={22} color="red" />
      </div>
    </div>
  );
};

export default Todo;
