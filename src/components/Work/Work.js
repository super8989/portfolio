import React from 'react';
import './Work.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Work(props) {
	const { date, title, company, summary, url } = props;

	const displaySummary = () => {
		return summary.map((s, index) => {
			return <li key={index}>{s}</li>;
		});
	};

	return (
		<div className='work'>
			<span>{date}</span>
			<h1>{title}</h1>
			<span>
				<a href={url} target='_blank' rel='noopener noreferrer'>
					{company} <FontAwesomeIcon icon={faGlobe} />
				</a>
			</span>
			<ul>{displaySummary()}</ul>
		</div>
	);
}

export default Work;
