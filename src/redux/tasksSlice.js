import { createSlice } from "@reduxjs/toolkit";
export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    showFieldId: null,
  },
  reducers: {
    addTask: (state, action) => {
      const length = state.tasks.length;
      const newTask = {
        id: length,
        name: action.payload.todo,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload.id);
    },
    editTask: (state, action) => {
      const todoList = state.tasks;
      state.tasks = todoList.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            name: action.payload.todo,
          };
        }
        return item;
      });
      state.showFieldId = null;
    },
    toggleComplete: (state, action) => {
      const index = state.tasks.findIndex(
        (item) => item.id === action.payload.id
      );
      state.tasks[index].completed = action.payload.completed;
    },
    toggleShowField: (state, action) => {
      state.showFieldId = action.payload.id;
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
