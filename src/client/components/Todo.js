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

class Todo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tasks: [],
			editing: false,
			currentTask: ''
		}

		this.createTask = this.createTask.bind(this);
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

	createTask() {
		// move this idea to separate function, its needed in overlay context
		// if its less than 3 characters or empty plug
		// it up in test function with generated regex from
		// this.state.currentTask

		if(this.state.currentTask.length < 3) return;

		this.setState(({ tasks }) => ({ 
			tasks: [ ...tasks, this.state.currentTask ],
			editing: false,
			currentTask: ''
		}))
	} 

	render() { 
		const { tasks, editing, currentTask, } = this.state;
		const { whileTyping, toggleOverlay, createTask } = this;
		
		return (
		<Fragment>
			<Header editing={editing} toggleOverlay={toggleOverlay} />
			<Tasks>
				{ tasks.map((value, i) => <Task key={i} inputNo={i} value={value} /> ) }
			</Tasks>
			{ editing && <Overlay value={currentTask} whileTyping={whileTyping} createTask={createTask}/> }
		</Fragment>
		)
	}
}

export default Todo;
