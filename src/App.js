import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Women from './components/Women'
import uuid from 'uuid'

class App extends Component {
	state = {
		todos: [
			{
				id: uuid.v4(),
				title: 'Wash the machine'
			},
			{
				id: uuid.v4(),
				title: 'Prepare the dinner'
			},
			{
				id: uuid.v4(),
				title: 'Go to swimming pool'
			}
		]
	}

	//Delete todo
	delTodo = (id) => {
		this.setState({ todos: [...this.state.todos.filter((todo) => todo.id !== id)] })
	}
	//Add todo
	addTodo = (title) => {
		const newTodo = {
			id: uuid.v4(),
			title
		}
		this.setState({ todos: [...this.state.todos, newTodo] })
	}

	render() {
		return (
			<div className="App">
				<div className="container">
					<Women />
					<Header />
					<AddTodo addTodo={this.addTodo} />
					<div className="todos">
						<Todos todos={this.state.todos} delTodo={this.delTodo} />
					</div>
				</div>
			</div>
		)
	}
}

export default App
