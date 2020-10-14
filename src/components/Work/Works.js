import React from 'react';
import Work from './Work';

import { experiences } from './work-list';

const workList = () => {
	return experiences.map((e) => {
		return (
			<Work
				date={e.date}
				title={e.title}
				company={e.company}
				summary={e.summary}
				url={e.url}
			/>
		);
	});
};

function Works() {
	return <div className='works'>{workList()}</div>;
}

export default Works;
