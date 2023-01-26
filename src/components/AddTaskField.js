import { useForm } from "react-hook-form";
import "App.css";
const AddTaskField = ({ addTask }) => {
  const { register, resetField, handleSubmit } = useForm();
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
        onClick={handleSubmit((data) => (addTask(data), resetField("value")))}
      >
        Save
      </button>
    </div>
  );
};
export default AddTaskField;
