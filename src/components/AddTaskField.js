import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import { useForm } from "react-hook-form";
import "../App.css";
const AddTaskField = () => {
  const { register, resetField, handleSubmit } = useForm();
  const dispatch = useDispatch();
  return (
    <div className="add-todo">
      <input
        className="task-input"
        type="text"
        placeholder="Add task"
        {...register("value", { required: true })}
      ></input>
      <button
        className="task-button"
        onClick={handleSubmit((data) =>
          dispatch(addTask(data), resetField("value"))
        )}
      >
        Save
      </button>
    </div>
  );
};
export default AddTaskField;

