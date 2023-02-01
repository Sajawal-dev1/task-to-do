import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { Button, Box, TextField } from "@mui/material";
import styled from "@emotion/styled";
import "App.css";
const Div = styled("div")({
  display: "flex",
  margin: "0 -3rem 4px",
  padding: "1.1rem 3rem",
  justifyContent: "space-between",
  alignItems: "center",
  background: "rgba(75, 47, 47, 0.1)",
});
const Div2 = styled("div")({
  display: "flex",
  flexWrap: "wrap",
});
const TaskFeatures = ({
  id,
  title,
  completed,
  editTask,
  deleteTask,
  toggleComplete,
}) => {
  const { register, handleSubmit } = useForm();
  const [check, setCheck] = useState(false);
  return (
    <div>
      <Box>
        <Div>
          <div className="pointer">
            <div
              onClick={() => {
                toggleComplete({ id, completed: !completed });
              }}
              className={"complete" + (completed === false ? "active" : "")}
            >
              {title}
            </div>
          </div>
          <Box className={"mui-todo-buttons"}>
            <Button onClick={() => setCheck(!check)}>
              <MdModeEditOutline size="30px" />
            </Button>
            <Button onClick={() => deleteTask({ id })}>
              <MdDelete size="30px" />
            </Button>
          </Box>
        </Div>
      </Box>
      {check && (
        <Box>
          <Div2>
            <TextField
              sx={{ marginRight: 1, backgroundColor: "white", borderRadius: 1 }}
              type="text"
              defaultValue={title}
              {...register("todo", { required: true })}
            ></TextField>
            <div>
              <Button
                sx={{ border: "1px solid white", padding: 1.7, color: "white" }}
                onClick={handleSubmit(
                  (data) => (editTask({ ...data, id }), setCheck(false))
                )}
              >
                Update
              </Button>
            </div>
          </Div2>
        </Box>
      )}
    </div>
  );
};
export default TaskFeatures;
