import { createSlice } from "@reduxjs/toolkit";
import "../App.css";
export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const length = JSON.parse(JSON.stringify(state)).length;
      const newTask = {
        id: length,
        name: action.payload.value,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    editTask: (state, action) => {
      const todoList = JSON.parse(JSON.stringify(state));
      return todoList.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            name: action.payload.new_value,
          };
        }
        return item;
      });
    },
  },
});
export const { addTask, deleteTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
