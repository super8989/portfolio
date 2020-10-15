import React from 'react';

import './App.scss';
import Body from './components/About/Body';
import Footer from './components/About/Footer';
import Title from './components/About/Title';
import Subtitle from './components/About/Subtitle';
import Projects from './components/Projects/Projects';
import Works from './components/Work/Works';
import Tech from './components/Tech/Tech';

function App() {
	return (
		<div className='App'>
			<div className='App--left'>
				<div className='App--left-title'>
					<Title />
				</div>
				<div className='App--left-subtitle'>
					<Subtitle />
				</div>
				<div className='App--left-body'>
					<Body />
				</div>
				<div className='App--left-footer'>
					<Footer />
				</div>
			</div>
			<div className='App--right'>
				<div className='App--right-container'>
					<h1>Technical Skills</h1>
					<Tech />
					<h1>Projects</h1>
					<Projects />
					<h1>Work</h1>
					<Works />
				</div>
			</div>
		</div>
	);
}

export default App;
