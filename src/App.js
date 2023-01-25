import React from "react";
import AddTaskFieldContainer from "container/AddTaskFieldContainer"
import TaskListContainer from "container/TaskListContainer";
import "App.css";
import "AddTodo.css";
const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">MY TASK</h1>
      <AddTaskFieldContainer />
      <TaskListContainer />
    </div>
  );
};
export default App;

