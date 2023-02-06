import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TodoInputs from "components/TodoInputs";
import TaskButton from "components/TodoButtons";
const useStyles = makeStyles({
  muiTodo: {
    display: "flex",
    margin: "0 -3rem 4px",
    padding: "0.5rem 1.3rem",
    justifyContent: "space-between",
    background: "rgb(254 250 250 / 10%)",
    cursor: "pointer",
  },
  muiTodoEdit: {
    display: "flex",
    flexWrap: "wrap",
  },
  muiEditBtn: {
    display: "flex",
    border: "1px solid white",
    color: "white",
    marginLeft: 2,
    padding: 15,
    justifyContent: "flex-end",
    width: "90%",
  },
  editField: {
    display: "flex",
    backgroundColor: "white",
    borderRadius: 1,
    borderColor: "white",
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
const TaskFeatures = ({
  id,
  title,
  completed,
  editTask,
  deleteTask,
  toggleComplete,
}) => {
  const classes = useStyles();
  const { control, handleSubmit } = useForm();
  const [showEditField, setShowEditField] = useState(false);
  const updateBtn = handleSubmit(
    (data) => (editTask({ ...data, id }), setShowEditField(false))
  );

  return (
    <Box>
      <Box className={classes.muiTodo}>
        <Grid container className={"mui-todo-buttons"}>
          <Grid item xs={9}>
            <Box
              onClick={() => {
                toggleComplete({ id, completed: !completed });
              }}
              className={"complete" + (completed === false ? "active" : "")}
              sx={{ marginRight: "2rem", padding: "1.2rem" }}
            >
              {title}
            </Box>
          </Grid>
          <Grid item xs={1}>
            <TaskButton
              onClick={() => setShowEditField(!showEditField)}
              value={<MdModeEditOutline size="30px" />}
            />
          </Grid>
          <Grid item xs={1}>
            <TaskButton
              onClick={() => deleteTask({ id })}
              value={<MdDelete size="30px" />}
            />
          </Grid>
        </Grid>
      </Box>
      {showEditField && (
        <Grid container>
          <Grid item xs={9}>
            <TodoInputs
              className={classes.editField}
              styles={classes}
              control={control}
              name="todo"
              defaultValue={title}
              rules={{ required: true }}
            />
          </Grid>
          <Grid item xs={3}>
            <TaskButton
              className={classes.muiEditBtn}
              onClick={updateBtn}
              value={"Update"}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
export default TaskFeatures;
