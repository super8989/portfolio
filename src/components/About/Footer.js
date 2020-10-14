import React from 'react';
import memoji from '../../assets/memoji-2.png';
import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
	return (
		<div className='footer'>
			<div className='footer--left'>
				<img src={memoji} alt='memoji' />
			</div>
			<div className='footer--right'>
				<a
					href='https://github.com/super8989'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a
					href='https://www.linkedin.com/in/samyang8989/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon icon={faLinkedinIn} />
				</a>
				<a
					href='https://resume.creddle.io/resume/5xkh0lmh386'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon icon={faFileAlt} />
				</a>
				<a href='mailto:samyang8989@gmail.com'>
					<FontAwesomeIcon icon={faAt} />
				</a>
			</div>
		</div>
	);
}

export default Footer;
