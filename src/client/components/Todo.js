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

const allTasks = [];

for(let i = 0; i <= 5; i++) {
	allTasks.push(Task)
}


class Todo extends Component {
	state = {
		tasks: [],
		editing: false,
		currentTask: ''
	}
	render() { 
		return (
		<Fragment>
			<Header />
			<Tasks>
				{
					allTasks.map((Task, i) => {
						return <Task key={i} inputNo={i} />
					})
				}
			</Tasks>
		</Fragment>
		)
	}
}

export default Todo;
