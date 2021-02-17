import React from 'react';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import sendIcon from '@iconify/icons-mdi/send';

const OverlayWrapper = styled.div`
	position: absolute;
	top: 190px;
	bottom: 0;
	left: 0;
	background: rgba(37, 37, 37, 0.4);
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: stretch;
`;

const Input = styled.input`
	height: 56px;
	box-shadow: 1px 1px 5px #c0c0c0;
	padding-left: 40px;
	border: 0;
	flex: 1;

	&::placeholder {
		font-size: 16px;
		color: rgba(141, 141, 141, 0.5);
	}
`;

const Overlay = ({ value, whileTyping, createTask }) => {
	const iconStyle = {
		flex: 1,
		color: value.length > 2 ? '#850000' : 'rgba(133,0,0,0.35)',
		cursor: 'pointer',
		background: '#FFF',
		height: '56px',
		maxWidth: '40px',
		paddingRight: '20px'
	};
	return (
		<OverlayWrapper>
			<Input
				type="text"
				value={value}
				onChange={whileTyping}
				placeholder="What would you like to do?"
			/>
			<Icon icon={sendIcon} style={iconStyle} onClick={createTask} />
		</OverlayWrapper>
	);
};

export default Overlay;
