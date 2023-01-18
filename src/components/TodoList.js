import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";
import EditTodo from './EditTodo';
const TodoList = () => {
	const todos = useSelector((state)=>{
		
		return state.tasks;
	});

	return (
		<ul >
			{todos.map((todo) => (
				<TodoItem  id={todo.id} title={todo.name}/>
			))}
		
			
		</ul>
	
	);
};

export default TodoList;