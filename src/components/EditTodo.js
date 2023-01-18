import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/tasksSlice";

const EditTodo=(id)=>{
    const [newval, newValue] = useState('');
    const dispatch=useDispatch();
    const edit=()=>{
		dispatch(
			editTask({
				id:id,
				task:newval


			})
        )
        return (
            <div>
                <input
            type="text"
            placeholder="edit task"
            value={newval}
            onChange={(event) => newValue(event.target.newval)}
        ></input>
        <button  onClick={()=>{
                edit();
            }}>Edit</button>
            </div>
        
        );
	}


}
export default EditTodo;