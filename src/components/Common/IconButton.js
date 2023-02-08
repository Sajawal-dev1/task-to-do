import React from "react";
import { IconButton as MuiIconButton } from "@mui/material";
import { StyledEngineProvider } from "@mui/styled-engine";
const IconButton = ({ onClick, className, value }) => {
  return (
    <StyledEngineProvider injectFirst>
      <MuiIconButton className={className} onClick={() => onClick()}>
        {value}
      </MuiIconButton>
    </StyledEngineProvider>
  );
};
export default IconButton;
