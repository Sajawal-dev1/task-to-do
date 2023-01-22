import React from "react";
import AddTodo from "./components/AddTaskField";
import TodoList from "./components/TasksList";
import "./App.css";
import "./AddTodo.css";
const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">MY TASK</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};
export default App;
