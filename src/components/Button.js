import React from 'react';

const Button = ({ loading, fetchQuote, errorMsg }) => {
	return (
		<React.Fragment>
			<button onClick={fetchQuote}>{loading ? 'Loading...' : errorMsg ? 'Reload' : 'New Quote'}</button>
		</React.Fragment>
	);
};

export default Button;
