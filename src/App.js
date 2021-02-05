import React, { Component } from 'react';
import Quote from './components/Quote';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
	state = {
		todos: [ { id: 1, content: 'dishes' }, { id: 2, content: 'study' }, { id: 3, content: 'laundry' } ]
	};
	//DELETE
	deleteTodo = (id) => {
		// console.log(id);
		const todos = this.state.todos.filter((todo) => {
			return todo.id !== id;
		});
		this.setState({
			todos
		});
	};
	//ADD
	addTodo = (todo) => {
		todo.id = Math.random();
		let todos = [ ...this.state.todos, todo ];
		this.setState({
			todos
		});
	};
	render() {
		return (
			<div className="todo-app">
				<div className="top-portion">
					<h1 className="title">Todo's</h1>

					<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
					<AddTodo addTodo={this.addTodo} />
				</div>
				<Quote />
			</div>
		);
	}
}

export default App;
