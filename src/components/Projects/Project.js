import React from 'react';
import './Project.scss';

function Project(props) {
	const { type, title, description, stack, url } = props;

	return (
		<a href={url} target='_blank' rel='noopener noreferrer'>
			<div className='project'>
				<span>{type}</span>
				<h1>{title}</h1>
				<p>{description}</p>
				<span>Tech Stack: {stack}</span>
			</div>
		</a>
	);
}

export default Project;
