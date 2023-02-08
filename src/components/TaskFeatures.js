import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { IconContext } from "react-icons";
import { Box, List, ListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TodoInputs from "components/CommonComponents/TodoInputs";
import TaskButton from "components/CommonComponents/TodoButtons";
import TodoIconButtons from "components/CommonComponents/TodoIconButtons";
const useStyles = makeStyles({
  muiTodo: {
    display: "flex",
    margin: "0 -3rem 4px",
    padding: "0.5rem 2rem",
    justifyContent: "space-between",
    background: "rgb(254 250 250 / 10%)",
    cursor: "pointer",
  },
  muiTodoEdit: {
    display: "flex",
    padding: "8px 0 8px 0 ",
  },
  muiEditBtn: {
    display: "flex",
    border: "1px solid white",
    color: "white",
    marginLeft: "5px",
    padding: 15,
    justifyContent: "center",
    width: "7.5rem",
  },
  muiButtons: {
    display: "flex",
    width: "auto",
    fontSize: "1em",
    border: "50px",
    cursor: "pointer",
    background: "none",
  },
  editField: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderRadius: 1,
    borderColor: "white",
    width: "75%",
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
      <List className={classes.muiTodo}>
        <ListItem
          onClick={() => {
            toggleComplete({ id, completed: !completed });
          }}
          className={"complete" + (completed === false ? "active" : "")}
          style={{ marginRight: "2rem", padding: "1.2rem" }}
        >
          {title}
        </ListItem>
        <ListItem className={classes.muiButtons}>
          <IconContext.Provider value={{ color: "white" }}>
            <TodoIconButtons
              onClick={() => setShowEditField(!showEditField)}
              value={<MdModeEditOutline size="30px" />}
            />
            <TodoIconButtons
              onClick={() => deleteTask({ id })}
              value={<MdDelete size="30px" />}
            />
          </IconContext.Provider>
        </ListItem>
      </List>
      {showEditField && (
        <List>
          <ListItem className={classes.muiTodoEdit}>
            <TodoInputs
              className={classes.editField}
              styles={classes}
              control={control}
              name="todo"
              defaultValue={title}
              rules={{ required: true }}
            />
            <TaskButton
              className={classes.muiEditBtn}
              onClick={updateBtn}
              value={"Update"}
            />
          </ListItem>
        </List>
      )}
    </Box>
  );
};
export default TaskFeatures;
