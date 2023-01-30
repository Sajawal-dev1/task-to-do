import React from "react";
import "App.css";
import TaskFeaturesContainer from "container/TaskFeaturesContainer";
import AddTaskFieldContainer from "container/AddTaskFieldContainer";
const TasksList = ({ todos }) => {
  return (
    <div className="todo-list">
      <h1 className="heading">TODO LIST</h1>
      <h4 className="Paragraph">
        TODO App by MergeStack<hr className="hr"></hr>
      </h4>
      {todos.map((todo) => (
        <TaskFeaturesContainer key={todo.id} id={todo.id} title={todo.name} completed={todo.completed} />
      ))}
      <AddTaskFieldContainer />
    </div>
  );
};
export default TasksList;
