import React from 'react';

import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import calendarMonth from '@iconify/icons-mdi/calendar-month';

const DateFormat = styled.span({
	fontWeight: 300,
	color: '#FFF',
	marginLeft: '10px',
	fontSize: '15px',
});

const DateWrapper = styled.div({
	display: 'flex',
	gridRow: '-1 / -2',
	gridColumn: '-1 / 1',
});

const TodayDate = () => {
	return (
		<DateWrapper>
			<Icon
				icon={calendarMonth}
				style={{ color: '#FFF', fontSize: '1.2rem' }}
			/>
			<DateFormat>
				{new Date().toLocaleDateString('en-GB').replace(/\//g, ' / ')}
			</DateFormat>
		</DateWrapper>
	);
};

export default TodayDate;
