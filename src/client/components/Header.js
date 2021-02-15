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
	background: `url(${background})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	height: '190px',
	padding: '60px 40px 0'
})


const Header = () => {
	return ( <HeaderWrapper>
		<Button />
		<Quote />
		<TodayDate />
	</HeaderWrapper> );
}
 
export default Header;
