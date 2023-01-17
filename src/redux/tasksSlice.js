import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[],
    reducers:{
        
        addTask: (state, action)=>{
             let a=0;
            const newTask = {
                id: new Date(),
               name: action.payload.task
            }
            state.push(newTask);
        },
        deleteTask: (state, action)=>{
            return state.filter((item) => item.id !== action.payload.id);
        },
        editTask:(state,action)=>{
            return 
            
            
        }
    }
    
        
});

export const {addTask, deleteTask,editTask} = tasksSlice.actions;

export default tasksSlice.reducer;





