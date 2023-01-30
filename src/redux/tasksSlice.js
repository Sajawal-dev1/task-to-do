import { createSlice } from "@reduxjs/toolkit";
export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const length = JSON.parse(JSON.stringify(state)).length;
      const newTask = {
        id: length,
        name: action.payload.value,
        completed: false,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    editTask: (state, action) => {
      const todoList = JSON.parse(JSON.stringify(state));
      return todoList.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            name: action.payload.todo,
          };
        }
        return item;
      });
    },
  },
});
export const { addTask, deleteTask, toggleComplete, editTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
