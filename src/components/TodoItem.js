import React from 'react';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { deleteTask, editTask } from "../redux/tasksSlice";
import "../App.css";

const TodoItem = ({ id, title }) => {
	const [newval, setValue] = useState('');
	const [check, setcheck] = useState('');
    const dispatch=useDispatch();

	const edit=()=>{
		console.log(newval)
		dispatch(
			editTask({
				id:id,
				task:newval

			})
		)
		setValue(" ");
	}
	const removeTask=()=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	}
	

	
	

	return (
		<ul className='task-item'>
			<div>
			{title}
			
			</div>
			<br></br>
			<div className='break-line'>
				<button className='remove-task-button'  onClick={()=>{
					removeTask();
				}}>Delete</button>
				<br></br>
           </div>
		   <br></br>
		   <div className='add-todo'>
         	<input
			 className='edit-input'
			 type="text"
			 placeholder="edit task"
			 value={newval}
			 onChange={(event) => setValue(event.target.value)}
		 ></input>	
            <button className='edit-btn' onClick={()=>{
                edit();
            }}>Edit </button>
			
			</div>
		</ul>
	);
};

export default TodoItem;