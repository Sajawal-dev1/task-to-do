import React from "react";
import Button from "@mui/material/Button";
import { StyledEngineProvider } from "@mui/material/styles";
const Buttons = ({ onClick, className, value }) => {
  return (
    <StyledEngineProvider injectFirst>
      <Button className={className} onClick={() => onClick()}>
        {value}
      </Button>
    </StyledEngineProvider>
  );
};
export default Buttons;
