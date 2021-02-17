import React from 'react';
import styled from '@emotion/styled';
import background from '../assets/images/background.jpg';

import Button from './Button';
import Quote from './Quote';
import TodayDate from './Date';

const HeaderWrapper = styled.header({
	display: 'grid',
	gridTemplateColumns: '60px 100px 1fr',
	gridTemplateRows: '60px 1fr 30px',
	height: '190px',
	padding: '60px 40px 0',
	position: 'fixed',
	left: 0,
	top: 0,
	width: '100vw',

	// in figma, `overlay` and `hard-light` give the same effect
	background: `url(${background})`,
	backgroundColor: 'rgba(133, 0, 0, 0.55)',
	backgroundBlendMode: 'overlay',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
});

const Header = ({ editing, toggleOverlay }) => {
	return (
		<HeaderWrapper>
			<Button editing={editing} toggleOverlay={toggleOverlay} />
			<Quote />
			<TodayDate />
		</HeaderWrapper>
	);
};

export default Header;
