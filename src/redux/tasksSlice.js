import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const length = state.length;
      const newTask = {
        id: length,
        name: action.payload.todo,
        completed: false,
        showField: false,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    editTask: (state, action) => {
      const todoList = state;
      return todoList.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            name: action.payload.todo,
            showField: false,
          };
        }
        return item;
      });
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    toggleShowField: (state, action) => {
      const todoList = state;
      return todoList.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            showField: !item.showField,
          };
        }
        return { ...item, showField: false };
      });
    },
  },
});
export const {
  addTask,
  deleteTask,
  toggleComplete,
  editTask,
  toggleShowField,
} = tasksSlice.actions;

export default tasksSlice.reducer;
