import React from 'react';

//styles
import './Home.css';

function Home() {
	return (
		<div className='home'>
			<div className='background'></div>
			<div className='pad'>
				<br />
			</div>
			<div className='side'>Side</div>
			<div className='card'>
				<ul>
					<li>Developer</li>
					<li>Designer</li>
					<li>Educator</li>
				</ul>
			</div>
			<div className='hero-txt'>
				<h1 id='hero-text'>Joshua Hawks</h1>
				<h2>Full-stack Developer</h2>
				<p>React JS | Ruby on Rails | Ruby | Redux</p>
			</div>

			<div className='txt2'>
				<h1 className='hello'>Hi from txt2</h1>
			</div>
			<div className='prev1'>Preview 1</div>
			<div className='prev2'>Preview 2</div>
			<div className='txt3'>Text 3</div>
			<div className='txt4'>Text 4</div>
			<div className='prev3'>Preview 3</div>
			<div className='footer'>Footer</div>
		</div>
	);
}

export default Home;
