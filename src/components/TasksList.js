import React from "react";
import "App.css";
import TaskFeaturesContainer from "container/TaskFeaturesContainer";
const TasksList = ({ todos }) => {
  return (
    <div className="">
      {todos.map((todo) => (
        <TaskFeaturesContainer key ={todo.id} id={todo.id} title={todo.name} />
      ))}
      </div>
  );
};
export default TasksList;
