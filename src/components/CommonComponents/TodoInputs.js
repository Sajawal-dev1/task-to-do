import React from "react";
import { TextField } from "@mui/material";
import { useController } from "react-hook-form";
import { StyledEngineProvider } from "@mui/styled-engine";
const TodoInput = ({
  name,
  label,
  defaultValue,
  className,
  rules,
  control,
  style,
}) => {
  const { field } = useController({ name, control, rules });
  return (
    <StyledEngineProvider injectFirst>
      <TextField
        {...field}
        variant="outlined"
        label={label}
        name={name}
        defaultValue={defaultValue}
        rules={rules}
        className={className}
        style={style}
      />
    </StyledEngineProvider>
  );
};
export default TodoInput;
