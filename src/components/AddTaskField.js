import { useForm } from "react-hook-form";
import { Box } from "@mui/material";
import Buttons from "components/TodoButtons";
import Input from "components/TodoInputs";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  todoBtn: {
    color: "white",
    width: "28%",
    border: "1px solid white",
    height: "56px",
    marginTop: "auto",
    textAlign: "center",
    marginLeft: "71%",
    marginRight: "20%",
    bottom: "56px",
  },
  textField: {
    marginRight: 1,
    backgroundColor: "white",
    borderRadius: 1,
    width: "70%",
  },
});
const AddTaskField = ({ addTask }) => {
  const classes = useStyles();
  const { resetField, handleSubmit, control } = useForm({});
  const submit = handleSubmit((data) => (addTask(data), resetField("todo")));
  return (
    <Box sx={{ marginTop: 30 % { display: "flex" } }}>
      <h3>Add New Task</h3>
      <Input
        className={classes.textField}
        control={control}
        name="todo"
        placeholder="Add ToDo"
        rules={{ required: true }}
        defaultValue=" "
      />
      <Buttons
        size="small"
        className={classes.todoBtn}
        onClick={submit}
        value="Add TODO"
      />
    </Box>
  );
};
export default AddTaskField;
