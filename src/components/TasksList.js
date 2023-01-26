import React from "react";
import "App.css";
import TaskFeaturesContainer from "container/TaskFeaturesContainer";
const TasksList = ({ todos }) => {
  return (
    <ul className="task-list">
      {todos.map((todo) => (
        <TaskFeaturesContainer id={todo.id} title={todo.name} />
      ))}
    </ul>
  );
};
export default TasksList;
