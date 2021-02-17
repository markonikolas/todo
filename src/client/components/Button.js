import React from 'react'
import { Icon } from '@iconify/react';
import plusCircleOutline from '@iconify/icons-mdi/plus-circle-outline';
import styled from '@emotion/styled';

const Button = ({ editing, toggleOverlay }) => {
	const ButtonWrapper = styled.button({
		color: '#FFF',
		background: 'transparent',
		border: 0,
		padding: 0,
		marginLeft: '-5px',
		height: '46px',
		width: '46px',
		cursor: 'pointer',
		transform: editing ? 'rotateZ(45deg)' : '',
	})
	return ( 
		<ButtonWrapper>
			<Icon icon={plusCircleOutline} style={{fontSize: '48px'}} onClick={toggleOverlay}/>
		</ButtonWrapper> 
	);
}
 
export default Button;
