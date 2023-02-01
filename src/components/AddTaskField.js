import { useForm } from "react-hook-form";
import { Button, Box, TextField } from "@mui/material";
const AddTaskField = ({ addTask }) => {
  const { register, resetField, handleSubmit } = useForm();
  return (
    <Box sx={{ marginTop: 30 % { display: "flex" } }}>
      <h3>Add New Task</h3>
      <TextField
        sx={{ marginRight: 1, backgroundColor: "white", borderRadius: 1 }}
        disableUnderline
        variant="outlined"
        type="text"
        {...register("value", { required: true })}
      ></TextField>
      <Button
        sx={{ border: "1px solid white", padding: 1.7, color: "white" }}
        onClick={handleSubmit((data) => (addTask(data), resetField("value")))}
      >
        Add ToDo
      </Button>
    </Box>
  );
};
export default AddTaskField;
