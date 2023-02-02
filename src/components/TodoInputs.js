import { TextField } from "@mui/material";
import { useController } from "react-hook-form";
function Input(props) {
  const { field } = useController(props);
  return (
    <div>
      <TextField
        {...field}
        name={props.name}
        placeholder={props.placeholder}
        className={props.className}
        defaultValue={props.defaultValue}
      />
    </div>
  );
}
export default Input;
