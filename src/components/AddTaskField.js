import { useForm } from "react-hook-form";
import { Grid, Box } from "@material-ui/core";
import TodoInputs from "components/TodoInputs";
import { makeStyles } from "@material-ui/core/styles";
import TaskButton from "components/TodoButtons";
const useStyles = makeStyles({
  todoBtn: {
    color: "white",
    width: "100",
    padding: 10,
    border: "1px solid white",
    height: "56px",
    textAlign: "center",
    marginLeft: "3px",
    width: "-webkit-fill-available",
  },
  textField: {
    backgroundColor: "white",
    width: "100%",
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
});

const AddTaskField = ({ addTask }) => {
  const classes = useStyles();
  const { resetField, handleSubmit, control } = useForm({
    defaultValues: { todo: "" },
  });
  const submit = handleSubmit((data) => (addTask(data), resetField("todo")));
  return (
    <Box>
      <h3>Add New Task</h3>
      <Grid container>
        <Grid item xs={9}>
          <TodoInputs
            className={classes.textField}
            style={{ borderColor: "white" }}
            control={control}
            name="todo"
            placeholder="Add ToDo"
            rules={{ required: true }}
          />
        </Grid>
        <Grid item xs={3}>
          <TaskButton
            className={classes.todoBtn}
            onClick={submit}
            value="Add TODO"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default AddTaskField;
