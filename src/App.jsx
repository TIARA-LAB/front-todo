import React, { useState, useEffect } from "react";
import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";
import Filters from "./component/Filters";
import ThemeToggle from "./component/ThemeToggle";
import "./App.css"


const API_URL = "https://back-todo-1-lna9.onrender.com
";

function App() {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({ status: "", priority: "", search: "", sort: "" });
  const [theme, setTheme] = useState("light");

  // Fetch todos
  const fetchTodos = async () => {
    try {
      let query = `?status=${filters.status}&priority=${filters.priority}&search=${filters.search}&sort=${filters.sort}`;
      const res = await fetch(API_URL + query);
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [filters]);

  // Create todo
  const addTodo = async (todo) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    fetchTodos();
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchTodos();
  };

  // Toggle complete
  const toggleTodo = async (id) => {
    await fetch(`${API_URL}/${id}/toggle`, { method: "PATCH" });
    fetchTodos();
  };

  // Edit todo
  const editTodo = async (id, updates) => {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    fetchTodos();
  };

  return (
    <div className={`app ${theme}`}>
      <h1>My To-Do App</h1>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <TodoForm addTodo={addTodo} />
      <Filters setFilters={setFilters} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
