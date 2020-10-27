import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Project.scss';

function Project(props) {
	const { type, title, description, stack, url } = props;

	return (
		<a href={url} target='_blank' rel='noopener noreferrer'>
			<div className='project'>
				<span>{type}</span>
				<h1>
					{title} <FontAwesomeIcon icon={faGithub} />
				</h1>
				<p>{description}</p>
				<span>Tech Stack: {stack}</span>
			</div>
		</a>
	);
}

export default Project;
