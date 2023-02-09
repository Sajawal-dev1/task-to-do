import React from "react";
import TaskListContainer from "container/TaskListContainer";
import { StyledEngineProvider } from "@mui/styled-engine";
import "App.css";
const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <TaskListContainer />
    </StyledEngineProvider>
  );
};
export default App;
