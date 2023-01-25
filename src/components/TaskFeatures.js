import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "App.css";
const TaskFeatures = ({ id, title,editTask,deleteTask }) => {
  const { register, handleSubmit } = useForm();
  const [check, setCheck] = useState(false);
  return (
    <div>
      <ul className="task-item">
        <div>{title}</div>
        <br></br>
        <button
          className="remove-task-button"
          onClick={() => (deleteTask({ id }))}
        >
          Delete
        </button>
        <div>
          <button className="edit-btn" onClick={() => setCheck(!check)}>
            Edit
          </button>
        </div>
        {check && (
          <div className="add-todo">
            <input
              className="edit-input"
              type="text"
              placeholder="edit task"
              {...register("new_value", { required: true })}
            ></input>
            <button
              className="update-edit-btn"
              onClick={handleSubmit((data) =>
              (editTask({ ...data, id }), setCheck(false))
              )}
            >
              Update Edit
            </button>
          </div>
        )}
      </ul>
    </div>
  );
};
export default TaskFeatures;
