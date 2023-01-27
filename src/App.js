import React from "react";
import AddTaskFieldContainer from "container/AddTaskFieldContainer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TaskListContainer from "container/TaskListContainer";
import "App.css";
import "AddTodo.css";
const App = () => {
  return (
      <div className="TodoList">
      <h1 className="heading">TODO LIST</h1>
      <h4 className="Paragraph">TODO App by MergeStack</h4>
      <AddTaskFieldContainer />
      <TaskListContainer />
    </div>
  );
};
export default App;
