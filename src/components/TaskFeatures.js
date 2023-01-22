import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { deleteTask, editTask } from "../redux/tasksSlice";
import { useState } from "react";
import "../App.css";
const TaskFeatures = ({ id, title }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  return (
    <div>
      <ul className="task-item">
        <div>{title}</div>
        <br></br>
        <button
          className="remove-task-button"
          onClick={() => dispatch(deleteTask({ id }))}
        >
          Delete
        </button>
        <div>
          <button className="edit-btn" onClick={() => setShow(!show)}>
            Edit
          </button>
        </div>
        {show && (
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
                dispatch(editTask({ ...data, id }), setShow(false))
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