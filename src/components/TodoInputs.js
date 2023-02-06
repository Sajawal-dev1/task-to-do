import React from "react";
import { TextField } from "@material-ui/core";
import { useController } from "react-hook-form";
import { StyledEngineProvider } from "@mui/material/styles";
const TodoInput = ({
  name,
  placeholder,
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
        label={placeholder}
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
