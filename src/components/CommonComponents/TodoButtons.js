import React from "react";
import { Button } from "@mui/material";
import { StyledEngineProvider } from "@mui/styled-engine";
const TodoButtons = ({ onClick, className, value }) => {
  return (
    <StyledEngineProvider injectFirst>
      <Button className={className} onClick={() => onClick()}>
        {value}
      </Button>
    </StyledEngineProvider>
  );
};
export default TodoButtons;
