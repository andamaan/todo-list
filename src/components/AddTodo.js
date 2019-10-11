import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
	state = {
		title: ''
	}

	onSubmit = (e) => {
		e.preventDefault()
		this.props.addTodo(this.state.title)
		this.setState({ title: '' })
	}
	onChange = (e) => this.setState({ [e.target.name]: e.target.value })

	render() {
		return (
			<form
				onSubmit={this.onSubmit}
				style={{
					textAlign: 'center'
				}}
			>
				<input
					type="text"
					name="title"
					placeholder="Add something to do..."
					style={{
						color: '#DAC98F',
						fontFamily: 'Raleway',
						fontSize: '24px',
						width: '538px',
						border: 'none',
						borderBottom: '1px solid #E7DDB9',
						padding: '10px'
					}}
					value={this.state.title}
					onChange={this.onChange}
				/>
			</form>
		)
	}
}

//PropTypes
/*AddTodo.PropTypes = {
	addTodo: PropTypes.func.isRequired
}*/

export default AddTodo
