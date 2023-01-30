import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import "App.css";
const TaskFeatures = ({
  id,
  title,
  completed,
  editTask,
  deleteTask,
  toggleComplete,
}) => {
  const { register, handleSubmit } = useForm();
  const [check, setCheck] = useState(false);
  return (
    <div>
      <div className="todo">
        <div
          onClick={() => {
            toggleComplete({ id, completed: !completed });
          }}
          className={"complete" + (completed === false ? "active" : "")}
        >
          {title}
        </div>
        <div className="todo-buttons ">
          <button onClick={() => setCheck(!check)}>
            <MdModeEditOutline size="30px" />
          </button>
          <button onClick={() => deleteTask({ id })}>
            <MdDelete size="30px" />
          </button>
        </div>
      </div>
      {check && (
        <div className="todo-edit-field">
          <input
            type="text"
            placeholder="edit task"
            {...register("todo", { required: true })}
          ></input>
          <div>
            <button
              onClick={handleSubmit(
                (data) => (editTask({ ...data, id }), setCheck(false))
              )}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default TaskFeatures;
