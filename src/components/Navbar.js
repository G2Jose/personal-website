import React from 'react';
import Navbar from './widgets/navbar.js';

export default () => (
	<Navbar
		brand="George Jose"
		links={[
			{ text: 'Resume', target: '#resume', main: true },
			{ text: 'Work Experience', target: '#work-experience' },
			{ text: 'Projects', target: '#projects' },
			{ text: 'Education', target: '#education' },
			{ text: 'Skills', target: '#skills' },
			{ text: 'Blog', target: '#blog', main: true },
			{ text: 'CI', target: '#ci', main: true },
		]}
	/>
);
