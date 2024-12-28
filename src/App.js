import "./App.css";
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { get_todos, add_todo, delete_todo } from "./api/endpoints";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await get_todos();
      setTodos(response);
    };

    fetchTodos();
  }, [todos]);

  const addTodo = async (todo_name) => {
    const todo = await add_todo(todo_name);
    setTodos([todo, ...todos]);
  };

  const deleteTodo = async (id) => {
    delete_todo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">Todo App</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
