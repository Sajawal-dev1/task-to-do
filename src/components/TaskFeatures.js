import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { Button, Box, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import "App.css";
const useStyles = makeStyles({
  muiTodo: {
    display: "flex",
    margin: "0 -3rem 4px",
    padding: "1.1rem 3rem",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(75, 47, 47, 0.1)",
  },
  muiTodoEdit: {
    display: "flex",
    flexWrap: "wrap",
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
  const { register, handleSubmit } = useForm();
  const [check, setCheck] = useState(false);
  return (
    <div>
      <Box className={classes.muiTodo}>
        <div
          onClick={() => {
            toggleComplete({ id, completed: !completed });
          }}
          className={"complete" + (completed === false ? "active" : "")}
        >
          {title}
        </div>
        <Box className={"mui-todo-buttons"}>
          <Button onClick={() => setCheck(!check)}>
            <MdModeEditOutline size="30px" />
          </Button>
          <Button onClick={() => deleteTask({ id })}>
            <MdDelete size="30px" />
          </Button>
        </Box>
      </Box>
      {check && (
        <Box className={classes.muiTodoEdit}>
          <TextField
            sx={{ marginRight: 1, backgroundColor: "white", borderRadius: 1 }}
            type="text"
            defaultValue={title}
            {...register("todo", { required: true })}
          ></TextField>
          <div>
            <Button
              sx={{ border: "1px solid white", padding: 1.7, color: "white" }}
              onClick={handleSubmit(
                (data) => (editTask({ ...data, id }), setCheck(false))
              )}
            >
              Update
            </Button>
          </div>
        </Box>
      )}
    </div>
  );
};
export default TaskFeatures;
