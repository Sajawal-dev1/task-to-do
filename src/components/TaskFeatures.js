import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { Box, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Input from "components/TodoInputs";
import Buttons from "components/TodoButtons";
import "App.css";
const useStyles = makeStyles({
  muiTodo: {
    display: "flex",
    margin: "0 -3rem 4px",
    padding: "1.1rem 3rem",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(75, 47, 47, 0.1)",
    cursor: "pointer",
  },
  muiTodoEdit: {
    display: "flex",
    flexWrap: "wrap",
  },
  muiEditBtn: {
    border: "1px solid white",
    padding: 1.7,
    color: "white",
    padding: 14,
    marginLeft: "20%",
  },
  editField: {
    display: "flex",
    marginRight: 1,
    backgroundColor: "white",
    borderRadius: 1,
    width: "150%",
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
  const [check, setCheck] = useState(false);
  const edit_btn = () => setCheck(!check);
  const delete_btn = () => deleteTask({ id });
  const update_btn = handleSubmit(
    (data) => (editTask({ ...data, id }), setCheck(false))
  );
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
          <Buttons
            onClick={edit_btn}
            value={<MdModeEditOutline size="30px" />}
          />
          <Buttons onClick={delete_btn} value={<MdDelete size="30px" />} />
        </Box>
      </Box>
      {check && (
        <Box className={classes.muiTodoEdit}>
          <Input
            className={classes.editField}
            control={control}
            name="todo"
            defaultValue={title}
            rules={{ required: true }}
          />
          <Buttons
            className={classes.muiEditBtn}
            onClick={update_btn}
            value={"Update"}
          />
        </Box>
      )}
    </div>
  );
};
export default TaskFeatures;
