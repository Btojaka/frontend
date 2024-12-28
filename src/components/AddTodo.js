import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleaddTodo = () => {
    addTodo(input);
    setInput("");
  };
  return (
    <div className="add-todo">
      <input
        onChange={(e) => setInput(e.target.value)}
        className="add-input"
        type="text"
      />
      <button onClick={handleaddTodo} className="add-button">
        Add todo
      </button>
    </div>
  );
};

export default AddTodo;
