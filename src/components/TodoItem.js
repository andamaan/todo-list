import React, { Component } from 'react'
import Delete from './img/delete.svg'

export class TodoItem extends Component {
	getStyle = () => {
		return {
			background: '#fff',
			padding: '10px',
			display: 'flex',
			alignItems: 'center'
		}
	}

	render() {
		const { id, title } = this.props.todo
		return (
			<div style={this.getStyle()}>
				<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
					<img src={Delete} />
				</button>
				<p
					style={{
						fontFamily: 'Raleway',
						fontSize: '32px',
						marginLeft: '10px'
					}}
				>
					{title}
				</p>
			</div>
		)
	}
}

const btnStyle = {
	fontSize: '36px',
	background: '#fff',
	color: '#D1D1D1',
	border: 'none',
	padding: '5px 9px',
	borderRadius: '50%',
	cursor: 'pointer'
}

export default TodoItem
