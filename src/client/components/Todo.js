import React, { Component, Fragment } from 'react';
import styled from '@emotion/styled';

import Header from './Header';
import Task from './Task';
import Overlay from './Overlay';


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
	'overflowY': 'scroll'
})

const allTasks = [];

for(let i = 0; i <= 5; i++) {
	allTasks.push(Task)
}


class Todo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tasks: [],
			editing: false,
			currentTask: ''
		}

		this.whileTyping = this.whileTyping.bind(this);
		this.toggleOverlay = this.toggleOverlay.bind(this);

	}
	
	whileTyping(e) {
		this.setState(() => ({
			currentTask: e.target.value
		}))
	}

	toggleOverlay() {
		this.setState(() => ({ editing: !this.state.editing }))
	}

	render() { 
		return (
		<Fragment>
			<Header editing={this.state.editing} toggleOverlay={this.toggleOverlay} />
			<Tasks>
				{
					allTasks.map((Task, i) => {
						return <Task key={i} inputNo={i} />
					})
				}
			</Tasks>
			{ this.state.editing && <Overlay value={this.state.currentTask} whileTyping={this.whileTyping}/> }
		</Fragment>
		)
	}
}

export default Todo;
