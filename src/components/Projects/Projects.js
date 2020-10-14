import React from 'react';
import Project from './Project';

import { projects } from './project-list';

const projectList = () => {
	return projects.map((p) => {
		return (
			<Project
				type={p.type}
				title={p.title}
				description={p.description}
				stack={p.stack}
				url={p.url}
			/>
		);
	});
};

function Projects() {
	return <div className='projects'>{projectList()}</div>;
}

export default Projects;
