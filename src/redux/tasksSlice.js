import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[],
    reducers:{
        
        addTask: (state, action)=>{
             let a=0;
             const length = JSON.parse(JSON.stringify(state)).length
            const newTask = {
                id: length,
               name: action.payload.task
            }
            state.push(newTask);
        },
        deleteTask: (state, action)=>{
            return state.filter((item) => item.id !== action.payload.id);
        },
        editTask: (state, action) => {
          

            console.log(action.payload.id)
            const todoList = JSON.parse(JSON.stringify(state));
            return todoList.map(item => {
                if(item.id === action.payload.id){
                    return {
                        ...item, name: action.payload.task
                    }
                }
                return item;
            });
        }
    }
    
        
});

export const {addTask, deleteTask,editTask} = tasksSlice.actions;

export default tasksSlice.reducer;





