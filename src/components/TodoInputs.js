import { TextField } from "@mui/material";
import { useController } from "react-hook-form";
function Input({ name, placeholder, className, defaultValue, rules, control }) {
  const { field } = useController({ name, control, rules });
  return (
    <div>
      <TextField
        {...field}
        name={name}
        placeholder={placeholder}
        className={className}
        defaultValue={defaultValue}
        rules={rules}
      />
    </div>
  );
}
export default Input;
