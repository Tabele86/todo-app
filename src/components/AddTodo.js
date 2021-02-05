import React, { Component } from 'react';

class AddTodo extends Component {
	state = {
		content: ''
	};
	handleChange = (e) => {
		this.setState({
			content: e.target.value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state);
		// console.log(this.state);
		this.setState({
			content: ''
		});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						<b>Add:</b>
					</label>
					<input type="text" onChange={this.handleChange} value={this.state.content} placeholder="new todo" />
				</form>
			</div>
		);
	}
}

export default AddTodo;
