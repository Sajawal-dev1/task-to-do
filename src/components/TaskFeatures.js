import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import "App.css";
const TaskFeatures = ({ id, title, editTask, deleteTask }) => {
  const { register, handleSubmit } = useForm();
  const [check, setCheck] = useState(false);
  return (
    <div>
      <div className="Todo">
        <div>{title}</div>
        <div className="Todo-buttons ">
          <button onClick={() => setCheck(!check)}>
            <MdModeEditOutline size="30px" />
          </button>
          <button onClick={() => deleteTask({ id })}>
            <MdDelete size="30px" />
          </button>
        </div>
      </div>
      {check && (
        <div className="Todo-edit-field">
          <input
            type="text"
            placeholder="edit task"
            {...register("new_value", { required: true })}
          ></input>
          <div>
            <button
              className="update-edit-btn"
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
