import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import '../App.css';

const AddTodo = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = () => {	
		dispatch(
			addTask({
				task: value
			})
			
		);
		setValue(" ");
	};
	return (
		<div className='add-todo'>
			<input className='task-input'
				type="text"
				placeholder="Add task"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>
			<button  className='task-button'   onClick={onSubmit}>
				Save
			</button>


			




			
		</div>
	);
};

export default AddTodo;