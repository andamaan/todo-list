import React from 'react'
import women from './img/women.svg'
import { isAbsolute } from 'path'

function Women() {
	return <img src={women} style={WomenStyle} />
}

const WomenStyle = {
	position: 'Absolute',
	right: '0px',
	bottom: '0px'
}
export default Women
