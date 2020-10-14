import React from 'react';
import './Work.scss';

function Work(props) {
	const { date, title, company, summary, url } = props;

	const displaySummary = () => {
		return summary.map((s) => {
			return <li>{s}</li>;
		});
	};

	return (
		<div className='work'>
			<span>{date}</span>
			<h1>{title}</h1>
			<span>
				<a href={url} target='_blank' rel='noopener noreferrer'>
					{company}
				</a>
			</span>
			<ul>{displaySummary()}</ul>
		</div>
	);
}

export default Work;
