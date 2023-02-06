import React from "react";
import { Button } from "@material-ui/core";
import { StyledEngineProvider } from "@mui/material/styles";
const TaskButton = ({ onClick, className, value }) => {
  return (
    <StyledEngineProvider injectFirst>
      <Button className={className} onClick={() => onClick()}>
        {value}
      </Button>
    </StyledEngineProvider>
  );
};
export default TaskButton;
