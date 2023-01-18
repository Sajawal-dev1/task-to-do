import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const AddTodo = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = () => {	
		dispatch(
			addTask({
				task: value
			})
		);
	};
	return (
		<div >
			<input
				type="text"
				placeholder="Add task"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>
			<input type="checkbox"></input>
			

			<button  onClick={onSubmit}>
				Save
			</button>


			




			
		</div>
	);
};

export default AddTodo;