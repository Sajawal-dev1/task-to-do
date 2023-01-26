import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "redux/tasksSlice";
export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
