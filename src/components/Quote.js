import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Button from './Button';

const Quote = () => {
	const [ quote, setQuote ] = useState([]);
	const [ author, setAuthor ] = useState('');
	const [ errorMsg, setErrorMsg ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const [ btnLoading, setBtnLoading ] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetchQuote();
	}, []);

	const fetchQuote = () => {
		setBtnLoading(true);
		setErrorMsg(null);
		axios.get('https://type.fit/api/quotes').then((res) => {
			setBtnLoading(false);
			setLoading(false);
			const random = Math.floor(Math.random() * res.data.length);
			setQuote(res.data[random].text);
			setAuthor(res.data[random].author);

			if (res.data[random].text === undefined) {
				setErrorMsg(true);
			}
		});
	};
	const cardText = errorMsg
		? 'Oops! Check your internet connection and try again.'
		: loading ? 'Loading...' : `“${quote}”`;

	return (
		<div className="quote-box">
			<Card cardText={cardText} author={author} errorMsg={errorMsg} loading={loading} />

			<div className="btn-quote">
				<Button
					className="quote-btn"
					loading={btnLoading}
					setBtnLoading={setBtnLoading}
					errorMsg={errorMsg}
					fetchQuote={fetchQuote}
				/>
			</div>
		</div>
	);
};

export default Quote;
