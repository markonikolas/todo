import React from 'react';
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
	fontSize: '17px'
})

const Author = styled.span`
	display: block;
	font-weight: 600;
	margin-top: 10px;
	font-style: italic;
	&::before { content: '— '}
`

const Quote = () => {
	return ( 
		<QuoteWrapper>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, consequatur!
			<Author>Author</Author>
		</QuoteWrapper>
	);
}
 
export default Quote;
