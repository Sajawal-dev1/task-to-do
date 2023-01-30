import { useForm } from "react-hook-form";
import "App.css";
const AddTaskField = ({ addTask }) => {
  const { register, resetField, handleSubmit } = useForm();
  return (
    <div className="new-todo">
      <label>Add New Task</label>
      <input
        className="new-todo input"
        type="text"
        placeholder="Add task"
        {...register("value", { required: true })}
      ></input>
      <button
        className="new-todo button"
        onClick={handleSubmit((data) => (addTask(data), resetField("value")))}
      >
        Add ToDo
      </button>
    </div>
  );
};
export default AddTaskField;
