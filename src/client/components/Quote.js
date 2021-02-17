import React, { useState, useEffect, memo } from 'react';
import styled from '@emotion/styled';

const QuoteWrapper = styled.p({
	color: '#FFF',
	textAlign: 'right',
	marginTop: '4px',
	maxWidth: '225px',
	gridColumn: 'span 2 / -1',
	gridRow: '-1 / 1',
	justifySelf: 'right',
	fontWeight: 300,
	fontSize: '17px',
});

const Author = styled.span`
	display: block;
	font-weight: 600;
	margin-top: 10px;
	font-style: italic;

	&::before {
		content: '— ';
	}
`;

const Quote = () => {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		fetch('https://api.quotable.io/random?tags=technology&maxLength=65')
			.then((res) => res.json())
			.then((data) => {
				setQuotes(data);
			});
		return () => {
			setQuotes([]);
		};
	}, []);

	return (
		<QuoteWrapper>
			{quotes.content}
			<Author>{quotes.author}</Author>
		</QuoteWrapper>
	);
};

export default memo(Quote);
