import React from "react";
import { IconButton } from "@mui/material";
import { StyledEngineProvider } from "@mui/styled-engine";
const TodoIconButtons = ({ onClick, className, value }) => {
  return (
    <StyledEngineProvider injectFirst>
      <IconButton className={className} onClick={() => onClick()} >
        {value}
      </IconButton>
    </StyledEngineProvider>
  );
};
export default TodoIconButtons;