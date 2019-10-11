import React from 'react'

function Header() {
	return (
		<header style={headerStyle}>
			<h1>MY TODO LIST</h1>
		</header>
	)
}

const headerStyle = {
	fontFamily: 'Open Sans Condensed',
	fontSize: '36px',
	background: '#fff',
	color: '#342218',
	textAlign: 'center',
	height: '105px',
	borderBottom: '4px solid #C29B78'
}

export default Header
