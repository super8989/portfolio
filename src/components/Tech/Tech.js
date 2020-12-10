import React from 'react';
import { skills } from './tech-list';
import './Tech.scss';

function Tech() {
	const displaySkills = () => {
		skills.sort(function (a, b) {
			if (a.toLowerCase() < b.toLowerCase()) return -1;
			if (a.toLowerCase() > b.toLowerCase()) return 1;
			return 0;
		});

		return skills;
	};

	return (
		<div className='tech'>
			<span>
				<b>Front End:</b> React, JavaScript (ES6), HTML5, CSS3, SASS, Bootstrap,
				jQuery
			</span>
			<br />
			<span>
				<b>Back End:</b> Node.js, Express, Ruby, Ruby on Rails
			</span>
			<br />
			<span>
				<b>Database:</b> PostgreSQL
			</span>
			<br />
			<span>
				<b>Others:</b> Mocha, Chai, Jest, Storybook, WordPress, Photoshop,
				Illustrator, NetSuite, Git
			</span>
			<br />

			{/* <span>Testing: Mocha, Chai, Jest, Cypress, RSpec, Capybara</span>
			<br />
			<span>Database: PostgreSQL</span>
			<br />
			<span>Graphic Design: Photoshop, Illustrator</span>
			<br />
			<span>Libraries: Leaflet.js</span>
			<br />
			<span>Other: WordPress, NetSuite, NopCommerce, Git, Netlify</span> */}
			{/* <span>{displaySkills().join(', ')}</span> */}
		</div>
	);
}

export default Tech;
