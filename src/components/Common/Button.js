import React from "react";
import { Button as MuiButton } from "@mui/material";
import { StyledEngineProvider } from "@mui/styled-engine";
const Button = ({ onClick, className, value }) => {
  return (
    <StyledEngineProvider injectFirst>
      <MuiButton className={className} onClick={() => onClick()}>
        {value}
      </MuiButton>
    </StyledEngineProvider>
  );
};
export default Button;
