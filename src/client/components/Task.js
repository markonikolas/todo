import React from 'react';
import styled from '@emotion/styled'

import check from '../assets/icons/check-bold.svg'

const TaskWrapper = styled.section({ 
	boxShadow: '1px 1px 5px #C0C0C0',
	height: '52px',
	width: '100%',
	background: '#FFFFFF',
	boxShadow: '1px 2px 8px rgba(192, 192, 192, 0.5)',
	display: 'flex',
})

const TaskName = styled.label`
	position: relative;
	font-weight: 300;
	font-size: 17px;
	line-height: 22px;
	color: #8D8D8D;
	flex: 1;
	cursor: pointer;
	padding: 15px 20px;
	userSelect: none;

	&::after { 
		content: '';
		display: block;
		width: 20px;
		height: 20px;
		position: absolute;
		right: 20px;
		border: 1px solid #c4c4c4;
		border-radius: 5px;
		top: 50%;
		transform: translateY(-50%)
	}
`

const Checkmark = styled.input`
	&:checked ~ label::after {
		background: url(${check}) no-repeat center center / contain;
	}
`


const Task = ({ inputNo }) => {
	return ( 
		<TaskWrapper>
			{/* add custom id generation to avoid bugs on removing tasks */}
			<Checkmark type="checkbox" name="check" id={`task-${inputNo}`} hidden />
			<TaskName htmlFor={`task-${inputNo}`}>Lorem, ipsum dolor.</TaskName>
		</TaskWrapper>
	 );
}
 
export default Task;
