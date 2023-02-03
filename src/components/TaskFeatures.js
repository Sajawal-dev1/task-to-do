import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Input from "components/TodoInputs";
import Buttons from "components/TodoButtons";
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
    color: "white",
    padding: 14,
    marginLeft: "20%",
    marginRight:"20%"
  },
  editField: {
    display: "flex",
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
  const [showEditField, setShowEditField] = useState(false);
  const updateBtn = handleSubmit(
    (data) => (editTask({ ...data, id }), setShowEditField(false))
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
            onClick={() => setShowEditField(!showEditField)}
            value={<MdModeEditOutline size="30px" />}
          />
          <Buttons
            onClick={() => deleteTask({ id })}
            value={<MdDelete size="30px" />}
          />
        </Box>
      </Box>
      {showEditField && (
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
            onClick={updateBtn}
            value={"Update"}
          />
        </Box>
      )}
    </div>
  );
};
export default TaskFeatures;
