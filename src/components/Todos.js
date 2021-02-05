import React from 'react';
import './Todos.css';

const Todos = ({ todos, deleteTodo }) => {
	const todoList = todos.length ? (
		todos.map((todo) => {
			return (
				<div className="collection-item" key={todo.id}>
					<span
						onClick={() => {
							deleteTodo(todo.id);
						}}
					>
						{todo.content}
					</span>
				</div>
			);
		})
	) : (
		<p className="center">You have nothing left to do.</p>
	);
	return (
		<div className="todos-collection">
			<h3 className="todos">{todoList}</h3>
		</div>
	);
};

export default Todos;
