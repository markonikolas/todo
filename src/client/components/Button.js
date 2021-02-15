import React from 'react'
import { Icon } from '@iconify/react';
import plusCircleOutline from '@iconify/icons-mdi/plus-circle-outline';
import styled from '@emotion/styled';

const ButtonWrapper = styled.button({
	color: '#FFF',
	background: 'transparent',
	border: 0,
	padding: 0,
	marginLeft: '-5px',
	height: '46px',
	width: '46px',
	cursor: 'pointer',
})


const Button = () => {
	return ( <ButtonWrapper ><Icon icon={plusCircleOutline} style={{fontSize: '48px'}}/></ButtonWrapper> );
}
 
export default Button;
