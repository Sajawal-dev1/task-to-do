import React from "react";
import TodoItem from "components/TaskFeatures";
import { useSelector } from "react-redux";
import "App.css";
const TasksList = () => {
  const todos = useSelector((state) => {
    return state.tasks;
  });
  return (
    <ul className="task-list">
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.name} />
      ))}
    </ul>
  );
};
export default TasksList;

