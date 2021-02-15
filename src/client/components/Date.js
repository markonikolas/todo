import React from 'react'

import styled from '@emotion/styled'
import { Icon } from '@iconify/react';
import calendarMonth from '@iconify/icons-mdi/calendar-month';

const DateFormat = styled.span({ 
	fontWeight: 100,
	color: '#FFF', 
	marginLeft: '10px'
})

const DateWrapper = styled.div({ 
	display: 'flex',
	gridRow: '-1 / -2',
	gridColumn: '-1 / 1',
})

const dateOptions = {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
}

const TodayDate = () => {
	return ( 
		<DateWrapper>
			<Icon icon={calendarMonth} style={{color: '#FFF', fontSize: '1.2rem',}}/>
			<DateFormat>{new Date().toLocaleDateString('en-GB',dateOptions)}</DateFormat>
		</DateWrapper>
	 );
}
 
export default TodayDate;
