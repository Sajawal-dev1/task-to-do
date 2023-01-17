import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";

const TodoItem = ({ id, title }) => {

	const dispatch = useDispatch();
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
			{title}
			</h1>
			<div>
				<button  onClick={()=>{
					removeTask();
				}}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;