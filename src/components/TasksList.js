import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import {  makeStyles } from "@mui/styles";
import TaskFeaturesContainer from "container/TaskFeaturesContainer";
import AddTaskFieldContainer from "container/AddTaskFieldContainer";
const useStyles = makeStyles({
  heading: {
    fontWeight: 700,
    fontSize: "2.5rem",
    textAlign: "start",
    marginBottom: "1rem",
  },
  Paragraph: {
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
  const classes = useStyles();
  return (
    <Grid container className={"todo-list"}>
      <Grid item xs={12}>
        <Typography variant="h1" className={classes.heading}>
          TODO LIST
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.Paragraph}>
          TODO App by MergeStack
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider className={classes.divider} />
      </Grid>
      <Grid item xs={12}>
        {todos.map((todo) => (
          <TaskFeaturesContainer
            id={todo.id}
            title={todo.name}
            completed={todo.completed}
          />
        ))}
      </Grid>
      <Grid item xs={12}>
        <AddTaskFieldContainer />
      </Grid>
    </Grid>
  );
};
export default TasksList;
