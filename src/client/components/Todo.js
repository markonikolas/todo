import React, { Component, Fragment } from 'react';
import styled from '@emotion/styled';

import Header from './Header';
import Task from './Task';

const Tasks = styled.article({ 
	padding: '40px',
	display: 'grid',
	gridAutoRows: '52px',
	rowGap: '20px',
	position: 'absolute',
	bottom: 0,
	top: '190px',
	width: '100%',
	zIndex: -1,
	'overflow-y': 'scroll'
})

class Todo extends Component {
	render() { 
		return (
		<Fragment>
			<Header />
			<Tasks>
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
			</Tasks>
		</Fragment>
		)
	}
}

export default Todo;
