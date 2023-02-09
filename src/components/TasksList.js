import React, { useState, useEffect } from "react";
import { Card, Typography, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TaskFeaturesContainer from "container/TaskFeaturesContainer";
import AddTaskFieldContainer from "container/AddTaskFieldContainer";
const useStyles = makeStyles({
  card: {
    background: "#ff6666",
    color: "white",
    margin: "4rem auto",
    padding: "2rem 3rem 3rem",
    maxWidth: "500px",
    fontWeight: "bold",
  },
  heading: {
    fontWeight: 700,
    fontSize: "2.5rem",
    textAlign: "start",
    marginBottom: "1rem",
  },
  paragraph: {
    fontSize: "small",
    textAlign: "start",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  divider: {
    backgroundColor: "white",
    marginBottom: "30px",
  },
});
const TasksList = ({ todos }) => {
  const [checkEditField, setCheckEditField] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    setCheckEditField(true);
  }, [todos.showFieldId]);
  return (
    <Card className={classes.card}>
      <Typography variant="h1" className={classes.heading}>
        TODO LIST
      </Typography>
      <Typography variant="h4" className={classes.paragraph}>
        TODO App by MergeStack
      </Typography>
      <Divider className={classes.divider} />
      {todos.tasks.map((todo) => (
        <TaskFeaturesContainer
          key={todo.id}
          todo={todo}
          checkEditField={checkEditField}
          setCheckEditField={setCheckEditField}
          showFieldId={todos.showFieldId}
        />
      ))}
      <AddTaskFieldContainer />
    </Card>
  );
};
export default TasksList;
