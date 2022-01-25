import React from 'react';

//styles
import './Home.css';

function Home() {
	return (
		<div className='home'>
			<div className='intro-txt'>
				<p className='highlight'>Hi, my name is...</p>
				<h1 className='title'>Joshua Hawks</h1>
				<h2 className='secondary'>Full-stack Developer</h2>
				<p className='tertiary'>React JS | Ruby on Rails | Ruby | Redux</p>
			</div>
		</div>
	);
}

export default Home;
