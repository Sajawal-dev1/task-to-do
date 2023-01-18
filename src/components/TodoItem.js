import React from 'react';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { deleteTask, editTask } from "../redux/tasksSlice";

const TodoItem = ({ id, title }) => {
	const [newval, setValue] = useState('');
    const dispatch=useDispatch();
    const edit=()=>{
		console.log(newval)
		dispatch(
			editTask({
				id:id,
				task:newval

			})
		)
	}

	const removeTask=()=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	}
	

	return (
		<li >
			
			<h1>
			<input type="checkbox"></input>
			{title}
			</h1>
			<div>
				<button  onClick={()=>{
					removeTask();
				}}>Delete</button>
           </div>
        <input
            type="text"
            placeholder="edit task"
            value={newval}
            onChange={(event) => setValue(event.target.value)}
        ></input>
		<div>
            <button  onClick={()=>{
                edit();
            }}>Edit</button>
			</div>
		</li>
	);
};

export default TodoItem;