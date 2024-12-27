import "./App.css";
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import { get_todos } from "./api/endpoints";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await get_todos();
      setTodos(response);
    };

    fetchTodos();
  }, []);

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">Todo App</h1>
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
