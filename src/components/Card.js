import React from 'react';

const Card = ({ children, cardText, author, errorMsg, loading }) => {
	return (
		<div>
			<h3>{cardText}</h3>
			{errorMsg || loading ? '' : author === null ? <h1>- Unknown</h1> : <h2> - {author}</h2>}
			{children}
		</div>
	);
};

export default Card;
