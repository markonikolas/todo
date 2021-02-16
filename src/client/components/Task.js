import React from 'react';
import styled from '@emotion/styled'

const TaskWrapper = styled.section({ 
	boxShadow: '1px 1px 5px #C0C0C0',
	height: '50px',
	width: '100%',
	background: '#FFFFFF',
	boxShadow: '1px 2px 8px rgba(192, 192, 192, 0.5)',
	display: 'flex',
	paddingRight: '20px'
})

const TaskName = styled.label({ 
	fontWeight: 300,
	fontSize: '16px',
	lineHeight: '22px',
	color: '#8D8D8D',
	flexGrow: 1,
	cursor: 'pointer',
	padding: '15px 20px',
	userSelect: 'none'
})

const Task = ({ inputNo }) => {
	return ( 
		<TaskWrapper>
			<TaskName htmlFor={`task-${inputNo}`}>Lorem, ipsum dolor.</TaskName>
			{/* checkbox, create custom checkbox and hide other one*/} 
			<input type="checkbox" name="check" id={`task-${inputNo}`}/>
		</TaskWrapper>
	 );
}
 
export default Task;
